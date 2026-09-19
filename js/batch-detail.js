// ============================================================================
// BATCH COOKING : fiche d'un plat
// ============================================================================
// Une fiche batch n'est pas une fiche recette classique : ce qu'on veut savoir
// avant de cuisiner, c'est combien de portions on sort, combien de temps on y
// passe vraiment, combien de jours ca tient et comment on le rechauffe sans
// l'abimer. Le multiplicateur de portions recalcule tout en direct.
//
// ⚠️ Le multiplicateur ne s'affiche PAS sur les plats dont le materiel est une
// contenance ou une surface fixe (multipliable: false dans les donnees) :
// doubler les quantites ne double ni le plat a gratin ni les plaques de four,
// et l'epaisseur double fait rater la cuisson.
// ============================================================================
(function () {
    'use strict';

    function macros(r, mult) {
        var c = 0, p = 0, g = 0, l = 0;
        (r.ingredients || []).forEach(function (ing) {
            var db = NUTRITION_DB[ing.id];
            if (!db) return;
            var estUnite = /unit|œuf|oeuf|tranche/i.test(ing.unit || '');
            var src = (estUnite && db.unit) ? db.unit : db;
            var q = ing.baseQty * mult;
            var f = (estUnite && db.unit) ? q : q / 100;
            c += f * src.cal; p += f * src.protein; g += f * src.carbs; l += f * src.fat;
        });
        var n = r.portions * mult;
        return { kcal: Math.round(c / n), prot: Math.round(p / n), gluc: Math.round(g / n), lip: Math.round(l / n) };
    }

    function compte(ing) {
        return /unit|œuf|oeuf|tranche|bocal|bocaux|\bpot/i.test(ing.unit || '');
    }

    function qte(ing, mult) {
        var q = ing.baseQty * mult;
        // Ce qui se compte se compte juste : 18 oeufs restent 18, et doubles ils
        // font 36. L'arrondi aux 5 g ne vaut que pour ce qui se pese, et jamais
        // sous 20 g ou il ferait varier une levure de 17 %.
        if (compte(ing)) {
            var e = Math.round(q * 2) / 2;
            return String(e).replace('.', ',') + ' ' + (ing.unit || '');
        }
        var v = q < 20 ? Math.round(q * 10) / 10 : Math.round(q / 5) * 5;
        return String(v).replace('.', ',') + ' ' + (ing.unit || 'g');
    }

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    function multipliable(r) { return r.multipliable !== false; }

    // Le sous-titre annonce le nombre de portions de base (« 8 portions, une
    // seule cocotte »). Quand on double, laisser 8 a l'ecran a cote d'un
    // compteur qui affiche 16 donne l'air d'un bug.
    function sousTitre(r, mult, actif) {
        var t = r.subtitle || '';
        if (mult === 1) return t;
        var n = Math.round(r.portions * mult);
        return t
            .replace(new RegExp('\\b' + r.portions + '\\s+(portions?|parts?|pots?|bols?)', 'g'),
                function (_, mot) { return n + ' ' + mot; })
            // le sous-titre cite aussi le temps de travail de la fournee de base
            .replace(new RegExp('\\b' + r.activeTime + '\\s+(min|minutes)\\b', 'g'),
                function (_, mot) { return actif + ' ' + mot; });
    }

    // Le materiel est dimensionne pour la fournee de base. Doubler les
    // quantites ne double pas la cocotte : on le dit franchement plutot que de
    // laisser quelqu'un verser 8 kg de chili dans un faitout de 6 litres.
    function noteMateriel(r, mult) {
        if (!multipliable(r)) {
            return '<span class="bd-warn">Ce plat ne se multiplie pas : le matériel et les temps ' +
                   'de cuisson sont écrits pour ' + r.portions + ' portions. Pour en faire plus, ' +
                   'refais une fournée complète plutôt que de doubler les quantités dans le même plat.</span>';
        }
        if (mult === 1) return '';
        var n = Math.round(r.portions * mult);
        var combien = mult === 2 ? 'le double de' : 'une fois et demie';
        return '<span class="bd-warn">Pour ' + n + ' portions, ce sont les quantités qui changent, ' +
               'pas le matériel : il te faut ' + combien + ' ce matériel, ou deux fournées à la suite. ' +
               'Les durées de cuisson des étapes sont écrites pour ' + r.portions + ' portions, ' +
               'rallonge-les et fie-toi aux repères de texture.</span>';
    }

    function rendre(r, mult) {
        var m = macros(r, mult);
        var portions = r.portions * mult;
        var actif = Math.round(r.activeTime * (mult > 1 ? 1 + (mult - 1) * 0.55 : 1));
        var ratio = Math.round((actif / portions) * 10) / 10;
        var mults = multipliable(r) ? [1, 1.5, 2] : [1];

        return '' +
        '<a href="batch-cooking.html" class="back-link">' +
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>' +
          'Retour au batch cooking</a>' +

        '<div class="bd-head">' +
          '<span class="bd-emoji">' + esc(r.emoji) + '</span>' +
          '<h1>' + esc(r.name) + '</h1>' +
          '<div class="bd-sub">' + esc(sousTitre(r, mult, actif)) + '</div>' +
          '<div class="bd-key">' +
            '<div class="hero"><span class="v">' + String(ratio).replace('.', ',') + ' min</span><span class="k">par repas</span></div>' +
            '<div><span class="v">' + portions + '</span><span class="k">portions</span></div>' +
            '<div><span class="v">' + actif + ' min</span><span class="k">de travail</span></div>' +
            // A x1,5 ou x2 le temps total ne double pas mecaniquement (deux
            // fournees au four, une cocotte plus longue a monter) : on dit de
            // quoi ce chiffre est le temps plutot que de le laisser mentir.
            '<div><span class="v">' + r.totalTime + ' min</span><span class="k">' +
              (mult === 1 ? 'du début à la fin' : 'par fournée de ' + r.portions) + '</span></div>' +
            '<div><span class="v">' + m.kcal + '</span><span class="k">kcal / portion</span></div>' +
            '<div><span class="v">' + m.prot + ' g</span><span class="k">protéines</span></div>' +
          '</div>' +
        '</div>' +

        '<div class="bd-block">' +
          '<h2>Ingrédients</h2>' +
          (mults.length > 1 ?
          '<div class="bd-scale">' +
            '<span>Quantités pour</span>' +
            '<div class="bc-pills" id="bd-mult" role="group" aria-label="Nombre de portions">' +
              mults.map(function (x) {
                var on = x === mult;
                return '<button type="button" class="bc-pill' + (on ? ' on' : '') +
                       '" aria-pressed="' + (on ? 'true' : 'false') +
                       '" data-mult="' + x + '">' + Math.round(r.portions * x) + ' portions</button>';
              }).join('') +
            '</div>' +
          '</div>' : '') +
          '<ul class="bd-ing">' +
            (r.ingredients || []).map(function (i) {
              return '<li><span class="q">' + esc(qte(i, mult)) + '</span>' +
                     '<span class="n">' + esc(i.emoji || '') + ' ' + esc(i.name) +
                     (i.detail ? '<span class="d">' + esc(i.detail) + '</span>' : '') + '</span></li>';
            }).join('') +
          '</ul>' +
        '</div>' +

        '<div class="bd-block">' +
          '<h2>Préparation</h2>' +
          '<ol class="bd-steps">' +
            (r.steps || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') +
          '</ol>' +
        '</div>' +

        '<div class="bd-block">' +
          '<h2>Après la cuisson</h2>' +
          '<div class="bd-note mat"><span class="i">🍳</span><span><strong>Matériel</strong><br>' + esc(r.materiel) + noteMateriel(r, mult) + '</span></div>' +
          '<div class="bd-note froid"><span class="i">🧊</span><span><strong>Conservation</strong><br>' + esc(r.conservation) + '</span></div>' +
          '<div class="bd-note chaud"><span class="i">🔥</span><span><strong>Réchauffage</strong><br>' + esc(r.rechauffage) + '</span></div>' +
        '</div>' +

        ((r.variantes || []).length ?
        '<div class="bd-block"><h2>Pour ne pas s\'en lasser</h2><ul class="bd-var">' +
          r.variantes.map(function (v) { return '<li>' + esc(v) + '</li>'; }).join('') +
        '</ul></div>' : '') +

        ((r.tips || []).length ?
        '<div class="bd-block"><h2>Les conseils d\'Arthur</h2><ul class="bd-tips">' +
          r.tips.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') +
        '</ul></div>' : '');
    }

    function init() {
        var root = document.getElementById('bd-root');
        var id = new URLSearchParams(location.search).get('id');
        // ⚠️ batch-data.js declare `const BATCH_RECIPES` : un const de haut niveau
        // ne cree PAS de propriete sur window. On lit donc l'identifiant tel quel,
        // resolu lexicalement, avec un garde si le fichier n'a pas charge.
        var base = (typeof BATCH_RECIPES !== 'undefined') ? BATCH_RECIPES : [];
        var r = base.filter(function (x) { return x.id === id; })[0];

        if (!r) {
            root.innerHTML = '<a href="batch-cooking.html" class="back-link">Retour au batch cooking</a>' +
                '<div class="bc-empty"><span class="e">🤔</span><p>Ce plat n\'existe pas ou plus.</p></div>';
            return;
        }

        var mult = 1;
        function peindre(rendreLeFocus) {
            root.innerHTML = rendre(r, mult);
            var grp = document.getElementById('bd-mult');
            if (!grp) return;
            grp.addEventListener('click', function (e) {
                var b = e.target.closest('.bc-pill');
                if (!b) return;
                mult = parseFloat(b.dataset.mult);
                peindre(true);
                document.querySelector('.bd-scale').scrollIntoView({ block: 'center' });
            });
            // innerHTML detruit le bouton clique : sans ca, un client au clavier
            // ou sous VoiceOver repart du haut de la page a chaque changement.
            if (rendreLeFocus) {
                var actif = grp.querySelector('.bc-pill.on');
                if (actif) actif.focus({ preventScroll: true });
            }
        }
        peindre(false);
        document.title = r.name + ' | AH Coaching';
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
