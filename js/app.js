/* ============================================
   AH COACHING — Catalogue / Bibliothèque
   ============================================ */

(function() {
    'use strict';

    // --- State ---
    let activeCategory = 'all';
    let activeDifficulty = null;
    let searchQuery = '';

    // --- Category labels ---
    const CATEGORY_LABELS = {
        'petit-dej-sucre': 'Petit-déj sucré',
        'petit-dej-sale': 'Petit-déj salé',
        'dejeuner': 'Déjeuner',
        'diner': 'Dîner',
        'collation-emporter': 'Collation',
        'collation-maison': 'Collation'
    };

    // --- SVG Icons ---
    const ICONS = {
        clock: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
        difficulty: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>'
    };

    // --- Calculate base macros for a recipe ---
    function calculateBaseMacros(recipe) {
        let cal = 0, protein = 0, carbs = 0, fat = 0;

        recipe.ingredients.forEach(function(ing) {
            const db = NUTRITION_DB[ing.id];
            if (!db) return;

            if (ing.unit === 'unité' || ing.unit === 'unités' || ing.unit === 'unité(s)' || ing.unit === 'œufs' || ing.unit === 'tranches') {
                // Unit-based: use per-unit values if available
                if (db.unit) {
                    cal += ing.baseQty * db.unit.cal;
                    protein += ing.baseQty * db.unit.protein;
                    carbs += ing.baseQty * db.unit.carbs;
                    fat += ing.baseQty * db.unit.fat;
                } else {
                    // Fallback: assume baseQty is already in grams
                    cal += (ing.baseQty / 100) * db.cal;
                    protein += (ing.baseQty / 100) * db.protein;
                    carbs += (ing.baseQty / 100) * db.carbs;
                    fat += (ing.baseQty / 100) * db.fat;
                }
            } else {
                // Gram-based
                cal += (ing.baseQty / 100) * db.cal;
                protein += (ing.baseQty / 100) * db.protein;
                carbs += (ing.baseQty / 100) * db.carbs;
                fat += (ing.baseQty / 100) * db.fat;
            }
        });

        // Add default option ingredients
        if (recipe.options) {
            recipe.options.forEach(function(opt) {
                const defaultChoice = opt.default;
                if (opt.modifiers && opt.modifiers[defaultChoice] && opt.modifiers[defaultChoice].add) {
                    opt.modifiers[defaultChoice].add.forEach(function(ing) {
                        const db = NUTRITION_DB[ing.id];
                        if (!db) return;
                        cal += (ing.baseQty / 100) * db.cal;
                        protein += (ing.baseQty / 100) * db.protein;
                        carbs += (ing.baseQty / 100) * db.carbs;
                        fat += (ing.baseQty / 100) * db.fat;
                    });
                }
            });
        }

        return {
            cal: Math.round(cal),
            protein: Math.round(protein),
            carbs: Math.round(carbs),
            fat: Math.round(fat)
        };
    }

    // --- Render a recipe card ---
    function renderCard(recipe) {
        const macros = calculateBaseMacros(recipe);
        const categoryLabel = CATEGORY_LABELS[recipe.category] || recipe.category;

        return '<a href="recipe.html?id=' + recipe.id + '" class="recipe-card" data-category="' + recipe.category + '" data-difficulty="' + recipe.difficulty + '">' +
            '<div class="card-header">' +
                '<div class="card-emoji">' + recipe.emoji + '</div>' +
                '<div class="card-info">' +
                    '<div class="card-category">' + categoryLabel + '</div>' +
                    '<div class="card-title">' + recipe.name + '</div>' +
                    '<div class="card-subtitle">' + recipe.subtitle + '</div>' +
                '</div>' +
            '</div>' +
            '<div class="card-meta">' +
                '<span class="card-tag">' + ICONS.clock + ' ' + recipe.time + ' min</span>' +
                '<span class="card-tag">' + ICONS.difficulty + ' ' + recipe.difficulty + '</span>' +
                (recipe.tags[0] ? '<span class="card-tag">' + recipe.tags[0] + '</span>' : '') +
            '</div>' +
            '<div class="card-macros">' +
                '<div class="card-macro highlight">' +
                    '<div class="card-macro-value">' + macros.cal + '</div>' +
                    '<div class="card-macro-label">Calories</div>' +
                '</div>' +
                '<div class="card-macro highlight">' +
                    '<div class="card-macro-value">' + macros.protein + '<span class="unit">g</span></div>' +
                    '<div class="card-macro-label">Protéines</div>' +
                '</div>' +
                '<div class="card-macro">' +
                    '<div class="card-macro-value">' + macros.carbs + '<span class="unit">g</span></div>' +
                    '<div class="card-macro-label">Glucides</div>' +
                '</div>' +
                '<div class="card-macro">' +
                    '<div class="card-macro-value">' + macros.fat + '<span class="unit">g</span></div>' +
                    '<div class="card-macro-label">Lipides</div>' +
                '</div>' +
            '</div>' +
        '</a>';
    }

    // --- Filter and render all recipes ---
    function renderRecipes() {
        var grid = document.getElementById('recipes-grid');
        var countEl = document.getElementById('results-count');
        var query = searchQuery.toLowerCase().trim();

        var filtered = RECIPES_DATA.filter(function(recipe) {
            // Category filter
            if (activeCategory !== 'all' && recipe.category !== activeCategory) return false;

            // Difficulty filter
            if (activeDifficulty && recipe.difficulty !== activeDifficulty) return false;

            // Search filter
            if (query) {
                var searchStr = (recipe.name + ' ' + recipe.subtitle + ' ' + recipe.tags.join(' ')).toLowerCase();
                if (searchStr.indexOf(query) === -1) return false;
            }

            return true;
        });

        if (filtered.length === 0) {
            grid.innerHTML = '<div class="empty-state">' +
                '<div class="emoji">🔍</div>' +
                '<h3>Aucune recette trouvée</h3>' +
                '<p>Essaye de modifier tes filtres ou ta recherche.</p>' +
            '</div>';
        } else {
            grid.innerHTML = filtered.map(renderCard).join('');
        }

        countEl.textContent = filtered.length;

        // Re-trigger animations
        var cards = grid.querySelectorAll('.recipe-card');
        cards.forEach(function(card, i) {
            card.style.animationDelay = (i * 0.05) + 's';
        });
    }

    // --- Event Listeners ---
    function init() {
        // Category & difficulty filters
        var filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(function(btn) {
            btn.addEventListener('click', function() {
                if (btn.dataset.filter !== undefined) {
                    // Category filter
                    document.querySelectorAll('.filter-btn[data-filter]').forEach(function(b) {
                        b.classList.remove('active');
                    });
                    btn.classList.add('active');
                    activeCategory = btn.dataset.filter;
                } else if (btn.dataset.difficulty !== undefined) {
                    // Difficulty filter (toggle)
                    if (btn.classList.contains('active')) {
                        btn.classList.remove('active');
                        activeDifficulty = null;
                    } else {
                        document.querySelectorAll('.filter-btn[data-difficulty]').forEach(function(b) {
                            b.classList.remove('active');
                        });
                        btn.classList.add('active');
                        activeDifficulty = btn.dataset.difficulty;
                    }
                }
                renderRecipes();
            });
        });

        // Search
        var searchInput = document.getElementById('search-input');
        var searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function() {
                searchQuery = searchInput.value;
                renderRecipes();
            }, 200);
        });

        // Initial render
        renderRecipes();
    }

    // Start
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
