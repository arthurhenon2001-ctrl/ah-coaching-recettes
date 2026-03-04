const RECIPES_DATA = [
    // ============================================================
    // PETIT-DEJEUNER SUCRE (10 recipes)
    // ============================================================
    {
        id: "overnight-oats-proteine",
        name: "Overnight Oats Protéiné",
        subtitle: "Préparé la veille • Haute protéine",
        emoji: "🥣",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Sans cuisson", "Meal prep", "Perte de poids"],
        ingredients: [
            { id: "skyr", name: "Skyr 0%", detail: "Nature, sans sucre ajouté", emoji: "🥛", baseQty: 250, unit: "g", scalable: true, role: "protein" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons de préférence", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" }
        ],
        options: [
            {
                id: "topping",
                label: "Topping",
                choices: [
                    { value: "banane", label: "Banane", emoji: "🍌", desc: "Classique et sucrée" },
                    { value: "fruits-rouges", label: "Fruits rouges", emoji: "🫐", desc: "Antioxydants" }
                ],
                default: "banane",
                modifiers: {
                    "banane": { add: [{ id: "banane", name: "Banane", detail: "En rondelles", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" }] },
                    "fruits-rouges": { add: [{ id: "fruits_rouges", name: "Fruits rouges", detail: "Frais ou surgelés", emoji: "🫐", baseQty: 150, unit: "g", scalable: true, role: "carb" }] }
                }
            }
        ],
        steps: [
            { title: "Mélanger la base", text: "Dans un bocal ou un bol, mélanger le Skyr et les flocons d'avoine. Ajouter une pincée de cannelle si désiré." },
            { title: "Ajouter le liquide", text: "Ajouter 2-3 cuillères à soupe d'eau pour obtenir une consistance crémeuse. Bien mélanger." },
            { title: "Réfrigérer", text: "Couvrir et placer au réfrigérateur toute la nuit (minimum 4 heures)." },
            { title: "Garnir et servir", text: "Le matin, ajouter le topping choisi (banane en rondelles ou fruits rouges). Déguster froid." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Ajouter un peu d'eau pour augmenter le volume sans calories. Les flocons gonflent et donnent une texture plus rassasiante." },
            { type: "red", title: "Erreur classique", text: "Éviter d'ajouter du beurre de cacahuète ou du miel en plus : cela double les calories sans que vous ne vous en rendiez compte." }
        ]
    },
    {
        id: "pancakes-banane-avoine",
        name: "Pancakes Banane-Avoine",
        subtitle: "3 ingrédients • Rapide",
        emoji: "🥞",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Sans farine", "Rapide", "Gourmand"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Bien mûre, écrasée", emoji: "🍌", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés en poudre", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" }
        ],
        options: [
            {
                id: "boost-proteine",
                label: "Boost protéine",
                choices: [
                    { value: "sans", label: "Sans", emoji: "➖", desc: "Version classique" },
                    { value: "whey", label: "Whey", emoji: "💪", desc: "+12g protéines" }
                ],
                default: "sans",
                modifiers: {
                    "sans": {},
                    "whey": { add: [{ id: "whey", name: "Whey protéine", detail: "Vanille ou neutre", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" }] }
                }
            }
        ],
        steps: [
            { title: "Préparer la pâte", text: "Écraser la banane à la fourchette. Ajouter les flocons d'avoine mixés et les œufs. Mélanger jusqu'à obtenir une pâte homogène." },
            { title: "Ajouter le boost", text: "Si option whey sélectionnée, incorporer la poudre de protéine et bien mélanger." },
            { title: "Cuire les pancakes", text: "Faire chauffer une poêle antiadhésive à feu moyen. Verser des petites louches de pâte. Cuire 2-3 min par face jusqu'à coloration dorée." },
            { title: "Servir", text: "Empiler les pancakes et servir immédiatement. Optionnel : quelques fruits frais par dessus." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Préparer la pâte la veille et la conserver au frigo pour un petit-déjeuner express le matin." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas mettre le feu trop fort : les pancakes à la banane brûlent plus vite à cause du sucre naturel." }
        ]
    },
    {
        id: "smoothie-bowl-acai",
        name: "Smoothie Bowl Açaï",
        subtitle: "Vitaminé • Antioxydant",
        emoji: "🫐",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Vegan", "Sans cuisson", "Vitaminé", "Rafraîchissant"],
        ingredients: [
            { id: "banane", name: "Banane congelée", detail: "Coupée en morceaux avant congélation", emoji: "🍌", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "fruits_rouges", name: "Fruits rouges", detail: "Frais ou surgelés", emoji: "🫐", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "lait_amande", name: "Lait d'amande", detail: "Non sucré", emoji: "🥛", baseQty: 100, unit: "ml", scalable: true, role: "base" },
            { id: "flocons_avoine", name: "Granola topping", detail: "Flocons d'avoine croustillants", emoji: "🌾", baseQty: 20, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mixer la base", text: "Placer la banane congelée, les fruits rouges et le lait d'amande dans un blender. Mixer jusqu'à obtenir une texture épaisse et crémeuse." },
            { title: "Ajuster la consistance", text: "Le mélange doit être plus épais qu'un smoothie classique. Ajouter un peu de lait si nécessaire, mais garder une texture cuillère." },
            { title: "Dresser le bowl", text: "Verser dans un bol large. Lisser la surface." },
            { title: "Ajouter les toppings", text: "Disposer le granola sur le dessus. Optionnel : quelques graines de chia ou copeaux de noix de coco." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Congeler les bananes bien mûres la veille pour une texture crémeuse type glace. Couper en rondelles avant congélation." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter trop de lait : le bowl doit se manger à la cuillère, pas se boire comme un smoothie." }
        ]
    },
    {
        id: "porridge-pomme-cannelle",
        name: "Porridge Pomme-Cannelle",
        subtitle: "Réconfortant • Hivernal",
        emoji: "🍎",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Chaud", "Réconfortant", "Perte de poids"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Ou lait végétal", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "pomme", name: "Pomme", detail: "Coupée en petits dés", emoji: "🍎", baseQty: 150, unit: "g", scalable: true, role: "carb" }
        ],
        options: [
            {
                id: "boost-proteine",
                label: "Boost protéine",
                choices: [
                    { value: "whey", label: "Whey", emoji: "💪", desc: "+12g protéines" },
                    { value: "skyr", label: "Skyr", emoji: "🥛", desc: "+10g protéines, crémeux" }
                ],
                default: "whey",
                modifiers: {
                    "whey": { add: [{ id: "whey", name: "Whey protéine", detail: "Vanille ou neutre", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" }] },
                    "skyr": { add: [{ id: "skyr", name: "Skyr 0%", detail: "Ajouté hors du feu", emoji: "🥛", baseQty: 100, unit: "g", scalable: true, role: "protein" }] }
                }
            }
        ],
        steps: [
            { title: "Cuire les flocons", text: "Dans une casserole, porter le lait à ébullition. Ajouter les flocons d'avoine et une pincée de cannelle. Cuire 5 min à feu doux en remuant." },
            { title: "Préparer la pomme", text: "Couper la pomme en petits dés. Les ajouter dans la casserole 2 minutes avant la fin de cuisson ou les garder crus pour le croquant." },
            { title: "Ajouter le boost", text: "Retirer du feu. Incorporer la whey ou le skyr selon l'option choisie. Bien mélanger." },
            { title: "Servir", text: "Verser dans un bol. Saupoudrer de cannelle. Déguster chaud." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La cannelle aide à réguler la glycémie et donne un goût sucré naturel sans ajouter de calories." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter la whey dans le lait bouillant : elle forme des grumeaux. Toujours attendre que le porridge ait un peu refroidi." }
        ]
    },
    {
        id: "french-toast-proteine",
        name: "French Toast Protéiné",
        subtitle: "Pain perdu revisité • Gourmand",
        emoji: "🍞",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Rapide", "Gourmand", "Classique"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches épaisses", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Battus en omelette", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Pour la dorure", emoji: "🥛", baseQty: 50, unit: "ml", scalable: false, role: "base" }
        ],
        options: [
            {
                id: "sucrant",
                label: "Sucrant",
                choices: [
                    { value: "miel", label: "Miel", emoji: "🍯", desc: "Classique" },
                    { value: "sirop-erable", label: "Sirop d'érable", emoji: "🍁", desc: "Gourmand" }
                ],
                default: "miel",
                modifiers: {
                    "miel": { add: [{ id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" }] },
                    "sirop-erable": { add: [{ id: "sirop_erable", name: "Sirop d'érable", detail: "Un filet", emoji: "🍁", baseQty: 15, unit: "g", scalable: false, role: "carb" }] }
                }
            }
        ],
        steps: [
            { title: "Préparer l'appareil", text: "Dans une assiette creuse, battre les œufs avec le lait et une pincée de cannelle." },
            { title: "Tremper le pain", text: "Tremper chaque tranche de pain dans le mélange œuf-lait, quelques secondes de chaque côté." },
            { title: "Cuire", text: "Faire cuire dans une poêle antiadhésive à feu moyen, 2-3 minutes par face jusqu'à coloration dorée." },
            { title: "Garnir et servir", text: "Déposer les tranches dans une assiette. Ajouter le miel ou le sirop d'érable selon votre choix." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Utiliser du pain complet de la veille légèrement rassis : il absorbe mieux l'appareil sans se casser." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas noyer le pain dans l'appareil. Un trempage rapide suffit pour éviter un résultat trop mou." }
        ]
    },
    {
        id: "muffins-myrtille-avoine",
        name: "Muffins Myrtille-Avoine",
        subtitle: "Batch cooking • 4 muffins",
        emoji: "🫐",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Meal prep", "Batch cooking", "Gourmand"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés en farine", emoji: "🌾", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "banane", name: "Banane", detail: "Bien mûre, écrasée", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "myrtilles", name: "Myrtilles", detail: "Fraîches ou surgelées", emoji: "🫐", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "miel", name: "Miel", detail: "Pour sucrer légèrement", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer", text: "Préchauffer le four à 180°C. Préparer 4 moules à muffins avec des caissettes en papier." },
            { title: "Préparer la pâte", text: "Écraser la banane. Ajouter les œufs battus, les flocons d'avoine mixés et le miel. Bien mélanger." },
            { title: "Incorporer les myrtilles", text: "Ajouter délicatement les myrtilles à la pâte en remuant doucement pour ne pas les écraser." },
            { title: "Cuire", text: "Répartir la pâte dans les 4 moules. Enfourner 20-25 minutes jusqu'à ce que les muffins soient dorés et fermes au toucher." },
            { title: "Refroidir", text: "Laisser refroidir 10 minutes avant de démouler. Se conservent 3 jours au frigo ou 1 mois au congélateur." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Préparer un batch le dimanche pour toute la semaine. Sortir un muffin du frigo chaque matin pour un petit-déjeuner express." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ouvrir le four pendant les 15 premières minutes de cuisson sous peine de faire retomber les muffins." }
        ]
    },
    {
        id: "granola-maison",
        name: "Granola Maison",
        subtitle: "Batch cooking • Crunchy",
        emoji: "🥣",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Meal prep", "Batch cooking", "Crunchy"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Gros flocons de préférence", emoji: "🌾", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "amandes", name: "Amandes", detail: "Concassées grossièrement", emoji: "🌰", baseQty: 20, unit: "g", scalable: true, role: "fat" },
            { id: "miel", name: "Miel", detail: "Liquide", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" },
            { id: "noix_de_coco_rapee", name: "Noix de coco râpée", detail: "Non sucrée", emoji: "🥥", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer", text: "Préchauffer le four à 160°C. Tapisser une plaque de papier cuisson." },
            { title: "Mélanger", text: "Dans un saladier, mélanger les flocons d'avoine, les amandes concassées et la noix de coco râpée. Ajouter le miel et bien enrober." },
            { title: "Étaler et cuire", text: "Étaler le mélange en couche fine sur la plaque. Enfourner 15-20 minutes en remuant à mi-cuisson pour un dorage uniforme." },
            { title: "Refroidir", text: "Laisser refroidir complètement sur la plaque (le granola durcit en refroidissant). Stocker dans un bocal hermétique jusqu'à 2 semaines." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Une portion de 40g suffit comme topping sur un yaourt ou un smoothie bowl. Peser pour ne pas en abuser, le granola est calorique." },
            { type: "red", title: "Erreur à éviter", text: "Surveiller la cuisson : le granola passe de doré à brûlé très rapidement. Mélanger au moins une fois pendant la cuisson." }
        ]
    },
    {
        id: "crepes-proteinees",
        name: "Crêpes Protéinées",
        subtitle: "Gourmand • Riche en protéines",
        emoji: "🥞",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Rapide", "Gourmand", "Haute protéine"],
        ingredients: [
            { id: "farine_complete", name: "Farine complète", detail: "T150 de préférence", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Ou lait végétal", emoji: "🥛", baseQty: 100, unit: "ml", scalable: true, role: "base" },
            { id: "whey", name: "Whey protéine", detail: "Vanille ou neutre", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" }
        ],
        options: [
            {
                id: "garniture",
                label: "Garniture",
                choices: [
                    { value: "banane", label: "Banane", emoji: "🍌", desc: "Classique et rassasiante" },
                    { value: "miel", label: "Miel", emoji: "🍯", desc: "Simple et rapide" }
                ],
                default: "banane",
                modifiers: {
                    "banane": { add: [{ id: "banane", name: "Banane", detail: "En rondelles", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" }] },
                    "miel": { add: [{ id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" }] }
                }
            }
        ],
        steps: [
            { title: "Préparer la pâte", text: "Dans un saladier, mélanger la farine, la whey et les œufs. Ajouter le lait progressivement en fouettant pour éviter les grumeaux." },
            { title: "Reposer", text: "Laisser reposer la pâte 5 minutes (optionnel mais recommandé pour des crêpes plus souples)." },
            { title: "Cuire les crêpes", text: "Faire chauffer une poêle antiadhésive. Verser une fine couche de pâte et cuire 1-2 min par face." },
            { title: "Garnir et servir", text: "Garnir avec la banane en rondelles ou un filet de miel. Rouler ou plier les crêpes." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La whey vanille donne un goût naturellement sucré aux crêpes, ce qui évite d'ajouter du sucre." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas surchauffer la poêle : la whey brûle facilement et donne un goût amer." }
        ]
    },
    {
        id: "bol-skyr-fruits-rouges",
        name: "Bol Skyr Fruits Rouges",
        subtitle: "Express • Ultra protéiné",
        emoji: "🍓",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 3,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Sans cuisson", "Express", "Haute protéine"],
        ingredients: [
            { id: "skyr", name: "Skyr 0%", detail: "Nature, sans sucre ajouté", emoji: "🥛", baseQty: 300, unit: "g", scalable: true, role: "protein" },
            { id: "fruits_rouges", name: "Fruits rouges", detail: "Frais ou surgelés décongelés", emoji: "🍓", baseQty: 200, unit: "g", scalable: true, role: "carb" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Pour le croquant", emoji: "🌾", baseQty: 25, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer le skyr", text: "Verser le skyr dans un bol large. Lisser la surface avec une cuillère." },
            { title: "Ajouter les fruits", text: "Disposer les fruits rouges sur le dessus du skyr. Si surgelés, les décongeler au micro-ondes 1 minute." },
            { title: "Ajouter le croquant", text: "Parsemer les flocons d'avoine sur le dessus pour apporter du croquant et de la satiété." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le skyr contient 2x plus de protéines que le yaourt classique. C'est la base idéale pour un petit-déjeuner protéiné sans cuisson." },
            { type: "red", title: "Erreur à éviter", text: "Attention aux skyr aromatisés du commerce : ils contiennent souvent 10-15g de sucre ajouté par pot. Toujours choisir nature." }
        ]
    },
    {
        id: "banana-bread-proteine",
        name: "Banana Bread Protéiné",
        subtitle: "Gourmand • Chocolaté",
        emoji: "🍌",
        category: "petit-dej-sucre",
        difficulty: "Avancé",
        time: 30,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Gourmand", "Chocolat", "Meal prep"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Bien mûre, écrasée", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés en farine", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œuf", detail: "Entier", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "whey", name: "Whey protéine", detail: "Chocolat ou vanille", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer", text: "Préchauffer le four à 180°C. Préparer un petit moule à cake individuel ou un ramequin." },
            { title: "Préparer la pâte", text: "Écraser la banane. Ajouter l'œuf battu, les flocons mixés, la whey et le cacao. Bien mélanger." },
            { title: "Cuire", text: "Verser dans le moule. Enfourner 20-25 minutes. Le banana bread est prêt quand un couteau planté au centre ressort propre." },
            { title: "Refroidir et servir", text: "Laisser refroidir 10 minutes avant de démouler. Se conserve 3 jours au frigo emballé." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Plus la banane est mûre (tachetée de brun), plus le banana bread sera naturellement sucré sans ajout de sucre." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas remplacer le cacao non sucré par du chocolat en poudre type petit-déjeuner : les calories triplent." }
        ]
    },
    // ============================================================
    // PETIT-DEJEUNER SALE (8 recipes)
    // ============================================================
    {
        id: "omelette-express",
        name: "Omelette Express",
        subtitle: "3 minutes • Haute protéine",
        emoji: "🍳",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 5,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Sans gluten", "Express", "Haute protéine", "Low carb"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" }
        ],
        options: [
            {
                id: "garniture-jambon",
                label: "Jambon",
                choices: [
                    { value: "avec", label: "Avec jambon", emoji: "🥓", desc: "+8g protéines" },
                    { value: "sans", label: "Sans", emoji: "➖", desc: "Nature" }
                ],
                default: "avec",
                modifiers: {
                    "avec": { add: [{ id: "jambon", name: "Jambon blanc", detail: "En dés", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein" }] },
                    "sans": {}
                }
            },
            {
                id: "garniture-fromage",
                label: "Fromage",
                choices: [
                    { value: "avec", label: "Avec fromage", emoji: "🧀", desc: "Fondant" },
                    { value: "sans", label: "Sans", emoji: "➖", desc: "Moins calorique" }
                ],
                default: "avec",
                modifiers: {
                    "avec": { add: [{ id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" }] },
                    "sans": {}
                }
            }
        ],
        steps: [
            { title: "Battre les œufs", text: "Casser les œufs dans un bol. Saler, poivrer. Battre vigoureusement à la fourchette." },
            { title: "Cuire", text: "Faire chauffer une poêle antiadhésive à feu moyen-vif. Verser les œufs battus." },
            { title: "Garnir", text: "Quand l'omelette commence à prendre, ajouter le jambon en dés et/ou le fromage râpé sur une moitié." },
            { title: "Plier et servir", text: "Plier l'omelette en deux et glisser dans l'assiette. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "3 œufs entiers le matin apportent un excellent ratio protéines/lipides pour la satiété. Le cholestérol alimentaire n'est plus un souci selon les études récentes." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas cuire à feu trop fort : une omelette baveuse est plus digeste et savoureuse qu'une omelette caoutchouteuse." }
        ]
    },
    {
        id: "tartine-avocat-oeuf",
        name: "Tartine Avocat-Œuf Poché",
        subtitle: "Tendance • Équilibré",
        emoji: "🥑",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Tendance", "Équilibré", "Brunch"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches, toastées", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "avocat", name: "Avocat", detail: "Écrasé à la fourchette", emoji: "🥑", baseQty: 60, unit: "g", scalable: true, role: "fat" },
            { id: "oeufs", name: "Œufs", detail: "Pochés ou au plat", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "tomate", name: "Tomate", detail: "En rondelles fines", emoji: "🍅", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller les tranches de pain complet au toaster ou à la poêle." },
            { title: "Préparer l'avocat", text: "Écraser l'avocat à la fourchette avec un filet de jus de citron, sel et poivre." },
            { title: "Pocher les œufs", text: "Porter de l'eau à frémissement avec un trait de vinaigre. Créer un tourbillon et y glisser les œufs un par un. Cuire 3 minutes." },
            { title: "Assembler", text: "Tartiner l'avocat sur le pain. Disposer les rondelles de tomate puis les œufs pochés. Saler, poivrer." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "L'avocat apporte des bonnes graisses mono-insaturées. 60g (un quart d'avocat) suffit pour le goût et la satiété." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas mettre un avocat entier : c'est 320 calories et 30g de lipides en plus. Un quart suffit." }
        ]
    },
    {
        id: "oeufs-brouilles-saumon",
        name: "Œufs Brouillés Saumon Fumé",
        subtitle: "Brunch • Oméga-3",
        emoji: "🐟",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 8,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Sans gluten", "Brunch", "Oméga-3", "Low carb"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "saumon", name: "Saumon fumé", detail: "En lanières", emoji: "🐟", baseQty: 40, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Battre les œufs", text: "Casser les œufs dans un bol. Saler légèrement (le saumon est déjà salé). Poivrer. Battre." },
            { title: "Cuire les œufs brouillés", text: "Dans une poêle antiadhésive à feu doux, verser les œufs. Remuer constamment avec une spatule en bois pendant 3-4 minutes." },
            { title: "Ajouter le saumon", text: "Quand les œufs sont encore légèrement baveux, retirer du feu et ajouter le saumon fumé en lanières. La chaleur résiduelle terminera la cuisson." },
            { title: "Servir", text: "Dresser dans une assiette. Ajouter de la ciboulette ciselée. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le saumon fumé apporte des oméga-3 essentiels. Même en petite quantité (40g), c'est un excellent ajout nutritionnel." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas cuire les œufs brouillés à feu fort : ils deviennent secs et caoutchouteux. La clé est le feu doux et la patience." }
        ]
    },
    {
        id: "wrap-oeuf-dinde",
        name: "Wrap Œuf-Dinde",
        subtitle: "À emporter • Haute protéine",
        emoji: "🌯",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 8,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["À emporter", "Haute protéine", "Rapide"],
        ingredients: [
            { id: "tortilla", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "En omelette", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "dinde", name: "Dinde", detail: "Tranchée finement", emoji: "🍗", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "epinards", name: "Épinards", detail: "Frais, en feuilles", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire l'omelette", text: "Battre les œufs avec sel et poivre. Cuire en omelette plate et fine dans une poêle antiadhésive." },
            { title: "Chauffer la tortilla", text: "Passer la tortilla 20 secondes au micro-ondes ou à sec dans une poêle pour la rendre souple." },
            { title: "Assembler le wrap", text: "Disposer les épinards frais sur la tortilla, puis l'omelette et les tranches de dinde." },
            { title: "Rouler", text: "Plier les côtés vers l'intérieur puis rouler serré. Couper en deux en diagonale. Emballer dans du papier alu pour emporter." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le combo œuf + dinde donne plus de 35g de protéines. Idéal pour tenir toute la matinée sans fringale." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas choisir une tortilla au fromage ou aux herbes : elles contiennent souvent plus de lipides et calories." }
        ]
    },
    {
        id: "shakshuka-express",
        name: "Shakshuka Express",
        subtitle: "Épicé • Méditerranéen",
        emoji: "🍳",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 15,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Méditerranéen", "Épicé", "Réconfortant"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "Pochés dans la sauce", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "Nature, sans sucre ajouté", emoji: "🍅", baseQty: 200, unit: "g", scalable: true, role: "base" },
            { id: "poivron", name: "Poivron rouge", detail: "En dés", emoji: "🫑", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "feta", name: "Feta", detail: "Émiettée sur le dessus", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Faire revenir les légumes", text: "Dans une poêle, faire revenir l'oignon et le poivron émincés pendant 3-4 minutes à feu moyen." },
            { title: "Ajouter la sauce", text: "Verser la sauce tomate. Ajouter cumin, paprika et piment selon goût. Laisser mijoter 5 minutes." },
            { title: "Pocher les œufs", text: "Creuser 2 puits dans la sauce. Casser un œuf dans chaque puits. Couvrir et cuire 4-5 minutes jusqu'à ce que les blancs soient pris." },
            { title: "Garnir et servir", text: "Émietter la feta par dessus. Ajouter du persil frais. Servir directement dans la poêle avec du pain complet." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La sauce tomate est très peu calorique (29 cal/100g) et riche en lycopène, un puissant antioxydant. N'hésitez pas sur la quantité." },
            { type: "red", title: "Erreur à éviter", text: "Éviter les sauces tomates cuisinées du commerce qui contiennent du sucre ajouté et de l'huile. Choisir une sauce nature." }
        ]
    },
    {
        id: "galette-sarrasin-complete",
        name: "Galette Sarrasin Complète",
        subtitle: "Traditionnelle • Complète",
        emoji: "🥞",
        category: "petit-dej-sale",
        difficulty: "Avancé",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Traditionnel", "Sans gluten", "Complet"],
        ingredients: [
            { id: "galette_sarrasin", name: "Galette de sarrasin", detail: "Prête à l'emploi", emoji: "🥞", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œuf", detail: "Au plat au centre", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "jambon", name: "Jambon blanc", detail: "1 tranche", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Chauffer la galette", text: "Placer la galette de sarrasin dans une poêle chaude. La laisser chauffer 30 secondes." },
            { title: "Garnir", text: "Répartir le fromage râpé, disposer la tranche de jambon au centre." },
            { title: "Casser l'œuf", text: "Casser l'œuf au centre de la galette. Saler et poivrer." },
            { title: "Plier et servir", text: "Replier les 4 bords de la galette vers le centre en formant un carré. Couvrir 2 minutes pour que l'œuf prenne. Servir." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le sarrasin est naturellement sans gluten et riche en protéines végétales. La galette est moins calorique qu'une crêpe de froment." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter de beurre dans la poêle : la galette se réchauffe parfaitement dans une poêle antiadhésive sans matière grasse." }
        ]
    },
    {
        id: "croque-monsieur-healthy",
        name: "Croque-Monsieur Healthy",
        subtitle: "Sans beurre • Croustillant",
        emoji: "🥪",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Rapide", "Croustillant", "Classique"],
        ingredients: [
            { id: "pain_mie", name: "Pain de mie complet", detail: "2 tranches", emoji: "🍞", baseQty: 2, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "jambon", name: "Jambon blanc", detail: "1 tranche épaisse", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 25, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Assembler", text: "Disposer le jambon sur une tranche de pain. Répartir le fromage râpé par dessus. Couvrir avec la seconde tranche." },
            { title: "Griller", text: "Placer le croque-monsieur dans un appareil à croque ou dans une poêle antiadhésive avec un poids dessus." },
            { title: "Cuire", text: "Cuire 3-4 minutes de chaque côté jusqu'à ce que le pain soit doré et le fromage fondu." },
            { title: "Servir", text: "Couper en diagonale et servir chaud. Accompagner d'une salade verte pour un repas plus complet." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "En utilisant une poêle antiadhésive sans beurre ni huile, vous économisez 100 calories par rapport au croque traditionnel." },
            { type: "red", title: "Erreur à éviter", text: "Éviter le pain de mie blanc et le beurre : opter pour du pain de mie complet qui apporte plus de fibres et rassasie mieux." }
        ]
    },
    {
        id: "bowl-sale-cottage",
        name: "Bowl Salé Cottage Cheese",
        subtitle: "Sans cuisson • Frais",
        emoji: "🥗",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 5,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Sans cuisson", "Frais", "Low carb"],
        ingredients: [
            { id: "cottage_cheese", name: "Cottage cheese", detail: "Nature", emoji: "🧀", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En rondelles", emoji: "🥒", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "avocat", name: "Avocat", detail: "En tranches fines", emoji: "🥑", baseQty: 40, unit: "g", scalable: true, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer les légumes", text: "Couper la tomate en dés, le concombre en rondelles et l'avocat en tranches fines." },
            { title: "Dresser le bowl", text: "Déposer le cottage cheese au centre d'un bol. Disposer les légumes autour." },
            { title: "Assaisonner", text: "Saler, poivrer. Ajouter un filet de jus de citron et des herbes fraîches (ciboulette, basilic). Servir frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le cottage cheese est un excellent compromis : plus protéiné que le fromage blanc, avec une texture intéressante qui se prête bien aux recettes salées." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas confondre cottage cheese et cream cheese : le cream cheese contient 3 fois plus de calories et beaucoup plus de lipides." }
        ]
    },
    // ============================================================
    // DEJEUNER (10 recipes)
    // ============================================================
    {
        id: "wrap-poulet-avocat",
        name: "Wrap Poulet-Avocat Tex-Mex",
        subtitle: "Complet • Savoureux",
        emoji: "🌯",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Complet", "Tex-Mex", "À emporter"],
        ingredients: [
            { id: "tortilla", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "poulet", name: "Poulet grillé", detail: "Émincé", emoji: "🍗", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 45, unit: "g", scalable: true, role: "fat" },
            { id: "haricots_noirs", name: "Haricots noirs", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 60, unit: "g", scalable: true, role: "carb", rawRatio: 0.43 },
            { id: "mais", name: "Maïs", detail: "En grains, égoutté", emoji: "🌽", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "salade", name: "Salade verte", detail: "Quelques feuilles", emoji: "🥬", baseQty: 20, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le poulet", text: "Si pas déjà cuit, faire griller le poulet émincé dans une poêle avec des épices tex-mex (cumin, paprika, piment doux)." },
            { title: "Chauffer la tortilla", text: "Passer la tortilla 20 secondes au micro-ondes ou dans une poêle sèche pour la rendre souple." },
            { title: "Garnir", text: "Disposer la salade au centre de la tortilla, puis le poulet, les haricots noirs, le maïs et l'avocat en tranches." },
            { title: "Rouler et servir", text: "Plier les côtés et rouler serré. Couper en deux en diagonale. Emballer dans du papier alu pour emporter si besoin." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les haricots noirs ajoutent des fibres et protéines végétales. Ce combo poulet + légumineuse optimise la satiété." },
            { type: "red", title: "Erreur à éviter", text: "Éviter d'ajouter de la crème fraîche ou du guacamole tout prêt : ces ajouts doublent rapidement les lipides." }
        ]
    },
    {
        id: "poke-bowl-saumon",
        name: "Poke Bowl Saumon",
        subtitle: "Frais • Oméga-3",
        emoji: "🐟",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Frais", "Oméga-3", "Tendance"],
        ingredients: [
            { id: "saumon", name: "Saumon", detail: "Cru qualité sushi ou cuit", emoji: "🐟", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "riz", name: "Riz basmati cuit", detail: "Refroidi", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 40, unit: "g", scalable: true, role: "fat" },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le riz", text: "Si pas déjà cuit, cuire le riz et le laisser refroidir. L'assaisonner avec un trait de vinaigre de riz et un peu de sauce soja." },
            { title: "Couper le saumon", text: "Détailler le saumon en cubes réguliers d'environ 2 cm. Le mariner 10 minutes dans un peu de sauce soja." },
            { title: "Préparer les accompagnements", text: "Couper le concombre en dés et l'avocat en tranches. Préparer les edamame si disponibles." },
            { title: "Assembler le bowl", text: "Déposer le riz dans un bol. Disposer harmonieusement le saumon, l'avocat et le concombre par dessus. Ajouter un trait de sauce soja et des graines de sésame." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le saumon cru apporte des oméga-3 intacts (non dénaturés par la cuisson). Vérifier la qualité sushi chez votre poissonnier." },
            { type: "red", title: "Erreur à éviter", text: "Attention à la sauce soja sucrée et à la mayo japonaise : elles ajoutent beaucoup de sucre et de calories cachées." }
        ]
    },
    {
        id: "buddha-bowl-quinoa",
        name: "Buddha Bowl Quinoa",
        subtitle: "Végétarien • Complet",
        emoji: "🥗",
        category: "dejeuner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Végétarien", "Vegan", "Sans gluten", "Complet", "Fibres"],
        ingredients: [
            { id: "quinoa", name: "Quinoa cuit", detail: "Refroidi ou tiède", emoji: "🌾", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "pois_chiches", name: "Pois chiches cuits", detail: "Égouttés", emoji: "🫘", baseQty: 80, unit: "g", scalable: true, role: "protein", rawRatio: 0.45 },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 40, unit: "g", scalable: true, role: "fat" },
            { id: "brocoli", name: "Brocoli", detail: "Cuit vapeur ou cru", emoji: "🥦", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "Râpée", emoji: "🥕", baseQty: 40, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire le quinoa", text: "Rincer le quinoa et le cuire dans 2 fois son volume d'eau pendant 12-15 minutes. Égoutter et laisser tiédir." },
            { title: "Préparer les légumes", text: "Cuire le brocoli à la vapeur 5 minutes (al dente). Râper la carotte. Couper l'avocat en tranches." },
            { title: "Préparer les pois chiches", text: "Égoutter et rincer les pois chiches. Optionnel : les rôtir 10 min au four à 200°C avec paprika pour du croquant." },
            { title: "Assembler le bowl", text: "Disposer le quinoa en base, puis les légumes et pois chiches en sections. Assaisonner avec une vinaigrette légère (citron, moutarde, huile d'olive)." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le quinoa + pois chiches forme une protéine complète végétale. Ce bowl est idéal pour les jours sans viande." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas noyer le bowl de vinaigrette. 1 cuillère à soupe d'huile d'olive = 90 calories. Doser avec parcimonie." }
        ]
    },
    {
        id: "poulet-curry-riz",
        name: "Poulet Curry Riz Basmati",
        subtitle: "Savoureux • Réconfortant",
        emoji: "🍛",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Réconfortant", "Épicé", "Meal prep"],
        ingredients: [
            { id: "poulet", name: "Poulet grillé", detail: "En morceaux", emoji: "🍗", baseQty: 130, unit: "g", scalable: true, role: "protein" },
            { id: "riz", name: "Riz basmati cuit", detail: "Cuit à l'eau", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "lait_coco", name: "Lait de coco", detail: "Light de préférence", emoji: "🥥", baseQty: 50, unit: "ml", scalable: true, role: "fat" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "poivron", name: "Poivron rouge", detail: "En lamelles", emoji: "🫑", baseQty: 50, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Faire revenir le poulet", text: "Dans une poêle, faire dorer les morceaux de poulet avec de la poudre de curry pendant 5 minutes." },
            { title: "Ajouter les légumes", text: "Ajouter l'oignon émincé et le poivron en lamelles. Cuire 3-4 minutes." },
            { title: "Verser le lait de coco", text: "Ajouter le lait de coco et le curry. Laisser mijoter 10 minutes à feu doux jusqu'à ce que la sauce épaississe." },
            { title: "Servir avec le riz", text: "Dresser le riz dans une assiette. Verser le poulet curry par dessus. Garnir de coriandre fraîche si disponible." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Utiliser 50ml de lait de coco suffit pour le goût sans exploser les calories. La version light (10% MG) existe aussi." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas vider une boîte entière de lait de coco (400ml = 720 calories). Mesurer la quantité utilisée." }
        ]
    },
    {
        id: "pasta-bolognese",
        name: "Pasta Bolognese Maison",
        subtitle: "Classique • Réconfortant",
        emoji: "🍝",
        category: "dejeuner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Classique", "Réconfortant", "Familial"],
        ingredients: [
            { id: "pates", name: "Pâtes cuites", detail: "Penne ou spaghetti", emoji: "🍝", baseQty: 180, unit: "g", scalable: true, role: "carb", rawRatio: 0.45 },
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Maigre", emoji: "🥩", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "Nature", emoji: "🍅", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "carotte", name: "Carotte", detail: "Râpée finement", emoji: "🥕", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire la viande", text: "Dans une poêle, faire revenir le bœuf haché à feu vif en l'émiettant à la spatule. Bien le colorer." },
            { title: "Ajouter les légumes", text: "Ajouter l'oignon émincé et la carotte râpée. Cuire 3 minutes." },
            { title: "Mijoter la sauce", text: "Verser la sauce tomate. Assaisonner avec sel, poivre, origan et basilic. Laisser mijoter 15 minutes à feu doux." },
            { title: "Cuire les pâtes et servir", text: "Cuire les pâtes selon les instructions du paquet. Égoutter et mélanger avec la sauce bolognese." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le bœuf haché à 5% de MG est le meilleur choix. 100g apportent 21g de protéines pour seulement 6g de lipides." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter de parmesan en excès sur les pâtes : 20g de parmesan = 86 calories supplémentaires." }
        ]
    },
    {
        id: "salade-cesar-poulet",
        name: "Salade César Poulet",
        subtitle: "Fraîche • Haute protéine",
        emoji: "🥗",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Fraîche", "Haute protéine", "Classique"],
        ingredients: [
            { id: "poulet", name: "Poulet grillé", detail: "Émincé", emoji: "🍗", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "salade", name: "Salade verte", detail: "Romaine de préférence", emoji: "🥬", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "parmesan", name: "Parmesan", detail: "En copeaux", emoji: "🧀", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "pain_complet", name: "Croûtons pain complet", detail: "Grillés au four", emoji: "🍞", baseQty: 20, unit: "g", scalable: false, role: "carb" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Pour la sauce César légère", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le poulet", text: "Griller le poulet émincé dans une poêle avec sel, poivre et un peu d'ail en poudre. Réserver." },
            { title: "Préparer la sauce", text: "Mélanger le yaourt grec avec un filet de jus de citron, de la moutarde et du parmesan râpé. Saler et poivrer." },
            { title: "Préparer les croûtons", text: "Couper le pain complet en petits dés. Les faire griller au four 5-8 minutes à 200°C." },
            { title: "Assembler la salade", text: "Disposer la salade dans un grand bol. Ajouter le poulet émincé, les croûtons et les copeaux de parmesan. Napper de sauce." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Remplacer la sauce César classique (mayonnaise) par du yaourt grec divise les calories de sauce par 4 tout en gardant le crémeux." },
            { type: "red", title: "Erreur à éviter", text: "Les sauces César du commerce contiennent souvent 50 cal par cuillère à soupe. Préparer la vôtre au yaourt grec." }
        ]
    },
    {
        id: "bowl-mediterraneen",
        name: "Bowl Méditerranéen",
        subtitle: "Complet • Équilibré",
        emoji: "🫒",
        category: "dejeuner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Méditerranéen", "Complet", "Équilibré"],
        ingredients: [
            { id: "quinoa", name: "Quinoa cuit", detail: "Ou riz", emoji: "🌾", baseQty: 130, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "poulet", name: "Poulet grillé", detail: "Émincé, assaisonné herbes de Provence", emoji: "🍗", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "feta", name: "Feta", detail: "Émiettée", emoji: "🧀", baseQty: 25, unit: "g", scalable: false, role: "fat" },
            { id: "tomate", name: "Tomate", detail: "En quartiers", emoji: "🍅", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la base", text: "Cuire le quinoa si pas déjà fait. Le laisser tiédir." },
            { title: "Griller le poulet", text: "Assaisonner le poulet avec herbes de Provence, sel et poivre. Griller à la poêle 5-6 minutes." },
            { title: "Préparer les légumes", text: "Couper la tomate en quartiers et le concombre en dés." },
            { title: "Assembler", text: "Disposer le quinoa en base dans un bol. Ajouter le poulet, la tomate, le concombre et émietter la feta par dessus. Assaisonner avec un filet de jus de citron et d'huile d'olive." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le régime méditerranéen est reconnu comme l'un des plus sains au monde. Ce bowl en reprend les bases : céréales complètes, légumes, protéine maigre, bon gras." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas abuser de la feta : 25g suffisent pour le goût. 100g de feta = 264 calories et 21g de lipides." }
        ]
    },
    {
        id: "wok-nouilles-poulet",
        name: "Wok Nouilles Poulet Sésame",
        subtitle: "Asiatique • Rapide",
        emoji: "🍜",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Asiatique", "Rapide", "Savoureux"],
        ingredients: [
            { id: "soba", name: "Nouilles soba cuites", detail: "Cuites et égouttées", emoji: "🍜", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 0.5 },
            { id: "poulet", name: "Poulet grillé", detail: "Émincé finement", emoji: "🍗", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "En petits bouquets", emoji: "🥦", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "poivron", name: "Poivron rouge", detail: "En lamelles", emoji: "🫑", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les nouilles", text: "Cuire les nouilles soba selon les instructions du paquet. Égoutter et réserver." },
            { title: "Sauter le poulet", text: "Dans un wok ou une grande poêle très chaude, faire sauter le poulet émincé 3-4 minutes. Réserver." },
            { title: "Sauter les légumes", text: "Dans le même wok, faire sauter le brocoli et le poivron 3-4 minutes (ils doivent rester croquants)." },
            { title: "Assembler", text: "Remettre le poulet, ajouter les nouilles. Verser un filet de sauce soja et saupoudrer de graines de sésame. Bien mélanger à feu vif 1 minute." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les nouilles soba (sarrasin) contiennent plus de protéines que les pâtes classiques et ont un index glycémique plus bas." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas noyer le wok de sauce soja : 1 cuillère à soupe suffit. Trop de sauce ajoute beaucoup de sodium." }
        ]
    },
    {
        id: "chili-con-carne",
        name: "Chili Con Carne",
        subtitle: "Épicé • Riche en fibres",
        emoji: "🌶️",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Épicé", "Fibres", "Meal prep"],
        ingredients: [
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Maigre", emoji: "🥩", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "haricots_noirs", name: "Haricots noirs", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 80, unit: "g", scalable: true, role: "carb", rawRatio: 0.43 },
            { id: "tomate", name: "Tomate", detail: "Concassée", emoji: "🍅", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "mais", name: "Maïs", detail: "En grains", emoji: "🌽", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "poivron", name: "Poivron rouge", detail: "En dés", emoji: "🫑", baseQty: 50, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Saisir la viande", text: "Dans une cocotte, faire revenir le bœuf haché à feu vif en l'émiettant. Bien le colorer." },
            { title: "Ajouter les aromates", text: "Ajouter l'oignon et le poivron en dés. Cuire 3 minutes. Ajouter cumin, paprika, piment en poudre." },
            { title: "Mijoter", text: "Ajouter les tomates concassées, les haricots noirs et le maïs. Couvrir et laisser mijoter 20 minutes à feu doux." },
            { title: "Servir", text: "Rectifier l'assaisonnement. Servir dans un bol. Accompagner de riz basmati si besoin de plus de glucides." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les haricots noirs apportent 9g de protéines et 24g de glucides complexes pour 100g. Excellente source de fibres qui booste la satiété." },
            { type: "red", title: "Erreur à éviter", text: "Éviter d'accompagner systématiquement de chips tortilla ou de crème fraîche : le chili est déjà complet tel quel." }
        ]
    },
    {
        id: "steak-patate-douce",
        name: "Steak Haché Patate Douce",
        subtitle: "Simple • Efficace",
        emoji: "🥩",
        category: "dejeuner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Simple", "Complet", "Prise de masse"],
        ingredients: [
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Steak formé", emoji: "🥩", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "patate_douce", name: "Patate douce", detail: "Coupée en frites ou rondelles", emoji: "🍠", baseQty: 200, unit: "g", scalable: true, role: "carb", rawRatio: 0.85 },
            { id: "brocoli", name: "Brocoli", detail: "En bouquets, vapeur", emoji: "🥦", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Pour la cuisson", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer la patate douce", text: "Éplucher et couper la patate douce en frites ou rondelles. Les cuire au four à 200°C pendant 20 minutes avec un filet d'huile d'olive." },
            { title: "Cuire le brocoli", text: "Cuire le brocoli à la vapeur 5-7 minutes pour qu'il reste croquant." },
            { title: "Cuire le steak", text: "Former le steak haché. Le cuire dans une poêle chaude 3-4 minutes par face selon la cuisson souhaitée." },
            { title: "Dresser", text: "Disposer le steak avec les frites de patate douce et le brocoli. Saler et poivrer." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La patate douce a un index glycémique plus bas que la pomme de terre blanche, et apporte du bêta-carotène. Excellente source de glucides complexes." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas frire la patate douce : la cuisson au four avec un minimum d'huile donne un résultat croustillant sans les calories de la friture." }
        ]
    },
    // ============================================================
    // DINER (10 recipes)
    // ============================================================
    {
        id: "saumon-grille-brocoli",
        name: "Saumon Grillé Brocoli",
        subtitle: "Oméga-3 • Équilibré",
        emoji: "🐟",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Oméga-3", "Équilibré", "Sain"],
        ingredients: [
            { id: "saumon", name: "Saumon", detail: "Pavé, avec peau", emoji: "🐟", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "En bouquets", emoji: "🥦", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "riz", name: "Riz basmati cuit", detail: "Cuit à l'eau", emoji: "🍚", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuire le riz", text: "Cuire le riz basmati selon les instructions du paquet. Égoutter et réserver." },
            { title: "Griller le saumon", text: "Chauffer l'huile d'olive dans une poêle à feu moyen-vif. Déposer le saumon côté peau. Cuire 4 min côté peau, retourner et cuire 3 min." },
            { title: "Cuire le brocoli", text: "Pendant ce temps, cuire le brocoli à la vapeur 5-6 minutes. Il doit rester vert vif et légèrement croquant." },
            { title: "Dresser et servir", text: "Disposer le riz, le saumon et le brocoli dans l'assiette. Presser un quartier de citron sur le saumon. Saler, poivrer." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le saumon est l'une des meilleures sources d'oméga-3. Consommer du poisson gras 2 fois par semaine est recommandé." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas trop cuire le saumon : il doit rester rosé au centre pour garder ses qualités nutritionnelles et son moelleux." }
        ]
    },
    {
        id: "poulet-roti-legumes",
        name: "Poulet Rôti Légumes",
        subtitle: "Classique • Familial",
        emoji: "🍗",
        category: "diner",
        difficulty: "Facile",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Classique", "Familial", "Complet"],
        ingredients: [
            { id: "poulet", name: "Poulet grillé", detail: "Filet ou cuisse désossée", emoji: "🍗", baseQty: 140, unit: "g", scalable: true, role: "protein" },
            { id: "patate_douce", name: "Patate douce", detail: "En cubes", emoji: "🍠", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 0.85 },
            { id: "courgette", name: "Courgette", detail: "En rondelles", emoji: "🥒", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "poivron", name: "Poivron rouge", detail: "En morceaux", emoji: "🫑", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Pour la cuisson", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer les légumes", text: "Couper la patate douce en cubes, la courgette en rondelles et le poivron en morceaux. Les disposer sur une plaque de four." },
            { title: "Assaisonner", text: "Arroser les légumes d'un filet d'huile d'olive. Saler, poivrer. Ajouter des herbes de Provence." },
            { title: "Cuire le poulet et les légumes", text: "Disposer le poulet sur les légumes. Enfourner à 200°C pendant 25 minutes ou jusqu'à cuisson complète." },
            { title: "Servir", text: "Vérifier la cuisson du poulet (le jus doit être clair). Servir directement de la plaque dans les assiettes." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cuire poulet et légumes ensemble sur une plaque fait un repas complet avec très peu de vaisselle. Idéal pour le meal prep." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser des cuisses avec peau : retirer la peau divise par 2 les lipides du poulet." }
        ]
    },
    {
        id: "risotto-champignons",
        name: "Risotto Champignons Light",
        subtitle: "Crémeux • Réconfortant",
        emoji: "🍄",
        category: "diner",
        difficulty: "Avancé",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Réconfortant", "Crémeux", "Végétarien"],
        ingredients: [
            { id: "riz", name: "Riz cuit", detail: "Arborio ou basmati", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé finement", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "parmesan", name: "Parmesan", detail: "Râpé", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "creme_legere", name: "Crème fraîche légère 15%", detail: "Pour le crémeux", emoji: "🥛", baseQty: 20, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Faire revenir les champignons", text: "Dans une poêle, faire sauter les champignons émincés à feu vif 5 minutes jusqu'à ce qu'ils soient dorés. Réserver." },
            { title: "Cuire l'oignon", text: "Dans la même poêle, faire revenir l'oignon émincé 2-3 minutes à feu moyen." },
            { title: "Assembler le risotto", text: "Ajouter le riz cuit et les champignons. Mouiller avec un peu de bouillon de légumes chaud. Remuer régulièrement pendant 5 minutes." },
            { title: "Finir et servir", text: "Hors du feu, incorporer la crème légère et le parmesan râpé. Mélanger vigoureusement. Saler, poivrer. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les champignons sont très peu caloriques (22 cal/100g) et donnent beaucoup de volume au plat. Parfait pour manger une grosse portion sans culpabiliser." },
            { type: "red", title: "Erreur à éviter", text: "Le risotto classique utilise beaucoup de beurre et de parmesan. Cette version light avec crème à 15% et peu de parmesan garde le goût sans les calories." }
        ]
    },
    {
        id: "cabillaud-papillote",
        name: "Cabillaud Papillote Légumes",
        subtitle: "Léger • Diététique",
        emoji: "🐟",
        category: "diner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Léger", "Diététique", "Perte de poids"],
        ingredients: [
            { id: "cabillaud", name: "Cabillaud", detail: "Filet frais", emoji: "🐟", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "courgette", name: "Courgette", detail: "En rondelles fines", emoji: "🥒", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En rondelles", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "poivron", name: "Poivron rouge", detail: "En lamelles", emoji: "🫑", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la papillote", text: "Préchauffer le four à 180°C. Découper un grand rectangle de papier cuisson ou aluminium." },
            { title: "Disposer les légumes", text: "Au centre de la feuille, disposer les rondelles de courgette et de tomate en lit, puis les lamelles de poivron." },
            { title: "Ajouter le poisson", text: "Déposer le filet de cabillaud sur les légumes. Presser un jus de citron, saler, poivrer. Ajouter des herbes fraîches (thym, aneth)." },
            { title: "Fermer et cuire", text: "Refermer la papillote en pliant les bords hermétiquement. Enfourner 18-20 minutes. Ouvrir à table pour profiter des arômes." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le cabillaud est le poisson le plus maigre : 82 cal et seulement 0.7g de lipides pour 100g, mais 18g de protéines. Idéal en phase de sèche." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter de beurre dans la papillote comme dans les recettes traditionnelles. Le jus des légumes et du citron suffit à garder le poisson moelleux." }
        ]
    },
    {
        id: "gratin-courgettes-chevre",
        name: "Gratin Courgettes Chèvre",
        subtitle: "Fondant • Gourmand",
        emoji: "🧀",
        category: "diner",
        difficulty: "Moyen",
        time: 35,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Fondant", "Végétarien", "Réconfortant"],
        ingredients: [
            { id: "courgette", name: "Courgette", detail: "En rondelles", emoji: "🥒", baseQty: 250, unit: "g", scalable: true, role: "base" },
            { id: "chevre", name: "Chèvre frais", detail: "En rondelles ou émietté", emoji: "🧀", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "oeufs", name: "Œufs", detail: "Pour l'appareil", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "creme_legere", name: "Crème fraîche légère 15%", detail: "Pour le crémeux", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer les courgettes", text: "Préchauffer le four à 180°C. Couper les courgettes en rondelles. Les faire revenir 5 minutes dans une poêle pour les faire dégorger." },
            { title: "Préparer l'appareil", text: "Battre les œufs avec la crème légère. Saler, poivrer, ajouter de la muscade." },
            { title: "Assembler le gratin", text: "Dans un plat à gratin, disposer les courgettes et l'oignon émincé. Verser l'appareil. Répartir le chèvre en morceaux sur le dessus." },
            { title: "Cuire", text: "Enfourner 25-30 minutes jusqu'à ce que le gratin soit doré et l'appareil pris. Laisser reposer 5 minutes avant de servir." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "250g de courgette = seulement 42 calories. C'est le légume idéal pour manger un gros volume tout en contrôlant les calories." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas remplacer la crème à 15% par de la crème épaisse à 30% : cela double les calories de la sauce." }
        ]
    },
    {
        id: "tacos-boeuf-maison",
        name: "Tacos Bœuf Maison",
        subtitle: "Fun • Convivial",
        emoji: "🌮",
        category: "diner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Fun", "Convivial", "Rapide"],
        ingredients: [
            { id: "tortilla", name: "Tortillas blé complet", detail: "2 wraps", emoji: "🌮", baseQty: 2, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Assaisonné épices mexicaines", emoji: "🥩", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "salade", name: "Salade verte", detail: "Émincée", emoji: "🥬", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 60, unit: "g", scalable: false, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuire la viande", text: "Faire revenir le bœuf haché dans une poêle en l'émiettant. Ajouter cumin, paprika, piment doux et ail en poudre." },
            { title: "Préparer les garnitures", text: "Émincer la salade, couper la tomate en dés et l'oignon en fines lamelles." },
            { title: "Chauffer les tortillas", text: "Passer les tortillas 20 secondes au micro-ondes ou dans une poêle sèche." },
            { title: "Assembler et servir", text: "Garnir chaque tortilla de viande, salade, tomate, oignon et fromage râpé. Plier et déguster immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Utiliser des tortillas blé complet plutôt que des tortillas classiques apporte plus de fibres et un meilleur index glycémique." },
            { type: "red", title: "Erreur à éviter", text: "Éviter le guacamole et la crème fraîche en accompagnement : les tacos sont déjà complets et équilibrés tels quels." }
        ]
    },
    {
        id: "soupe-thai-crevettes",
        name: "Soupe Thaï Crevettes Coco",
        subtitle: "Exotique • Parfumée",
        emoji: "🍜",
        category: "diner",
        difficulty: "Avancé",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Exotique", "Réconfortant", "Parfumé"],
        ingredients: [
            { id: "crevettes", name: "Crevettes", detail: "Décortiquées", emoji: "🦐", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "lait_coco", name: "Lait de coco", detail: "Light de préférence", emoji: "🥥", baseQty: 80, unit: "ml", scalable: true, role: "fat" },
            { id: "soba", name: "Nouilles soba cuites", detail: "Ou vermicelles de riz", emoji: "🍜", baseQty: 100, unit: "g", scalable: true, role: "carb", rawRatio: 0.5 },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le bouillon", text: "Dans une casserole, chauffer le lait de coco avec 200ml d'eau et du bouillon de légumes. Ajouter citronnelle, gingembre et un trait de sauce poisson." },
            { title: "Cuire les légumes", text: "Ajouter les champignons émincés. Laisser mijoter 5 minutes." },
            { title: "Cuire les crevettes", text: "Ajouter les crevettes et les nouilles. Cuire 3-4 minutes jusqu'à ce que les crevettes soient roses." },
            { title: "Servir", text: "Verser dans un grand bol. Presser un quartier de citron vert. Garnir de coriandre fraîche et d'un filet de sauce soja." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les crevettes sont ultra-protéinées (24g/100g) et quasi sans lipides (0.3g). C'est l'une des meilleures sources de protéines maigres." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas confondre lait de coco et crème de coco : la crème contient 2x plus de matières grasses." }
        ]
    },
    {
        id: "quiche-lorraine-light",
        name: "Quiche Lorraine Light",
        subtitle: "Sans pâte • Allégée",
        emoji: "🥧",
        category: "diner",
        difficulty: "Avancé",
        time: 35,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans pâte", "Allégé", "Classique revisité"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "Pour l'appareil", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "jambon", name: "Jambon blanc", detail: "En dés", emoji: "🥓", baseQty: 50, unit: "g", scalable: true, role: "protein" },
            { id: "creme_legere", name: "Crème fraîche légère 15%", detail: "Pour l'appareil", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "farine_complete", name: "Farine complète", detail: "Pour lier", emoji: "🌾", baseQty: 15, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer l'appareil", text: "Préchauffer le four à 180°C. Battre les œufs avec la crème légère et la farine. Saler, poivrer, ajouter de la muscade." },
            { title: "Préparer la garniture", text: "Couper le jambon en dés. Répartir au fond d'un moule à tarte ou d'un plat à gratin huilé légèrement." },
            { title: "Assembler", text: "Verser l'appareil sur le jambon. Parsemer de fromage râpé sur le dessus." },
            { title: "Cuire", text: "Enfourner 25-30 minutes jusqu'à ce que la quiche soit dorée et prise au centre. Laisser tiédir 5 minutes avant de découper." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "En supprimant la pâte brisée, vous économisez environ 250 calories par portion. La farine ajoutée donne juste assez de tenue." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser de lardons à la place du jambon : les lardons contiennent 3 fois plus de lipides pour un goût similaire." }
        ]
    },
    {
        id: "wok-boeuf-brocoli",
        name: "Wok Bœuf Brocoli",
        subtitle: "Asiatique • Protéiné",
        emoji: "🥦",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Asiatique", "Protéiné", "Savoureux"],
        ingredients: [
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Ou émincé de bœuf", emoji: "🥩", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "En petits bouquets", emoji: "🥦", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "riz", name: "Riz basmati cuit", detail: "Cuit à l'eau", emoji: "🍚", baseQty: 130, unit: "g", scalable: true, role: "carb", rawRatio: 0.4 },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le brocoli", text: "Détailler le brocoli en petits bouquets. Le blanchir 2 minutes dans l'eau bouillante puis égoutter." },
            { title: "Saisir le bœuf", text: "Dans un wok très chaud, saisir le bœuf émincé ou haché avec l'oignon. Cuire 3-4 minutes à feu vif." },
            { title: "Ajouter le brocoli", text: "Ajouter le brocoli blanchi. Verser un filet de sauce soja. Sauter le tout 2-3 minutes." },
            { title: "Servir avec le riz", text: "Servir le wok de bœuf-brocoli sur le riz. Saupoudrer de graines de sésame." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le brocoli est un superaliment : riche en vitamine C, fibres et composés anti-cancer. 150g couvrent vos besoins en vitamine C de la journée." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas trop cuire le brocoli : il doit rester vert vif et croquant. Trop cuit, il perd ses vitamines et sa texture." }
        ]
    },
    {
        id: "burger-maison-healthy",
        name: "Burger Maison Healthy",
        subtitle: "Gourmand • Maîtrisé",
        emoji: "🍔",
        category: "diner",
        difficulty: "Avancé",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Gourmand", "Maîtrisé", "Convivial"],
        ingredients: [
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Steak formé, assaisonné", emoji: "🥩", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "pain_complet", name: "Pain complet", detail: "Bun burger", emoji: "🍞", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "salade", name: "Salade verte", detail: "Feuille de laitue", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En rondelles", emoji: "🍅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "oignon", name: "Oignon", detail: "En rondelles fines", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "emmental", name: "Fromage râpé", detail: "1 tranche ou râpé", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Former le steak", text: "Assaisonner le bœuf haché avec sel, poivre et ail en poudre. Former un steak rond légèrement plus large que le pain." },
            { title: "Cuire le steak", text: "Cuire dans une poêle très chaude 3-4 minutes par face. Ajouter le fromage sur le steak 1 minute avant la fin pour qu'il fonde." },
            { title: "Toaster le pain", text: "Couper le pain en deux et le toaster légèrement dans la poêle ou au toaster." },
            { title: "Assembler le burger", text: "Sur la base du pain, disposer la salade, la tomate, l'oignon, le steak au fromage. Refermer. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Un burger maison avec bœuf 5% MG est bien plus sain qu'un burger fast-food. Vous contrôlez la qualité de chaque ingrédient." },
            { type: "red", title: "Erreur à éviter", text: "Éviter les sauces type ketchup, mayo ou barbecue : elles ajoutent 50-100 calories par cuillère. Miser sur la moutarde (5 cal/cuillère)." }
        ]
    },
    // ============================================================
    // COLLATION A EMPORTER (6 recipes)
    // ============================================================
    {
        id: "energy-balls-chocolat",
        name: "Energy Balls Chocolat",
        subtitle: "Sans cuisson • 4 balls",
        emoji: "🍫",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 10,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Sans cuisson", "Meal prep", "Énergie"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés grossièrement", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes", emoji: "🥜", baseQty: 20, unit: "g", scalable: true, role: "fat" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "miel", name: "Miel", detail: "Pour lier", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mélanger les ingrédients secs", text: "Dans un bol, mélanger les flocons d'avoine mixés et le cacao en poudre." },
            { title: "Ajouter les ingrédients humides", text: "Ajouter le beurre de cacahuète et le miel. Bien pétrir à la main jusqu'à obtenir une pâte homogène." },
            { title: "Former les balls", text: "Diviser la pâte en 4 portions égales. Rouler chaque portion en boule entre les paumes." },
            { title: "Réfrigérer", text: "Placer les balls au réfrigérateur minimum 30 minutes pour qu'elles durcissent. Se conservent 1 semaine au frigo." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Préparer un batch de 8-12 balls le dimanche. Les emballer individuellement dans du film alimentaire pour les emporter facilement." },
            { type: "red", title: "Erreur à éviter", text: "Attention aux portions : les energy balls sont caloriques. 4 balls = 326 kcal. Ne pas en grignoter sans compter." }
        ]
    },
    {
        id: "barres-proteinees-maison",
        name: "Barres Protéinées Maison",
        subtitle: "DIY • 2 barres",
        emoji: "💪",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 15,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Meal prep", "Haute protéine", "DIY"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "whey", name: "Whey protéine", detail: "Chocolat ou vanille", emoji: "💪", baseQty: 30, unit: "g", scalable: true, role: "protein" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes", emoji: "🥜", baseQty: 15, unit: "g", scalable: true, role: "fat" },
            { id: "miel", name: "Miel", detail: "Liquide", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mélanger", text: "Dans un bol, mélanger les flocons d'avoine mixés et la whey. Ajouter le beurre de cacahuète et le miel." },
            { title: "Pétrir", text: "Travailler la pâte à la main jusqu'à obtenir une consistance homogène. Ajouter 1-2 cuillères d'eau si trop sec." },
            { title: "Former les barres", text: "Étaler la pâte sur du papier cuisson (épaisseur ~1.5cm). Couper en 2 barres rectangulaires." },
            { title: "Réfrigérer", text: "Placer au réfrigérateur minimum 1 heure. Emballer chaque barre dans du film alimentaire. Se conservent 1 semaine au frigo." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ces barres maison contiennent 2x plus de protéines et moins de sucre que les barres du commerce. Parfait en post-entraînement." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas remplacer le miel par du sirop de glucose ou d'agave en pensant que c'est plus sain : c'est similaire en calories." }
        ]
    },
    {
        id: "smoothie-proteine-banane",
        name: "Smoothie Protéiné Banane",
        subtitle: "Post-entraînement • Rapide",
        emoji: "🍌",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Sans gluten", "Post-entraînement", "Express", "Shaker"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Mûre", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Froid", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "whey", name: "Whey protéine", detail: "Vanille ou chocolat", emoji: "💪", baseQty: 30, unit: "g", scalable: true, role: "protein" }
        ],
        options: [
            {
                id: "boost-lipides",
                label: "Beurre de cacahuète",
                choices: [
                    { value: "sans", label: "Sans", emoji: "➖", desc: "Version light" },
                    { value: "avec", label: "Avec PB", emoji: "🥜", desc: "+59 kcal, onctueux" }
                ],
                default: "sans",
                modifiers: {
                    "sans": {},
                    "avec": { add: [{ id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "1 cuillère à café", emoji: "🥜", baseQty: 10, unit: "g", scalable: false, role: "fat" }] }
                }
            }
        ],
        steps: [
            { title: "Préparer les ingrédients", text: "Éplucher la banane et la couper en morceaux. Mesurer le lait et la whey." },
            { title: "Mixer", text: "Placer tous les ingrédients dans un blender. Mixer 30 secondes à vitesse maximale." },
            { title: "Ajuster", text: "Si trop épais, ajouter un peu de lait. Si option beurre de cacahuète, l'ajouter et mixer 10 secondes de plus." },
            { title: "Servir", text: "Verser dans un shaker ou une gourde pour emporter. Consommer dans les 2 heures." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le combo banane + whey est le snack post-entraînement idéal : glucides rapides pour recharger le glycogène + protéines pour la récupération." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter de jus de fruit en plus du lait : cela double le sucre sans bénéfice nutritionnel supplémentaire." }
        ]
    },
    {
        id: "muffin-proteine-choco",
        name: "Muffin Protéiné Choco",
        subtitle: "Gourmand • Rapide",
        emoji: "🧁",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 20,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Gourmand", "Chocolat", "Haute protéine"],
        ingredients: [
            { id: "farine_complete", name: "Farine complète", detail: "T150", emoji: "🌾", baseQty: 25, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œuf", detail: "Entier", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "banane", name: "Banane", detail: "Écrasée, remplace le sucre", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "whey", name: "Whey protéine", detail: "Chocolat", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer", text: "Préchauffer le four à 180°C. Préparer un moule à muffin avec une caissette." },
            { title: "Mélanger", text: "Écraser la banane. Ajouter l'œuf battu, la farine, le cacao et la whey. Mélanger jusqu'à obtenir une pâte lisse." },
            { title: "Cuire", text: "Verser la pâte dans le moule. Enfourner 15-18 minutes jusqu'à ce que le muffin soit ferme au toucher." },
            { title: "Refroidir", text: "Laisser refroidir 5 minutes. Se conserve 3 jours au frigo emballé dans du film." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La banane mûre remplace le sucre et l'huile dans cette recette. Elle apporte du moelleux et un goût naturellement sucré." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas confondre cacao pur et chocolat en poudre sucré. Le cacao pur a 2 fois moins de calories et pas de sucre ajouté." }
        ]
    },
    {
        id: "wrap-snack-thon",
        name: "Wrap Snack Thon-Crudités",
        subtitle: "Salé • À emporter",
        emoji: "🌯",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Salé", "Express", "Haute protéine"],
        ingredients: [
            { id: "tortilla", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "thon", name: "Thon en conserve", detail: "Au naturel, égoutté", emoji: "🐟", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "salade", name: "Salade verte", detail: "Quelques feuilles", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En rondelles", emoji: "🍅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En bâtonnets", emoji: "🥒", baseQty: 40, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Égoutter le thon", text: "Ouvrir la boîte de thon et bien l'égoutter. L'émietter à la fourchette." },
            { title: "Préparer les crudités", text: "Laver et couper la tomate en rondelles et le concombre en bâtonnets." },
            { title: "Garnir la tortilla", text: "Disposer la salade, le thon, la tomate et le concombre au centre de la tortilla." },
            { title: "Rouler et emballer", text: "Plier les côtés et rouler serré. Emballer dans du papier alu ou du film alimentaire pour emporter." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le thon au naturel est l'une des meilleures sources de protéines : 26g pour 116 calories et quasi pas de lipides." },
            { type: "red", title: "Erreur à éviter", text: "Choisir du thon au naturel et pas à l'huile : le thon à l'huile contient 3 fois plus de calories." }
        ]
    },
    {
        id: "galettes-riz-beurre-cacahuete",
        name: "Galettes de Riz Beurre Cacahuète",
        subtitle: "Express • Croquant",
        emoji: "🥜",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 3,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Vegan", "Sans gluten", "Express", "Sans cuisson", "Énergie"],
        ingredients: [
            { id: "galette_riz", name: "Galettes de riz", detail: "Soufflées", emoji: "🍘", baseQty: 3, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes", emoji: "🥜", baseQty: 15, unit: "g", scalable: true, role: "fat" },
            { id: "banane", name: "Banane", detail: "En rondelles fines", emoji: "🍌", baseQty: 60, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Tartiner", text: "Étaler le beurre de cacahuète sur chaque galette de riz (environ 1 cuillère à café par galette)." },
            { title: "Garnir", text: "Disposer les rondelles de banane sur le beurre de cacahuète." },
            { title: "Servir ou emballer", text: "Déguster immédiatement ou emballer dans une boîte hermétique pour emporter. Manger dans les 2 heures pour éviter que les galettes ramollissent." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Collation idéale pré-entraînement : les glucides des galettes et de la banane fournissent de l'énergie rapide." },
            { type: "red", title: "Erreur à éviter", text: "Peser le beurre de cacahuète : 15g = 1 cuillère à soupe rase. En mettre 'à l'œil' double souvent la quantité réelle." }
        ]
    },
    // ============================================================
    // COLLATION MAISON (6 recipes)
    // ============================================================
    {
        id: "pudding-chia-coco",
        name: "Pudding Chia Coco",
        subtitle: "Exotique • Riche en fibres",
        emoji: "🥥",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Sans gluten", "Sans cuisson", "Préparé la veille", "Fibres"],
        ingredients: [
            { id: "graines_chia", name: "Graines de chia", detail: "Entières", emoji: "🌱", baseQty: 25, unit: "g", scalable: true, role: "fat" },
            { id: "lait_coco", name: "Lait de coco", detail: "En brique", emoji: "🥥", baseQty: 100, unit: "ml", scalable: true, role: "fat" },
            { id: "banane", name: "Banane", detail: "En rondelles", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mélanger la base", text: "Dans un bocal ou un verre, mélanger les graines de chia avec le lait de coco et le miel. Bien remuer." },
            { title: "Réfrigérer", text: "Laisser reposer au réfrigérateur minimum 4 heures (idéalement toute la nuit). Les graines vont gonfler et former un pudding." },
            { title: "Remuer", text: "Le lendemain, bien mélanger le pudding. Ajouter un peu d'eau ou de lait si trop épais." },
            { title: "Garnir et servir", text: "Disposer les rondelles de banane sur le dessus. Déguster frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les graines de chia gonflent 10 fois leur volume et forment un gel très rassasiant. 25g suffisent pour un pudding généreux." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser de crème de coco (35% MG) à la place du lait de coco (18% MG). Vérifier l'étiquette." }
        ]
    },
    {
        id: "nice-cream-banane",
        name: "Nice Cream Banane",
        subtitle: "Glacé • 3 ingrédients",
        emoji: "🍦",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Sans gluten", "Glacé", "Sans sucre ajouté", "Vegan"],
        ingredients: [
            { id: "banane", name: "Banane congelée", detail: "Coupée en rondelles avant congélation", emoji: "🍌", baseQty: 200, unit: "g", scalable: true, role: "carb" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 5, unit: "g", scalable: false, role: "base" },
            { id: "lait_amande", name: "Lait d'amande", detail: "Non sucré, pour aider à mixer", emoji: "🥛", baseQty: 50, unit: "ml", scalable: false, role: "base" }
        ],
        options: [
            {
                id: "topping",
                label: "Topping",
                choices: [
                    { value: "nature", label: "Nature", emoji: "🍦", desc: "Version light" },
                    { value: "beurre-cacahuete", label: "Beurre cacahuète", emoji: "🥜", desc: "+59 kcal, fondant" }
                ],
                default: "nature",
                modifiers: {
                    "nature": {},
                    "beurre-cacahuete": { add: [{ id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "Fondu sur le dessus", emoji: "🥜", baseQty: 10, unit: "g", scalable: false, role: "fat" }] }
                }
            }
        ],
        steps: [
            { title: "Sortir les bananes", text: "Sortir les bananes congelées du congélateur. Les laisser ramollir 2-3 minutes à température ambiante." },
            { title: "Mixer", text: "Placer les bananes dans un mixeur puissant avec le cacao et le lait d'amande. Mixer en raclant les parois régulièrement." },
            { title: "Obtenir la texture", text: "Mixer jusqu'à obtenir une texture lisse et crémeuse type glace. Ne pas mixer trop longtemps pour éviter que ça devienne liquide." },
            { title: "Servir immédiatement", text: "Verser dans un bol. Ajouter le topping choisi. Consommer immédiatement car la nice cream fond vite." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La nice cream est une alternative saine à la glace : pas de sucre ajouté, pas de crème. La banane congelée donne naturellement la texture glacée." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter de sucre ou de miel : la banane est déjà naturellement sucrée, surtout si elle était bien mûre avant congélation." }
        ]
    },
    {
        id: "fromage-blanc-fruits-granola",
        name: "Fromage Blanc Fruits & Granola",
        subtitle: "Classique • Crunchy",
        emoji: "🥣",
        category: "collation-maison",
        difficulty: "Facile",
        time: 3,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Express", "Classique", "Sans cuisson"],
        ingredients: [
            { id: "fromage_blanc", name: "Fromage blanc 0%", detail: "Nature", emoji: "🥛", baseQty: 250, unit: "g", scalable: true, role: "protein" },
            { id: "fruits_rouges", name: "Fruits rouges", detail: "Frais ou décongelés", emoji: "🍓", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "flocons_avoine", name: "Granola / Flocons d'avoine", detail: "Pour le croquant", emoji: "🌾", baseQty: 25, unit: "g", scalable: false, role: "carb" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer le fromage blanc", text: "Verser le fromage blanc dans un bol. Lisser la surface." },
            { title: "Ajouter les fruits", text: "Disposer les fruits rouges sur le fromage blanc. Si surgelés, les décongeler 1 minute au micro-ondes." },
            { title: "Ajouter le croquant et servir", text: "Parsemer les flocons d'avoine ou le granola. Ajouter un filet de miel. Déguster immédiatement pour profiter du croquant." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le fromage blanc 0% est un excellent coupe-faim : 250g = seulement 120 cal mais 19g de protéines. Parfait entre deux repas." },
            { type: "red", title: "Erreur à éviter", text: "Attention au granola du commerce : souvent très sucré et gras. Peser les 25g ou préparer votre granola maison." }
        ]
    },
    {
        id: "pancakes-snack-proteines",
        name: "Pancakes Snack Protéinés",
        subtitle: "Mini-format • Gourmand",
        emoji: "🥞",
        category: "collation-maison",
        difficulty: "Facile",
        time: 10,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Gourmand", "Haute protéine", "Rapide"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Bien mûre, écrasée", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œuf", detail: "Entier", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés", emoji: "🌾", baseQty: 30, unit: "g", scalable: true, role: "carb" },
            { id: "whey", name: "Whey protéine", detail: "Vanille", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte", text: "Écraser la banane. Ajouter l'œuf battu, les flocons d'avoine mixés et la whey. Bien mélanger." },
            { title: "Cuire les mini-pancakes", text: "Dans une poêle antiadhésive, former de petits pancakes (5-6 cm de diamètre). Cuire 2 min par face." },
            { title: "Servir", text: "Empiler les pancakes et déguster nature ou avec un filet de miel. Se conservent 2 jours au frigo." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ces mini-pancakes sont parfaits en collation pré ou post-entraînement : 24g de protéines et des glucides pour l'énergie." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas les noyer de sirop ou de pâte à tartiner : ils sont déjà sucrés grâce à la banane et la whey vanille." }
        ]
    },
    {
        id: "cottage-cheese-bowl-sale",
        name: "Cottage Cheese Bowl Salé",
        subtitle: "Tendance • Protéiné",
        emoji: "🧀",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Sans gluten", "Tendance", "Salé", "Haute protéine"],
        ingredients: [
            { id: "cottage_cheese", name: "Cottage cheese", detail: "Nature", emoji: "🧀", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "graines_lin", name: "Graines de lin", detail: "Moulues", emoji: "🌱", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer les crudités", text: "Couper la tomate et le concombre en petits dés." },
            { title: "Dresser le bowl", text: "Déposer le cottage cheese dans un bol. Disposer les dés de tomate et concombre par dessus." },
            { title: "Ajouter les graines et servir", text: "Saupoudrer les graines de lin moulues. Saler, poivrer. Ajouter un filet de jus de citron et des herbes fraîches." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les graines de lin moulues apportent des oméga-3 végétaux et des fibres. Toujours les consommer moulues pour en absorber les nutriments." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas consommer les graines de lin entières : elles passent directement dans le transit sans être digérées. Toujours les moudre." }
        ]
    },
    {
        id: "tartine-ricotta-miel-noix",
        name: "Tartine Ricotta Miel Noix",
        subtitle: "Sucré-salé • Gourmand",
        emoji: "🍯",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 250,
        tags: ["Végétarien", "Sucré-salé", "Gourmand", "Rapide"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches, toastées", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "ricotta", name: "Ricotta", detail: "Crémeuse", emoji: "🧀", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" },
            { id: "noix", name: "Noix", detail: "Concassées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller les tranches de pain complet au toaster jusqu'à ce qu'elles soient dorées et croustillantes." },
            { title: "Tartiner", text: "Étaler la ricotta généreusement sur chaque tranche de pain." },
            { title: "Garnir et servir", text: "Ajouter un filet de miel et parsemer de noix concassées. Déguster immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La ricotta est moins calorique que le fromage frais classique et apporte une bonne dose de protéines. Le sucré-salé miel-ricotta est une combinaison rassasiante." },
            { type: "red", title: "Erreur à éviter", text: "Peser les noix : 10g = 3-4 cerneaux. Les noix sont très caloriques (654 cal/100g) et on en mange facilement trop à l'œil." }
        ]
    }
,
    // ============================================================
    // PETIT-DÉJEUNER SUCRÉ (nouveaux) (8 recettes)
    // ============================================================
    {
        id: "porridge-chocolat-banane",
        name: "Porridge Chocolat-Banane",
        subtitle: "Un petit-déjeuner réconfortant et gourmand",
        emoji: "🍫",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Végétarien", "Réconfortant", "Gourmand"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "banane", name: "Banane", detail: "en rondelles", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "cacao", name: "Cacao en poudre", detail: "non sucré", emoji: "🍫", baseQty: 10, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les flocons", text: "Dans une casserole, verser le lait et les flocons d'avoine. Cuire à feu moyen pendant 5 minutes en remuant régulièrement." },
            { title: "Ajouter le cacao", text: "Incorporer le cacao en poudre et bien mélanger jusqu'à obtenir une texture homogène et crémeuse." },
            { title: "Dresser le bowl", text: "Verser le porridge dans un bol. Disposer les rondelles de banane sur le dessus." },
            { title: "Finaliser", text: "Ajouter le boost protéine si souhaité. Servir immédiatement tant que c'est chaud." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Pour un porridge encore plus crémeux, utilisez un mélange moitié lait, moitié eau et laissez cuire une minute de plus." },
            { type: "red", title: "Attention", text: "Ne faites pas cuire à feu trop fort, les flocons risquent d'attacher au fond de la casserole." }
        ]
    },
    {
        id: "bowl-fromage-blanc-mangue",
        name: "Bowl Fromage Blanc Mangue",
        subtitle: "Un bowl frais et vitaminé sans cuisson",
        emoji: "🥭",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 40,
        sliderMax: 230,
        tags: ["Végétarien", "Sans gluten", "Sans cuisson", "Vitaminé"],
        ingredients: [
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 250, unit: "g", scalable: true, role: "protein" },
            { id: "mangue", name: "Mangue", detail: "en morceaux", emoji: "🥭", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "granola", name: "Granola", detail: "", emoji: "🥣", baseQty: 25, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer le fromage blanc", text: "Verser le fromage blanc dans un bol. Bien le mélanger pour obtenir une texture lisse et onctueuse." },
            { title: "Préparer la mangue", text: "Couper la mangue en petits dés. Si vous utilisez de la mangue surgelée, la laisser décongeler quelques minutes." },
            { title: "Assembler le bowl", text: "Disposer les morceaux de mangue sur le fromage blanc. Saupoudrer le granola par-dessus." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Préparez la mangue la veille et conservez-la au frais pour gagner du temps le matin." },
            { type: "red", title: "Erreur classique", text: "N'ajoutez le granola qu'au dernier moment pour qu'il reste bien croustillant." }
        ]
    },
    {
        id: "pancakes-proteine-myrtilles",
        name: "Pancakes Protéinés Myrtilles",
        subtitle: "Des pancakes moelleux riches en protéines",
        emoji: "🫐",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 15,
        sliderMin: 35,
        sliderMax: 220,
        tags: ["Végétarien", "Haute protéine", "Rapide"],
        ingredients: [
            { id: "blanc_oeuf", name: "Blancs d'œufs", detail: "", emoji: "🥚", baseQty: 4, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "myrtilles", name: "Myrtilles", detail: "fraîches ou surgelées", emoji: "🫐", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "bien mûre, écrasée", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte", text: "Mixer les flocons d'avoine en farine. Écraser la banane et mélanger avec les blancs d'œufs et la farine d'avoine." },
            { title: "Incorporer les myrtilles", text: "Ajouter délicatement les myrtilles à la pâte. Ne pas trop mélanger pour garder les myrtilles entières." },
            { title: "Cuire les pancakes", text: "Faire chauffer une poêle antiadhésive à feu moyen. Verser des petites louches de pâte et cuire 2-3 minutes de chaque côté." },
            { title: "Servir", text: "Empiler les pancakes et garnir avec quelques myrtilles fraîches. Déguster chaud." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Pour des pancakes bien moelleux, laissez reposer la pâte 5 minutes avant la cuisson." },
            { type: "red", title: "Erreur classique", text: "Ne retournez pas les pancakes trop tôt : attendez que des bulles se forment en surface." }
        ]
    },
    {
        id: "smoothie-vert-epinard",
        name: "Smoothie Vert Épinard-Banane",
        subtitle: "Un smoothie vitaminé plein de fraîcheur",
        emoji: "🥬",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Vegan", "Sans gluten", "Sans cuisson", "Express", "Vitaminé"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "surgelée de préférence", emoji: "🍌", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "epinards", name: "Épinards frais", detail: "", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "lait_amande", name: "Lait d'amande", detail: "", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "kiwi", name: "Kiwi", detail: "pelé", emoji: "🥝", baseQty: 80, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer les ingrédients", text: "Peler le kiwi et le couper en morceaux. Si la banane n'est pas surgelée, la couper en rondelles." },
            { title: "Mixer", text: "Placer tous les ingrédients dans un blender. Mixer à haute vitesse pendant 1 à 2 minutes jusqu'à obtenir une texture lisse." },
            { title: "Ajuster la texture", text: "Si le smoothie est trop épais, ajouter un peu de lait d'amande. S'il est trop liquide, ajouter quelques glaçons." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Utilisez une banane surgelée pour un smoothie plus épais et glacé, sans avoir besoin d'ajouter de glaçons." },
            { type: "red", title: "Piège à éviter", text: "Ne mettez pas trop d'épinards au début si vous n'êtes pas habitué, le goût peut surprendre." }
        ]
    },
    {
        id: "overnight-oats-chocolat",
        name: "Overnight Oats Chocolat",
        subtitle: "Un petit-déjeuner prêt dès le réveil",
        emoji: "🍫",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 40,
        sliderMax: 230,
        tags: ["Végétarien", "Sans cuisson", "Meal prep"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "cacao", name: "Cacao en poudre", detail: "non sucré", emoji: "🍫", baseQty: 10, unit: "g", scalable: true, role: "base" },
            { id: "skyr", name: "Skyr", detail: "", emoji: "🥛", baseQty: 150, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Mélanger la base", text: "Dans un bocal ou un bol, mélanger les flocons d'avoine, le lait, le cacao en poudre et le skyr." },
            { title: "Réfrigérer", text: "Couvrir et placer au réfrigérateur pendant au moins 4 heures, idéalement toute la nuit." },
            { title: "Servir", text: "Le matin, mélanger et ajouter le topping de votre choix. Déguster froid directement du bocal." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Préparez plusieurs portions à l'avance dans des bocaux pour la semaine, c'est le meal prep parfait." },
            { type: "red", title: "Erreur classique", text: "Ne remplissez pas le bocal à ras bord, les flocons vont gonfler pendant la nuit." }
        ]
    },
    {
        id: "chia-pudding-mangue",
        name: "Chia Pudding Mangue",
        subtitle: "Un pudding onctueux et exotique sans cuisson",
        emoji: "🥭",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Sans cuisson", "Meal prep"],
        ingredients: [
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 30, unit: "g", scalable: true, role: "fat" },
            { id: "lait_coco", name: "Lait de coco", detail: "", emoji: "🥥", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "mangue", name: "Mangue", detail: "en morceaux", emoji: "🥭", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer le pudding", text: "Dans un bocal, mélanger les graines de chia avec le lait de coco et le miel. Bien remuer pour éviter les grumeaux." },
            { title: "Laisser reposer", text: "Placer au réfrigérateur pendant au moins 4 heures ou toute la nuit. Remuer une fois après 30 minutes pour éviter que les graines ne se déposent au fond." },
            { title: "Ajouter la mangue", text: "Au moment de servir, disposer les morceaux de mangue fraîche sur le pudding. Déguster bien frais." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Remuez le pudding après 30 minutes de repos pour une texture plus homogène et éviter les amas de graines." },
            { type: "red", title: "Attention", text: "Ne réduisez pas la quantité de liquide, les graines de chia absorbent beaucoup et le pudding serait trop compact." }
        ]
    },
    {
        id: "gaufres-avoine-banane",
        name: "Gaufres Avoine-Banane",
        subtitle: "Des gaufres saines et gourmandes",
        emoji: "🧇",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 240,
        tags: ["Végétarien", "Gourmand", "Batch cooking"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "banane", name: "Banane", detail: "bien mûre, écrasée", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 100, unit: "ml", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte", text: "Mixer les flocons d'avoine en farine fine. Écraser la banane et mélanger avec les œufs, le lait et la farine d'avoine." },
            { title: "Préchauffer le gaufrier", text: "Faire chauffer le gaufrier et le huiler légèrement si nécessaire." },
            { title: "Cuire les gaufres", text: "Verser une louche de pâte dans le gaufrier. Cuire 4 à 5 minutes jusqu'à ce que les gaufres soient dorées et croustillantes." },
            { title: "Servir", text: "Démouler délicatement et servir avec le topping de votre choix. Déguster chaud." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Vous pouvez congeler les gaufres en surplus et les réchauffer au grille-pain pour les matins pressés." },
            { type: "red", title: "Piège à éviter", text: "N'ouvrez pas le gaufrier trop tôt, la gaufre pourrait se déchirer en deux." }
        ]
    },
    {
        id: "acai-bowl-proteine",
        name: "Açaï Bowl Protéiné",
        subtitle: "Un bowl vitaminé aux saveurs tropicales",
        emoji: "🫐",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 35,
        sliderMax: 220,
        tags: ["Végétarien", "Vitaminé", "Rafraîchissant"],
        ingredients: [
            { id: "acai_puree", name: "Purée d'açaï", detail: "surgelée", emoji: "🫐", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "surgelée", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "lait_amande", name: "Lait d'amande", detail: "", emoji: "🥛", baseQty: 100, unit: "ml", scalable: true, role: "base" },
            { id: "granola", name: "Granola", detail: "", emoji: "🥣", baseQty: 20, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mixer la base", text: "Placer la purée d'açaï surgelée, la banane surgelée et le lait d'amande dans un blender. Mixer jusqu'à obtenir une texture épaisse et lisse, comme un sorbet." },
            { title: "Ajuster la texture", text: "Le mélange doit être bien épais. Si besoin, ajouter un tout petit peu de lait d'amande, mais garder une consistance de glace épaisse." },
            { title: "Dresser le bowl", text: "Verser la base d'açaï dans un bol. Disposer le granola sur le dessus." },
            { title: "Ajouter les extras", text: "Si souhaité, ajouter le boost protéine. Servir immédiatement avant que la base ne fonde." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Utilisez des fruits bien surgelés pour obtenir une texture de sorbet épaisse et crémeuse." },
            { type: "red", title: "Erreur à éviter", text: "Ne mettez pas trop de liquide d'un coup, le bowl doit rester épais et non liquide comme un smoothie." }
        ]
    },
    // ============================================================
    // PETIT-DÉJEUNER SALÉ (nouveaux) (8 recettes)
    // ============================================================
    {
        id: "oeufs-plat-champignon",
        name: "Œufs Champignons Épinards",
        subtitle: "Un classique du brunch sain et savoureux",
        emoji: "🍳",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 10,
        sliderMin: 35,
        sliderMax: 220,
        tags: ["Végétarien", "Sans gluten"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "champignon", name: "Champignons", detail: "émincés", emoji: "🍄", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "epinards", name: "Épinards frais", detail: "", emoji: "🥬", baseQty: 80, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les champignons", text: "Faire chauffer une poêle antiadhésive à feu vif. Ajouter les champignons émincés et les faire revenir 4 à 5 minutes jusqu'à ce qu'ils soient dorés." },
            { title: "Ajouter les épinards", text: "Baisser le feu et ajouter les épinards frais. Les faire tomber 1 à 2 minutes en remuant." },
            { title: "Cuire les œufs", text: "Pousser les légumes sur les côtés et casser les œufs au centre de la poêle. Cuire 3 à 4 minutes pour des œufs au plat, ou mélanger pour des œufs brouillés." },
            { title: "Assaisonner et servir", text: "Saler, poivrer et servir immédiatement. Déguster directement dans la poêle ou dans une assiette chaude." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Faites cuire les champignons à feu vif sans trop les remuer pour qu'ils dorent bien au lieu de rendre leur eau." },
            { type: "red", title: "Piège à éviter", text: "Ne salez pas les champignons en début de cuisson, ils rendraient trop d'eau et deviendraient mous." }
        ]
    },
    {
        id: "tartine-saumon-fume",
        name: "Tartine Saumon Fumé",
        subtitle: "Une tartine fraîche et élégante",
        emoji: "🐟",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Express", "Rapide", "Gourmand"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "tranché", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "saumon", name: "Saumon fumé", detail: "", emoji: "🐟", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 30, unit: "g", scalable: true, role: "protein" },
            { id: "concombre", name: "Concombre", detail: "en fines rondelles", emoji: "🥒", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller les tranches de pain complet au grille-pain jusqu'à ce qu'elles soient bien dorées et croustillantes." },
            { title: "Tartiner", text: "Étaler le fromage blanc sur les tartines encore chaudes pour qu'il ramollisse légèrement." },
            { title: "Garnir", text: "Disposer les tranches de saumon fumé et les rondelles de concombre sur le fromage blanc. Poivrer généreusement." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Ajoutez quelques gouttes de citron et de l'aneth frais pour sublimer les saveurs du saumon." },
            { type: "red", title: "À ne pas faire", text: "Ne tartinez pas le fromage blanc trop épais, il masquerait le goût du saumon fumé." }
        ]
    },
    {
        id: "frittata-legumes",
        name: "Frittata aux Légumes",
        subtitle: "Une frittata généreuse à partager",
        emoji: "🥚",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 250,
        tags: ["Végétarien", "Sans gluten", "Batch cooking", "Familial"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 4, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "courgette", name: "Courgette", detail: "en dés", emoji: "🥒", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "en dés", emoji: "🌶️", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "émincé", emoji: "🧅", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "emmental", name: "Fromage râpé", detail: "", emoji: "🧀", baseQty: 20, unit: "g", scalable: true, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four", text: "Préchauffer le four à 180°C. Battre les œufs dans un saladier avec du sel et du poivre." },
            { title: "Faire revenir les légumes", text: "Dans une poêle allant au four, faire revenir l'oignon 2 minutes, puis ajouter la courgette et le poivron. Cuire 5 minutes à feu moyen." },
            { title: "Verser les œufs", text: "Verser les œufs battus sur les légumes dans la poêle. Parsemer de fromage râpé. Cuire 2 minutes sur le feu pour que le dessous prenne." },
            { title: "Enfourner", text: "Placer la poêle au four pendant 12 à 15 minutes jusqu'à ce que la frittata soit dorée et bien prise au centre." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Utilisez une poêle en fonte qui passe au four pour une cuisson uniforme et un beau démoulage." },
            { type: "red", title: "Piège à éviter", text: "Ne mettez pas trop de légumes par rapport aux œufs, la frittata ne tiendrait pas à la découpe." }
        ]
    },
    {
        id: "muffins-oeufs-legumes",
        name: "Muffins d'Œufs aux Légumes",
        subtitle: "Des muffins pratiques pour le meal prep",
        emoji: "🧁",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 240,
        tags: ["Sans gluten", "Meal prep", "Batch cooking"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "epinards", name: "Épinards", detail: "hachés", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "en petits dés", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "jambon", name: "Jambon blanc", detail: "en dés", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four", text: "Préchauffer le four à 180°C. Graisser légèrement un moule à muffins ou utiliser des caissettes en silicone." },
            { title: "Préparer la garniture", text: "Couper le jambon et le poivron en petits dés. Hacher les épinards. Répartir les légumes et le jambon dans les moules à muffins." },
            { title: "Verser les œufs", text: "Battre les œufs avec du sel et du poivre. Verser le mélange d'œufs dans chaque alvéole, en remplissant aux trois quarts." },
            { title: "Cuire", text: "Enfourner pendant 18 à 20 minutes jusqu'à ce que les muffins soient bien gonflés et dorés. Laisser refroidir 5 minutes avant de démouler." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Ces muffins se conservent 3 jours au réfrigérateur et se réchauffent très bien au micro-ondes en 30 secondes." },
            { type: "red", title: "À ne pas faire", text: "Ne remplissez pas les moules au-delà des trois quarts, les muffins gonflent à la cuisson et pourraient déborder." }
        ]
    },
    {
        id: "toast-sardine-avocat",
        name: "Toast Sardine-Avocat",
        subtitle: "Un toast riche en oméga-3 et plein de saveurs",
        emoji: "🐟",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Express", "Rapide", "Haute protéine"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "tranché", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "sardines_conserve", name: "Sardines en conserve", detail: "égouttées", emoji: "🐟", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "avocat", name: "Avocat", detail: "écrasé", emoji: "🥑", baseQty: 50, unit: "g", scalable: true, role: "fat" },
            { id: "citron_jus", name: "Jus de citron", detail: "", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller les tranches de pain complet au grille-pain jusqu'à ce qu'elles soient dorées et croustillantes." },
            { title: "Préparer l'avocat", text: "Écraser l'avocat à la fourchette avec le jus de citron, du sel et du poivre." },
            { title: "Assembler", text: "Tartiner l'avocat écrasé sur les toasts. Émietter les sardines par-dessus. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Choisissez des sardines de qualité à l'huile d'olive pour un apport en bons acides gras encore meilleur." },
            { type: "red", title: "Erreur classique", text: "N'oubliez pas le jus de citron sur l'avocat : il empêche l'oxydation et relève le goût des sardines." }
        ]
    },
    {
        id: "bowl-tofu-brouille",
        name: "Bowl Tofu Brouillé",
        subtitle: "Une alternative vegan aux œufs brouillés",
        emoji: "🍳",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 230,
        tags: ["Vegan", "Sans gluten"],
        ingredients: [
            { id: "tofu", name: "Tofu ferme", detail: "émietté", emoji: "🧈", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "epinards", name: "Épinards frais", detail: "", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "émincés", emoji: "🍄", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "avocat", name: "Avocat", detail: "en tranches", emoji: "🥑", baseQty: 50, unit: "g", scalable: true, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Émietter le tofu", text: "Égoutter le tofu et l'émietter à la fourchette ou à la main pour obtenir une texture qui ressemble à des œufs brouillés." },
            { title: "Cuire les légumes", text: "Faire revenir les champignons émincés dans une poêle antiadhésive pendant 3 à 4 minutes. Ajouter les épinards et cuire 1 minute de plus." },
            { title: "Brouiller le tofu", text: "Ajouter le tofu émietté dans la poêle. Assaisonner avec du curcuma pour la couleur, du sel et du poivre. Cuire 3 à 4 minutes en remuant." },
            { title: "Dresser le bowl", text: "Servir le tofu brouillé dans un bol avec les tranches d'avocat frais sur le côté." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ajoutez une pincée de curcuma et de levure nutritionnelle pour un goût et une couleur qui rappellent les œufs." },
            { type: "red", title: "Piège à éviter", text: "Ne cuisez pas le tofu trop longtemps à feu fort, il deviendrait sec et caoutchouteux." }
        ]
    },
    {
        id: "wrap-saumon-epinards",
        name: "Wrap Saumon Épinards",
        subtitle: "Un wrap protéiné prêt en un éclair",
        emoji: "🌯",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 10,
        sliderMin: 35,
        sliderMax: 220,
        tags: ["Rapide", "Haute protéine"],
        ingredients: [
            { id: "tortilla", name: "Tortilla de blé", detail: "", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "saumon", name: "Saumon fumé", detail: "", emoji: "🐟", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "epinards", name: "Épinards frais", detail: "", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 30, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer la tortilla", text: "Réchauffer légèrement la tortilla dans une poêle sèche ou au micro-ondes quelques secondes pour la rendre souple." },
            { title: "Tartiner", text: "Étaler le fromage blanc sur toute la surface de la tortilla, en laissant un bord d'un centimètre." },
            { title: "Garnir", text: "Disposer les épinards frais puis les tranches de saumon fumé au centre de la tortilla." },
            { title: "Rouler et servir", text: "Replier les côtés de la tortilla, puis rouler fermement du bas vers le haut. Couper en deux en diagonale et servir." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Réchauffez la tortilla avant de la garnir, elle sera plus souple et ne cassera pas au roulage." },
            { type: "red", title: "Attention", text: "Ne surchargez pas le wrap de garniture, il serait impossible à rouler proprement." }
        ]
    },
    {
        id: "tartine-chevre-miel",
        name: "Tartine Chèvre Chaud Miel",
        subtitle: "Le mariage parfait du sucré et du salé",
        emoji: "🧀",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 10,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Sucré-salé", "Gourmand"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "tranché", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "chevre_frais", name: "Chèvre frais", detail: "", emoji: "🧀", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" },
            { id: "noix", name: "Noix", detail: "concassées", emoji: "🥜", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller les tranches de pain complet au grille-pain ou sous le gril du four." },
            { title: "Garnir au chèvre", text: "Tartiner généreusement le chèvre frais sur les toasts chauds. Il va légèrement fondre au contact du pain chaud." },
            { title: "Passer au gril", text: "Optionnel : passer les tartines 2 minutes sous le gril du four pour faire dorer le chèvre et le rendre encore plus fondant." },
            { title: "Finaliser", text: "Arroser d'un filet de miel et parsemer de noix concassées. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Passez les tartines 2 minutes sous le gril du four pour un chèvre fondant et légèrement doré en surface." },
            { type: "red", title: "Erreur classique", text: "Ne mettez pas trop de miel, il doit relever le goût du chèvre sans le masquer." }
        ]
    },
    // ============================================================
    // DÉJEUNER (nouveaux) (10 recettes)
    // ============================================================
    {
        id: "salade-nicoise",
        name: "Salade Niçoise",
        subtitle: "La classique provençale fraîche et protéinée",
        emoji: "🥗",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Sans gluten", "Classique", "Familial"],
        ingredients: [
            { id: "thon_conserve", name: "Thon en conserve", detail: "égoutté", emoji: "🐟", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "oeufs", name: "Œufs", detail: "durs", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "haricots_verts", name: "Haricots verts", detail: "cuits et refroidis", emoji: "🫘", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomate", detail: "en quartiers", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "salade_verte", name: "Salade verte", detail: "lavée et essorée", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "extra vierge", emoji: "🫒", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuisson des œufs", text: "Plongez les œufs dans l'eau bouillante pendant 9 minutes pour des œufs durs. Refroidissez-les sous l'eau froide, puis écalez-les et coupez-les en quartiers." },
            { title: "Préparation des légumes", text: "Lavez la salade et essorez-la. Coupez les tomates en quartiers. Si les haricots verts ne sont pas déjà cuits, faites-les cuire 8 minutes dans l'eau bouillante salée puis refroidissez-les." },
            { title: "Émiettage du thon", text: "Égouttez le thon en conserve et émiettez-le grossièrement à la fourchette." },
            { title: "Assemblage", text: "Disposez la salade dans une assiette. Répartissez les haricots verts, les tomates, le thon émietté et les quartiers d'œufs par-dessus." },
            { title: "Assaisonnement", text: "Arrosez d'huile d'olive, salez et poivrez selon votre goût. Servez immédiatement." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Ajoutez quelques olives noires et des câpres pour un goût encore plus authentique sans calories significatives." },
            { type: "red", title: "À ne pas faire", text: "Ne mélangez pas tout d'avance si vous préparez en meal prep : gardez l'assaisonnement à part pour éviter que la salade ne ramollisse." }
        ]
    },
    {
        id: "pad-thai-crevettes",
        name: "Pad Thaï aux Crevettes",
        subtitle: "Le classique thaï revisité version healthy",
        emoji: "🍜",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Asiatique"],
        ingredients: [
            { id: "crevettes", name: "Crevettes", detail: "décortiquées", emoji: "🦐", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "vermicelles_riz", name: "Vermicelles de riz", detail: "cuits", emoji: "🍜", baseQty: 80, unit: "g", scalable: true, role: "carb", rawRatio: 2 },
            { id: "oeufs", name: "Œuf", detail: "battu", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "carotte", name: "Carotte", detail: "râpée en julienne", emoji: "🥕", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "émincé", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "sauce_nuoc_mam", name: "Sauce nuoc mam", detail: "", emoji: "🧴", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "", emoji: "🥫", baseQty: 10, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuisson des vermicelles", text: "Faites tremper les vermicelles de riz dans l'eau bouillante selon les instructions du paquet (environ 4 minutes). Égouttez et réservez." },
            { title: "Sauté des crevettes", text: "Dans un wok bien chaud, faites sauter les crevettes 2 minutes de chaque côté jusqu'à ce qu'elles soient roses. Réservez-les." },
            { title: "Cuisson des légumes et de l'œuf", text: "Dans le même wok, faites revenir la carotte et le poivron 3 minutes. Poussez les légumes sur le côté, versez l'œuf battu et brouillez-le rapidement." },
            { title: "Assemblage du pad thaï", text: "Ajoutez les vermicelles égouttés, les crevettes, la sauce nuoc mam et la sauce soja. Mélangez bien à feu vif pendant 2 minutes." },
            { title: "Service", text: "Servez immédiatement dans un bol. Vous pouvez ajouter un filet de citron vert et quelques cacahuètes concassées pour la touche finale." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Faites chauffer le wok à feu très vif avant de commencer : c'est la clé pour obtenir ce goût grillé caractéristique du pad thaï." },
            { type: "red", title: "À ne pas faire", text: "Ne faites pas trop cuire les vermicelles de riz, ils deviennent pâteux très rapidement. Mieux vaut les égoutter un peu al dente." }
        ]
    },
    {
        id: "bowl-teriyaki-saumon",
        name: "Bowl Teriyaki Saumon",
        subtitle: "Un bowl japonais gourmand et équilibré",
        emoji: "🐟",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Haute protéine"],
        ingredients: [
            { id: "saumon", name: "Saumon", detail: "pavé frais", emoji: "🐟", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "cuit", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "avocat", name: "Avocat", detail: "en tranches", emoji: "🥑", baseQty: 50, unit: "g", scalable: true, role: "fat" },
            { id: "concombre", name: "Concombre", detail: "en rondelles", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "râpée", emoji: "🥕", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "pour la sauce teriyaki", emoji: "🥫", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "edamame", name: "Edamame", detail: "décortiqués", emoji: "🫛", baseQty: 50, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuisson du riz", text: "Si le riz n'est pas déjà cuit, faites cuire le riz basmati selon les instructions du paquet. Égouttez et laissez refroidir légèrement." },
            { title: "Préparation de la sauce teriyaki", text: "Mélangez la sauce soja avec une cuillère à café de miel et un trait de vinaigre de riz. Réservez." },
            { title: "Cuisson du saumon", text: "Faites cuire le pavé de saumon à la poêle, côté peau en premier, 4 minutes de chaque côté à feu moyen. Nappez-le de sauce teriyaki en fin de cuisson." },
            { title: "Préparation des garnitures", text: "Tranchez l'avocat, coupez le concombre en rondelles fines et râpez la carotte. Faites réchauffer les edamame 2 minutes à l'eau bouillante." },
            { title: "Assemblage du bowl", text: "Disposez le riz au fond du bol. Répartissez le saumon émietté, l'avocat, le concombre, la carotte et les edamame par-dessus. Arrosez du reste de sauce teriyaki." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Parsemez de graines de sésame et de ciboulette ciselée pour un résultat digne d'un restaurant japonais." },
            { type: "red", title: "Erreur classique", text: "Ne surcuisez pas le saumon : il doit rester légèrement rosé au centre pour garder son moelleux et ses oméga-3." }
        ]
    },
    {
        id: "gratin-poulet-brocoli",
        name: "Gratin Poulet-Brocoli",
        subtitle: "Un gratin réconfortant et riche en protéines",
        emoji: "🍗",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Familial", "Réconfortant"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "émincé ou en morceaux", emoji: "🍗", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "en fleurettes", emoji: "🥦", baseQty: 200, unit: "g", scalable: true, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème fraîche légère", detail: "15% MG", emoji: "🥛", baseQty: 30, unit: "g", scalable: true, role: "fat" },
            { id: "emmental", name: "Fromage râpé", detail: "emmental", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préchauffage et blanchiment", text: "Préchauffez le four à 200°C. Faites blanchir les fleurettes de brocoli 5 minutes dans l'eau bouillante salée, puis égouttez-les." },
            { title: "Préparation de la sauce", text: "Mélangez la crème fraîche légère avec une pincée de noix de muscade, du sel et du poivre. Ajoutez une cuillère à soupe d'eau si la consistance est trop épaisse." },
            { title: "Montage du gratin", text: "Disposez les morceaux de poulet et les brocolis dans un plat à gratin. Nappez de la sauce à la crème et mélangez délicatement." },
            { title: "Gratinage", text: "Parsemez de fromage râpé et enfournez pour 15 à 20 minutes, jusqu'à ce que le dessus soit doré et gratiné." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Précuisez le brocoli juste al dente : il finira de cuire au four et gardera ainsi son croquant et sa couleur verte." },
            { type: "red", title: "Attention", text: "Évitez de noyer le gratin dans la crème : une fine couche suffit pour lier le tout sans alourdir le plat en calories." }
        ]
    },
    {
        id: "taboule-quinoa-legumes",
        name: "Taboulé de Quinoa",
        subtitle: "Frais, léger et plein de nutriments",
        emoji: "🌿",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Vegan", "Sans gluten", "Meal prep"],
        ingredients: [
            { id: "quinoa_cuit", name: "Quinoa", detail: "cuit et refroidi", emoji: "🌾", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 1.8 },
            { id: "tomate", name: "Tomate", detail: "en petits dés", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "en petits dés", emoji: "🥒", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "en petits dés", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "frais", emoji: "🍋", baseQty: 15, unit: "ml", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "extra vierge", emoji: "🫒", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuisson du quinoa", text: "Si le quinoa n'est pas déjà cuit, rincez-le sous l'eau froide puis faites-le cuire 12 minutes dans deux fois son volume d'eau. Égouttez et laissez refroidir complètement." },
            { title: "Découpe des légumes", text: "Coupez les tomates, le concombre et le poivron rouge en petits dés réguliers d'environ 1 cm." },
            { title: "Vinaigrette", text: "Dans un petit bol, mélangez le jus de citron et l'huile d'olive avec du sel et du poivre." },
            { title: "Assemblage", text: "Dans un grand saladier, mélangez le quinoa refroidi avec tous les légumes coupés. Versez la vinaigrette et mélangez bien. Ajoutez de la menthe et du persil ciselés si vous en avez." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Préparez ce taboulé la veille : les saveurs se développent au réfrigérateur et il se conserve 3 jours, parfait pour le meal prep." },
            { type: "red", title: "Erreur classique", text: "Ne sautez pas l'étape de rinçage du quinoa cru : il contient de la saponine qui donne un goût amer désagréable." }
        ]
    },
    {
        id: "poke-bowl-thon",
        name: "Poké Bowl Thon Frais",
        subtitle: "Un bol hawaïen coloré et nourrissant",
        emoji: "🐟",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Sans gluten", "Frais", "Rapide"],
        ingredients: [
            { id: "thon_conserve", name: "Thon en conserve", detail: "égoutté", emoji: "🐟", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "cuit et tiède", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "avocat", name: "Avocat", detail: "en tranches", emoji: "🥑", baseQty: 50, unit: "g", scalable: true, role: "fat" },
            { id: "mangue", name: "Mangue", detail: "en cubes", emoji: "🥭", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "concombre", name: "Concombre", detail: "en rondelles", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "", emoji: "🥫", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "edamame", name: "Edamame", detail: "décortiqués", emoji: "🫛", baseQty: 50, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparation du riz", text: "Si le riz n'est pas déjà cuit, faites cuire le riz basmati et laissez-le tiédir. Vous pouvez l'assaisonner avec un filet de vinaigre de riz." },
            { title: "Préparation des garnitures", text: "Tranchez l'avocat, coupez la mangue en cubes et le concombre en fines rondelles. Égouttez le thon et émiettez-le." },
            { title: "Préparation des edamame", text: "Faites réchauffer les edamame 2 minutes dans l'eau bouillante si surgelés, puis égouttez-les." },
            { title: "Assemblage du poké bowl", text: "Déposez le riz au fond du bol. Disposez joliment le thon, l'avocat, la mangue, le concombre et les edamame en sections. Arrosez de sauce soja." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Ajoutez des graines de sésame et un peu de gingembre frais râpé pour un goût encore plus authentique et des bienfaits anti-inflammatoires." },
            { type: "red", title: "Piège à éviter", text: "N'utilisez pas de riz trop chaud : il ramollirait l'avocat et la mangue. Un riz tiède ou à température ambiante est idéal." }
        ]
    },
    {
        id: "pita-agneau-legumes",
        name: "Pita Agneau Grillé",
        subtitle: "Un sandwich méditerranéen savoureux et généreux",
        emoji: "🥙",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Gourmand"],
        ingredients: [
            { id: "agneau_gigot", name: "Agneau", detail: "émincé finement", emoji: "🥩", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "pain_pita", name: "Pain pita", detail: "", emoji: "🫓", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "tomate", name: "Tomate", detail: "en rondelles", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "salade_verte", name: "Salade verte", detail: "quelques feuilles", emoji: "🥬", baseQty: 30, unit: "g", scalable: true, role: "base" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "en sauce", emoji: "🥛", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Marinade rapide de l'agneau", text: "Émincez l'agneau finement et assaisonnez-le avec du cumin, du paprika, du sel et du poivre. Laissez mariner 5 minutes." },
            { title: "Cuisson de l'agneau", text: "Faites chauffer une poêle à feu vif. Saisissez les émincés d'agneau 3 à 4 minutes en remuant, jusqu'à ce qu'ils soient bien dorés." },
            { title: "Préparation de la sauce yaourt", text: "Mélangez le yaourt grec avec un filet de jus de citron, une pincée de sel et de la menthe fraîche si disponible." },
            { title: "Préparation des légumes", text: "Coupez la tomate en rondelles, émincez l'oignon finement et lavez les feuilles de salade." },
            { title: "Assemblage du pita", text: "Réchauffez le pain pita 1 minute à la poêle ou au grille-pain. Ouvrez-le et garnissez de salade, d'agneau grillé, de tomate, d'oignon et de sauce yaourt." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Réchauffez le pain pita quelques secondes pour le rendre plus souple et plus facile à garnir, il ne se cassera pas à l'ouverture." },
            { type: "red", title: "Erreur à éviter", text: "Ne cuisez pas l'agneau trop longtemps à feu doux : il doit être saisi rapidement à feu vif pour rester tendre et juteux." }
        ]
    },
    {
        id: "risotto-crevettes-courgettes",
        name: "Risotto Crevettes-Courgettes",
        subtitle: "Un risotto onctueux et léger à la française",
        emoji: "🦐",
        category: "dejeuner",
        difficulty: "Avancé",
        time: 35,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Familial", "Gourmand"],
        ingredients: [
            { id: "crevettes", name: "Crevettes", detail: "décortiquées", emoji: "🦐", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "cuit façon risotto", emoji: "🍚", baseQty: 180, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "courgette", name: "Courgette", detail: "en dés", emoji: "🥒", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "ciselé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "parmesan", name: "Parmesan", detail: "râpé", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "creme_fraiche_legere", name: "Crème fraîche légère", detail: "15% MG", emoji: "🥛", baseQty: 20, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparation des légumes", text: "Ciselez l'oignon finement et coupez la courgette en petits dés d'environ 1 cm. Faites revenir l'oignon dans une casserole avec un filet d'eau pendant 3 minutes." },
            { title: "Cuisson du riz façon risotto", text: "Ajoutez le riz cru et faites-le nacrer 1 minute en remuant. Ajoutez du bouillon chaud louche par louche en remuant régulièrement, pendant environ 18 minutes." },
            { title: "Ajout des courgettes", text: "À mi-cuisson du riz, ajoutez les dés de courgette. Ils vont cuire doucement avec le riz et apporter de la fraîcheur." },
            { title: "Sauté des crevettes", text: "En parallèle, faites sauter les crevettes 2 minutes de chaque côté dans une poêle chaude avec une pincée de sel et de poivre." },
            { title: "Finition et service", text: "Hors du feu, incorporez la crème fraîche et le parmesan dans le risotto. Mélangez bien, disposez les crevettes par-dessus et servez immédiatement." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Le secret d'un bon risotto est la patience : ajoutez le bouillon petit à petit et remuez régulièrement pour libérer l'amidon du riz." },
            { type: "red", title: "Erreur classique", text: "N'ajoutez jamais le parmesan sur le feu : il deviendrait filant et granuleux. Incorporez-le toujours hors du feu." }
        ]
    },
    {
        id: "salade-lentilles-chevre",
        name: "Salade Lentilles-Chèvre",
        subtitle: "Une salade complète et rassasiante",
        emoji: "🥗",
        category: "dejeuner",
        difficulty: "Facile",
        time: 10,
        sliderMin: 50,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Haute protéine", "Meal prep"],
        ingredients: [
            { id: "lentilles_cuites", name: "Lentilles", detail: "cuites et égouttées", emoji: "🫘", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2 },
            { id: "chevre_frais", name: "Chèvre frais", detail: "émietté", emoji: "🧀", baseQty: 50, unit: "g", scalable: true, role: "protein" },
            { id: "betterave_cuite", name: "Betterave cuite", detail: "en dés", emoji: "🟣", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "noix", name: "Noix", detail: "concassées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "salade_verte", name: "Salade verte", detail: "en chiffonnade", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "vinaigre_balsamique", name: "Vinaigre balsamique", detail: "", emoji: "🍶", baseQty: 10, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparation des lentilles", text: "Égouttez les lentilles cuites et rincez-les rapidement sous l'eau froide si nécessaire." },
            { title: "Découpe des ingrédients", text: "Coupez la betterave cuite en petits dés. Concassez grossièrement les noix. Coupez la salade en chiffonnade." },
            { title: "Assemblage", text: "Dans un saladier, disposez la salade, les lentilles et les dés de betterave. Émiettez le chèvre frais par-dessus." },
            { title: "Finition", text: "Parsemez de noix concassées, arrosez de vinaigre balsamique, salez et poivrez. Mélangez délicatement au moment de servir." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Les lentilles sont une excellente source de protéines végétales et de fer : combinées au chèvre, vous obtenez un profil protéique complet." },
            { type: "red", title: "Attention", text: "N'ajoutez pas le vinaigre trop tôt sur les lentilles : l'acidité empêche leur bonne cuisson si elles ne sont pas déjà cuites." }
        ]
    },
    {
        id: "wok-tofu-legumes",
        name: "Wok de Tofu aux Légumes",
        subtitle: "Un sauté végétal rapide et savoureux",
        emoji: "🥦",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan", "Sans gluten", "Rapide"],
        ingredients: [
            { id: "tofu", name: "Tofu", detail: "ferme, en cubes", emoji: "🧈", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "en petites fleurettes", emoji: "🥦", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "émincé", emoji: "🌶️", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "en julienne", emoji: "🥕", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "", emoji: "🥫", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparation du tofu", text: "Égouttez le tofu ferme et pressez-le avec du papier absorbant pour retirer l'excès d'eau. Coupez-le en cubes d'environ 2 cm." },
            { title: "Saisie du tofu", text: "Faites chauffer l'huile d'olive dans un wok à feu vif. Faites dorer les cubes de tofu 5 minutes en les retournant régulièrement jusqu'à ce qu'ils soient croustillants sur toutes les faces. Réservez." },
            { title: "Sauté des légumes", text: "Dans le même wok bien chaud, faites sauter le brocoli, le poivron et la carotte pendant 4 à 5 minutes. Les légumes doivent rester croquants." },
            { title: "Assemblage final", text: "Remettez le tofu dans le wok avec les légumes. Ajoutez la sauce soja et mélangez à feu vif pendant 1 minute pour bien enrober le tout." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Bien presser le tofu avant cuisson est essentiel : plus il est sec, plus il sera croustillant et absorbera la saveur de la sauce soja." },
            { type: "red", title: "Attention", text: "Ne surchargez pas le wok : cuisez en petites quantités pour que les ingrédients saisissent au lieu de bouillir dans leur jus." }
        ]
    },
    // ============================================================
    // DÎNER (nouveaux) (10 recettes)
    // ============================================================
    {
        id: "filet-porc-pomme-terre",
        name: "Filet de Porc Rôti",
        subtitle: "Tendre filet de porc avec pommes de terre et haricots verts",
        emoji: "🥩",
        category: "diner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten", "Classique", "Familial"],
        ingredients: [
            { id: "porc_filet", name: "Filet de porc", detail: "coupé en médaillons", emoji: "🥩", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "coupées en quartiers", emoji: "🥔", baseQty: 200, unit: "g", scalable: true, role: "carb", rawRatio: 1 },
            { id: "haricots_verts", name: "Haricots verts", detail: "frais ou surgelés", emoji: "🫛", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "moutarde", name: "Moutarde", detail: "à l'ancienne", emoji: "🟡", baseQty: 10, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les pommes de terre", text: "Faire cuire les pommes de terre dans une casserole d'eau bouillante salée pendant 15 à 20 minutes jusqu'à tendreté. Égoutter et réserver." },
            { title: "Saisir le porc", text: "Dans une poêle chaude légèrement huilée, saisir les médaillons de porc 3 à 4 minutes de chaque côté. Ils doivent être dorés à l'extérieur et juste rosés à cœur." },
            { title: "Cuire les haricots verts", text: "Pendant la cuisson du porc, faire cuire les haricots verts à la vapeur ou dans de l'eau bouillante pendant 6 à 8 minutes. Ils doivent rester croquants." },
            { title: "Napper de moutarde", text: "En fin de cuisson, badigeonner les médaillons de porc avec la moutarde à l'ancienne. Laisser reposer 2 minutes avant de servir." },
            { title: "Dresser l'assiette", text: "Disposer les médaillons de porc au centre de l'assiette, accompagnés des pommes de terre et des haricots verts. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Laissez reposer la viande 2 minutes après cuisson pour qu'elle reste juteuse. Un filet de porc bien reposé sera beaucoup plus tendre." },
            { type: "red", title: "Attention", text: "Ne coupez pas les médaillons trop fins (moins de 2 cm), sinon ils sécheront rapidement à la cuisson." }
        ]
    },
    {
        id: "curry-crevettes-coco",
        name: "Curry de Crevettes au Coco",
        subtitle: "Crevettes parfumées dans une sauce curry-coco onctueuse",
        emoji: "🦐",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten", "Épicé"],
        ingredients: [
            { id: "crevettes", name: "Crevettes", detail: "décortiquées", emoji: "🦐", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "lait_coco", name: "Lait de coco", detail: "", emoji: "🥥", baseQty: 100, unit: "ml", scalable: true, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz basmati cuit", detail: "", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "coupé en lanières", emoji: "🌶️", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "pate_curry", name: "Pâte de curry", detail: "rouge ou jaune", emoji: "🟠", baseQty: 10, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la base aromatique", text: "Faire revenir l'oignon émincé dans une poêle ou un wok à feu moyen pendant 2 minutes. Ajouter la pâte de curry et mélanger 30 secondes pour libérer les arômes." },
            { title: "Ajouter le lait de coco", text: "Verser le lait de coco et porter à frémissement. Ajouter les lanières de poivron rouge et laisser mijoter 3 minutes." },
            { title: "Cuire les crevettes", text: "Ajouter les crevettes dans la sauce et cuire 3 à 4 minutes jusqu'à ce qu'elles soient roses et bien enroulées. Ne pas trop cuire." },
            { title: "Servir avec le riz", text: "Dresser le riz basmati dans un bol, napper généreusement avec le curry de crevettes. Servir aussitôt." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Ajoutez les crevettes en dernier et surveillez bien la cuisson : elles sont prêtes dès qu'elles deviennent roses et opaques, en 3-4 minutes maximum." },
            { type: "red", title: "Attention", text: "Évitez de faire bouillir le lait de coco à gros bouillons, il pourrait se séparer. Maintenez un simple frémissement." }
        ]
    },
    {
        id: "pave-truite-asperges",
        name: "Pavé de Truite aux Asperges",
        subtitle: "Truite fondante accompagnée d'asperges et pommes de terre",
        emoji: "🐟",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten", "Léger", "Élégant"],
        ingredients: [
            { id: "truite", name: "Truite", detail: "pavé avec peau", emoji: "🐟", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "asperges", name: "Asperges", detail: "vertes, parées", emoji: "🌿", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "coupées en rondelles fines", emoji: "🥔", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 1 },
            { id: "citron_jus", name: "Jus de citron", detail: "fraîchement pressé", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuire les pommes de terre", text: "Faire cuire les rondelles de pommes de terre à la vapeur ou dans de l'eau bouillante salée pendant 12 à 15 minutes jusqu'à tendreté." },
            { title: "Préparer les asperges", text: "Couper les asperges en tronçons de 4-5 cm. Les faire sauter dans une poêle avec un filet d'huile d'olive pendant 5 à 6 minutes à feu vif. Elles doivent rester croquantes." },
            { title: "Cuire la truite", text: "Dans une poêle antiadhésive bien chaude, déposer le pavé de truite côté peau vers le bas. Cuire 4 minutes, puis retourner et cuire 2 minutes. La peau doit être croustillante." },
            { title: "Dresser et assaisonner", text: "Disposer les pommes de terre et les asperges dans l'assiette, déposer le pavé de truite par-dessus. Arroser d'un filet de jus de citron frais. Saler et poivrer." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Pour une peau bien croustillante, séchez le pavé de truite avec du papier absorbant avant cuisson et posez-le sur une poêle très chaude sans le bouger." },
            { type: "red", title: "Erreur classique", text: "Ne retournez pas le poisson trop tôt : attendez que la peau se détache naturellement de la poêle, signe qu'elle est bien croustillante." }
        ]
    },
    {
        id: "canard-patate-douce",
        name: "Canard Grillé Patate Douce",
        subtitle: "Filet de canard rosé avec purée de patate douce et haricots verts",
        emoji: "🦆",
        category: "diner",
        difficulty: "Avancé",
        time: 35,
        sliderMin: 50,
        sliderMax: 230,
        tags: ["Sans gluten", "Gourmand"],
        ingredients: [
            { id: "canard_filet", name: "Filet de canard", detail: "avec peau, entaillée", emoji: "🦆", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "patate_douce_cuite", name: "Patate douce cuite", detail: "en purée ou en morceaux", emoji: "🍠", baseQty: 200, unit: "g", scalable: true, role: "carb" },
            { id: "haricots_verts", name: "Haricots verts", detail: "frais ou surgelés", emoji: "🫛", baseQty: 100, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le canard", text: "Entailler la peau du filet de canard en croisillons sans atteindre la chair. Saler et poivrer. Déposer le filet côté peau dans une poêle froide, puis allumer à feu moyen." },
            { title: "Cuire le canard", text: "Laisser cuire 8 à 10 minutes côté peau pour rendre le gras et obtenir une peau croustillante. Retourner et cuire 4 à 5 minutes pour une cuisson rosée. Laisser reposer 5 minutes sous aluminium." },
            { title: "Préparer la patate douce", text: "Écraser la patate douce cuite à la fourchette pour obtenir une purée rustique. Saler, poivrer et réchauffer à feu doux si nécessaire." },
            { title: "Cuire les haricots verts", text: "Faire cuire les haricots verts à la vapeur ou à l'eau bouillante pendant 6 à 8 minutes. Ils doivent garder du croquant." },
            { title: "Dresser l'assiette", text: "Trancher le filet de canard reposé en biais. Disposer la purée de patate douce, les haricots verts et les tranches de canard. Napper avec le jus de repos." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Démarrez toujours le canard dans une poêle froide côté peau : la montée progressive en température permet de rendre le gras sans brûler la peau." },
            { type: "red", title: "Erreur classique", text: "Ne sautez pas l'étape du repos de la viande après cuisson. Sans repos, le jus s'écoule à la découpe et la viande sera sèche." }
        ]
    },
    {
        id: "moules-mariniere",
        name: "Moules Marinières",
        subtitle: "Moules à la crème dans leur jus parfumé au céleri",
        emoji: "🦪",
        category: "diner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Familial", "Convivial"],
        ingredients: [
            { id: "moules", name: "Moules", detail: "nettoyées et grattées", emoji: "🦪", baseQty: 300, unit: "g", scalable: true, role: "protein" },
            { id: "oignon", name: "Oignon", detail: "finement émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "celeri_branche", name: "Céleri branche", detail: "émincé", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème fraîche légère", detail: "", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "pain_complet", name: "Pain complet", detail: "pour accompagner", emoji: "🍞", baseQty: 40, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer les moules", text: "Trier les moules en éliminant celles qui sont ouvertes et ne se referment pas au toucher. Gratter et rincer à l'eau froide." },
            { title: "Faire la base aromatique", text: "Dans une grande marmite, faire revenir l'oignon et le céleri émincés à feu moyen pendant 3 minutes jusqu'à ce qu'ils soient translucides." },
            { title: "Cuire les moules", text: "Ajouter les moules, couvrir et cuire à feu vif pendant 4 à 5 minutes en secouant la marmite régulièrement. Les moules sont cuites quand elles sont toutes ouvertes." },
            { title: "Ajouter la crème", text: "Retirer les moules, ajouter la crème fraîche dans le jus de cuisson et mélanger. Remettre les moules dans la sauce. Jeter celles qui ne se sont pas ouvertes." },
            { title: "Servir", text: "Dresser les moules dans un bol creux avec leur bouillon. Accompagner de pain complet pour saucer." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Secouez la marmite régulièrement pendant la cuisson au lieu de remuer avec une cuillère : les moules cuisent ainsi plus uniformément." },
            { type: "red", title: "Attention", text: "Ne forcez jamais l'ouverture d'une moule restée fermée après cuisson : c'est le signe qu'elle n'est pas bonne à consommer." }
        ]
    },
    {
        id: "poulet-moutarde-legumes",
        name: "Poulet Moutarde aux Légumes",
        subtitle: "Poulet en sauce moutarde crémeuse avec champignons et carottes",
        emoji: "🍗",
        category: "diner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten", "Classique", "Familial"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "blanc, coupé en morceaux", emoji: "🍗", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "champignon", name: "Champignons", detail: "émincés", emoji: "🍄", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carottes", detail: "coupées en rondelles", emoji: "🥕", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème fraîche légère", detail: "", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "moutarde", name: "Moutarde", detail: "de Dijon", emoji: "🟡", baseQty: 15, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Saisir le poulet", text: "Couper le poulet en morceaux. Dans une poêle chaude, saisir les morceaux de poulet 3 à 4 minutes de chaque côté jusqu'à ce qu'ils soient bien dorés. Réserver." },
            { title: "Cuire les légumes", text: "Dans la même poêle, faire sauter les champignons émincés 3 minutes jusqu'à évaporation de l'eau. Ajouter les rondelles de carottes et cuire 5 minutes." },
            { title: "Préparer la sauce", text: "Mélanger la crème fraîche et la moutarde de Dijon. Verser dans la poêle avec les légumes. Remettre le poulet, couvrir et laisser mijoter 10 minutes à feu doux." },
            { title: "Vérifier la cuisson", text: "Le poulet doit être cuit à cœur et les carottes tendres. Rectifier l'assaisonnement en sel et poivre. Servir directement dans l'assiette." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ajoutez la moutarde hors du feu ou à feu très doux pour préserver ses arômes. Une moutarde trop chauffée perd sa puissance et devient amère." },
            { type: "red", title: "Attention", text: "Ne couvrez pas les champignons au début de la cuisson : ils doivent libérer leur eau et la faire évaporer pour ne pas rendre la sauce trop liquide." }
        ]
    },
    {
        id: "dal-lentilles-epinards",
        name: "Dal de Lentilles aux Épinards",
        subtitle: "Mijoté onctueux de lentilles aux épinards et lait de coco",
        emoji: "🍛",
        category: "diner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan", "Sans gluten", "Épicé", "Réconfortant"],
        ingredients: [
            { id: "lentilles_cuites", name: "Lentilles cuites", detail: "corail ou vertes", emoji: "🫘", baseQty: 200, unit: "g", scalable: true, role: "carb", rawRatio: 2 },
            { id: "epinards", name: "Épinards", detail: "frais ou surgelés", emoji: "🥬", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomates", detail: "concassées", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "lait_coco", name: "Lait de coco", detail: "", emoji: "🥥", baseQty: 80, unit: "ml", scalable: true, role: "base" },
            { id: "pate_curry", name: "Pâte de curry", detail: "jaune de préférence", emoji: "🟠", baseQty: 10, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Faire revenir les aromates", text: "Faire revenir l'oignon émincé dans une casserole à feu moyen pendant 3 minutes. Ajouter la pâte de curry et mélanger pendant 1 minute pour développer les saveurs." },
            { title: "Ajouter les tomates et lentilles", text: "Incorporer les tomates concassées et les lentilles cuites. Verser le lait de coco et mélanger. Porter à frémissement." },
            { title: "Mijoter le dal", text: "Laisser mijoter 10 à 12 minutes à feu doux en remuant de temps en temps. La sauce doit épaissir légèrement et devenir onctueuse." },
            { title: "Ajouter les épinards", text: "Incorporer les épinards en fin de cuisson. Si frais, les ajouter 2 minutes avant la fin. Si surgelés, les ajouter 5 minutes avant. Mélanger jusqu'à ce qu'ils soient tombés." },
            { title: "Servir", text: "Rectifier l'assaisonnement. Servir dans un bol creux. Le dal se déguste tel quel ou accompagné d'un féculent de votre choix." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Les lentilles corail sont idéales pour ce dal car elles se défont à la cuisson et créent naturellement une texture onctueuse sans ajout de matière grasse." },
            { type: "red", title: "Erreur classique", text: "N'ajoutez pas les épinards trop tôt dans la cuisson : ils perdraient leur couleur verte et leur valeur nutritive. Ajoutez-les juste en fin de cuisson." }
        ]
    },
    {
        id: "papillote-cabillaud-poireaux",
        name: "Papillote Cabillaud-Poireaux",
        subtitle: "Cabillaud fondant en papillote avec poireaux et carottes",
        emoji: "🐟",
        category: "diner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten", "Léger", "Perte de poids"],
        ingredients: [
            { id: "cabillaud", name: "Cabillaud", detail: "filet frais", emoji: "🐟", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "poireaux", name: "Poireaux", detail: "émincés en rondelles", emoji: "🥬", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carottes", detail: "taillées en julienne", emoji: "🥕", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "fraîchement pressé", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four", text: "Préchauffer le four à 200°C. Préparer une grande feuille de papier sulfurisé ou d'aluminium." },
            { title: "Préparer les légumes", text: "Disposer les rondelles de poireaux et la julienne de carottes au centre de la feuille. Saler et poivrer légèrement." },
            { title: "Assembler la papillote", text: "Déposer le filet de cabillaud sur le lit de légumes. Arroser de jus de citron et d'un filet d'huile d'olive. Saler et poivrer." },
            { title: "Fermer et cuire", text: "Replier la feuille pour former une papillote hermétique en soudant bien les bords. Enfourner pour 15 à 18 minutes." },
            { title: "Servir", text: "Ouvrir la papillote à table pour profiter des arômes. Le cabillaud doit s'effeuiller facilement et les légumes être tendres." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Fermez bien la papillote pour créer un effet vapeur : c'est la cuisson la plus saine car elle préserve tous les nutriments et ne nécessite presque pas de matière grasse." },
            { type: "red", title: "Erreur à éviter", text: "Ne percez pas la papillote pendant la cuisson pour vérifier : vous perdriez toute la vapeur et la cuisson serait compromise. Faites confiance au minuteur." }
        ]
    },
    {
        id: "boeuf-bourguignon-light",
        name: "Bœuf Bourguignon Light",
        subtitle: "Version allégée du classique bourguignon aux légumes fondants",
        emoji: "🥩",
        category: "diner",
        difficulty: "Avancé",
        time: 45,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten", "Réconfortant", "Familial", "Classique"],
        ingredients: [
            { id: "boeuf_hache_5", name: "Bœuf haché 5%", detail: "maigre", emoji: "🥩", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "carotte", name: "Carottes", detail: "coupées en rondelles", emoji: "🥕", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "coupés en quartiers", emoji: "🍄", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "émincé", emoji: "🧅", baseQty: 60, unit: "g", scalable: false, role: "base" },
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "en morceaux", emoji: "🥔", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 1 },
            { id: "concentre_tomate", name: "Concentré de tomate", detail: "", emoji: "🍅", baseQty: 15, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Saisir la viande", text: "Former de petites boulettes avec le bœuf haché. Les saisir dans une cocotte à feu vif pendant 3 à 4 minutes pour bien les colorer sur toutes les faces. Réserver." },
            { title: "Faire revenir les légumes", text: "Dans la même cocotte, faire revenir l'oignon 2 minutes, puis ajouter les carottes et les champignons. Cuire 5 minutes à feu moyen en remuant." },
            { title: "Ajouter le concentré de tomate", text: "Incorporer le concentré de tomate et mélanger pendant 1 minute. Ajouter 200 ml d'eau chaude et bien mélanger pour créer une sauce." },
            { title: "Mijoter", text: "Remettre la viande, ajouter les pommes de terre. Couvrir et laisser mijoter 25 à 30 minutes à feu doux jusqu'à ce que les légumes et les pommes de terre soient tendres." },
            { title: "Servir", text: "Rectifier l'assaisonnement en sel et poivre. La sauce doit avoir réduit et napper la viande et les légumes. Servir bien chaud dans des assiettes creuses." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Utilisez du bœuf haché à 5% de matière grasse pour garder le côté réconfortant du bourguignon tout en réduisant considérablement l'apport en lipides." },
            { type: "red", title: "Attention", text: "Ne remuez pas trop souvent pendant le mijotage : les boulettes pourraient se défaire. Laissez-les tranquilles et secouez simplement la cocotte de temps en temps." }
        ]
    },
    {
        id: "calamar-grille-riz",
        name: "Calamar Grillé et Riz",
        subtitle: "Calamar tendre grillé avec riz parfumé et poivrons",
        emoji: "🦑",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten", "Méditerranéen"],
        ingredients: [
            { id: "calamar", name: "Calamar", detail: "nettoyé, coupé en anneaux", emoji: "🦑", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz basmati cuit", detail: "", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "coupé en lanières", emoji: "🌶️", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomates", detail: "coupées en dés", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "fraîchement pressé", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer le calamar", text: "Nettoyer le calamar et le couper en anneaux d'environ 1 cm d'épaisseur. Bien sécher avec du papier absorbant pour une bonne saisie." },
            { title: "Griller le calamar", text: "Chauffer une poêle ou un grill à feu très vif avec un filet d'huile d'olive. Saisir les anneaux de calamar 1 à 2 minutes de chaque côté. La cuisson doit être rapide." },
            { title: "Préparer les légumes", text: "Dans la même poêle, faire sauter les lanières de poivron rouge 3 minutes. Ajouter les dés de tomates et cuire 2 minutes supplémentaires." },
            { title: "Assembler et servir", text: "Dresser le riz basmati dans l'assiette, disposer les légumes et le calamar grillé par-dessus. Arroser de jus de citron frais. Saler et poivrer." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "La clé du calamar tendre est une cuisson ultra-rapide à feu très vif : 1 à 2 minutes maximum par côté. Au-delà, il devient caoutchouteux." },
            { type: "red", title: "Erreur à éviter", text: "Ne surchargez pas la poêle avec trop de calamar à la fois : ils libéreraient de l'eau et bouilliraient au lieu de griller. Cuisez en petites quantités." }
        ]
    },
    // ============================================================
    // COLLATION À EMPORTER (nouveaux) (7 recettes)
    // ============================================================
    {
        id: "barre-avoine-beurre-cacahuete",
        name: "Barre Avoine Beurre de Cacahuète",
        subtitle: "Barre énergétique maison croustillante et gourmande",
        emoji: "🥜",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 20,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Batch cooking", "Meal prep"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "", emoji: "🥜", baseQty: 30, unit: "g", scalable: true, role: "fat" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 20, unit: "g", scalable: false, role: "carb" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "en pépites", emoji: "🍫", baseQty: 15, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer le mélange", text: "Préchauffer le four à 170°C. Mélanger les flocons d'avoine avec le beurre de cacahuète et le miel jusqu'à obtenir une pâte homogène." },
            { title: "Ajouter le chocolat", text: "Incorporer les pépites de chocolat noir au mélange et bien répartir." },
            { title: "Former et cuire", text: "Étaler le mélange dans un moule rectangulaire tapissé de papier cuisson. Tasser fermement et enfourner 12 à 15 minutes jusqu'à coloration dorée." },
            { title: "Découper", text: "Laisser refroidir complètement avant de découper en barres. Conserver dans un contenant hermétique." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Tassez bien le mélange avant cuisson pour que les barres ne s'émiettent pas une fois refroidies." },
            { type: "red", title: "Erreur à éviter", text: "Ne découpez pas les barres encore chaudes, elles se casseraient et s'émietteraient." }
        ]
    },
    {
        id: "muffin-banane-noix",
        name: "Muffin Banane-Noix",
        subtitle: "Muffins moelleux à la banane et aux noix pour le goûter",
        emoji: "🍌",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 25,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Batch cooking", "Meal prep"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "bien mûre", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "noix", name: "Noix", detail: "concassées", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte", text: "Préchauffer le four à 180°C. Écraser la banane à la fourchette, puis mélanger avec l'œuf battu, les flocons d'avoine mixés et le miel." },
            { title: "Ajouter les noix", text: "Incorporer les noix concassées à la pâte et mélanger délicatement." },
            { title: "Cuire", text: "Répartir la pâte dans des moules à muffins et enfourner 18 à 20 minutes. Les muffins sont prêts quand un cure-dent en ressort propre." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Utilisez des bananes bien mûres avec des taches brunes : elles sont plus sucrées et permettent de réduire le miel." },
            { type: "red", title: "Erreur classique", text: "Ne remplissez pas les moules à plus des deux tiers, les muffins gonflent à la cuisson." }
        ]
    },
    {
        id: "boules-coco-dattes",
        name: "Boules Énergie Coco",
        subtitle: "Bouchées sans cuisson à la noix de coco et beurre de cacahuète",
        emoji: "🥥",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 10,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Sans cuisson", "Express"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "noix_de_coco_rapee", name: "Noix de coco râpée", detail: "", emoji: "🥥", baseQty: 20, unit: "g", scalable: true, role: "fat" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "", emoji: "🥜", baseQty: 20, unit: "g", scalable: true, role: "fat" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mélanger", text: "Dans un bol, mélanger les flocons d'avoine, la moitié de la noix de coco râpée, le beurre de cacahuète et le miel jusqu'à obtenir une pâte collante." },
            { title: "Former les boules", text: "Avec les mains légèrement humides, former des petites boules de la taille d'une noix. Rouler chaque boule dans le reste de noix de coco râpée." },
            { title: "Réfrigérer", text: "Placer les boules au réfrigérateur au moins 30 minutes avant de déguster. Se conservent 5 jours au frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Préparez une grande quantité en avance : ces boules se conservent une semaine au réfrigérateur et se congèlent très bien." },
            { type: "red", title: "Erreur à éviter", text: "Si le mélange est trop sec et ne se tient pas, ajoutez un peu de beurre de cacahuète plutôt que de l'eau." }
        ]
    },
    {
        id: "wrap-thon-crudites",
        name: "Wrap Thon Crudités",
        subtitle: "Wrap rapide au thon, légumes croquants et fromage blanc",
        emoji: "🌯",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Express", "Rapide", "Haute protéine"],
        ingredients: [
            { id: "tortilla", name: "Tortilla", detail: "blé complet", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "thon_conserve", name: "Thon en conserve", detail: "égoutté", emoji: "🐟", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "salade_verte", name: "Salade verte", detail: "", emoji: "🥬", baseQty: 30, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomate", detail: "en rondelles", emoji: "🍅", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 20, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer la garniture", text: "Égoutter le thon et le mélanger avec le fromage blanc. Laver et couper la tomate en rondelles fines." },
            { title: "Garnir et rouler", text: "Étaler la préparation au thon sur la tortilla, ajouter la salade et les rondelles de tomate. Rouler le wrap en serrant bien." },
            { title: "Emballer", text: "Couper en deux en diagonale et emballer dans du film alimentaire ou du papier aluminium pour le transport." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Égouttez bien le thon et les tomates pour éviter que la tortilla ne ramollisse dans votre sac." },
            { type: "red", title: "Erreur classique", text: "Ne préparez pas le wrap trop en avance sans l'emballer : la tortilla sèche vite et devient cassante." }
        ]
    },
    {
        id: "cake-proteine-citron",
        name: "Cake Protéiné Citron",
        subtitle: "Cake moelleux au citron enrichi en protéines",
        emoji: "🍋",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Batch cooking", "Meal prep"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "whey", name: "Whey protéine", detail: "saveur vanille ou neutre", emoji: "💪", baseQty: 20, unit: "g", scalable: false, role: "protein" },
            { id: "citron_jus", name: "Jus de citron", detail: "frais", emoji: "🍋", baseQty: 20, unit: "ml", scalable: false, role: "base" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 60, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte", text: "Préchauffer le four à 175°C. Mélanger les flocons d'avoine mixés avec la whey protéine. Dans un autre bol, fouetter les œufs avec le fromage blanc et le jus de citron." },
            { title: "Combiner", text: "Incorporer les ingrédients secs aux ingrédients humides en mélangeant délicatement jusqu'à obtenir une pâte homogène." },
            { title: "Cuire", text: "Verser la pâte dans un moule à cake graissé et enfourner 20 à 25 minutes. Vérifier la cuisson avec un cure-dent." },
            { title: "Refroidir et portionner", text: "Laisser refroidir sur une grille, puis découper en tranches. Se conserve 3 jours au réfrigérateur." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Ajoutez le zeste du citron en plus du jus pour un arôme plus intense et naturel." },
            { type: "red", title: "Erreur classique", text: "Ne faites pas cuire trop longtemps : la whey a tendance à assécher la préparation à haute température." }
        ]
    },
    {
        id: "trail-mix-maison",
        name: "Trail Mix Maison",
        subtitle: "Mélange de fruits secs et chocolat noir à emporter",
        emoji: "🥜",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Vegan", "Sans gluten", "Sans cuisson", "Express"],
        ingredients: [
            { id: "amandes", name: "Amandes", detail: "entières", emoji: "🌰", baseQty: 20, unit: "g", scalable: true, role: "fat" },
            { id: "noix", name: "Noix", detail: "", emoji: "🥜", baseQty: 15, unit: "g", scalable: true, role: "fat" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "en pépites", emoji: "🍫", baseQty: 15, unit: "g", scalable: true, role: "fat" },
            { id: "noix_de_coco_rapee", name: "Noix de coco râpée", detail: "", emoji: "🥥", baseQty: 10, unit: "g", scalable: true, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Mélanger", text: "Réunir les amandes, les noix, les pépites de chocolat noir et la noix de coco râpée dans un bol." },
            { title: "Portionner", text: "Répartir le mélange dans de petits sachets ou contenants hermétiques pour un snack prêt à emporter." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Préparez plusieurs portions d'avance dans des sachets individuels pour avoir un encas toujours prêt." },
            { type: "red", title: "Attention", text: "Attention aux quantités : les oléagineux sont très caloriques, respectez les portions recommandées." }
        ]
    },
    {
        id: "mini-quiche-legumes",
        name: "Mini Quiches aux Légumes",
        subtitle: "Petites quiches sans pâte aux légumes du soleil",
        emoji: "🥧",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Batch cooking", "Familial"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "courgette", name: "Courgette", detail: "râpée", emoji: "🥒", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "en petits dés", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "emmental", name: "Emmental râpé", detail: "", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 50, unit: "ml", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer les légumes", text: "Préchauffer le four à 180°C. Râper la courgette et bien la presser pour retirer l'excès d'eau. Couper le poivron en petits dés." },
            { title: "Préparer l'appareil", text: "Battre les œufs avec le lait, saler et poivrer. Ajouter la courgette râpée, les dés de poivron et la moitié de l'emmental." },
            { title: "Cuire", text: "Répartir dans des moules à muffins graissés. Parsemer du reste d'emmental et enfourner 20 à 25 minutes jusqu'à ce que les quiches soient dorées et fermes." }
        ],
        tips: [
            { type: "green", title: "Astuce nutrition", text: "Pressez bien la courgette râpée dans un torchon pour éliminer l'eau et éviter des quiches détrempées." },
            { type: "red", title: "Erreur à éviter", text: "Ne démoulez pas les quiches trop tôt, attendez 5 minutes pour qu'elles se tiennent bien." }
        ]
    },
    // ============================================================
    // COLLATION MAISON (nouveaux) (7 recettes)
    // ============================================================
    {
        id: "smoothie-tropical",
        name: "Smoothie Tropical",
        subtitle: "Smoothie vitaminé aux fruits exotiques",
        emoji: "🌴",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Vegan", "Sans gluten", "Sans cuisson", "Express", "Vitaminé", "Rafraîchissant"],
        ingredients: [
            { id: "ananas", name: "Ananas", detail: "en morceaux", emoji: "🍍", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "mangue", name: "Mangue", detail: "en morceaux", emoji: "🥭", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "lait_amande", name: "Lait d'amande", detail: "non sucré", emoji: "🥛", baseQty: 150, unit: "ml", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Réunir les fruits", text: "Couper l'ananas et la mangue en morceaux. Peler la banane et la couper en rondelles." },
            { title: "Mixer", text: "Placer tous les fruits dans un blender, ajouter le lait d'amande et mixer jusqu'à obtenir une texture lisse et onctueuse." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Utilisez des fruits surgelés pour un smoothie bien frais et une texture plus épaisse sans ajout de glaçons." },
            { type: "red", title: "Piège à éviter", text: "Ne rajoutez pas de sucre ou de jus de fruits industriel, les fruits apportent déjà suffisamment de sucre naturel." }
        ]
    },
    {
        id: "toast-beurre-cacahuete-banane",
        name: "Toast Beurre Cacahuète Banane",
        subtitle: "Tartine gourmande au beurre de cacahuète et rondelles de banane",
        emoji: "🥜",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Express", "Rapide", "Gourmand"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "1 tranche", emoji: "🍞", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "", emoji: "🥜", baseQty: 15, unit: "g", scalable: true, role: "fat" },
            { id: "banane", name: "Banane", detail: "en rondelles", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller la tranche de pain complet au grille-pain jusqu'à ce qu'elle soit dorée et croustillante." },
            { title: "Garnir", text: "Tartiner généreusement le beurre de cacahuète sur le toast chaud, puis disposer les rondelles de banane par-dessus." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Choisissez un beurre de cacahuète 100% naturel sans huile de palme ni sucre ajouté pour un meilleur profil nutritionnel." },
            { type: "red", title: "Piège à éviter", text: "Ne mettez pas le beurre de cacahuète avant de toaster le pain, il brûlerait et perdrait ses qualités nutritionnelles." }
        ]
    },
    {
        id: "yaourt-grec-miel-amandes",
        name: "Yaourt Grec Miel Amandes",
        subtitle: "Yaourt grec onctueux au miel et éclats d'amandes",
        emoji: "🍯",
        category: "collation-maison",
        difficulty: "Facile",
        time: 3,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Express", "Sans cuisson"],
        ingredients: [
            { id: "yaourt_grec", name: "Yaourt grec", detail: "", emoji: "🥛", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 15, unit: "g", scalable: false, role: "carb" },
            { id: "amandes", name: "Amandes", detail: "effilées ou concassées", emoji: "🌰", baseQty: 15, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Assembler", text: "Verser le yaourt grec dans un bol ou un verre." },
            { title: "Garnir", text: "Arroser de miel et parsemer d'éclats d'amandes. Déguster immédiatement pour garder le croquant des amandes." }
        ],
        tips: [
            { type: "green", title: "Conseil santé", text: "Faites légèrement torréfier les amandes à la poêle sèche pour révéler leur arôme et ajouter du croquant." },
            { type: "red", title: "Piège à éviter", text: "Ne confondez pas yaourt grec (riche en protéines) et yaourt à la grecque (souvent enrichi en crème et plus gras)." }
        ]
    },
    {
        id: "crepe-sarrasin-banane",
        name: "Crêpe Sarrasin Banane",
        subtitle: "Galette de sarrasin garnie de rondelles de banane au miel",
        emoji: "🥞",
        category: "collation-maison",
        difficulty: "Facile",
        time: 10,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Gourmand"],
        ingredients: [
            { id: "galette_sarrasin", name: "Galette de sarrasin", detail: "", emoji: "🥞", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "en rondelles", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Réchauffer la galette", text: "Faire chauffer la galette de sarrasin à la poêle à feu moyen pendant 1 minute de chaque côté." },
            { title: "Garnir", text: "Disposer les rondelles de banane sur la galette, arroser de miel et replier en deux ou en quatre." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Le sarrasin est naturellement sans gluten et riche en protéines végétales, c'est un excellent choix pour les collations." },
            { type: "red", title: "Erreur classique", text: "Ne faites pas chauffer la galette trop longtemps, elle deviendrait sèche et cassante au lieu de rester souple." }
        ]
    },
    {
        id: "edamame-sale",
        name: "Edamames Salés",
        subtitle: "Fèves de soja légèrement salées riches en protéines",
        emoji: "🫛",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Vegan", "Sans gluten", "Express", "Sans cuisson"],
        ingredients: [
            { id: "edamame", name: "Edamames", detail: "décortiqués", emoji: "🫛", baseQty: 200, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer", text: "Décongeler les edamames au micro-ondes 2 à 3 minutes ou les passer sous l'eau chaude si déjà décortiqués." },
            { title: "Assaisonner et servir", text: "Saler légèrement avec de la fleur de sel. Déguster tiède ou froid en collation." }
        ],
        tips: [
            { type: "green", title: "Le + du coach", text: "Les edamames sont une excellente source de protéines végétales complètes avec tous les acides aminés essentiels." },
            { type: "red", title: "Piège à éviter", text: "Ne salez pas trop : les edamames surgelés contiennent parfois déjà du sel, goûtez avant d'assaisonner." }
        ]
    },
    {
        id: "cottage-cheese-ananas",
        name: "Cottage Cheese Ananas",
        subtitle: "Cottage cheese frais garni d'ananas et graines de chia",
        emoji: "🍍",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien", "Sans gluten", "Sans cuisson", "Express"],
        ingredients: [
            { id: "cottage_cheese", name: "Cottage cheese", detail: "", emoji: "🧀", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "ananas", name: "Ananas", detail: "en morceaux", emoji: "🍍", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Assembler", text: "Verser le cottage cheese dans un bol. Disposer les morceaux d'ananas frais ou en conserve (égoutté) par-dessus." },
            { title: "Garnir", text: "Saupoudrer de graines de chia et mélanger légèrement. Déguster immédiatement." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "L'ananas contient de la bromélaïne qui facilite la digestion des protéines : un accord parfait avec le cottage cheese." },
            { type: "red", title: "Erreur à éviter", text: "Évitez l'ananas en conserve au sirop, préférez-le au jus naturel ou frais pour limiter les sucres ajoutés." }
        ]
    },
    {
        id: "tartine-avocat-radis",
        name: "Tartine Avocat Radis",
        subtitle: "Toast croquant à l'avocat frais et radis piquants",
        emoji: "🥑",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Vegan", "Express", "Rapide"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "1 tranche", emoji: "🍞", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "avocat", name: "Avocat", detail: "bien mûr", emoji: "🥑", baseQty: 60, unit: "g", scalable: true, role: "fat" },
            { id: "radis", name: "Radis", detail: "en fines rondelles", emoji: "🌶️", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer l'avocat", text: "Écraser l'avocat à la fourchette avec le jus de citron, saler et poivrer selon votre goût." },
            { title: "Assembler la tartine", text: "Toaster la tranche de pain complet. Tartiner la purée d'avocat et disposer les rondelles de radis par-dessus." }
        ],
        tips: [
            { type: "green", title: "Astuce satiété", text: "Le jus de citron empêche l'avocat de s'oxyder et apporte de la fraîcheur à la tartine." },
            { type: "red", title: "Attention", text: "N'écrasez pas l'avocat trop finement, gardez quelques morceaux pour une texture plus agréable en bouche." }
        ]
    }
];
