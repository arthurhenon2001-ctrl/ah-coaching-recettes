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
        tags: ["Sans cuisson", "Meal prep", "Perte de poids"],
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
        tags: ["Sans farine", "Rapide", "Gourmand"],
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
        tags: ["Sans cuisson", "Vitaminé", "Rafraîchissant"],
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
        tags: ["Chaud", "Réconfortant", "Perte de poids"],
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
        tags: ["Rapide", "Gourmand", "Classique"],
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
        tags: ["Meal prep", "Batch cooking", "Gourmand"],
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
        tags: ["Meal prep", "Batch cooking", "Crunchy"],
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
        tags: ["Rapide", "Gourmand", "Haute protéine"],
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
        tags: ["Sans cuisson", "Express", "Haute protéine"],
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
        tags: ["Gourmand", "Chocolat", "Meal prep"],
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
        tags: ["Express", "Haute protéine", "Low carb"],
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
        tags: ["Tendance", "Équilibré", "Brunch"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches, toastées", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "avocat", name: "Avocat", detail: "Écrasé à la fourchette", emoji: "🥑", baseQty: 60, unit: "g", scalable: true, role: "fat", maxQty: 80 },
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
        tags: ["Brunch", "Oméga-3", "Low carb"],
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
            { id: "tortilla", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: false, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "En omelette", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "dinde", name: "Dinde", detail: "Tranchée finement", emoji: "🍗", baseQty: 60, unit: "g", scalable: true, role: "protein", maxQty: 100 },
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
        tags: ["Méditerranéen", "Épicé", "Réconfortant"],
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
            { id: "galette_sarrasin", name: "Galette de sarrasin", detail: "Prête à l'emploi", emoji: "🥞", baseQty: 1, unit: "unité(s)", scalable: false, role: "carb" },
            { id: "oeufs", name: "Œuf", detail: "Au plat au centre", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "jambon", name: "Jambon blanc", detail: "1 tranche", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein", maxQty: 60 },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat", maxQty: 30 }
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
            { id: "pain_mie", name: "Pain de mie complet", detail: "2 tranches", emoji: "🍞", baseQty: 2, unit: "unité(s)", scalable: false, role: "carb" },
            { id: "jambon", name: "Jambon blanc", detail: "1 tranche épaisse", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein", maxQty: 80 },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 25, unit: "g", scalable: false, role: "fat", maxQty: 30 }
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
        tags: ["Sans cuisson", "Frais", "Low carb"],
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
            { id: "tortilla", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: false, role: "carb" },
            { id: "poulet", name: "Poulet grillé", detail: "Émincé", emoji: "🍗", baseQty: 100, unit: "g", scalable: true, role: "protein", maxQty: 180 },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 45, unit: "g", scalable: true, role: "fat", maxQty: 80 },
            { id: "haricots_noirs", name: "Haricots noirs", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 60, unit: "g", scalable: true, role: "carb", maxQty: 100, rawRatio: 0.43 },
            { id: "mais", name: "Maïs", detail: "En grains, égoutté", emoji: "🌽", baseQty: 50, unit: "g", scalable: true, role: "carb", maxQty: 80 },
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
        tags: ["Frais", "Oméga-3", "Tendance"],
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
        tags: ["Végétarien", "Complet", "Fibres"],
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
        tags: ["Réconfortant", "Épicé", "Meal prep"],
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
        tags: ["Méditerranéen", "Complet", "Équilibré"],
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
        tags: ["Épicé", "Fibres", "Meal prep"],
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
        tags: ["Simple", "Complet", "Prise de masse"],
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
        tags: ["Oméga-3", "Équilibré", "Sain"],
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
        tags: ["Classique", "Familial", "Complet"],
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
        tags: ["Réconfortant", "Crémeux", "Végétarien"],
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
        tags: ["Léger", "Diététique", "Perte de poids"],
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
        tags: ["Fondant", "Végétarien", "Réconfortant"],
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
            { id: "tortilla", name: "Tortillas blé complet", detail: "2 wraps", emoji: "🌮", baseQty: 2, unit: "unité(s)", scalable: false, role: "carb" },
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Assaisonné épices mexicaines", emoji: "🥩", baseQty: 100, unit: "g", scalable: true, role: "protein", maxQty: 180 },
            { id: "salade", name: "Salade verte", detail: "Émincée", emoji: "🥬", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 60, unit: "g", scalable: false, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "emmental", name: "Fromage râpé", detail: "Emmental", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat", maxQty: 40 }
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
        tags: ["Asiatique", "Protéiné", "Savoureux"],
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
            { id: "boeuf", name: "Bœuf haché 5%", detail: "Steak formé, assaisonné", emoji: "🥩", baseQty: 120, unit: "g", scalable: true, role: "protein", maxQty: 200 },
            { id: "pain_complet", name: "Pain complet", detail: "Bun burger, coupé en 2", emoji: "🍞", baseQty: 60, unit: "g", scalable: false, role: "carb" },
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
        tags: ["Sans cuisson", "Meal prep", "Énergie"],
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
        tags: ["Meal prep", "Haute protéine", "DIY"],
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
        tags: ["Post-entraînement", "Express", "Shaker"],
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
        tags: ["Gourmand", "Chocolat", "Haute protéine"],
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
            { id: "tortilla", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: false, role: "carb" },
            { id: "thon", name: "Thon en conserve", detail: "Au naturel, égoutté", emoji: "🐟", baseQty: 80, unit: "g", scalable: true, role: "protein", maxQty: 120 },
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
        tags: ["Express", "Sans cuisson", "Énergie"],
        ingredients: [
            { id: "galette_riz", name: "Galettes de riz", detail: "Soufflées", emoji: "🍘", baseQty: 3, unit: "unité(s)", scalable: false, role: "carb" },
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
        tags: ["Sans cuisson", "Préparé la veille", "Fibres"],
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
        tags: ["Glacé", "Sans sucre ajouté", "Vegan"],
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
        tags: ["Express", "Classique", "Sans cuisson"],
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
        tags: ["Gourmand", "Haute protéine", "Rapide"],
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
        tags: ["Tendance", "Salé", "Haute protéine"],
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
        tags: ["Sucré-salé", "Gourmand", "Rapide"],
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
];
