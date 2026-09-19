// ============================================================================
// BATCH COOKING — logique de la liste
// ============================================================================
// Le tri par defaut est le RATIO minutes de cuisine / repas produit. C'est le
// critere pose par Arthur : quand on cuisine le dimanche, ce qui compte n'est
// pas la duree de la recette mais ce qu'elle rapporte par minute passee.
// ============================================================================
(function () {
    'use strict';

    var etat = { portions: 0, kcalMax: 900, protMin: 25, tri: 'ratio' };

    // Macros du plat entier, a partir des baseQty et de NUTRITION_DB.
    // Meme moteur que la page principale : un ingredient inconnu est ignore,
    // d'ou le controle de coherence au chargement (voir plus bas).
    function macros(recette) {
        var cal = 0, prot = 0, gluc = 0, lip = 0, inconnus = [];
        (recette.ingredients || []).forEach(function (ing) {
            var db = NUTRITION_DB[ing.id];
            if (!db) { inconnus.push(ing.id); return; }
            var estUnite = /unit|œuf|oeuf|tranche/i.test(ing.unit || '');
            var src = (estUnite && db.unit) ? db.unit : db;
            var f = (estUnite && db.unit) ? ing.baseQty : ing.baseQty / 100;
            cal += f * src.cal; prot += f * src.protein;
            gluc += f * src.carbs; lip += f * src.fat;
        });
        var p = recette.portions || 1;
        return {
            kcal: Math.round(cal / p), prot: Math.round(prot / p),
            gluc: Math.round(gluc / p), lip: Math.round(lip / p),
            inconnus: inconnus
        };
    }

    function ratio(r) { return Math.round((r.activeTime / r.portions) * 10) / 10; }

    function fmtRatio(n) {
        return (n < 1 ? n.toFixed(1) : String(Math.round(n * 10) / 10)).replace('.', ',');
    }

    function carte(r) {
        var m = r._m, rt = ratio(r);
        // On retire les tags redondants : « Batch cooking » et « Meal prep » sont
        // vrais pour TOUS les plats de cette page donc ils n'apprennent rien, et
        // « Congelable » est deja porte par le badge flocon juste a cote.
        var tags = (r.tags || []).filter(function (t) {
            return t !== 'Batch cooking' && t !== 'Meal prep' && t !== 'Congelable';
        }).slice(0, 3);
        var congelable = (r.tags || []).indexOf('Congelable') !== -1;

        return '<a class="bc-card" href="batch.html?id=' + encodeURIComponent(r.id) + '">' +
            '<div class="bc-card-top">' +
              '<div class="bc-emoji">' + (r.emoji || '🍲') + '</div>' +
              '<div><h3>' + r.name + '</h3><div class="bc-sub">' + (r.subtitle || '') + '</div></div>' +
            '</div>' +
            '<div class="bc-ratio">' +
              '<span class="n">' + fmtRatio(rt) + '</span>' +
              '<span class="u">min de cuisine<br>par repas</span>' +
              '<span class="d">' + r.activeTime + ' min de travail<br>pour ' + r.portions + ' portions</span>' +
            '</div>' +
            '<div class="bc-macros">' +
              '<div class="bc-macro"><span class="v">' + m.kcal + '</span><span class="k">kcal</span></div>' +
              '<div class="bc-macro"><span class="v">' + m.prot + ' g</span><span class="k">protéines</span></div>' +
              '<div class="bc-macro"><span class="v">' + m.gluc + ' g</span><span class="k">glucides</span></div>' +
            '</div>' +
            '<div class="bc-tags">' +
              (congelable ? '<span class="bc-tag hi">❄️ Se congèle</span>' : '') +
              tags.map(function (t) { return '<span class="bc-tag">' + t + '</span>'; }).join('') +
            '</div>' +
            '<div class="bc-meta">' +
              '<span>⏱ ' + r.totalTime + ' min en tout</span>' +
              '<span>🧊 ' + (r.conservation || '').split(',')[0] + '</span>' +
            '</div>' +
          '</a>';
    }

    function rendre() {
        var liste = BATCH_RECIPES.filter(function (r) {
            if (etat.portions && r.portions < etat.portions) return false;
            if (etat.portions === 8 && r.portions !== 8) return false;
            if (r._m.kcal > etat.kcalMax) return false;
            if (r._m.prot < etat.protMin) return false;
            return true;
        });

        liste.sort(function (a, b) {
            if (etat.tri === 'protein') return b._m.prot - a._m.prot;
            if (etat.tri === 'light') return a._m.kcal - b._m.kcal;
            return ratio(a) - ratio(b);
        });

        var grid = document.getElementById('bc-grid');
        grid.innerHTML = liste.length
            ? liste.map(carte).join('')
            : '<div class="bc-empty"><span class="e">🍳</span>' +
              '<p>Aucun plat ne rentre dans ces réglages.<br>Remonte les calories ou baisse les protéines.</p></div>';

        var sum = document.getElementById('bc-summary');
        if (!liste.length) { sum.innerHTML = ''; return; }
        var repas = liste.reduce(function (a, r) { return a + r.portions; }, 0);
        var meilleur = liste.slice().sort(function (a, b) { return ratio(a) - ratio(b); })[0];
        sum.innerHTML = '<strong>' + liste.length + ' plats</strong>' +
            '<span>· ' + repas + ' repas au total</span>' +
            '<span>· le plus rentable : <strong>' + meilleur.name + '</strong> à ' +
            fmtRatio(ratio(meilleur)) + ' min par repas</span>';
    }

    function groupe(id, cle, transforme) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', function (e) {
            var b = e.target.closest('.bc-pill');
            if (!b) return;
            el.querySelectorAll('.bc-pill').forEach(function (x) { x.classList.remove('on'); });
            b.classList.add('on');
            etat[cle] = transforme(b);
            rendre();
        });
    }

    function init() {
        // Pre-calcul des macros une seule fois.
        BATCH_RECIPES.forEach(function (r) { r._m = macros(r); });

        // Controle de coherence : si une recette reference un ingredient absent
        // de la base nutritionnelle, ses macros seraient sous-evaluees en
        // silence. On le signale en console plutot que d'afficher un faux chiffre.
        var casses = BATCH_RECIPES.filter(function (r) { return r._m.inconnus.length; });
        if (casses.length) {
            console.error('[batch] ingrédients inconnus, macros faussées :',
                casses.map(function (r) { return r.id + ' → ' + r._m.inconnus.join(', '); }));
        }

        groupe('bc-portions', 'portions', function (b) { return parseInt(b.dataset.portions, 10); });
        groupe('bc-sort', 'tri', function (b) { return b.dataset.sort; });

        var kcal = document.getElementById('bc-kcal');
        kcal.addEventListener('input', function () {
            etat.kcalMax = parseInt(kcal.value, 10);
            document.getElementById('bc-kcal-val').textContent =
                etat.kcalMax >= 900 ? "jusqu'à 900" : "jusqu'à " + etat.kcalMax;
            rendre();
        });

        var prot = document.getElementById('bc-prot');
        prot.addEventListener('input', function () {
            etat.protMin = parseInt(prot.value, 10);
            document.getElementById('bc-prot-val').textContent = etat.protMin + ' g';
            rendre();
        });

        rendre();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
