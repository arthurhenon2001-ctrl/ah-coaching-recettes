// ============================================================================
// BATCH COOKING — fiche d'un plat
// ============================================================================
// Une fiche batch n'est pas une fiche recette classique : ce qu'on veut savoir
// avant de cuisiner, c'est combien de portions on sort, combien de temps on y
// passe vraiment, combien de jours ca tient et comment on le rechauffe sans
// l'abimer. Le multiplicateur de portions recalcule tout en direct.
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

    function qte(ing, mult) {
        var q = ing.baseQty * mult;
        // Sous 10 on garde une decimale, au-dessus on arrondit : personne ne
        // pese 237,5 g de patate douce.
        var v = q < 10 ? Math.round(q * 10) / 10 : Math.round(q / 5) * 5;
        return String(v).replace('.', ',') + ' ' + (ing.unit || 'g');
    }

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

    function rendre(r, mult) {
        var m = macros(r, mult);
        var portions = r.portions * mult;
        var actif = Math.round(r.activeTime * (mult > 1 ? 1 + (mult - 1) * 0.55 : 1));
        var ratio = Math.round((actif / portions) * 10) / 10;

        return '' +
        '<a href="batch-cooking.html" class="back-link">' +
          '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">' +
          '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"/></svg>' +
          'Retour au batch cooking</a>' +

        '<div class="bd-head">' +
          '<span class="bd-emoji">' + esc(r.emoji) + '</span>' +
          '<h1>' + esc(r.name) + '</h1>' +
          '<div class="bd-sub">' + esc(r.subtitle) + '</div>' +
          '<div class="bd-key">' +
            '<div class="hero"><span class="v">' + String(ratio).replace('.', ',') + ' min</span><span class="k">par repas</span></div>' +
            '<div><span class="v">' + portions + '</span><span class="k">portions</span></div>' +
            '<div><span class="v">' + actif + ' min</span><span class="k">de travail</span></div>' +
            '<div><span class="v">' + m.kcal + '</span><span class="k">kcal / portion</span></div>' +
            '<div><span class="v">' + m.prot + ' g</span><span class="k">protéines</span></div>' +
          '</div>' +
        '</div>' +

        '<div class="bd-block">' +
          '<h2>Ingrédients</h2>' +
          '<div class="bd-scale">' +
            '<span>Quantités pour</span>' +
            '<div class="bc-pills" id="bd-mult">' +
              [1, 1.5, 2].map(function (x) {
                return '<button type="button" class="bc-pill' + (x === mult ? ' on' : '') +
                       '" data-mult="' + x + '">' + Math.round(r.portions * x) + ' portions</button>';
              }).join('') +
            '</div>' +
          '</div>' +
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
          '<div class="bd-note mat"><span class="i">🍳</span><span><strong>Matériel</strong><br>' + esc(r.materiel) + '</span></div>' +
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
        function peindre() {
            root.innerHTML = rendre(r, mult);
            var grp = document.getElementById('bd-mult');
            if (grp) grp.addEventListener('click', function (e) {
                var b = e.target.closest('.bc-pill');
                if (!b) return;
                mult = parseFloat(b.dataset.mult);
                peindre();
                document.querySelector('.bd-scale').scrollIntoView({ block: 'center' });
            });
        }
        peindre();
        document.title = r.name + ' | AH Coaching';
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
