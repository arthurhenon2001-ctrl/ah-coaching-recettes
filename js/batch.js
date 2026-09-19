// ============================================================================
// BATCH COOKING : logique de la liste
// ============================================================================
// Le tri par defaut est le RATIO minutes de cuisine / repas produit. C'est le
// critere pose par Arthur : quand on cuisine le dimanche, ce qui compte n'est
// pas la duree de la recette mais ce qu'elle rapporte par minute passee.
//
// Regle de conception des reglages : un reglage qui ne change rien a l'ecran
// est lu comme un bug. Les bornes des curseurs et les pastilles de portions
// sont donc calculees sur les donnees reelles au chargement, jamais ecrites
// en dur dans le HTML.
// ============================================================================
(function () {
    'use strict';

    var etat = null;   // rempli par init() a partir des bornes reelles
    var depart = null; // copie du depart, pour le bouton de reinitialisation

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
        });
    }

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

    // Le texte de conservation est long et nuance, et le couper a la premiere
    // virgule faisait tomber les reserves de congelation alors que le badge
    // flocon, lui, restait affiche. Chaque recette porte donc sa version courte.
    function fraicheur(r) {
        if (r.conservationCourte) return r.conservationCourte;
        var m = (r.conservation || '').match(/(\d+)\s*jours?\s+au\s+frigo/i);
        return m ? m[1] + ' j frigo' : (r.conservation || '').split(',')[0];
    }

    function carte(r) {
        var m = r._m, rt = ratio(r);
        // On retire les tags vrais pour TOUS les plats de la page : ils
        // n'apprennent rien et mangent les 3 places disponibles. « Congelable »
        // est deja porte par le badge flocon juste a cote.
        var tags = (r.tags || []).filter(function (t) {
            return t !== 'Batch cooking' && t !== 'Meal prep' &&
                   t !== 'Congelable' && t !== 'Haute protéine';
        }).slice(0, 3);
        var congelable = (r.tags || []).indexOf('Congelable') !== -1;

        return '<a class="bc-card" href="batch.html?id=' + encodeURIComponent(r.id) + '">' +
            '<div class="bc-card-top">' +
              '<div class="bc-emoji">' + esc(r.emoji || '🍲') + '</div>' +
              '<div><h3>' + esc(r.name) + '</h3><div class="bc-sub">' + esc(r.subtitle || '') + '</div></div>' +
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
              tags.map(function (t) { return '<span class="bc-tag">' + esc(t) + '</span>'; }).join('') +
            '</div>' +
            '<div class="bc-meta">' +
              '<span>⏱ ' + r.totalTime + ' min en tout</span>' +
              '<span>🧊 ' + esc(fraicheur(r)) + '</span>' +
            '</div>' +
          '</a>';
    }

    function rendre() {
        var liste = BATCH_RECIPES.filter(function (r) {
            if (etat.portions && r.portions !== etat.portions) return false;
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
              '<p>Aucun plat ne rentre dans ces réglages.</p>' +
              '<button type="button" class="bc-reset" id="bc-reset">Tout réafficher</button></div>';

        var sum = document.getElementById('bc-summary');
        if (!liste.length) {
            sum.innerHTML = '<strong>0 plat</strong><span>· avec ces réglages</span>';
            return;
        }
        var repas = liste.reduce(function (a, r) { return a + r.portions; }, 0);
        var tete = liste[0];
        var mot = etat.tri === 'protein' ? 'le plus protéiné'
                : etat.tri === 'light' ? 'le plus léger' : 'le plus rapide';
        sum.innerHTML = '<strong>' + liste.length + ' plat' + (liste.length > 1 ? 's' : '') + '</strong>' +
            '<span>· ' + repas + ' repas au total</span>' +
            '<span>· ' + mot + ' : <strong>' + esc(tete.name) + '</strong>' +
            (etat.tri === 'protein' ? ' à ' + tete._m.prot + ' g de protéines'
             : etat.tri === 'light' ? ' à ' + tete._m.kcal + ' kcal'
             : ' à ' + fmtRatio(ratio(tete)) + ' min par repas') + '</span>';
    }

    function groupe(id, cle, transforme) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('click', function (e) {
            var b = e.target.closest('.bc-pill');
            if (!b) return;
            el.querySelectorAll('.bc-pill').forEach(function (x) {
                x.classList.remove('on');
                x.setAttribute('aria-pressed', 'false');
            });
            b.classList.add('on');
            b.setAttribute('aria-pressed', 'true');
            etat[cle] = transforme(b);
            rendre();
        });
    }

    function libelleKcal() {
        return etat.kcalMax >= depart.kcalMax ? 'toutes' : "jusqu'à " + etat.kcalMax;
    }
    function libelleProt() {
        return etat.protMin <= depart.protMin ? 'toutes' : 'au moins ' + etat.protMin + ' g';
    }

    function reinitialiser() {
        etat.portions = depart.portions;
        etat.kcalMax = depart.kcalMax;
        etat.protMin = depart.protMin;
        var kcal = document.getElementById('bc-kcal'), prot = document.getElementById('bc-prot');
        kcal.value = etat.kcalMax; prot.value = etat.protMin;
        document.getElementById('bc-kcal-val').textContent = libelleKcal();
        document.getElementById('bc-prot-val').textContent = libelleProt();
        document.querySelectorAll('#bc-portions .bc-pill').forEach(function (b, i) {
            b.classList.toggle('on', i === 0);
            b.setAttribute('aria-pressed', i === 0 ? 'true' : 'false');
        });
        rendre();
    }

    function init() {
        // Pre-calcul des macros une seule fois.
        BATCH_RECIPES.forEach(function (r) { r._m = macros(r); });

        // Controles de coherence. Ils ne s'adressent pas au client mais a celui
        // qui ajoutera une recette : un ingredient absent de la base serait
        // ignore en silence et sous-evaluerait les calories affichees, et un
        // champ annonce qui diverge du calcul signale une donnee oubliee.
        var casses = BATCH_RECIPES.filter(function (r) { return r._m.inconnus.length; });
        if (casses.length) {
            console.error('[batch] ingrédients inconnus, macros faussées :',
                casses.map(function (r) { return r.id + ' → ' + r._m.inconnus.join(', '); }));
        }
        var divergents = BATCH_RECIPES.filter(function (r) {
            return (r.kcalParPortion && Math.abs(r.kcalParPortion - r._m.kcal) > 15) ||
                   (r.proteinesParPortion && Math.abs(r.proteinesParPortion - r._m.prot) > 2) ||
                   (r.minutesParPortion && Math.abs(r.minutesParPortion - ratio(r)) > 0.15);
        });
        if (divergents.length) {
            console.error('[batch] champs annoncés divergents du calcul :',
                divergents.map(function (r) { return r.id; }).join(', '));
        }

        // ------- bornes reelles des reglages, calculees sur les donnees -------
        // Deux pieges a eviter, et les deux se voient a l'ecran :
        //   - une borne basse sous le plat le plus leger vide la page au bout
        //     de la course, juste sous la phrase qui invite a faire glisser ;
        //   - une borne haute hors de la grille des pas est ramenee au cran
        //     inferieur par le navigateur, et le plat le plus calorique
        //     disparait sans que rien ne l'explique.
        // On cale donc les deux extremites SUR la grille des pas, en gardant
        // toujours au moins un plat de chaque cote.
        var PAS_K = 10, PAS_P = 5;
        var kcals = BATCH_RECIPES.map(function (r) { return r._m.kcal; });
        var prots = BATCH_RECIPES.map(function (r) { return r._m.prot; });
        var kMin = Math.ceil(Math.min.apply(null, kcals) / PAS_K) * PAS_K;
        var kMax = kMin + Math.ceil((Math.max.apply(null, kcals) - kMin) / PAS_K) * PAS_K;
        var pMin = Math.floor(Math.min.apply(null, prots) / PAS_P) * PAS_P;
        var pMax = pMin + Math.floor((Math.max.apply(null, prots) - pMin) / PAS_P) * PAS_P;

        etat = { portions: 0, kcalMax: kMax, protMin: pMin, tri: 'ratio' };
        depart = { portions: 0, kcalMax: kMax, protMin: pMin };

        var kcal = document.getElementById('bc-kcal');
        kcal.min = kMin; kcal.max = kMax; kcal.step = PAS_K; kcal.value = kMax;
        document.getElementById('bc-kcal-val').textContent = libelleKcal();

        var prot = document.getElementById('bc-prot');
        prot.min = pMin; prot.max = pMax; prot.step = PAS_P; prot.value = pMin;
        document.getElementById('bc-prot-val').textContent = libelleProt();

        // Garde-fou : si une recette ajoutee plus tard faisait sortir une borne
        // de la grille, le navigateur ramenerait la valeur au cran inferieur et
        // masquerait un plat en silence. On le signale plutot que de le subir.
        if (parseInt(kcal.value, 10) !== kMax || parseInt(prot.value, 10) !== pMin) {
            console.error('[batch] bornes de curseur hors grille :',
                'kcal', kcal.value, '/', kMax, '- prot', prot.value, '/', pMin);
        }

        // Les pastilles de repas sortent des donnees. Proposer « 5 et + » quand
        // aucun plat n'en fait moins de 6 donnerait un bouton qui ne change rien
        // a l'ecran, ce que l'utilisateur lit comme un bug.
        var tailles = [];
        BATCH_RECIPES.forEach(function (r) {
            if (tailles.indexOf(r.portions) === -1) tailles.push(r.portions);
        });
        tailles.sort(function (a, b) { return a - b; });
        document.getElementById('bc-portions').innerHTML =
            '<button type="button" class="bc-pill on" aria-pressed="true" data-portions="0">Peu importe</button>' +
            tailles.map(function (n) {
                return '<button type="button" class="bc-pill" aria-pressed="false" data-portions="' +
                    n + '">' + n + ' repas</button>';
            }).join('');
        document.querySelectorAll('#bc-sort .bc-pill').forEach(function (b) {
            b.setAttribute('aria-pressed', b.classList.contains('on') ? 'true' : 'false');
        });

        groupe('bc-portions', 'portions', function (b) { return parseInt(b.dataset.portions, 10); });
        groupe('bc-sort', 'tri', function (b) { return b.dataset.sort; });

        kcal.addEventListener('input', function () {
            etat.kcalMax = parseInt(kcal.value, 10);
            var txt = libelleKcal();
            document.getElementById('bc-kcal-val').textContent = txt;
            kcal.setAttribute('aria-valuetext', txt === 'toutes' ? 'toutes les calories' : txt + ' kcal par portion');
            rendre();
        });
        prot.addEventListener('input', function () {
            etat.protMin = parseInt(prot.value, 10);
            var txt = libelleProt();
            document.getElementById('bc-prot-val').textContent = txt;
            prot.setAttribute('aria-valuetext', txt === 'toutes' ? 'toutes les quantités de protéines'
                : 'au moins ' + etat.protMin + ' g de protéines par portion');
            rendre();
        });

        // Le bouton de sortie de l'ecran vide est recree a chaque rendu.
        document.getElementById('bc-grid').addEventListener('click', function (e) {
            if (e.target.id === 'bc-reset') reinitialiser();
        });

        // Sur telephone les reglages faisaient un ecran et demi avant le premier
        // plat. Ils sont replies par defaut sous 640 px, ouverts au-dessus.
        var pliage = document.getElementById('bc-reglages');
        if (pliage) pliage.open = window.matchMedia('(min-width: 641px)').matches;

        rendre();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
