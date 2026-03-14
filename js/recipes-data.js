const RECIPES_DATA = [

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
        tags: ["Végétarien","Sans cuisson","Meal prep","Perte de poids"],
        ingredients: [
            { id: "skyr", name: "Skyr 0%", detail: "Nature, sans sucre ajouté", emoji: "🥛", baseQty: 250, unit: "g", scalable: true, role: "protein" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons de préférence", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" }
        ],
        options: [{"id":"topping","label":"Topping","choices":[{"value":"banane","label":"Banane","emoji":"🍌","desc":"Classique et sucrée"},{"value":"fruits-rouges","label":"Fruits rouges","emoji":"🫐","desc":"Antioxydants"}],"default":"banane","modifiers":{"banane":{"add":[{"id":"banane","name":"Banane","detail":"En rondelles","emoji":"🍌","baseQty":100,"unit":"g","scalable":true,"role":"carb"}]},"fruits-rouges":{"add":[{"id":"fruits_rouges","name":"Fruits rouges","detail":"Frais ou surgelés","emoji":"🫐","baseQty":150,"unit":"g","scalable":true,"role":"carb"}]}}}],
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
        tags: ["Végétarien","Sans farine","Rapide","Gourmand"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Bien mûre, écrasée", emoji: "🍌", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés en poudre", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" }
        ],
        options: [{"id":"boost-proteine","label":"Boost protéine","choices":[{"value":"sans","label":"Sans","emoji":"➖","desc":"Version classique"},{"value":"whey","label":"Whey","emoji":"💪","desc":"+12g protéines"}],"default":"sans","modifiers":{"sans":{},"whey":{"add":[{"id":"whey","name":"Whey protéine","detail":"Vanille ou neutre","emoji":"💪","baseQty":15,"unit":"g","scalable":false,"role":"protein"}]}}}],
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
        tags: ["Végétarien","Vegan","Sans cuisson","Vitaminé","Rafraîchissant"],
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
        tags: ["Végétarien","Chaud","Réconfortant","Perte de poids"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Ou lait végétal", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "pomme", name: "Pomme", detail: "Coupée en petits dés", emoji: "🍎", baseQty: 150, unit: "g", scalable: true, role: "carb" }
        ],
        options: [{"id":"boost-proteine","label":"Boost protéine","choices":[{"value":"whey","label":"Whey","emoji":"💪","desc":"+12g protéines"},{"value":"skyr","label":"Skyr","emoji":"🥛","desc":"+10g protéines, crémeux"}],"default":"whey","modifiers":{"whey":{"add":[{"id":"whey","name":"Whey protéine","detail":"Vanille ou neutre","emoji":"💪","baseQty":15,"unit":"g","scalable":false,"role":"protein"}]},"skyr":{"add":[{"id":"skyr","name":"Skyr 0%","detail":"Ajouté hors du feu","emoji":"🥛","baseQty":100,"unit":"g","scalable":true,"role":"protein"}]}}}],
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
        tags: ["Végétarien","Rapide","Gourmand","Classique"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches épaisses", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Battus en omelette", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Pour la dorure", emoji: "🥛", baseQty: 50, unit: "ml", scalable: false, role: "base" }
        ],
        options: [{"id":"sucrant","label":"Sucrant","choices":[{"value":"miel","label":"Miel","emoji":"🍯","desc":"Classique"},{"value":"sirop-erable","label":"Sirop d'érable","emoji":"🍁","desc":"Gourmand"}],"default":"miel","modifiers":{"miel":{"add":[{"id":"miel","name":"Miel","detail":"Un filet","emoji":"🍯","baseQty":15,"unit":"g","scalable":false,"role":"carb"}]},"sirop-erable":{"add":[{"id":"sirop_erable","name":"Sirop d'érable","detail":"Un filet","emoji":"🍁","baseQty":15,"unit":"g","scalable":false,"role":"carb"}]}}}],
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
        tags: ["Végétarien","Meal prep","Batch cooking","Gourmand"],
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
        tags: ["Végétarien","Meal prep","Batch cooking","Crunchy"],
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
        tags: ["Végétarien","Rapide","Gourmand","Haute protéine"],
        ingredients: [
            { id: "farine_complete", name: "Farine complète", detail: "T150 de préférence", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Ou lait végétal", emoji: "🥛", baseQty: 100, unit: "ml", scalable: true, role: "base" },
            { id: "whey", name: "Whey protéine", detail: "Vanille ou neutre", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" }
        ],
        options: [{"id":"garniture","label":"Garniture","choices":[{"value":"banane","label":"Banane","emoji":"🍌","desc":"Classique et rassasiante"},{"value":"miel","label":"Miel","emoji":"🍯","desc":"Simple et rapide"}],"default":"banane","modifiers":{"banane":{"add":[{"id":"banane","name":"Banane","detail":"En rondelles","emoji":"🍌","baseQty":80,"unit":"g","scalable":true,"role":"carb"}]},"miel":{"add":[{"id":"miel","name":"Miel","detail":"Un filet","emoji":"🍯","baseQty":15,"unit":"g","scalable":false,"role":"carb"}]}}}],
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
        tags: ["Végétarien","Sans cuisson","Express","Haute protéine"],
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
        tags: ["Végétarien","Gourmand","Chocolat","Meal prep"],
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
        tags: ["Sans gluten","Express","Haute protéine","Low carb"],
        ingredients: [
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" }
        ],
        options: [{"id":"garniture-jambon","label":"Jambon","choices":[{"value":"avec","label":"Avec jambon","emoji":"🥓","desc":"+8g protéines"},{"value":"sans","label":"Sans","emoji":"➖","desc":"Nature"}],"default":"avec","modifiers":{"avec":{"add":[{"id":"jambon","name":"Jambon blanc","detail":"En dés","emoji":"🥓","baseQty":40,"unit":"g","scalable":true,"role":"protein"}]},"sans":{}}},{"id":"garniture-fromage","label":"Fromage","choices":[{"value":"avec","label":"Avec fromage","emoji":"🧀","desc":"Fondant"},{"value":"sans","label":"Sans","emoji":"➖","desc":"Moins calorique"}],"default":"avec","modifiers":{"avec":{"add":[{"id":"emmental","name":"Fromage râpé","detail":"Emmental","emoji":"🧀","baseQty":15,"unit":"g","scalable":false,"role":"fat"}]},"sans":{}}}],
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
        tags: ["Végétarien","Tendance","Équilibré","Brunch"],
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
        tags: ["Sans gluten","Brunch","Oméga-3","Low carb"],
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
        tags: ["À emporter","Haute protéine","Rapide"],
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
        tags: ["Végétarien","Sans gluten","Méditerranéen","Épicé","Réconfortant"],
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
        tags: ["Traditionnel","Sans gluten","Complet"],
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
        tags: ["Rapide","Croustillant","Classique"],
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
        tags: ["Végétarien","Sans gluten","Sans cuisson","Frais","Low carb"],
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
        tags: ["Complet","Tex-Mex","À emporter"],
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
        tags: ["Sans gluten","Frais","Oméga-3","Tendance"],
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
        tags: ["Végétarien","Vegan","Sans gluten","Complet","Fibres"],
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
        tags: ["Sans gluten","Réconfortant","Épicé","Meal prep"],
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
        tags: ["Classique","Réconfortant","Familial"],
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
        tags: ["Fraîche","Haute protéine","Classique"],
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
        tags: ["Sans gluten","Méditerranéen","Complet","Équilibré"],
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
        tags: ["Asiatique","Rapide","Savoureux"],
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
        tags: ["Sans gluten","Épicé","Fibres","Meal prep"],
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
        tags: ["Sans gluten","Simple","Complet","Prise de masse"],
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
        tags: ["Sans gluten","Oméga-3","Équilibré","Sain"],
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
        tags: ["Sans gluten","Classique","Familial","Complet"],
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
        tags: ["Sans gluten","Réconfortant","Crémeux","Végétarien"],
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
        tags: ["Sans gluten","Léger","Diététique","Perte de poids"],
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
        tags: ["Sans gluten","Fondant","Végétarien","Réconfortant"],
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
        tags: ["Fun","Convivial","Rapide"],
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
        tags: ["Exotique","Réconfortant","Parfumé"],
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
        tags: ["Sans pâte","Allégé","Classique revisité"],
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
        tags: ["Sans gluten","Asiatique","Protéiné","Savoureux"],
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
        tags: ["Gourmand","Maîtrisé","Convivial"],
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
        tags: ["Végétarien","Sans cuisson","Meal prep","Énergie"],
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
        tags: ["Végétarien","Meal prep","Haute protéine","DIY"],
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
        tags: ["Végétarien","Sans gluten","Post-entraînement","Express","Shaker"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Mûre", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "Froid", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "whey", name: "Whey protéine", detail: "Vanille ou chocolat", emoji: "💪", baseQty: 30, unit: "g", scalable: true, role: "protein" }
        ],
        options: [{"id":"boost-lipides","label":"Beurre de cacahuète","choices":[{"value":"sans","label":"Sans","emoji":"➖","desc":"Version light"},{"value":"avec","label":"Avec PB","emoji":"🥜","desc":"+59 kcal, onctueux"}],"default":"sans","modifiers":{"sans":{},"avec":{"add":[{"id":"beurre_cacahuete","name":"Beurre de cacahuète","detail":"1 cuillère à café","emoji":"🥜","baseQty":10,"unit":"g","scalable":false,"role":"fat"}]}}}],
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
        tags: ["Végétarien","Gourmand","Chocolat","Haute protéine"],
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
        tags: ["Salé","Express","Haute protéine"],
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
        tags: ["Végétarien","Vegan","Sans gluten","Express","Sans cuisson","Énergie"],
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
        tags: ["Végétarien","Sans gluten","Sans cuisson","Préparé la veille","Fibres"],
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
        tags: ["Végétarien","Sans gluten","Glacé","Sans sucre ajouté","Vegan"],
        ingredients: [
            { id: "banane", name: "Banane congelée", detail: "Coupée en rondelles avant congélation", emoji: "🍌", baseQty: 200, unit: "g", scalable: true, role: "carb" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 5, unit: "g", scalable: false, role: "base" },
            { id: "lait_amande", name: "Lait d'amande", detail: "Non sucré, pour aider à mixer", emoji: "🥛", baseQty: 50, unit: "ml", scalable: false, role: "base" }
        ],
        options: [{"id":"topping","label":"Topping","choices":[{"value":"nature","label":"Nature","emoji":"🍦","desc":"Version light"},{"value":"beurre-cacahuete","label":"Beurre cacahuète","emoji":"🥜","desc":"+59 kcal, fondant"}],"default":"nature","modifiers":{"nature":{},"beurre-cacahuete":{"add":[{"id":"beurre_cacahuete","name":"Beurre de cacahuète","detail":"Fondu sur le dessus","emoji":"🥜","baseQty":10,"unit":"g","scalable":false,"role":"fat"}]}}}],
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
        tags: ["Végétarien","Express","Classique","Sans cuisson"],
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
        tags: ["Végétarien","Gourmand","Haute protéine","Rapide"],
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
        tags: ["Végétarien","Sans gluten","Tendance","Salé","Haute protéine"],
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
        tags: ["Végétarien","Sucré-salé","Gourmand","Rapide"],
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
    },

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
        tags: ["Végétarien","Réconfortant","Gourmand"],
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
        tags: ["Végétarien","Sans gluten","Sans cuisson","Vitaminé"],
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
        tags: ["Végétarien","Haute protéine","Rapide"],
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
        tags: ["Vegan","Sans gluten","Sans cuisson","Express","Vitaminé"],
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
        tags: ["Végétarien","Sans cuisson","Meal prep"],
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
        tags: ["Végétarien","Sans gluten","Sans cuisson","Meal prep"],
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
        tags: ["Végétarien","Gourmand","Batch cooking"],
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
        tags: ["Végétarien","Vitaminé","Rafraîchissant"],
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
        tags: ["Végétarien","Sans gluten"],
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
        tags: ["Express","Rapide","Gourmand"],
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
        tags: ["Végétarien","Sans gluten","Batch cooking","Familial"],
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
        tags: ["Sans gluten","Meal prep","Batch cooking"],
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
        tags: ["Express","Rapide","Haute protéine"],
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
        tags: ["Vegan","Sans gluten"],
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
        tags: ["Rapide","Haute protéine"],
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
        tags: ["Végétarien","Sucré-salé","Gourmand"],
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
        tags: ["Sans gluten","Classique","Familial"],
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
        tags: ["Sans gluten","Asiatique"],
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
        tags: ["Sans gluten","Familial","Réconfortant"],
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
        tags: ["Vegan","Sans gluten","Meal prep"],
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
        tags: ["Sans gluten","Frais","Rapide"],
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
        tags: ["Sans gluten","Familial","Gourmand"],
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
        tags: ["Végétarien","Sans gluten","Haute protéine","Meal prep"],
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
        tags: ["Vegan","Sans gluten","Rapide"],
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
        tags: ["Sans gluten","Classique","Familial"],
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
        tags: ["Sans gluten","Épicé"],
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
        tags: ["Sans gluten","Léger","Élégant"],
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
        tags: ["Sans gluten","Gourmand"],
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
        tags: ["Sans gluten","Familial","Convivial"],
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
        tags: ["Sans gluten","Classique","Familial"],
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
        tags: ["Vegan","Sans gluten","Épicé","Réconfortant"],
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
        tags: ["Sans gluten","Léger","Perte de poids"],
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
        tags: ["Sans gluten","Réconfortant","Familial","Classique"],
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
        tags: ["Sans gluten","Méditerranéen"],
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
        tags: ["Végétarien","Batch cooking","Meal prep"],
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
        tags: ["Végétarien","Batch cooking","Meal prep"],
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
        tags: ["Végétarien","Sans gluten","Sans cuisson","Express"],
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
        tags: ["Express","Rapide","Haute protéine"],
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
        tags: ["Végétarien","Batch cooking","Meal prep"],
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
        tags: ["Vegan","Sans gluten","Sans cuisson","Express"],
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
        tags: ["Végétarien","Batch cooking","Familial"],
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
        tags: ["Vegan","Sans gluten","Sans cuisson","Express","Vitaminé","Rafraîchissant"],
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
        tags: ["Végétarien","Express","Rapide","Gourmand"],
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
        tags: ["Végétarien","Sans gluten","Express","Sans cuisson"],
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
        tags: ["Végétarien","Sans gluten","Gourmand"],
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
        tags: ["Vegan","Sans gluten","Express","Sans cuisson"],
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
        tags: ["Végétarien","Sans gluten","Sans cuisson","Express"],
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
        tags: ["Vegan","Express","Rapide"],
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
    },

    {
        id: "crepes-fourrees-ricotta-fraises",
        name: "Crêpes Fourrées Ricotta-Fraises",
        subtitle: "Gourmand façon brunch italien • Moelleuses",
        emoji: "🥞",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Gourmand","Brunch"],
        ingredients: [
            { id: "farine_complete", name: "Farine complète", detail: "T150", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 120, unit: "ml", scalable: true, role: "base" },
            { id: "ricotta", name: "Ricotta", detail: "Bien égouttée", emoji: "🧀", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "fraises", name: "Fraises", detail: "Fraîches, coupées en quartiers", emoji: "🍓", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "miel", name: "Miel", detail: "Un filet pour la garniture", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" },
            { id: "citron_jus", name: "Jus de citron", detail: "Quelques gouttes", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte à crêpes", text: "Dans un saladier, mélanger la farine complète avec les œufs battus. Incorporer le lait progressivement en fouettant pour obtenir une pâte lisse sans grumeaux. Laisser reposer 10 minutes." },
            { title: "Préparer la garniture ricotta", text: "Dans un bol, mélanger la ricotta égouttée avec le jus de citron et une pincée de vanille en poudre si disponible. La texture doit être crémeuse et légèrement acidulée." },
            { title: "Cuire les crêpes", text: "Faire chauffer une poêle antiadhésive à feu moyen. Verser une fine louche de pâte et étaler en tournant la poêle. Cuire 1 à 2 minutes par face jusqu'à coloration dorée. Répéter pour obtenir 2 à 3 crêpes." },
            { title: "Préparer les fraises", text: "Couper les fraises en quartiers. Les disposer dans un bol et les écraser légèrement à la fourchette pour libérer le jus. Réserver quelques quartiers entiers pour la décoration." },
            { title: "Garnir et rouler les crêpes", text: "Étaler la ricotta au centre de chaque crêpe. Disposer les fraises écrasées par-dessus. Rouler les crêpes ou les plier en quatre. Garnir avec les quartiers de fraises entiers et un filet de miel." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La ricotta apporte des protéines tout en restant légère. C'est un excellent substitut à la chantilly ou au Nutella pour une garniture gourmande mais raisonnée." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas sucrer la ricotta avec du sucre blanc : le miel et l'acidité du citron suffisent à relever le goût. Trop de sucre masque la saveur des fraises fraîches." }
        ]
    },

    {
        id: "pain-perdu-brioche-cannelle",
        name: "Pain Perdu Façon Brioche",
        subtitle: "Cheat meal du dimanche • Ultra-gourmand",
        emoji: "🍞",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Gourmand","Brunch","Cheat meal"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "3 tranches épaisses, rassis de préférence", emoji: "🍞", baseQty: 90, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers, battus", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 80, unit: "ml", scalable: true, role: "base" },
            { id: "banane", name: "Banane", detail: "En rondelles épaisses", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "Râpé finement", emoji: "🍫", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "sirop_erable", name: "Sirop d'érable", detail: "Un filet", emoji: "🍁", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer l'appareil à tremper", text: "Dans une assiette creuse, battre les œufs avec le lait, une pincée de cannelle et une pointe d'extrait de vanille. Bien mélanger pour obtenir un appareil homogène." },
            { title: "Tremper le pain", text: "Tremper chaque tranche de pain complet dans l'appareil, environ 15 secondes par face. Le pain doit être bien imbibé mais pas détrempé. Le pain rassis absorbe mieux sans se désintégrer." },
            { title: "Cuire le pain perdu", text: "Faire chauffer une poêle antiadhésive à feu moyen. Cuire chaque tranche 2 à 3 minutes par face jusqu'à obtenir une belle coloration dorée et caramélisée. La surface doit être croustillante." },
            { title: "Préparer la garniture", text: "Faire fondre le beurre de cacahuète 15 secondes au micro-ondes pour le rendre plus liquide. Couper la banane en rondelles épaisses. Râper le chocolat noir." },
            { title: "Dresser l'assiette", text: "Empiler les tranches de pain perdu. Disposer les rondelles de banane, napper de beurre de cacahuète fondu, parsemer de chocolat râpé et terminer par un filet de sirop d'érable. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce cheat meal reste contrôlé grâce au pain complet et aux graisses saines du beurre de cacahuète. Les quantités de chocolat et sirop sont maîtrisées pour le plaisir sans excès." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser du pain de mie blanc et du Nutella : les calories explosent sans apport nutritionnel intéressant. Le pain complet et le beurre de cacahuète naturel sont bien plus rassasiants." }
        ]
    },

    {
        id: "pancakes-ricotta-citron",
        name: "Pancakes Ricotta-Citron",
        subtitle: "Moelleux façon italienne • Légers et aériens",
        emoji: "🥞",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Gourmand","Brunch"],
        ingredients: [
            { id: "ricotta", name: "Ricotta", detail: "Bien égouttée", emoji: "🧀", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "oeufs", name: "Œufs", detail: "Jaunes et blancs séparés", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "farine_complete", name: "Farine complète", detail: "T150", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais pressé", emoji: "🍋", baseQty: 15, unit: "ml", scalable: false, role: "base" },
            { id: "myrtilles", name: "Myrtilles", detail: "Fraîches ou surgelées", emoji: "🫐", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "miel", name: "Miel", detail: "Pour servir", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Séparer les œufs", text: "Séparer les blancs des jaunes d'œufs. Monter les blancs en neige ferme avec une pincée de sel. Réserver au frais." },
            { title: "Préparer la pâte", text: "Dans un saladier, mélanger la ricotta avec les jaunes d'œufs, la farine complète et le jus de citron. Ajouter le zeste de citron si disponible. La pâte doit être épaisse et parfumée." },
            { title: "Incorporer les blancs en neige", text: "Incorporer délicatement les blancs en neige à la pâte en soulevant la masse avec une spatule. Ne pas trop mélanger : c'est l'air emprisonné dans les blancs qui donne des pancakes ultra-moelleux." },
            { title: "Cuire les pancakes", text: "Faire chauffer une poêle antiadhésive à feu doux. Déposer des petits tas de pâte épais. Cuire 3 minutes par face à feu doux. Les pancakes doivent gonfler et rester moelleux au centre." },
            { title: "Servir avec les myrtilles", text: "Empiler les pancakes. Répartir les myrtilles sur le dessus, arroser d'un filet de miel. Le contraste entre l'acidité du citron, la douceur de la ricotta et les myrtilles est parfait." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les blancs en neige donnent un volume aérien sans ajouter de matière grasse ni de levure chimique. Le résultat est spectaculaire en terme de texture pour très peu de calories supplémentaires." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas cuire à feu vif : les pancakes à la ricotta sont épais et doivent cuire doucement pour être cuits à cœur sans brûler l'extérieur." }
        ]
    },

    {
        id: "porridge-beurre-cacahuete-banane",
        name: "Porridge Beurre de Cacahuète",
        subtitle: "Haute protéine • Satiété longue durée",
        emoji: "🥜",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Haute protéine","Réconfortant"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes, sans sucre", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "banane", name: "Banane", detail: "En rondelles", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "whey", name: "Whey protéine", detail: "Vanille ou neutre", emoji: "💪", baseQty: 15, unit: "g", scalable: false, role: "protein" },
            { id: "graines_chia", name: "Graines de chia", detail: "Pour le croquant", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuire le porridge", text: "Dans une casserole, verser le lait et ajouter les flocons d'avoine. Cuire à feu moyen pendant 5 minutes en remuant régulièrement jusqu'à épaississement." },
            { title: "Incorporer le beurre de cacahuète", text: "Retirer du feu et ajouter le beurre de cacahuète. Mélanger vigoureusement pour qu'il fonde et s'incorpore de manière homogène dans le porridge chaud." },
            { title: "Ajouter la whey", text: "Laisser tiédir 2 minutes puis incorporer la whey protéine en fouettant. Ne jamais ajouter la whey dans un liquide bouillant pour éviter les grumeaux." },
            { title: "Préparer la banane", text: "Couper la banane en rondelles. Pour une version plus gourmande, faire revenir quelques rondelles 1 minute à la poêle pour les caraméliser légèrement." },
            { title: "Dresser le bowl", text: "Verser le porridge dans un bol. Disposer les rondelles de banane sur le dessus, parsemer de graines de chia. Créer un dessin en spirale avec une pointe de beurre de cacahuète supplémentaire si souhaité." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce porridge combine protéines de la whey, graisses saines du beurre de cacahuète et glucides complexes de l'avoine. C'est le petit-déjeuner idéal avant un entraînement matinal." },
            { type: "red", title: "Erreur à éviter", text: "Le beurre de cacahuète est dense en calories : 15g suffisent pour le goût et la satiété. Ne pas doubler la dose sous peine de transformer un porridge sain en bombe calorique." }
        ]
    },

    {
        id: "chia-pudding-coco-chocolat",
        name: "Chia Pudding Coco-Chocolat",
        subtitle: "Sans cuisson • Façon dessert tropical",
        emoji: "🥥",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 35,
        sliderMax: 200,
        tags: ["Vegan","Sans gluten","Sans cuisson","Meal prep"],
        ingredients: [
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 30, unit: "g", scalable: true, role: "fat" },
            { id: "lait_coco", name: "Lait de coco", detail: "Allégé de préférence", emoji: "🥥", baseQty: 180, unit: "ml", scalable: true, role: "base" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "banane", name: "Banane", detail: "En rondelles", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "Non sucrée", emoji: "🥥", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "sirop_erable", name: "Sirop d'érable", detail: "Un trait", emoji: "🍁", baseQty: 8, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer la base chia-chocolat", text: "Dans un bocal ou un verre, mélanger les graines de chia avec le lait de coco et le cacao en poudre. Ajouter le sirop d'érable et bien fouetter pour éviter les grumeaux de cacao." },
            { title: "Premier repos et mélange", text: "Laisser reposer 15 minutes à température ambiante puis remuer vigoureusement. Cette étape est cruciale pour éviter que les graines ne forment un amas compact au fond." },
            { title: "Réfrigérer toute la nuit", text: "Couvrir le bocal et placer au réfrigérateur pendant au moins 4 heures, idéalement toute la nuit. Les graines vont absorber le liquide et former un pudding onctueux." },
            { title: "Préparer les toppings", text: "Le matin, couper la banane en rondelles. Toaster légèrement la noix de coco râpée dans une poêle sèche pendant 1 minute pour la rendre croustillante et dorée." },
            { title: "Assembler et servir", text: "Mélanger le pudding puis disposer les rondelles de banane et la noix de coco toastée sur le dessus. Déguster bien frais directement dans le bocal." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les graines de chia sont riches en oméga-3 et en fibres. Ce pudding est parfait en meal prep : préparez 3 à 4 portions le dimanche soir pour la semaine." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas sauter l'étape du mélange après 15 minutes de repos : sans cela, les graines forment un bloc gélatineux impossible à rattraper." }
        ]
    },

    {
        id: "smoothie-bowl-mangue-coco",
        name: "Smoothie Bowl Mangue-Coco",
        subtitle: "Tropical • Vitaminé • Sans cuisson",
        emoji: "🥭",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 35,
        sliderMax: 200,
        tags: ["Vegan","Sans gluten","Sans cuisson","Vitaminé","Rafraîchissant"],
        ingredients: [
            { id: "mangue", name: "Mangue", detail: "Surgelée en morceaux", emoji: "🥭", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "Congelée en rondelles", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "lait_coco", name: "Lait de coco", detail: "Allégé", emoji: "🥥", baseQty: 80, unit: "ml", scalable: true, role: "base" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "En topping", emoji: "🌾", baseQty: 15, unit: "g", scalable: false, role: "carb" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "Non sucrée", emoji: "🥥", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "graines_chia", name: "Graines de chia", detail: "En topping", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "kiwi", name: "Kiwi", detail: "En rondelles, pour décorer", emoji: "🥝", baseQty: 50, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mixer la base", text: "Placer la mangue surgelée, la banane congelée et le lait de coco dans un blender puissant. Mixer par impulsions pour obtenir une texture très épaisse, comme un sorbet. Ajouter le lait de coco progressivement." },
            { title: "Ajuster la consistance", text: "Le mélange doit être suffisamment épais pour tenir sur une cuillère. Si c'est trop liquide, ajouter quelques morceaux de fruit surgelé. Si c'est trop compact, un trait de lait de coco." },
            { title: "Préparer les toppings", text: "Couper le kiwi en fines rondelles. Toaster légèrement la noix de coco râpée à la poêle sèche si désiré pour un côté croustillant." },
            { title: "Dresser le bowl", text: "Verser la base dans un bol large. Lisser la surface avec le dos d'une cuillère." },
            { title: "Garnir et servir", text: "Disposer les rondelles de kiwi, les flocons d'avoine, les graines de chia et la noix de coco râpée en lignes parallèles sur le bowl. Déguster immédiatement avant que la base ne fonde." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce bowl est 100% vegan et naturellement sucré par les fruits. La mangue est riche en vitamine A et C, parfait pour la récupération après un entraînement." },
            { type: "red", title: "Erreur à éviter", text: "Utiliser impérativement des fruits surgelés et non frais : c'est ce qui donne la texture épaisse type glace. Des fruits frais donneront un smoothie liquide." }
        ]
    },

    {
        id: "overnight-oats-pomme-cannelle",
        name: "Overnight Oats Pomme-Cannelle",
        subtitle: "Façon tarte aux pommes • Prêt au réveil",
        emoji: "🍎",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans cuisson","Meal prep","Réconfortant"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "carb" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Nature", emoji: "🥛", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 80, unit: "ml", scalable: true, role: "base" },
            { id: "pomme", name: "Pomme", detail: "Râpée finement ou en petits dés", emoji: "🍎", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "amandes", name: "Amandes", detail: "Effilées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 8, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mélanger la base", text: "Dans un bocal hermétique, mélanger les flocons d'avoine, le yaourt grec et le lait. Ajouter une bonne cuillère à café de cannelle en poudre et le miel. Bien remuer." },
            { title: "Préparer la pomme", text: "Râper la pomme finement ou la couper en tout petits dés. L'ajouter au mélange et remuer. Le jus de la pomme va parfumer l'ensemble pendant la nuit." },
            { title: "Réfrigérer toute la nuit", text: "Fermer le bocal et placer au réfrigérateur pour au moins 6 heures, idéalement toute la nuit. Les flocons vont s'imbiber et devenir fondants." },
            { title: "Préparer le topping", text: "Le matin, toaster les amandes effilées 2 minutes dans une poêle sèche à feu moyen pour les rendre croustillantes et dorées." },
            { title: "Servir", text: "Mélanger le contenu du bocal. Parsemer les amandes toastées sur le dessus. Ajouter une pincée de cannelle supplémentaire. Déguster froid ou réchauffé 1 minute au micro-ondes." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le yaourt grec apporte plus de protéines qu'un yaourt classique. Associé à l'avoine et la pomme riche en fibres, ce petit-déjeuner offre une satiété prolongée de 4 à 5 heures." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser de compote de pomme à la place de la pomme fraîche : vous perdez les fibres, le croquant et ajoutez souvent du sucre inutile." }
        ]
    },

    {
        id: "bowl-cottage-cheese-peches",
        name: "Bowl Cottage Cheese Pêche-Granola",
        subtitle: "Tendance • Haute protéine • Express",
        emoji: "🍑",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans cuisson","Haute protéine","Tendance"],
        ingredients: [
            { id: "cottage_cheese", name: "Cottage cheese", detail: "Nature", emoji: "🧀", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "ananas", name: "Ananas", detail: "Frais, en morceaux", emoji: "🍍", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "granola", name: "Granola", detail: "Maison ou faible en sucre", emoji: "🥣", baseQty: 20, unit: "g", scalable: false, role: "carb" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 8, unit: "g", scalable: false, role: "carb" },
            { id: "graines_lin", name: "Graines de lin", detail: "Moulues", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "noix", name: "Noix", detail: "Concassées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer le cottage cheese", text: "Verser le cottage cheese dans un grand bol. Le battre légèrement avec une fourchette pour le rendre plus crémeux tout en gardant ses petits grains caractéristiques." },
            { title: "Préparer les fruits", text: "Couper l'ananas frais en petits dés. Si vous utilisez de l'ananas en conserve, bien l'égoutter et privilégier la version au jus naturel, sans sirop." },
            { title: "Assembler le bowl", text: "Disposer les morceaux d'ananas sur le cottage cheese. Parsemer le granola, les noix concassées et les graines de lin moulues." },
            { title: "Finaliser", text: "Arroser d'un filet de miel. Ajouter une pincée de cannelle si désiré." },
            { title: "Servir immédiatement", text: "Déguster aussitôt pour profiter du contraste entre le cottage cheese frais, le croquant du granola et la douceur de l'ananas. Ne pas attendre car le granola ramollit vite." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le cottage cheese est le nouveau star des petits-déjeuners protéinés. 200g apportent environ 22g de protéines pour seulement 200 calories. Parfait en sèche ou prise de masse." },
            { type: "red", title: "Erreur à éviter", text: "Attention au granola du commerce souvent bourré de sucre et d'huile. Vérifier l'étiquette ou mieux, utiliser du granola maison. 20g suffisent pour le croquant." }
        ]
    },

    {
        id: "galettes-avoine-pomme-compote",
        name: "Galettes d'Avoine Pomme",
        subtitle: "Sans farine • Façon pancake rustique",
        emoji: "🍎",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 15,
        sliderMin: 35,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Rapide"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Gros flocons, non mixés", emoji: "🌾", baseQty: 70, unit: "g", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "pomme", name: "Pomme", detail: "Râpée avec la peau", emoji: "🍎", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "fromage_blanc", name: "Fromage blanc 0%", detail: "Pour la texture", emoji: "🥛", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "graines_lin", name: "Graines de lin", detail: "Moulues", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "sirop_erable", name: "Sirop d'érable", detail: "Pour servir", emoji: "🍁", baseQty: 10, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte", text: "Dans un saladier, mélanger les flocons d'avoine entiers (non mixés pour garder la texture rustique), les œufs battus et le fromage blanc. Bien remuer pour obtenir une pâte épaisse." },
            { title: "Râper la pomme", text: "Râper la pomme avec la peau (bien lavée) directement dans la pâte. Ajouter les graines de lin moulues, une pincée de cannelle et de muscade. Mélanger." },
            { title: "Laisser reposer", text: "Laisser la pâte reposer 5 minutes pour que les flocons absorbent l'humidité de la pomme et du fromage blanc. La pâte va épaissir naturellement." },
            { title: "Cuire les galettes", text: "Faire chauffer une poêle antiadhésive à feu moyen. Former des galettes épaisses avec une grosse cuillère. Cuire 3 minutes par face en les aplatissant légèrement. Elles doivent être dorées et croustillantes à l'extérieur." },
            { title: "Servir", text: "Disposer les galettes dans une assiette et arroser d'un filet de sirop d'érable. Accompagner de quelques tranches de pomme fraîche si désiré." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ces galettes sont naturellement sans gluten si vous utilisez des flocons d'avoine certifiés sans gluten. La pomme râpée apporte du moelleux et du sucre naturel sans ajout." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas essorer la pomme râpée : son jus apporte du moelleux aux galettes et du sucre naturel. Si la pâte semble trop liquide, ajouter quelques flocons d'avoine." }
        ]
    },

    {
        id: "tartine-beurre-cacahuete-banane",
        name: "Tartine PB Banane-Chocolat",
        subtitle: "Express • Énergie concentrée",
        emoji: "🥜",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 5,
        sliderMin: 35,
        sliderMax: 200,
        tags: ["Vegan","Express","Énergie"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches, toastées", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes, sans sucre", emoji: "🥜", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "banane", name: "Banane", detail: "En rondelles fines", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "Râpé", emoji: "🍫", baseQty: 8, unit: "g", scalable: false, role: "fat" },
            { id: "graines_chia", name: "Graines de chia", detail: "Quelques graines", emoji: "🌱", baseQty: 3, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Toaster le pain", text: "Faire griller les 2 tranches de pain complet au grille-pain jusqu'à ce qu'elles soient bien dorées et croustillantes." },
            { title: "Tartiner le beurre de cacahuète", text: "Tartiner généreusement chaque tranche de beurre de cacahuète. La chaleur du pain grillé va légèrement faire fondre le beurre de cacahuète." },
            { title: "Disposer la banane", text: "Couper la banane en rondelles fines et les disposer en une seule couche sur les tartines, en les faisant se chevaucher légèrement." },
            { title: "Ajouter les toppings", text: "Râper le chocolat noir par-dessus les rondelles de banane. Parsemer les graines de chia pour un apport en oméga-3." },
            { title: "Servir immédiatement", text: "Déguster aussitôt tant que le pain est croustillant et le beurre de cacahuète légèrement fondu. Un vrai petit-déjeuner de champion." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette tartine est vegan et fournit un excellent mix de protéines végétales (cacahuète), glucides complexes (pain complet) et bons lipides. Idéal 1h30 avant un entraînement intense." },
            { type: "red", title: "Erreur à éviter", text: "Attention à la portion de beurre de cacahuète : 20g représentent déjà 120 calories. Ne pas en remettre une couche par gourmandise sous peine de dépasser les macros." }
        ]
    },

    {
        id: "french-toast-chocolat-framboise",
        name: "Pain Perdu Chocolat-Framboise",
        subtitle: "Cheat meal gourmand • Brunch du weekend",
        emoji: "🍫",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Gourmand","Cheat meal","Brunch"],
        ingredients: [
            { id: "pain_mie", name: "Pain de mie complet", detail: "3 tranches épaisses", emoji: "🍞", baseQty: 3, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "oeufs", name: "Œufs", detail: "Battus en omelette", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 60, unit: "ml", scalable: true, role: "base" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 8, unit: "g", scalable: false, role: "base" },
            { id: "fruits_rouges", name: "Fruits rouges", detail: "Frais ou surgelés décongelés", emoji: "🍓", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "fromage_blanc", name: "Fromage blanc 0%", detail: "En topping type chantilly", emoji: "🥛", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "Quelques copeaux", emoji: "🍫", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer l'appareil chocolaté", text: "Dans une assiette creuse, battre les œufs avec le lait et le cacao en poudre. Fouetter vigoureusement pour que le cacao soit bien dissous, sans grumeaux. Ajouter un trait de vanille si disponible." },
            { title: "Tremper le pain de mie", text: "Tremper chaque tranche de pain de mie dans l'appareil chocolaté, environ 10 secondes par face. Le pain de mie absorbe plus vite que le pain classique, ne pas le laisser trop longtemps." },
            { title: "Cuire le pain perdu", text: "Faire chauffer une poêle antiadhésive à feu moyen. Cuire chaque tranche 2 minutes par face. L'extérieur doit être croustillant et légèrement caramélisé grâce au cacao." },
            { title: "Préparer le coulis de fruits rouges", text: "Écraser la moitié des fruits rouges à la fourchette pour créer un coulis rustique. Garder l'autre moitié en fruits entiers pour la décoration." },
            { title: "Dresser l'assiette", text: "Empiler les tranches de pain perdu chocolaté. Napper du coulis de fruits rouges, disposer les fruits entiers, ajouter une cuillère de fromage blanc en guise de chantilly légère et terminer avec les copeaux de chocolat noir." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le fromage blanc 0% remplace la chantilly avec 10 fois moins de calories. Fouettez-le vigoureusement pour une texture aérienne qui imite parfaitement la crème." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser du cacao sucré type petit-déjeuner ou du Nesquik : le cacao pur non sucré a un index glycémique bien plus bas et apporte un vrai goût chocolat sans les calories du sucre." }
        ]
    },

    {
        id: "bowl-tofu-soyeux-fruits",
        name: "Bowl Tofu Soyeux aux Fruits",
        subtitle: "100% végétal • Riche en protéines",
        emoji: "🌱",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 35,
        sliderMax: 200,
        tags: ["Vegan","Sans gluten","Haute protéine"],
        ingredients: [
            { id: "tofu", name: "Tofu soyeux", detail: "Ferme, bien égoutté", emoji: "🌱", baseQty: 200, unit: "g", scalable: true, role: "protein" },
            { id: "mangue", name: "Mangue", detail: "En morceaux", emoji: "🥭", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "Bien mûre", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "sirop_erable", name: "Sirop d'érable", detail: "Un trait", emoji: "🍁", baseQty: 10, unit: "g", scalable: false, role: "carb" },
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "Non sucrée", emoji: "🥥", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "amandes", name: "Amandes", detail: "Effilées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer la crème de tofu", text: "Égoutter le tofu soyeux et le placer dans un blender. Ajouter la moitié de la banane et le sirop d'érable. Mixer jusqu'à obtenir une crème lisse et onctueuse, similaire à un yaourt." },
            { title: "Goûter et ajuster", text: "Goûter la crème de tofu. Ajuster la douceur avec un peu plus de sirop d'érable si nécessaire. Ajouter une pointe de vanille si disponible." },
            { title: "Préparer les fruits", text: "Couper la mangue en dés et le reste de la banane en rondelles. Toaster les amandes effilées et la noix de coco râpée à la poêle sèche pendant 1 à 2 minutes." },
            { title: "Dresser le bowl", text: "Verser la crème de tofu dans un bol large. Disposer les morceaux de mangue et les rondelles de banane harmonieusement sur le dessus." },
            { title: "Finaliser avec les toppings", text: "Parsemer les graines de chia, les amandes toastées et la noix de coco. Déguster immédiatement pour profiter du contraste de textures entre la crème fondante et les toppings croquants." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le tofu soyeux est une excellente source de protéines végétales complètes. Mixé avec de la banane, il a une texture crémeuse impossible à distinguer d'un yaourt classique. Parfait pour les sportifs vegan." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser du tofu ferme classique à la place du tofu soyeux : la texture sera granuleuse et le résultat décevant. Le tofu soyeux se trouve au rayon frais, souvent en brique." }
        ]
    },

    {
        id: "crepe-sarrasin-chocolat-banane",
        name: "Crêpe Sarrasin Chocolat-Banane",
        subtitle: "Sans gluten • Gourmand et sain",
        emoji: "🥞",
        category: "petit-dej-sucre",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Gourmand"],
        ingredients: [
            { id: "galette_sarrasin", name: "Galettes de sarrasin", detail: "Prêtes à l'emploi", emoji: "🥞", baseQty: 2, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "banane", name: "Banane", detail: "En rondelles caramélisées", emoji: "🍌", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "Fondu ou râpé", emoji: "🍫", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "fromage_blanc", name: "Fromage blanc 0%", detail: "En garniture", emoji: "🥛", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "amandes", name: "Amandes", detail: "Effilées et toastées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 8, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Caraméliser les bananes", text: "Couper la banane en rondelles épaisses. Les faire revenir dans une poêle antiadhésive à feu moyen-vif pendant 2 minutes de chaque côté. Elles doivent être dorées et légèrement caramélisées grâce à leurs sucres naturels." },
            { title: "Fondre le chocolat", text: "Casser le chocolat noir en morceaux. Le faire fondre au bain-marie ou 30 secondes au micro-ondes en remuant toutes les 10 secondes. Le chocolat doit être lisse et coulant." },
            { title: "Chauffer les galettes", text: "Dans une poêle propre, réchauffer les galettes de sarrasin 30 secondes de chaque côté. Elles doivent être souples et chaudes sans être cassantes." },
            { title: "Garnir les crêpes", text: "Étaler le fromage blanc 0% sur chaque galette. Disposer les rondelles de banane caramélisées. Arroser de chocolat fondu en filet." },
            { title: "Plier et servir", text: "Rouler ou plier les galettes en quatre. Parsemer d'amandes effilées toastées et d'un filet de miel. Servir immédiatement tant que le chocolat est encore coulant." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le sarrasin est naturellement sans gluten et plus riche en protéines que le blé. 15g de chocolat noir 70% suffisent pour le goût chocolaté tout en apportant des antioxydants." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas remplacer le chocolat noir 70% par du chocolat au lait ou de la pâte à tartiner : les calories doublent et l'index glycémique explose. Le noir 70% a un vrai intérêt nutritionnel." }
        ]
    },

    {
        id: "porridge-proteines-fraises-amandes",
        name: "Porridge Protéiné Fraises-Amandes",
        subtitle: "Ultra-protéiné • Prise de masse",
        emoji: "🍓",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 12,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Végétarien","Haute protéine","Prise de masse"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Petits flocons", emoji: "🌾", baseQty: 70, unit: "g", scalable: true, role: "carb" },
            { id: "lait", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "base" },
            { id: "whey", name: "Whey protéine", detail: "Vanille ou fraise", emoji: "💪", baseQty: 30, unit: "g", scalable: false, role: "protein" },
            { id: "blanc_oeuf", name: "Blancs d'œufs", detail: "Ajoutés à la cuisson", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "fraises", name: "Fraises", detail: "Fraîches, coupées", emoji: "🍓", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "amandes", name: "Amandes", detail: "Effilées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuire le porridge de base", text: "Dans une casserole, verser le lait et ajouter les flocons d'avoine. Cuire à feu moyen pendant 3 minutes en remuant régulièrement." },
            { title: "Incorporer les blancs d'œufs", text: "Ajouter les blancs d'œufs directement dans le porridge en cours de cuisson. Remuer vigoureusement et continuellement pendant 2 minutes. Les blancs vont se mélanger et épaissir le porridge en apportant des protéines supplémentaires sans changer le goût." },
            { title: "Ajouter la whey", text: "Retirer du feu et laisser tiédir 2 minutes. Incorporer la whey en fouettant. Le porridge doit avoir une consistance crémeuse et épaisse." },
            { title: "Préparer les fraises", text: "Couper les fraises en deux ou en quartiers. En écraser quelques-unes pour créer un coulis naturel à incorporer dans le porridge." },
            { title: "Dresser et servir", text: "Verser le porridge dans un grand bol. Disposer les fraises sur le dessus, napper du coulis de fraises écrasées et parsemer les amandes effilées. Ce porridge apporte plus de 40g de protéines." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "L'astuce des blancs d'œufs cuits dans le porridge est un secret de bodybuilders : ils s'incorporent parfaitement et sont invisibles au goût. C'est la méthode la plus efficace pour booster les protéines d'un porridge." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter les blancs d'œufs sans remuer : ils coaguleraient en morceaux visibles. Il faut fouetter en continu pendant l'incorporation pour les répartir uniformément." }
        ]
    },

    {
        id: "smoothie-bowl-chocolat-cacahuete",
        name: "Smoothie Bowl Choco-Cacahuète",
        subtitle: "Façon Snickers sain • Gourmand",
        emoji: "🍫",
        category: "petit-dej-sucre",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Gourmand","Cheat meal"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "Congelée en morceaux", emoji: "🍌", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "cacao", name: "Cacao en poudre", detail: "Non sucré", emoji: "🍫", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "100% cacahuètes", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "skyr", name: "Skyr 0%", detail: "Pour les protéines", emoji: "🥛", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "lait_amande", name: "Lait d'amande", detail: "Non sucré", emoji: "🥛", baseQty: 50, unit: "ml", scalable: true, role: "base" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "En topping", emoji: "🌾", baseQty: 15, unit: "g", scalable: false, role: "carb" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "Copeaux", emoji: "🍫", baseQty: 8, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Mixer la base", text: "Dans un blender, placer la banane congelée, le cacao en poudre, la moitié du beurre de cacahuète, le skyr et le lait d'amande. Mixer jusqu'à obtenir une texture épaisse et crémeuse, type glace." },
            { title: "Ajuster la consistance", text: "Le mélange doit être bien épais et se manger à la cuillère. Si trop compact, ajouter un petit trait de lait d'amande. Si trop liquide, ajouter des morceaux de banane congelée." },
            { title: "Verser dans le bol", text: "Verser la préparation dans un grand bol. Lisser la surface avec le dos d'une cuillère." },
            { title: "Préparer les toppings Snickers", text: "Faire fondre le reste du beurre de cacahuète 10 secondes au micro-ondes. Râper ou couper en copeaux le chocolat noir." },
            { title: "Dresser façon Snickers", text: "Napper le bowl de beurre de cacahuète fondu en filet, parsemer les flocons d'avoine pour le croquant et les copeaux de chocolat noir. Déguster immédiatement, c'est un Snickers healthy." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Grâce au skyr et au beurre de cacahuète, ce bowl apporte plus de 25g de protéines tout en ayant un goût de dessert. Le cacao pur non sucré est riche en magnésium, parfait pour la récupération musculaire." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas remplacer le beurre de cacahuète par du beurre de cacahuète sucré ou du Nutella. Le beurre 100% cacahuètes sans sucre ajouté est le seul choix viable pour un sportif." }
        ]
    },

    {
        id: "eggs-benedict-light",
        name: "Eggs Benedict Light",
        subtitle: "Classique du brunch revisité • Sauce allégée",
        emoji: "🍳",
        category: "petit-dej-sale",
        difficulty: "Avancé",
        time: 25,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Protéiné","Brunch","Gourmand"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "Extra-frais pour le pochage", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "pain_complet", name: "Pain complet", detail: "Type muffin anglais, toasté", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "jambon_blanc", name: "Jambon blanc", detail: "1 tranche épaisse", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Pour la sauce hollandaise light", emoji: "🥛", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais pressé", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "moutarde", name: "Moutarde de Dijon", detail: "Une pointe", emoji: "🟡", baseQty: 3, unit: "g", scalable: false, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais, tombés à la poêle", emoji: "🥬", baseQty: 50, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la sauce hollandaise light", text: "Dans un bol, mélanger le yaourt grec avec le jus de citron, la pointe de moutarde, une pincée de curcuma pour la couleur et du sel. Tiédir 15 secondes au micro-ondes. La texture doit être onctueuse et citronnée." },
            { title: "Pocher les œufs", text: "Faire chauffer une casserole d'eau frémissante avec une cuillère de vinaigre blanc. Créer un tourbillon et y glisser délicatement chaque œuf cassé dans un bol. Cuire 3 minutes pour un jaune coulant. Égoutter sur du papier absorbant." },
            { title: "Préparer les épinards", text: "Faire tomber les épinards frais dans une poêle chaude avec un trait d'eau pendant 2 minutes. Saler légèrement. Ils doivent être juste flétris mais encore verts et brillants." },
            { title: "Toaster le pain et chauffer le jambon", text: "Faire griller les tranches de pain complet au grille-pain. Passer le jambon blanc 30 secondes à la poêle pour le tiédir légèrement." },
            { title: "Assembler les Eggs Benedict", text: "Sur chaque toast, disposer les épinards tombés, une tranche de jambon, un œuf poché par-dessus. Napper généreusement de sauce hollandaise light. Poivrer au moulin et servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La sauce hollandaise classique est une bombe calorique (beurre + jaunes d'œufs). Cette version au yaourt grec garde l'onctuosité et l'acidité citronnée pour une fraction des calories et un bon apport protéique." },
            { type: "red", title: "Erreur à éviter", text: "Pour des œufs pochés parfaits, l'eau doit frémir et non bouillir. Si elle bout trop fort, les blancs se dispersent. Les œufs doivent être extra-frais (le blanc reste compact)." }
        ]
    },

    {
        id: "croque-madame-complet",
        name: "Croque-Madame Complet",
        subtitle: "Cheat meal brunch • Gratiné et généreux",
        emoji: "🧀",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Gourmand","Cheat meal","Brunch","Familial"],
        ingredients: [
            { id: "pain_mie_complet", name: "Pain de mie complet", detail: "2 tranches", emoji: "🍞", baseQty: 2, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "jambon_blanc", name: "Jambon blanc", detail: "1 tranche épaisse", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Pour le gratin", emoji: "🧀", baseQty: 25, unit: "g", scalable: false, role: "fat" },
            { id: "oeuf", name: "Œuf", detail: "Au plat sur le dessus", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "Pour la béchamel express", emoji: "🥛", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "moutarde", name: "Moutarde de Dijon", detail: "Une couche fine", emoji: "🟡", baseQty: 5, unit: "g", scalable: false, role: "base" },
            { id: "salade_verte", name: "Salade verte", detail: "Mesclun en accompagnement", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la béchamel express", text: "Mélanger la crème légère avec la moutarde et une pincée de noix de muscade. Tiédir 15 secondes au micro-ondes. Cette béchamel express remplace la version classique au beurre et farine." },
            { title: "Assembler le croque", text: "Tartiner une tranche de pain de la béchamel express. Poser la tranche de jambon, puis refermer avec la deuxième tranche. Étaler le reste de béchamel sur le dessus." },
            { title: "Gratiner le croque", text: "Parsemer le fromage râpé sur le dessus du croque. Placer sous le grill du four préchauffé à 220°C pendant 5 à 7 minutes jusqu'à ce que le fromage soit doré et bouillonnant." },
            { title: "Cuire l'œuf au plat", text: "Pendant le gratinage, faire cuire l'œuf au plat dans une poêle antiadhésive. Le blanc doit être bien pris et le jaune encore coulant." },
            { title: "Dresser l'assiette", text: "Sortir le croque du four, poser l'œuf au plat sur le dessus. Accompagner de salade verte assaisonnée d'un filet de vinaigre balsamique. Couper et laisser le jaune couler sur le croque." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce croque-madame reste raisonnable grâce au pain complet, à la béchamel light et à la quantité maîtrisée de fromage. L'œuf au plat ajoute des protéines pour un brunch complet." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas beurrer le pain en plus de la béchamel : cela doublerait les lipides sans apport gustatif. La béchamel suffit pour le moelleux." }
        ]
    },

    {
        id: "tortilla-espagnole-light",
        name: "Tortilla Espagnole Light",
        subtitle: "Omelette aux pommes de terre • Classique revisité",
        emoji: "🥚",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 40,
        sliderMax: 250,
        tags: ["Sans gluten","Familial","Batch cooking"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "Entiers, bien battus", emoji: "🥚", baseQty: 3, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "Coupées en fines rondelles", emoji: "🥔", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 1 },
            { id: "oignon", name: "Oignon", detail: "Émincé finement", emoji: "🧅", baseQty: 60, unit: "g", scalable: false, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En petits dés", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Pour la cuisson", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Précuire les pommes de terre", text: "Couper les pommes de terre en fines rondelles de 3mm. Les cuire à la poêle avec l'huile d'olive à feu moyen pendant 10 minutes en les retournant régulièrement. Elles doivent être tendres et à peine dorées." },
            { title: "Faire revenir les légumes", text: "Ajouter l'oignon émincé et le poivron en dés. Cuire 3 minutes en remuant. Ajouter les épinards et cuire 1 minute de plus jusqu'à ce qu'ils soient juste tombés." },
            { title: "Préparer l'appareil", text: "Battre les œufs dans un saladier avec du sel et du poivre. Ajouter les pommes de terre et légumes cuits. Mélanger délicatement pour bien répartir les légumes dans l'œuf." },
            { title: "Cuire la tortilla", text: "Verser le mélange dans la poêle à feu doux. Couvrir et cuire 8 à 10 minutes. Le dessus doit être presque pris. Pour retourner, poser une assiette plate sur la poêle et retourner d'un geste rapide." },
            { title: "Finir la cuisson", text: "Faire glisser la tortilla retournée dans la poêle. Cuire encore 3 à 4 minutes à feu doux. La tortilla doit être dorée des deux côtés et moelleuse au centre. Laisser reposer 5 minutes avant de couper." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La tortilla espagnole se conserve 3 jours au frigo et se mange froide ou tiède. Parfait en batch cooking pour les petits-déjeuners de la semaine, à couper en parts." },
            { type: "red", title: "Erreur à éviter", text: "La recette traditionnelle noie les pommes de terre dans l'huile. Ici, on utilise 5g d'huile d'olive et une poêle antiadhésive pour diviser les lipides par 10." }
        ]
    },

    {
        id: "bowl-petit-dej-mexicain",
        name: "Bowl Petit-Déj Mexicain",
        subtitle: "Épicé et protéiné • Façon huevos rancheros",
        emoji: "🌶️",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Sans gluten","Protéiné","Épicé"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "Au plat ou brouillés", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "haricots_noirs", name: "Haricots noirs", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "tomate", name: "Tomates", detail: "Concassées", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En dés", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 40, unit: "g", scalable: true, role: "fat" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "sauce_sriracha", name: "Sauce sriracha", detail: "Quelques gouttes", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron vert", detail: "Un filet", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la salsa", text: "Faire revenir l'oignon émincé dans une poêle pendant 2 minutes. Ajouter le poivron en dés et cuire 3 minutes. Incorporer les tomates concassées et la sauce sriracha. Laisser mijoter 5 minutes jusqu'à épaississement." },
            { title: "Chauffer les haricots noirs", text: "Dans une petite casserole, réchauffer les haricots noirs avec un filet d'eau et une pincée de cumin. Écraser légèrement quelques haricots à la fourchette pour épaissir la préparation." },
            { title: "Cuire les œufs", text: "Dans une autre poêle antiadhésive, cuire les œufs au plat ou brouillés selon votre préférence. Pour des œufs au plat, le jaune doit rester coulant." },
            { title: "Préparer l'avocat", text: "Couper l'avocat en tranches fines. L'arroser d'un filet de jus de citron vert pour éviter l'oxydation et ajouter de la fraîcheur." },
            { title: "Assembler le bowl", text: "Dans un bol large, disposer les haricots noirs d'un côté, la salsa de l'autre. Poser les œufs au centre. Ajouter les tranches d'avocat. Parsemer de coriandre fraîche si disponible et quelques gouttes de sriracha." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les haricots noirs sont une excellente source de fibres et de protéines végétales. Combinés aux œufs, ce bowl atteint facilement 30g de protéines. Le cumin facilite la digestion des légumineuses." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas noyer le bowl dans la sauce piquante : la sriracha est calorique (18g de sucre par 100g). 5g suffisent pour parfumer sans alourdir le bilan calorique." }
        ]
    },

    {
        id: "muffins-oeuf-epinard-feta",
        name: "Muffins Œuf Épinard-Feta",
        subtitle: "Batch cooking • Portables • 6 muffins",
        emoji: "🧁",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 30,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Batch cooking","Meal prep"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "Bien battus", emoji: "🥚", baseQty: 4, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "epinards", name: "Épinards", detail: "Frais, hachés grossièrement", emoji: "🥬", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "feta", name: "Feta", detail: "Émiettée", emoji: "🧀", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "tomate", name: "Tomates cerises", detail: "Coupées en deux", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Finement émincé", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En petits dés", emoji: "🌶️", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four", text: "Préchauffer le four à 180°C. Graisser légèrement un moule à muffins de 6 empreintes ou utiliser des moules en silicone (pas besoin de graisse)." },
            { title: "Préparer les légumes", text: "Hacher les épinards grossièrement. Couper les tomates cerises en deux, le poivron en petits dés et émincer finement l'oignon. Faire tomber les épinards 1 minute à la poêle." },
            { title: "Battre les œufs", text: "Casser les œufs dans un saladier et les battre vigoureusement. Saler, poivrer et ajouter une pincée d'herbes de Provence. Ajouter tous les légumes et la feta émiettée. Mélanger." },
            { title: "Remplir les moules", text: "Répartir le mélange dans les 6 empreintes du moule à muffins. Chaque empreinte doit être remplie aux 3/4. S'assurer que les légumes sont bien répartis dans chaque muffin." },
            { title: "Cuire au four", text: "Enfourner pour 20 à 22 minutes. Les muffins doivent être gonflés et dorés sur le dessus. Ils vont légèrement retomber en refroidissant, c'est normal. Laisser tiédir 5 minutes avant de démouler." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Préparez 12 muffins le dimanche et conservez-les au frigo. Ils se réchauffent en 30 secondes au micro-ondes pour un petit-déjeuner protéiné express. Se congèlent aussi très bien." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas remplir les moules à ras bord : les œufs gonflent à la cuisson et déborderaient. Aux 3/4 maximum pour un beau résultat." }
        ]
    },

    {
        id: "bagel-saumon-cream-cheese",
        name: "Bagel Saumon Cream Cheese",
        subtitle: "NYC style • Brunch gourmand",
        emoji: "🥯",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Gourmand","Brunch","Express"],
        ingredients: [
            { id: "pain_complet", name: "Bagel complet", detail: "Coupé en deux, toasté", emoji: "🥯", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "saumon", name: "Saumon fumé", detail: "En tranches", emoji: "🐟", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "En remplacement du cream cheese", emoji: "🧀", baseQty: 40, unit: "g", scalable: false, role: "protein" },
            { id: "concombre", name: "Concombre", detail: "En fines rondelles", emoji: "🥒", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "Finement émincé en anneaux", emoji: "🧅", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Un filet", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "graines_chia", name: "Graines de chia", detail: "En topping", emoji: "🌱", baseQty: 3, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Toaster le bagel", text: "Couper le bagel en deux et le faire griller au grille-pain jusqu'à ce qu'il soit bien doré et croustillant. La surface doit être croquante pour supporter la garniture." },
            { title: "Préparer le cream cheese light", text: "Fouetter le fromage blanc 0% avec le jus de citron, du sel et du poivre. Ajouter de l'aneth frais si disponible. La texture doit être onctueuse et citronnée." },
            { title: "Préparer les garnitures", text: "Couper le concombre en fines rondelles. Émincer finement l'oignon rouge en anneaux. Séparer les tranches de saumon fumé." },
            { title: "Assembler le bagel", text: "Tartiner généreusement chaque moitié de bagel avec le fromage blanc citronné. Disposer les rondelles de concombre, puis les tranches de saumon fumé en les pliant joliment." },
            { title: "Finaliser et servir", text: "Ajouter les anneaux d'oignon rouge, parsemer de graines de chia et d'aneth. Servir ouvert pour apprécier la garniture. Poivrer au moulin." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le fromage blanc 0% remplace parfaitement le cream cheese classique : 46 cal/100g contre 342 cal/100g pour le Philadelphia. Même onctuosité, 7x moins de calories." },
            { type: "red", title: "Erreur à éviter", text: "Attention au saumon fumé industriel souvent très salé. Privilégiez le saumon fumé artisanal et ne salez pas la garniture, le saumon apporte déjà suffisamment de sel." }
        ]
    },

    {
        id: "galette-patate-douce-oeuf",
        name: "Galette Patate Douce et Œuf",
        subtitle: "Sans gluten • Croustillant et fondant",
        emoji: "🍠",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Sans gluten","Végétarien","Protéiné"],
        ingredients: [
            { id: "patate_douce_cuite", name: "Patate douce", detail: "Râpée crue", emoji: "🍠", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "oeuf", name: "Œufs", detail: "1 dans la galette + 1 au plat", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "oignon", name: "Oignon", detail: "Râpé finement", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Dans la galette", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Pour la cuisson", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "salade_verte", name: "Salade verte", detail: "En accompagnement", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la pâte à galette", text: "Râper la patate douce crue et l'oignon finement. Bien les essorer dans un torchon propre pour retirer l'excès d'humidité. Cette étape est essentielle pour des galettes croustillantes." },
            { title: "Former la galette", text: "Dans un bol, mélanger la patate douce râpée, l'oignon, 1 œuf battu et le fromage râpé. Saler, poivrer et ajouter une pincée de muscade. Former 2 galettes épaisses." },
            { title: "Cuire les galettes", text: "Chauffer l'huile d'olive dans une poêle antiadhésive à feu moyen. Déposer les galettes et aplatir légèrement. Cuire 4 à 5 minutes par face à feu moyen. Elles doivent être dorées et croustillantes." },
            { title: "Cuire l'œuf au plat", text: "Dans une autre poêle, cuire le deuxième œuf au plat. Le blanc doit être bien pris et le jaune encore coulant pour napper la galette." },
            { title: "Dresser l'assiette", text: "Disposer les galettes de patate douce dans l'assiette. Poser l'œuf au plat sur le dessus. Accompagner de salade verte. Poivrer généreusement au moulin." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La patate douce a un index glycémique plus bas que la pomme de terre classique et est riche en bêta-carotène. Combinée aux œufs, c'est un petit-déjeuner complet et rassasiant." },
            { type: "red", title: "Erreur à éviter", text: "Il est crucial d'essorer la patate douce râpée : si elle est trop humide, les galettes ne seront pas croustillantes mais molles et caoutchouteuses." }
        ]
    },

    {
        id: "toast-champignon-ricotta",
        name: "Toast Champignons Ricotta",
        subtitle: "Champignons sautés façon brunch • Élégant",
        emoji: "🍄",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Brunch","Automnal"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches épaisses, toastées", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "champignon", name: "Champignons", detail: "De Paris ou mélange forestier", emoji: "🍄", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "ricotta", name: "Ricotta", detail: "Onctueuse", emoji: "🧀", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "citron_jus", name: "Jus de citron", detail: "Quelques gouttes", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "epinards", name: "Épinards frais", detail: "Quelques feuilles", emoji: "🥬", baseQty: 20, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer les champignons", text: "Nettoyer les champignons avec un papier humide (ne pas les laver sous l'eau). Les couper en tranches épaisses de 5mm. Les champignons doivent être secs pour bien caraméliser." },
            { title: "Sauter les champignons", text: "Chauffer l'huile d'olive dans une poêle à feu vif. Disposer les champignons en une seule couche sans les superposer. Cuire 3 à 4 minutes sans remuer pour qu'ils caramélisent. Retourner et cuire 2 minutes. Saler en fin de cuisson." },
            { title: "Assaisonner les champignons", text: "Hors du feu, ajouter un filet de jus de citron et du thym frais si disponible. Mélanger délicatement. Les champignons doivent être dorés et parfumés." },
            { title: "Préparer les toasts", text: "Toaster les tranches de pain complet. Tartiner chaque tranche de ricotta en couche généreuse. Disposer quelques feuilles d'épinards frais." },
            { title: "Assembler et servir", text: "Disposer les champignons caramélisés sur la ricotta. Poivrer généreusement au moulin. Ajouter quelques copeaux de parmesan et un filet d'huile d'olive si désiré." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les champignons sont très peu caloriques (22 cal/100g) et riches en protéines végétales et en vitamine D. Ne les superposez pas dans la poêle : ils doivent griller, pas bouillir." },
            { type: "red", title: "Erreur à éviter", text: "Ne jamais laver les champignons sous l'eau courante : ils sont des éponges et absorberaient l'eau, rendant impossible une belle caramélisation. Utilisez un papier humide." }
        ]
    },

    {
        id: "wrap-scramble-tofu-legumes",
        name: "Wrap Scramble Tofu-Légumes",
        subtitle: "100% végétal • Façon omelette vegan",
        emoji: "🌯",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Vegan","Protéiné","Express"],
        ingredients: [
            { id: "tofu", name: "Tofu ferme", detail: "Émietté à la fourchette", emoji: "🌱", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "tortilla_ble", name: "Tortilla blé complet", detail: "1 wrap", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En dés", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Quelques gouttes", emoji: "🥢", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Émietter le tofu", text: "Égoutter et presser le tofu ferme entre deux torchons pour retirer l'excès d'eau. L'émietter grossièrement à la fourchette pour imiter la texture des œufs brouillés. Ajouter une pincée de curcuma pour la couleur jaune." },
            { title: "Cuire les légumes", text: "Chauffer l'huile d'olive dans une poêle à feu moyen-vif. Faire sauter le poivron en dés et les champignons émincés pendant 3 à 4 minutes. Ils doivent être tendres et légèrement dorés." },
            { title: "Cuire le tofu brouillé", text: "Ajouter le tofu émietté dans la poêle. Cuire 4 à 5 minutes en remuant régulièrement. Ajouter la sauce soja, du poivre noir et de la levure nutritionnelle si disponible pour un goût fromager." },
            { title: "Ajouter les épinards", text: "Incorporer les épinards frais dans la poêle. Remuer 1 minute jusqu'à ce qu'ils soient juste tombés. Le mélange doit être sec et non aqueux." },
            { title: "Garnir et rouler le wrap", text: "Tiédir la tortilla 20 secondes à la poêle. Garnir avec le scramble tofu-légumes. Rouler serré en repliant d'abord les côtés. Couper en diagonale et servir chaud." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le curcuma n'est pas qu'un colorant : c'est un puissant anti-inflammatoire. Ajoutez du poivre noir pour multiplier par 20 son absorption. Le tofu ferme apporte autant de protéines qu'un œuf." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas sauter l'étape de pressage du tofu : s'il est trop humide, le scramble sera aqueux et fade au lieu d'être doré et savoureux." }
        ]
    },

    {
        id: "pancakes-sales-courgette",
        name: "Pancakes Salés Courgette-Parmesan",
        subtitle: "Moelleux et savoureux • Idéal brunch",
        emoji: "🥞",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Brunch"],
        ingredients: [
            { id: "courgette", name: "Courgette", detail: "Râpée et essorée", emoji: "🥒", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "oeuf", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "Mixés en farine", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "carb" },
            { id: "parmesan", name: "Parmesan", detail: "Râpé finement", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "Pour servir", emoji: "🥛", baseQty: 40, unit: "g", scalable: false, role: "protein" },
            { id: "tomate", name: "Tomates cerises", detail: "En accompagnement", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la courgette", text: "Râper la courgette sans l'éplucher. La placer dans un torchon propre et bien l'essorer en la pressant fortement pour extraire toute l'eau. C'est l'étape la plus importante pour des pancakes qui tiennent." },
            { title: "Préparer la pâte", text: "Dans un saladier, battre les œufs. Ajouter les flocons d'avoine mixés en farine, le parmesan râpé et la courgette essorée. Saler, poivrer et ajouter une pincée de muscade. Mélanger pour obtenir une pâte épaisse." },
            { title: "Cuire les pancakes", text: "Chauffer une poêle antiadhésive à feu moyen. Former des petits pancakes épais avec une cuillère à soupe. Cuire 3 minutes par face à feu moyen. Ils doivent être bien dorés et fermes." },
            { title: "Préparer l'accompagnement", text: "Couper les tomates cerises en deux. Assaisonner le fromage blanc avec du sel, du poivre et des herbes fraîches (ciboulette ou basilic)." },
            { title: "Dresser et servir", text: "Empiler les pancakes dans l'assiette. Servir avec le fromage blanc aux herbes et les tomates cerises. Ces pancakes sont aussi excellents froids le lendemain." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les flocons d'avoine remplacent la farine classique et apportent plus de fibres et de protéines. Mixez-les en farine pour une texture lisse, ou laissez-les entiers pour un côté plus rustique." },
            { type: "red", title: "Erreur à éviter", text: "La courgette contient 95% d'eau : si vous ne l'essorez pas assez, vos pancakes seront mous et impossibles à retourner. Pressez-la comme si votre vie en dépendait." }
        ]
    },

    {
        id: "pita-houmous-oeuf-legumes",
        name: "Pita Houmous Œuf Grillé",
        subtitle: "Méditerranéen • Complet et protéiné",
        emoji: "🥙",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Méditerranéen","Protéiné"],
        ingredients: [
            { id: "pain_pita", name: "Pain pita complet", detail: "Grillé", emoji: "🥙", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "pois_chiches_cuits", name: "Pois chiches", detail: "Pour le houmous express", emoji: "🫘", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "oeuf", name: "Œuf", detail: "Dur ou mollet", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "sauce_tahini", name: "Tahini", detail: "Pour le houmous", emoji: "🥜", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 50, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le houmous express", text: "Écraser les pois chiches à la fourchette ou mixer grossièrement. Ajouter le tahini, le jus de citron, une gousse d'ail écrasée si disponible, du sel et du cumin. Mixer ou écraser jusqu'à obtenir une pâte crémeuse." },
            { title: "Cuire les œufs", text: "Faire bouillir les œufs 6 minutes pour des œufs mollets (jaune encore crémeux) ou 10 minutes pour des œufs durs. Plonger dans l'eau froide puis écaler et couper en deux." },
            { title: "Préparer la salade", text: "Couper le concombre et la tomate en petits dés. Assaisonner avec un filet d'huile d'olive, du sel et du poivre. Ajouter de la menthe ou du persil frais si disponible." },
            { title: "Griller le pita", text: "Passer le pain pita au grille-pain ou quelques secondes de chaque côté sur une poêle sèche brûlante. Il doit être chaud et légèrement croustillant." },
            { title: "Assembler le pita", text: "Ouvrir le pita en deux poches. Tartiner l'intérieur de houmous. Garnir de la salade concombre-tomate et des demi-œufs. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le houmous maison est bien meilleur que celui du commerce (moins de sel, pas d'additifs). Les pois chiches combinés aux œufs offrent un duo protéique complet avec tous les acides aminés essentiels." },
            { type: "red", title: "Erreur à éviter", text: "Pour un œuf mollet parfait à 6 minutes, plongez-le dans l'eau déjà bouillante (pas depuis l'eau froide). Et refroidissez immédiatement dans l'eau glacée pour stopper la cuisson." }
        ]
    },

    {
        id: "assiette-anglaise-legere",
        name: "Assiette Anglaise Légère",
        subtitle: "Full English revisité • Brunch complet",
        emoji: "🍳",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Protéiné","Brunch","Familial","Cheat meal"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "Au plat ou brouillés", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "dinde", name: "Escalope de dinde", detail: "En tranches fines, poêlée", emoji: "🍗", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "champignon", name: "Champignons", detail: "Poêlés", emoji: "🍄", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomates", detail: "Coupées en deux, grillées", emoji: "🍅", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "haricots_rouges", name: "Haricots rouges", detail: "En sauce tomate", emoji: "🫘", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "pain_complet", name: "Pain complet", detail: "1 tranche toastée", emoji: "🍞", baseQty: 30, unit: "g", scalable: true, role: "carb" },
            { id: "epinards", name: "Épinards", detail: "Tombés", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Griller les tomates", text: "Couper les tomates en deux. Les placer côté coupé vers le haut sous le grill du four pendant 5 minutes. Elles doivent être fondantes et légèrement caramélisées sur le dessus." },
            { title: "Cuire la dinde et les champignons", text: "Dans une grande poêle, faire dorer les tranches de dinde 2 minutes de chaque côté. Réserver. Ajouter les champignons émincés et cuire 4 minutes à feu vif. Les saler en fin de cuisson." },
            { title: "Préparer les haricots", text: "Réchauffer les haricots rouges dans une petite casserole avec un peu de sauce tomate, du paprika fumé et du poivre. Cuire 3 minutes à feu doux." },
            { title: "Cuire les œufs et les épinards", text: "Dans la poêle, faire tomber les épinards 1 minute. Les réserver. Cuire les œufs au plat dans la même poêle. Le jaune doit rester coulant." },
            { title: "Dresser l'assiette anglaise", text: "Disposer tous les éléments sur une grande assiette : les œufs au centre, la dinde, les champignons, les tomates grillées, les haricots et les épinards autour. Ajouter le toast. Poivrer au moulin." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette version remplace le bacon et les saucisses par de la dinde (6x moins de gras) et les beans classiques trop sucrés par des haricots rouges nature. Le résultat est aussi satisfaisant pour 3x moins de calories." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser de baked beans du commerce souvent chargés en sucre (jusqu'à 5g par portion). Les haricots rouges nature avec du paprika fumé offrent la même saveur sans le sucre." }
        ]
    },

    {
        id: "galette-sarrasin-chevre-epinards",
        name: "Galette Sarrasin Chèvre-Épinards",
        subtitle: "Bretonne revisitée • Fromage fondant",
        emoji: "🥞",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten"],
        ingredients: [
            { id: "galette_sarrasin", name: "Galette de sarrasin", detail: "Prête à l'emploi", emoji: "🥞", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "chevre_frais", name: "Chèvre frais", detail: "En rondelles", emoji: "🧀", baseQty: 30, unit: "g", scalable: false, role: "fat" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oeuf", name: "Œuf", detail: "Au plat au centre", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "noix", name: "Noix", detail: "Concassées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "miel", name: "Miel", detail: "Un filet", emoji: "🍯", baseQty: 5, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Tomber les épinards", text: "Faire fondre les épinards frais dans une poêle chaude avec un trait d'eau pendant 2 minutes. Les saler légèrement. Les égoutter et réserver." },
            { title: "Chauffer la galette", text: "Dans une grande poêle ou crêpière, chauffer la galette de sarrasin à feu moyen. Elle doit être souple et chaude." },
            { title: "Garnir la galette", text: "Disposer les épinards tombés au centre de la galette. Répartir les rondelles de chèvre frais par-dessus. Casser l'œuf au centre. Couvrir et cuire 3 minutes pour que le blanc de l'œuf prenne et le chèvre fonde." },
            { title: "Ajouter les noix et le miel", text: "Parsemer les noix concassées et arroser d'un filet de miel. Le contraste chèvre-miel-noix est un classique irrésistible." },
            { title: "Plier et servir", text: "Replier les bords de la galette vers le centre pour former un carré avec l'œuf visible au milieu. Servir immédiatement. Le jaune doit être coulant quand on le perce." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le sarrasin est naturellement sans gluten et riche en protéines (13g/100g). Le duo chèvre-épinards apporte calcium et fer. Le miel en quantité maîtrisée (5g) relève le goût sans impacter les macros." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas cuire le chèvre trop longtemps : il doit être fondant et crémeux, pas coulant et huileux. 3 minutes couvert suffisent." }
        ]
    },

    {
        id: "oeufs-cocotte-legumes",
        name: "Œufs en Cocotte aux Légumes",
        subtitle: "Fondant et onctueux • Cuisson au four",
        emoji: "🥘",
        category: "petit-dej-sale",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Réconfortant"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "Entiers", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "1 cuillère au fond", emoji: "🥛", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais, hachés", emoji: "🥬", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés finement", emoji: "🍄", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Sur le dessus", emoji: "🧀", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "pain_complet", name: "Pain complet", detail: "Mouillettes", emoji: "🍞", baseQty: 30, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four", text: "Préchauffer le four à 180°C. Préparer un plat à gratin rempli d'eau chaude pour le bain-marie (l'eau doit arriver à mi-hauteur des ramequins)." },
            { title: "Préparer les légumes", text: "Faire sauter les champignons émincés à la poêle 3 minutes à feu vif. Ajouter les épinards hachés et cuire 1 minute. Saler et poivrer." },
            { title: "Préparer les ramequins", text: "Déposer une cuillère de crème légère au fond de chaque ramequin. Répartir les champignons et épinards par-dessus. Casser un œuf dans chaque ramequin. Parsemer de fromage râpé." },
            { title: "Cuire au bain-marie", text: "Placer les ramequins dans le plat d'eau chaude. Enfourner pour 12 à 15 minutes. Le blanc doit être pris et le jaune encore coulant et tremblant." },
            { title: "Préparer les mouillettes et servir", text: "Pendant la cuisson, couper le pain complet en bâtonnets et les toaster. Sortir les ramequins du four avec précaution. Servir immédiatement avec les mouillettes pour tremper dans le jaune coulant." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les œufs en cocotte sont une méthode de cuisson très douce qui préserve les qualités nutritionnelles de l'œuf. Le bain-marie assure une cuisson homogène et un jaune parfaitement coulant." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas dépasser 15 minutes de cuisson : le jaune continue de cuire après la sortie du four grâce à la chaleur résiduelle du ramequin. Mieux vaut sortir un peu tôt." }
        ]
    },

    {
        id: "tartine-harissa-oeuf-avocat",
        name: "Tartine Harissa Œuf-Avocat",
        subtitle: "Épicé et crémeux • Tendance food",
        emoji: "🌶️",
        category: "petit-dej-sale",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Protéiné","Épicé","Express"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "2 tranches épaisses, toastées", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oeuf", name: "Œufs", detail: "Brouillés ou au plat", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "avocat", name: "Avocat", detail: "Écrasé", emoji: "🥑", baseQty: 50, unit: "g", scalable: true, role: "fat" },
            { id: "harissa", name: "Harissa", detail: "Pimentée mais pas brûlante", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Quelques gouttes", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "graines_chia", name: "Graines de chia", detail: "Parsemées", emoji: "🌱", baseQty: 3, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer le guacamole express", text: "Écraser l'avocat à la fourchette avec le jus de citron, du sel et du poivre. La texture doit être grossière, pas trop lisse." },
            { title: "Préparer la harissa cream", text: "Dans un petit bol, mélanger la harissa avec une cuillère de yaourt ou fromage blanc si disponible pour adoucir le piment. Sinon, utiliser la harissa pure pour plus de punch." },
            { title: "Cuire les œufs", text: "Faire cuire les œufs brouillés à feu doux en remuant délicatement avec une spatule. Les retirer du feu quand ils sont encore légèrement baveux : ils finiront de cuire hors du feu." },
            { title: "Assembler les tartines", text: "Toaster le pain complet. Étaler l'avocat écrasé sur chaque tranche. Disposer les œufs brouillés par-dessus. Napper de harissa en filet." },
            { title: "Finaliser", text: "Parsemer de graines de chia. Ajouter quelques feuilles de coriandre fraîche si disponible. Le contraste entre l'avocat crémeux, les œufs fondants et la harissa piquante est addictif." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La harissa est un condiment très peu calorique (79 cal/100g) qui booste le métabolisme grâce à la capsaïcine du piment. 5g suffisent pour réveiller les papilles sans brûler." },
            { type: "red", title: "Erreur à éviter", text: "Pour des œufs brouillés crémeux, cuire à feu DOUX et retirer du feu avant qu'ils ne soient complètement pris. Les œufs brouillés trop cuits deviennent secs et caoutchouteux." }
        ]
    },

    {
        id: "lasagnes-courgettes-ricotta",
        name: "Lasagnes Courgettes-Ricotta",
        subtitle: "Cheat meal light • Gratin fondant et crémeux",
        emoji: "🧀",
        category: "dejeuner",
        difficulty: "Avancé",
        time: 45,
        sliderMin: 50,
        sliderMax: 300,
        tags: ["Végétarien","Gourmand","Cheat meal","Familial"],
        ingredients: [
            { id: "pates_cuites", name: "Feuilles de lasagne", detail: "Précuites ou fraîches", emoji: "🍝", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "courgette", name: "Courgettes", detail: "En fines tranches dans la longueur", emoji: "🥒", baseQty: 200, unit: "g", scalable: true, role: "base" },
            { id: "ricotta", name: "Ricotta", detail: "Bien égouttée", emoji: "🧀", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "Passata nature", emoji: "🍅", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "mozzarella", name: "Mozzarella", detail: "En tranches fines", emoji: "🧀", baseQty: 40, unit: "g", scalable: false, role: "fat" },
            { id: "parmesan", name: "Parmesan", detail: "Râpé pour gratiner", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer les courgettes", text: "Couper les courgettes en fines tranches dans la longueur à la mandoline (3mm d'épaisseur). Les faire dégorger 10 minutes avec du sel, puis les éponger soigneusement. Griller à la poêle 1 minute par face." },
            { title: "Préparer la sauce", text: "Faire revenir l'oignon émincé 3 minutes. Ajouter la passata de tomate, du basilic, de l'origan, sel et poivre. Laisser mijoter 10 minutes à feu doux. La sauce doit réduire et épaissir." },
            { title: "Préparer le mélange ricotta-épinards", text: "Faire tomber les épinards 2 minutes à la poêle. Les mélanger avec la ricotta, une pincée de muscade, du sel et du poivre. La garniture doit être crémeuse et bien assaisonnée." },
            { title: "Assembler les lasagnes", text: "Dans un plat à gratin, alterner : sauce tomate, feuilles de lasagne, mélange ricotta-épinards, tranches de courgettes grillées. Répéter 2 à 3 fois. Terminer par la sauce tomate, la mozzarella en tranches et le parmesan." },
            { title: "Cuire au four", text: "Enfourner à 180°C pendant 25 à 30 minutes. Le dessus doit être doré et bouillonnant. Laisser reposer 10 minutes avant de couper pour que les couches se tiennent." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette lasagne utilise la ricotta au lieu de la béchamel classique, divisant les lipides par 3. Les courgettes entre les couches ajoutent du volume et des fibres sans calories." },
            { type: "red", title: "Erreur à éviter", text: "Le repos de 10 minutes après cuisson est obligatoire : si vous coupez immédiatement, les lasagnes s'effondrent en bouillie. La patience est la clé d'un beau dressage." }
        ]
    },

    {
        id: "carbonara-legere",
        name: "Carbonara Allégée",
        subtitle: "Cheat meal italien • Onctueux sans crème",
        emoji: "🍝",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Gourmand","Cheat meal","Italien"],
        ingredients: [
            { id: "pates_cuites", name: "Pâtes complètes", detail: "Spaghetti ou rigatoni", emoji: "🍝", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.5 },
            { id: "jambon_blanc", name: "Jambon blanc", detail: "En lardons épais", emoji: "🥓", baseQty: 50, unit: "g", scalable: true, role: "protein" },
            { id: "oeuf", name: "Œufs", detail: "Jaunes uniquement", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "parmesan", name: "Parmesan", detail: "Fraîchement râpé", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "Pour l'onctuosité", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Cuire les pâtes", text: "Cuire les pâtes complètes al dente dans un grand volume d'eau salée. Réserver 100ml d'eau de cuisson avant d'égoutter. L'eau de cuisson amidonnée est essentielle pour la sauce." },
            { title: "Préparer la sauce carbonara", text: "Dans un bol, battre les jaunes d'œufs avec le parmesan râpé et le fromage blanc. Poivrer généreusement au moulin (le poivre est essentiel dans une vraie carbonara). La sauce doit être épaisse et lisse." },
            { title: "Faire revenir le jambon", text: "Couper le jambon blanc en lardons épais. Les faire rissoler à la poêle sans ajout de matière grasse pendant 3 à 4 minutes. Ils doivent être dorés et légèrement croustillants." },
            { title: "Assembler la carbonara", text: "Égoutter les pâtes et les verser dans la poêle avec les lardons hors du feu. Ajouter la sauce œuf-parmesan et remuer vigoureusement. Ajouter l'eau de cuisson cuillère par cuillère pour obtenir une sauce crémeuse qui nappe les pâtes." },
            { title: "Servir immédiatement", text: "La carbonara n'attend pas : servir aussitôt dans des assiettes chaudes. Ajouter un tour de moulin à poivre et quelques copeaux de parmesan. La sauce doit être crémeuse et brillante, jamais figée." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le fromage blanc 0% remplace la crème que beaucoup ajoutent (à tort) dans la carbonara. Le résultat est aussi crémeux grâce à l'émulsion œuf-parmesan-eau de cuisson, la vraie technique italienne." },
            { type: "red", title: "Erreur à éviter", text: "Ne JAMAIS ajouter la sauce œuf-parmesan sur le feu : les œufs coaguleraient et vous obtiendriez des pâtes aux œufs brouillés. La chaleur résiduelle des pâtes suffit à cuire la sauce." }
        ]
    },

    {
        id: "blanquette-dinde-legumes",
        name: "Blanquette de Dinde aux Légumes",
        subtitle: "Classique français allégé • Sauce blanche onctueuse",
        emoji: "🍗",
        category: "dejeuner",
        difficulty: "Avancé",
        time: 40,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","Classique","Réconfortant","Familial"],
        ingredients: [
            { id: "dinde", name: "Escalope de dinde", detail: "En gros morceaux", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "carotte", name: "Carottes", detail: "En rondelles épaisses", emoji: "🥕", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Entiers ou coupés en deux", emoji: "🍄", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "poireaux", name: "Poireaux", detail: "En tronçons", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Piqué de clous de girofle", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "Pour la sauce", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Pour la finition", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "Cuit à part", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 }
        ],
        options: [],
        steps: [
            { title: "Préparer le bouillon", text: "Placer les morceaux de dinde dans une cocotte avec l'oignon piqué de clous de girofle, un bouquet garni (thym, laurier, persil). Couvrir d'eau froide. Porter à ébullition et écumer. Réduire le feu et laisser frémir 10 minutes." },
            { title: "Ajouter les légumes", text: "Ajouter les carottes en rondelles et les tronçons de poireaux dans le bouillon. Poursuivre la cuisson 15 minutes à feu doux. Les légumes doivent être tendres mais pas en bouillie." },
            { title: "Cuire les champignons à part", text: "Dans une poêle, faire sauter les champignons à feu vif 3 minutes. Les ajouter dans la cocotte en fin de cuisson pour qu'ils gardent leur texture." },
            { title: "Préparer la sauce blanche", text: "Prélever 200ml de bouillon de cuisson. Hors du feu, mélanger avec la crème légère, un jaune d'œuf si souhaité et le jus de citron. Reverser dans la cocotte et remuer. La sauce doit napper le dos d'une cuillère." },
            { title: "Servir avec le riz", text: "Vérifier l'assaisonnement en sel et poivre. Servir la blanquette dans des assiettes creuses avec le riz basmati à côté. Parsemer de persil frais. La sauce doit être crémeuse et acidulée." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La dinde remplace le veau de la blanquette classique : 3x moins de lipides pour autant de protéines. La crème à 15% remplace la crème épaisse à 30%. Le résultat est tout aussi onctueux." },
            { type: "red", title: "Erreur à éviter", text: "Ne jamais faire bouillir la sauce après ajout de la crème et du citron : elle tournerait. La sauce doit juste être tiédie pour épaissir, pas portée à ébullition." }
        ]
    },

    {
        id: "pizza-tortilla-poulet",
        name: "Pizza Tortilla Poulet-Légumes",
        subtitle: "Pizza express sur base tortilla • Croustillante",
        emoji: "🍕",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Express","Gourmand","Cheat meal"],
        ingredients: [
            { id: "tortilla_ble", name: "Tortilla blé complet", detail: "Grande, comme base de pizza", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "poulet_grille", name: "Poulet grillé", detail: "Émincé", emoji: "🍗", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "En base", emoji: "🍅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "mozzarella", name: "Mozzarella", detail: "En tranches ou râpée", emoji: "🧀", baseQty: 40, unit: "g", scalable: false, role: "fat" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En fines lanières", emoji: "🌶️", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés finement", emoji: "🍄", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "En anneaux fins", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four", text: "Préchauffer le four à 220°C avec une plaque de cuisson à l'intérieur. La plaque chaude assurera une base ultra-croustillante." },
            { title: "Préparer la base", text: "Poser la tortilla sur un papier cuisson. Étaler la sauce tomate en couche fine en laissant un bord de 1cm. Répartir les lanières de poivron, les champignons émincés et les anneaux d'oignon." },
            { title: "Ajouter le poulet et le fromage", text: "Disposer le poulet émincé sur toute la surface. Répartir la mozzarella en morceaux irréguliers. Ajouter un filet d'huile d'olive et de l'origan." },
            { title: "Cuire la pizza tortilla", text: "Glisser la pizza sur la plaque chaude dans le four. Cuire 8 à 10 minutes. Le fromage doit être fondu et bouillonnant, la tortilla croustillante et dorée sur les bords." },
            { title: "Servir", text: "Sortir du four et laisser reposer 2 minutes. Ajouter quelques feuilles de roquette fraîche et un filet de vinaigre balsamique si désiré. Couper en parts et servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La tortilla complète comme base de pizza divise les glucides par 2 par rapport à une pâte à pizza classique, tout en étant plus croustillante. C'est le cheat meal parfait des sportifs." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas surcharger de garniture : la tortilla est fine et deviendra détrempée si vous en mettez trop. Moins c'est plus pour une base croustillante." }
        ]
    },

    {
        id: "shawarma-bowl-poulet",
        name: "Shawarma Bowl Poulet",
        subtitle: "Street food libanaise • Épicé et parfumé",
        emoji: "🥙",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Protéiné","Sans gluten","Épicé"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "Émincé, mariné aux épices", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "Parfumé au curcuma", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "Émincé en pickles express", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "salade_verte", name: "Salade", detail: "Iceberg émincée", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Sauce blanche", emoji: "🥛", baseQty: 40, unit: "g", scalable: false, role: "protein" },
            { id: "sauce_sriracha", name: "Sauce sriracha", detail: "Quelques gouttes", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Mariner le poulet", text: "Émincer le poulet en fines lanières. Le mélanger avec du cumin, du paprika, du curcuma, de l'ail en poudre, un filet de jus de citron et une pincée de sel. Laisser mariner 10 minutes minimum (ou toute la nuit au frigo)." },
            { title: "Cuire le poulet shawarma", text: "Chauffer une poêle ou un grill à feu vif. Cuire les lanières de poulet marinées 3 à 4 minutes de chaque côté. Le poulet doit être bien caramélisé avec des bords légèrement noircis, comme au shawarma." },
            { title: "Préparer le riz au curcuma", text: "Réchauffer le riz avec une pincée de curcuma et un filet d'huile d'olive. Égrener à la fourchette." },
            { title: "Préparer les pickles et la sauce", text: "Émincer finement l'oignon rouge et le faire mariner dans du vinaigre et du sel 5 minutes. Mélanger le yaourt grec avec un trait de citron, de l'ail et du sel pour la sauce blanche." },
            { title: "Assembler le bowl", text: "Disposer le riz au curcuma au fond du bol. Ajouter le poulet shawarma chaud, la salade émincée, les dés de concombre et tomate, les pickles d'oignon. Napper de sauce blanche et de quelques gouttes de sriracha." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La marinade aux épices donne un goût intense sans ajout de matière grasse. Le yaourt grec en sauce remplace les sauces grasses du shawarma de rue. Résultat : même saveur, moitié moins de calories." },
            { type: "red", title: "Erreur à éviter", text: "Pour un goût shawarma authentique, la poêle doit être brûlante. Si elle est trop froide, le poulet va bouillir au lieu de griller et n'aura pas les bords caramélisés caractéristiques." }
        ]
    },

    {
        id: "ratatouille-provencale-oeuf",
        name: "Ratatouille Provençale et Œuf Poché",
        subtitle: "Classique du Sud revisité • Légumes fondants",
        emoji: "🍆",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 40,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Végétarien","Sans gluten","Classique","Provençal"],
        ingredients: [
            { id: "aubergine", name: "Aubergine", detail: "En dés", emoji: "🍆", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "courgette", name: "Courgette", detail: "En dés", emoji: "🥒", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En morceaux", emoji: "🌶️", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomates", detail: "Mûres, concassées", emoji: "🍅", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "oeuf", name: "Œuf", detail: "Poché sur la ratatouille", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Vierge extra", emoji: "🫒", baseQty: 8, unit: "g", scalable: false, role: "fat" },
            { id: "pain_complet", name: "Pain complet", detail: "En croûtons grillés", emoji: "🍞", baseQty: 30, unit: "g", scalable: true, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Préparer les légumes", text: "Couper l'aubergine, la courgette et le poivron en dés réguliers de 2cm. Émincer l'oignon. Concasser les tomates. Pour une coupe propre, chaque légume doit être de taille similaire." },
            { title: "Cuire les légumes séparément", text: "La clé d'une bonne ratatouille : cuire chaque légume séparément. D'abord l'aubergine 5 min avec un peu d'huile (elle absorbe tout), puis le poivron 4 min, puis la courgette 3 min. Réserver chaque légume." },
            { title: "Assembler la ratatouille", text: "Faire revenir l'oignon 3 minutes. Ajouter les tomates concassées, du thym, du laurier, de l'ail émincé. Cuire 10 minutes. Remettre tous les légumes réservés. Cuire doucement 10 minutes couvert." },
            { title: "Pocher les œufs", text: "Créer un puits dans la ratatouille et y casser les œufs directement. Couvrir et cuire 4 à 5 minutes à feu doux. Les blancs doivent être pris et les jaunes encore coulants." },
            { title: "Servir avec les croûtons", text: "Couper le pain complet en petits cubes et les griller à la poêle sèche. Servir la ratatouille avec les œufs pochés, les croûtons et un filet d'huile d'olive crue. Parsemer de basilic frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La ratatouille est un concentré de vitamines et de fibres pour très peu de calories. L'œuf poché directement dedans transforme un plat de légumes en repas complet et protéiné." },
            { type: "red", title: "Erreur à éviter", text: "Cuire tous les légumes ensemble donne une bouillie informe. La clé d'une ratatouille réussie est de cuire chaque légume séparément pour maîtriser sa cuisson, puis de les assembler." }
        ]
    },

    {
        id: "tikka-masala-poulet",
        name: "Tikka Masala Poulet",
        subtitle: "Curry indien crémeux • Épicé et parfumé",
        emoji: "🍛",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","Épicé","International"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "En morceaux marinés", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Pour la marinade", emoji: "🥛", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "Passata", emoji: "🍅", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Finement haché", emoji: "🧅", baseQty: 60, unit: "g", scalable: false, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "Pour l'onctuosité", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "pate_curry", name: "Pâte de curry", detail: "Doux ou fort selon goût", emoji: "🌶️", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "Cuit vapeur", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "epinards", name: "Épinards", detail: "Frais, ajoutés en fin", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Mariner le poulet", text: "Couper le poulet en cubes de 3cm. Le mélanger avec le yaourt grec, le curcuma, le garam masala, le paprika, le cumin et du sel. Laisser mariner 15 minutes minimum (idéalement 2h au frigo)." },
            { title: "Saisir le poulet", text: "Chauffer une poêle à feu vif. Faire dorer les morceaux de poulet mariné 3 à 4 minutes sur toutes les faces. Ils doivent être bien colorés mais pas forcément cuits à cœur (ils finiront dans la sauce). Réserver." },
            { title: "Préparer la sauce tikka", text: "Dans la même poêle, faire fondre l'oignon haché 5 minutes à feu moyen. Ajouter la pâte de curry et cuire 1 minute en remuant. Verser la sauce tomate et laisser mijoter 10 minutes." },
            { title: "Finir la cuisson", text: "Remettre le poulet dans la sauce. Ajouter la crème légère et les épinards. Cuire 5 minutes à feu doux. La sauce doit être onctueuse et napper les morceaux de poulet." },
            { title: "Servir avec le riz", text: "Dresser le riz basmati dans une assiette creuse. Verser le tikka masala à côté. Parsemer de coriandre fraîche si disponible et accompagner d'un quartier de citron." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La marinade au yaourt attendrit la viande et ajoute des protéines. La crème à 15% remplace la crème épaisse indienne. Résultat : un tikka masala avec 50% de lipides en moins." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas cuire la pâte de curry crue dans la sauce : elle doit d'abord être torréfiée 1 minute dans l'huile pour libérer ses arômes. C'est ce qui fait la différence entre un curry fade et un curry parfumé." }
        ]
    },

    {
        id: "bowl-bibimbap-boeuf",
        name: "Bibimbap Bœuf-Légumes",
        subtitle: "Coréen • Coloré et protéiné",
        emoji: "🍚",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","International","Équilibré"],
        ingredients: [
            { id: "boeuf_hache_5", name: "Bœuf haché 5%", detail: "Mariné à la coréenne", emoji: "🥩", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz", detail: "Cuit, chaud", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "carotte", name: "Carotte", detail: "Râpée ou en julienne", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "courgette", name: "Courgette", detail: "En julienne", emoji: "🥒", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Sautés au sésame", emoji: "🥬", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Shiitake si possible", emoji: "🍄", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "oeuf", name: "Œuf", detail: "Au plat", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Pour la marinade", emoji: "🥢", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_sriracha", name: "Sauce sriracha", detail: "En remplacement du gochujang", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Mariner le bœuf", text: "Mélanger le bœuf haché avec la moitié de la sauce soja, une cuillère d'ail émincé et une pincée de sucre. Laisser mariner pendant la préparation des légumes." },
            { title: "Préparer chaque légume séparément", text: "Dans la même poêle, cuire chaque légume séparément 2 à 3 minutes : d'abord les carottes, puis la courgette, puis les champignons, puis les épinards. Assaisonner chacun d'un trait de sauce soja et de graines de sésame." },
            { title: "Cuire le bœuf", text: "Saisir le bœuf mariné à feu vif dans la poêle pendant 4 minutes en l'émiettant. Il doit être bien caramélisé et légèrement croustillant." },
            { title: "Cuire l'œuf au plat", text: "Faire un œuf au plat bien croustillant sur les bords avec un jaune coulant. C'est essentiel au bibimbap : le jaune coulant fait office de sauce." },
            { title: "Assembler le bibimbap", text: "Placer le riz chaud au centre d'un grand bol. Disposer chaque légume et le bœuf en sections autour du riz, en éventail de couleurs. Poser l'œuf au plat au centre. Servir avec la sriracha à côté. Mélanger avant de manger." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le bibimbap est l'un des plats les plus équilibrés au monde : protéines, glucides, légumes variés et bonnes graisses de l'œuf. Chaque couleur de légume apporte des micronutriments différents." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas mélanger les légumes avant de servir : chaque composant doit être visible et distinct. C'est au moment de manger qu'on mélange tout avec le jaune d'œuf coulant." }
        ]
    },

    {
        id: "couscous-legumes-poulet",
        name: "Couscous Poulet aux 5 Légumes",
        subtitle: "Classique nord-africain • Familial et complet",
        emoji: "🍲",
        category: "dejeuner",
        difficulty: "Avancé",
        time: 45,
        sliderMin: 50,
        sliderMax: 300,
        tags: ["Sans gluten","Familial","Classique"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "Cuisses ou blancs, en morceaux", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "couscous_cuit", name: "Couscous", detail: "Semoule complète", emoji: "🌾", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "carotte", name: "Carottes", detail: "En gros morceaux", emoji: "🥕", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "courgette", name: "Courgettes", detail: "En gros morceaux", emoji: "🥒", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "pois_chiches_cuits", name: "Pois chiches", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oignon", name: "Oignon", detail: "En quartiers", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "concentre_tomate", name: "Concentré de tomate", detail: "", emoji: "🍅", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "harissa", name: "Harissa", detail: "À part pour doser", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Faire revenir le poulet", text: "Saisir les morceaux de poulet dans une grande cocotte à feu vif pendant 5 minutes. Les colorer sur toutes les faces pour développer les saveurs. Réserver." },
            { title: "Préparer le bouillon", text: "Faire revenir l'oignon en quartiers 3 minutes. Ajouter le concentré de tomate et cuire 1 minute. Mouiller avec 500ml d'eau, ajouter le ras el hanout, sel, poivre. Remettre le poulet. Porter à ébullition." },
            { title: "Cuire les légumes", text: "Ajouter les carottes en premier (10 min d'avance car plus longues à cuire). Puis les courgettes. Les légumes doivent être tendres mais garder leur forme. Ajouter les pois chiches en fin de cuisson." },
            { title: "Préparer la semoule", text: "Verser la semoule dans un saladier. Arroser d'eau bouillante (1,5 fois son volume). Couvrir et laisser gonfler 5 minutes. Égrener à la fourchette en ajoutant un filet d'huile d'olive." },
            { title: "Servir le couscous", text: "Dresser la semoule dans une grande assiette creuse. Disposer le poulet et les légumes par-dessus. Arroser de bouillon. Servir la harissa à part pour que chacun dose le piment." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le couscous est un plat complet et équilibré quand il est bien dosé. La semoule complète apporte plus de fibres et un index glycémique plus bas que la semoule blanche." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas cuire les courgettes trop longtemps : elles deviennent en purée en 10 minutes. Les ajouter 8 minutes avant la fin pour qu'elles gardent leur texture." }
        ]
    },

    {
        id: "buddha-bowl-tempeh-tahini",
        name: "Buddha Bowl Tempeh-Tahini",
        subtitle: "100% végétal • Ultra-complet",
        emoji: "🌱",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Sans gluten","Haute protéine"],
        ingredients: [
            { id: "tempeh", name: "Tempeh", detail: "En tranches, mariné", emoji: "🌱", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "quinoa_cuit", name: "Quinoa", detail: "Cuit, tiède", emoji: "🌾", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 1.8 },
            { id: "patate_douce_cuite", name: "Patate douce", detail: "Rôtie au four", emoji: "🍠", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "chou_kale", name: "Chou kale", detail: "Massé au citron", emoji: "🥬", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 40, unit: "g", scalable: true, role: "fat" },
            { id: "sauce_tahini", name: "Sauce tahini", detail: "Diluée au citron", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Pour le tempeh", emoji: "🥢", baseQty: 8, unit: "ml", scalable: false, role: "base" },
            { id: "graines_chia", name: "Graines de chia", detail: "En topping", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Rôtir la patate douce", text: "Couper la patate douce en cubes de 2cm. Disposer sur une plaque de four avec un filet d'huile d'olive, du paprika fumé et du sel. Rôtir à 200°C pendant 20 minutes jusqu'à ce qu'elles soient tendres et caramélisées." },
            { title: "Mariner et cuire le tempeh", text: "Couper le tempeh en tranches de 1cm. Le mariner avec la sauce soja, un trait de sirop d'érable et du cumin. Cuire à la poêle 3 minutes de chaque côté à feu moyen-vif jusqu'à ce qu'il soit croustillant et doré." },
            { title: "Préparer le kale", text: "Retirer les nervures du kale et le découper en morceaux. Le placer dans un bol et le masser 2 minutes avec un filet d'huile d'olive et du jus de citron. Le kale doit devenir tendre et brillant." },
            { title: "Préparer la sauce tahini", text: "Diluer le tahini avec du jus de citron, un peu d'eau tiède, une pointe d'ail et du sel. La sauce doit être fluide et crémeuse, assez liquide pour être versée." },
            { title: "Assembler le buddha bowl", text: "Disposer le quinoa au fond d'un grand bol. Ajouter les cubes de patate douce rôtie, le tempeh croustillant, le kale massé et les tranches d'avocat en sections. Napper de sauce tahini et parsemer de graines de chia." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le tempeh est la meilleure source de protéines végétales complètes : 20g de protéines pour 100g, plus que le tofu. Combiné au quinoa (protéine complète), ce bowl apporte tous les acides aminés essentiels." },
            { type: "red", title: "Erreur à éviter", text: "Le kale cru non massé est fibreux et amer. Le massage au citron et à l'huile brise les fibres et transforme sa texture : c'est obligatoire pour un résultat agréable." }
        ]
    },

    {
        id: "gratin-dauphinois-allege",
        name: "Gratin Dauphinois Allégé",
        subtitle: "Cheat meal français • Crémeux et gratiné",
        emoji: "🥔",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 50,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Végétarien","Sans gluten","Cheat meal","Classique"],
        ingredients: [
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "En fines rondelles", emoji: "🥔", baseQty: 200, unit: "g", scalable: true, role: "carb", rawRatio: 1 },
            { id: "lait_demi", name: "Lait demi-écrémé", detail: "Infusé à l'ail et muscade", emoji: "🥛", baseQty: 150, unit: "ml", scalable: true, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "Au lieu de crème épaisse", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Pour gratiner", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "poulet_grille", name: "Poulet grillé", detail: "Émincé, en option", emoji: "🍗", baseQty: 100, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Infuser le lait", text: "Faire chauffer le lait avec 2 gousses d'ail écrasées, de la noix de muscade râpée, du sel et du poivre. Porter juste au frémissement puis retirer du feu et laisser infuser 10 minutes. Retirer l'ail." },
            { title: "Préparer les pommes de terre", text: "Éplucher les pommes de terre et les couper en rondelles très fines (2-3mm) à la mandoline si possible. Ne pas les rincer pour conserver l'amidon qui liera la sauce." },
            { title: "Assembler le gratin", text: "Dans un plat à gratin, alterner des couches de rondelles de pommes de terre et de poulet émincé. Verser le lait infusé par-dessus. Ajouter la crème légère sur le dessus." },
            { title: "Gratiner", text: "Parsemer le fromage râpé sur le dessus. Enfourner à 180°C pendant 35 à 40 minutes. Les pommes de terre doivent être fondantes quand on pique avec un couteau et le dessus bien doré." },
            { title: "Servir", text: "Laisser reposer 5 minutes avant de servir. Accompagner d'une salade verte assaisonnée de vinaigre balsamique pour le contraste frais/chaud. Le gratin doit être crémeux et fondant." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce gratin utilise du lait demi-écrémé + crème à 15% au lieu de crème entière à 30%. Le poulet en fait un plat complet. Résultat : un gratin réconfortant avec 40% de lipides en moins." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas rincer les pommes de terre après les avoir coupées : c'est l'amidon en surface qui épaissit le lait et donne la texture crémeuse caractéristique du gratin dauphinois." }
        ]
    },

    {
        id: "poke-bowl-gambas-mangue",
        name: "Poké Bowl Gambas-Mangue",
        subtitle: "Tropical et marin • Frais et coloré",
        emoji: "🦐",
        category: "dejeuner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Protéiné","Tropical"],
        ingredients: [
            { id: "gambas", name: "Gambas", detail: "Décortiquées, cuites", emoji: "🦐", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "Vinaigré", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "mangue", name: "Mangue", detail: "En dés", emoji: "🥭", baseQty: 80, unit: "g", scalable: true, role: "carb" },
            { id: "avocat", name: "Avocat", detail: "En tranches", emoji: "🥑", baseQty: 40, unit: "g", scalable: true, role: "fat" },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "edamame", name: "Edamame", detail: "Décortiqués", emoji: "🫛", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Allégée en sel", emoji: "🥢", baseQty: 8, unit: "ml", scalable: false, role: "base" },
            { id: "graines_chia", name: "Graines de chia", detail: "En topping", emoji: "🌱", baseQty: 3, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer le riz vinaigré", text: "Mélanger le riz cuit encore tiède avec un trait de vinaigre de riz (ou vinaigre blanc doux), une pincée de sel et un trait de sirop d'érable. Égrener à la fourchette et laisser refroidir." },
            { title: "Cuire les gambas", text: "Saisir les gambas à la poêle à feu vif 1 à 2 minutes de chaque côté avec un filet de sauce soja et une pointe de gingembre frais râpé. Elles doivent être rosées et juste cuites." },
            { title: "Préparer les garnitures", text: "Couper la mangue et le concombre en dés réguliers. Trancher l'avocat finement. Décortiquer les edamame si nécessaire." },
            { title: "Préparer la sauce", text: "Mélanger la sauce soja avec un trait d'huile de sésame, du jus de citron vert et du gingembre râpé. La sauce doit être équilibrée entre salé, acide et umami." },
            { title: "Assembler le poké bowl", text: "Placer le riz vinaigré au fond du bol. Disposer les gambas, la mangue, l'avocat, le concombre et les edamame en sections colorées. Arroser de sauce et parsemer de graines de chia et de sésame." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les gambas sont ultra-protéinées (18g/100g) et ultra-light (85 cal/100g). Avec les edamame, ce bowl apporte plus de 35g de protéines. La mangue apporte vitamines et sucres naturels." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas surcuire les gambas : 1 à 2 minutes par face suffisent. Surcuites, elles deviennent caoutchouteuses et sèches. Dès qu'elles sont rosées, c'est prêt." }
        ]
    },

    {
        id: "burger-saumon-avocat",
        name: "Burger Saumon-Avocat",
        subtitle: "Gourmet et protéiné • Cheat meal marin",
        emoji: "🍔",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Gourmand","Cheat meal","Protéiné"],
        ingredients: [
            { id: "saumon", name: "Saumon", detail: "Pavé frais, émietté en steak", emoji: "🐟", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "pain_complet", name: "Pain burger complet", detail: "Coupé en deux", emoji: "🍞", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "avocat", name: "Avocat", detail: "Écrasé en guacamole", emoji: "🥑", baseQty: 50, unit: "g", scalable: true, role: "fat" },
            { id: "salade_verte", name: "Salade", detail: "Feuilles croquantes", emoji: "🥬", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomate", detail: "Rondelle épaisse", emoji: "🍅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "Rondelle fine", emoji: "🧅", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Dans le guacamole", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "moutarde", name: "Moutarde", detail: "À l'ancienne", emoji: "🟡", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le steak de saumon", text: "Hacher grossièrement le pavé de saumon au couteau (ne pas mixer). Former un steak compact avec les mains. Saler et poivrer. Le steak doit être épais de 2cm environ." },
            { title: "Cuire le steak de saumon", text: "Saisir le steak de saumon à la poêle antiadhésive à feu moyen-vif, 3 minutes par face. L'extérieur doit être bien doré et croustillant, l'intérieur encore rosé et moelleux." },
            { title: "Préparer le guacamole express", text: "Écraser l'avocat à la fourchette avec le jus de citron, du sel, du poivre et quelques gouttes de Tabasco si désiré. La texture doit rester grossière." },
            { title: "Préparer le bun", text: "Toaster les deux moitiés du pain burger. Tartiner la moutarde à l'ancienne sur la base." },
            { title: "Assembler le burger", text: "Sur la base du bun, disposer les feuilles de salade, la rondelle de tomate, le steak de saumon, le guacamole et la rondelle d'oignon rouge. Refermer avec le chapeau du bun. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le saumon haché fait un steak de burger naturellement juteux grâce à ses bonnes graisses (oméga-3). Pas besoin d'ajouter de matière grasse. Un burger gourmet à 400 cal environ." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas mixer le saumon au robot : vous obtiendriez une purée. Hacher au couteau en morceaux irréguliers pour garder de la texture et du moelleux." }
        ]
    },

    {
        id: "curry-pois-chiches-coco",
        name: "Curry Pois Chiches Coco-Épinards",
        subtitle: "Vegan comfort food • Onctueux et parfumé",
        emoji: "🍛",
        category: "dejeuner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Sans gluten","Réconfortant"],
        ingredients: [
            { id: "pois_chiches_cuits", name: "Pois chiches", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "lait_coco", name: "Lait de coco", detail: "Allégé", emoji: "🥥", baseQty: 100, unit: "ml", scalable: true, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Haché", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "pate_curry", name: "Pâte de curry", detail: "Jaune de préférence", emoji: "🌶️", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "tomate", name: "Tomates", detail: "Concassées", emoji: "🍅", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "Cuit vapeur", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 }
        ],
        options: [],
        steps: [
            { title: "Torréfier les épices", text: "Faire revenir l'oignon haché 3 minutes à feu moyen. Ajouter la pâte de curry et cuire 1 minute en remuant. Les arômes doivent se libérer intensément." },
            { title: "Cuire les tomates", text: "Ajouter les tomates concassées. Cuire 5 minutes pour que la sauce réduise et s'épaississe. Le mélange doit devenir plus foncé et plus concentré." },
            { title: "Ajouter le lait de coco et les pois chiches", text: "Verser le lait de coco et ajouter les pois chiches égouttés. Mélanger et laisser mijoter 10 minutes à feu doux. La sauce doit épaissir et enrober les pois chiches." },
            { title: "Ajouter les épinards", text: "Incorporer les épinards frais dans le curry. Remuer 2 minutes jusqu'à ce qu'ils soient tombés. Ajuster l'assaisonnement en sel, poivre et citron vert." },
            { title: "Servir avec le riz", text: "Dresser le riz basmati dans une assiette creuse. Verser le curry de pois chiches à côté. Parsemer de coriandre fraîche et accompagner d'un quartier de citron vert." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les pois chiches apportent 9g de protéines pour 100g et sont riches en fibres. Combinés au riz, ils forment une protéine complète. Le lait de coco allégé réduit les lipides de moitié." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter les épinards trop tôt : ils libèrent de l'eau et diluent la sauce. Les ajouter dans les 2 dernières minutes de cuisson pour garder une sauce concentrée." }
        ]
    },

    {
        id: "wok-seitan-legumes-soja",
        name: "Wok Seitan Légumes au Soja",
        subtitle: "Asiatique vegan • Ultra-protéiné",
        emoji: "🥡",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Express","Haute protéine","Asiatique"],
        ingredients: [
            { id: "seitan", name: "Seitan", detail: "En tranches fines", emoji: "🌱", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "En bouquets", emoji: "🥦", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En lanières", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "En julienne", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Allégée en sel", emoji: "🥢", baseQty: 15, unit: "ml", scalable: false, role: "base" },
            { id: "nouilles_soba_cuites", name: "Nouilles soba", detail: "Cuites", emoji: "🍜", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "sauce_sriracha", name: "Sriracha", detail: "Pour le piquant", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le seitan", text: "Couper le seitan en tranches fines de 5mm. Le saisir à la poêle à feu vif 2 minutes de chaque côté avec un trait de sauce soja. Il doit être bien doré et croustillant. Réserver." },
            { title: "Saisir les légumes au wok", text: "À feu très vif, faire sauter les carottes en julienne 2 minutes, puis les bouquets de brocoli 2 minutes, puis les lanières de poivron 1 minute. Les légumes doivent rester croquants." },
            { title: "Cuire les nouilles soba", text: "Cuire les nouilles soba selon les instructions du paquet (généralement 4 minutes dans l'eau bouillante). Égoutter et rincer à l'eau froide." },
            { title: "Assembler le wok", text: "Remettre le seitan dans le wok avec les légumes. Ajouter les nouilles soba égouttées. Verser la sauce soja restante et la sriracha. Sauter le tout 1 minute à feu vif pour mélanger." },
            { title: "Servir", text: "Servir immédiatement dans un grand bol. Le wok doit être fumant. Ajouter des graines de sésame et de la coriandre fraîche si disponible." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le seitan est le champion des protéines végétales : 28g pour 100g, plus que la viande ! Il est fait de gluten de blé, donc à éviter si intolérant au gluten. Texture très proche de la viande." },
            { type: "red", title: "Erreur à éviter", text: "Le wok doit être BRÛLANT. Si la poêle n'est pas assez chaude, les légumes vont bouillir au lieu de sauter et le seitan ne sera pas croustillant. Travaillez en petites quantités." }
        ]
    },

    {
        id: "salade-thai-boeuf-grille",
        name: "Salade Thaï Bœuf Grillé",
        subtitle: "Fraîche et épicée • Yam Neua",
        emoji: "🥗",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Protéiné","Asiatique"],
        ingredients: [
            { id: "boeuf_hache_5", name: "Steak de bœuf", detail: "Pièce à griller, haché reconstitué", emoji: "🥩", baseQty: 130, unit: "g", scalable: true, role: "protein" },
            { id: "salade_verte", name: "Salade", detail: "Iceberg en chiffonnade", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En fines tranches", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomates cerises", detail: "Coupées en deux", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "Émincé finement", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron vert", detail: "Frais pressé", emoji: "🍋", baseQty: 15, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_nuoc_mam", name: "Sauce nuoc-mâm", detail: "Pour la vinaigrette thaï", emoji: "🥢", baseQty: 8, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_sriracha", name: "Sriracha", detail: "Quelques gouttes", emoji: "🌶️", baseQty: 3, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la vinaigrette thaï", text: "Mélanger le jus de citron vert, le nuoc-mâm, la sriracha et une pointe de sucre ou sirop d'érable. Goûter et ajuster l'équilibre acide-salé-sucré-piquant. La vinaigrette doit être intense et vive." },
            { title: "Cuire le bœuf", text: "Former un steak avec le bœuf haché. Saler et poivrer. Saisir à la poêle brûlante 3 minutes par face pour un steak saignant. Laisser reposer 5 minutes sur une planche, puis trancher finement." },
            { title: "Préparer la salade", text: "Ciseler la salade en chiffonnade. Trancher finement le concombre, couper les tomates en deux, émincer l'oignon rouge. Mélanger tous les légumes dans un grand saladier." },
            { title: "Assembler", text: "Ajouter les tranches de bœuf tiède sur la salade. Arroser de la vinaigrette thaï. Mélanger délicatement. La chaleur du bœuf va tiédir légèrement la salade." },
            { title: "Servir", text: "Dresser dans un bol ou une assiette creuse. Garnir de menthe et coriandre fraîches, de cacahuètes concassées si souhaité. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette salade est le plat parfait en sèche : ultra-protéinée grâce au bœuf, très peu de glucides, et des légumes crus riches en vitamines. La vinaigrette sans huile est presque sans calories." },
            { type: "red", title: "Erreur à éviter", text: "Le repos du bœuf après cuisson est essentiel : si vous tranchez immédiatement, le jus s'échappe et la viande sera sèche. 5 minutes de repos redistribuent les jus uniformément." }
        ]
    },

    {
        id: "paella-fruits-mer-light",
        name: "Paella aux Fruits de Mer Light",
        subtitle: "Espagnole festive • Safranée et généreuse",
        emoji: "🥘",
        category: "dejeuner",
        difficulty: "Avancé",
        time: 40,
        sliderMin: 50,
        sliderMax: 300,
        tags: ["Sans gluten","Familial","Festif"],
        ingredients: [
            { id: "crevettes", name: "Crevettes", detail: "Décortiquées", emoji: "🦐", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "moules", name: "Moules", detail: "Nettoyées", emoji: "🦪", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "calamar", name: "Calamar", detail: "En anneaux", emoji: "🦑", baseQty: 60, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz", detail: "Rond si possible", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En lanières", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "petits_pois", name: "Petits pois", detail: "Surgelés", emoji: "🫛", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Haché", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "concentre_tomate", name: "Concentré de tomate", detail: "", emoji: "🍅", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Citron", detail: "En quartiers pour servir", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Saisir les fruits de mer", text: "Saisir les crevettes et les anneaux de calamar à feu vif 2 minutes. Réserver. Ouvrir les moules à couvert dans un fond d'eau 3 minutes. Filtrer et garder le jus pour le bouillon." },
            { title: "Préparer la base sofrito", text: "Faire revenir l'oignon 3 minutes. Ajouter le poivron en lanières et le concentré de tomate. Cuire 5 minutes. Ajouter une pincée de safran (ou curcuma) et du paprika fumé." },
            { title: "Cuire le riz dans le bouillon", text: "Ajouter le riz cru et le faire nacrer 1 minute. Verser le jus de moules filtré complété d'eau chaude (2x le volume du riz). Cuire à feu moyen sans remuer pendant 15 minutes." },
            { title: "Ajouter les fruits de mer", text: "Quand le riz a presque absorbé tout le liquide, disposer les crevettes, le calamar, les moules et les petits pois sur le dessus. Couvrir et cuire 5 minutes." },
            { title: "Créer le socarrat et servir", text: "Augmenter le feu 2 minutes en fin de cuisson pour créer le socarrat (la croûte dorée au fond). Servir directement dans la poêle avec des quartiers de citron et du persil frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les fruits de mer sont parmi les protéines les plus maigres qui existent. Cette paella apporte 40g+ de protéines pour un apport calorique très modéré. Le safran est aussi un anti-inflammatoire." },
            { type: "red", title: "Erreur à éviter", text: "Règle d'or de la paella : NE JAMAIS remuer le riz pendant la cuisson. C'est cette discipline qui permet la formation du socarrat, la croûte dorée au fond qui fait toute la magie du plat." }
        ]
    },

    {
        id: "bolognese-lentilles-vegan",
        name: "Bolognaise de Lentilles",
        subtitle: "100% vegan • Impossible à distinguer",
        emoji: "🍝",
        category: "dejeuner",
        difficulty: "Facile",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Classique","Familial","Batch cooking"],
        ingredients: [
            { id: "lentilles_cuites", name: "Lentilles", detail: "Vertes ou corail, cuites", emoji: "🫘", baseQty: 150, unit: "g", scalable: true, role: "protein", rawRatio: 2 },
            { id: "pates_cuites", name: "Pâtes complètes", detail: "Spaghetti ou penne", emoji: "🍝", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.5 },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "Passata nature", emoji: "🍅", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Haché finement", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "carotte", name: "Carotte", detail: "Râpée finement", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Hachés grossièrement", emoji: "🍄", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "concentre_tomate", name: "Concentré de tomate", detail: "", emoji: "🍅", baseQty: 15, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le soffritto", text: "Hacher finement l'oignon et la carotte (en brunoise). Faire revenir dans une casserole avec un filet d'huile d'olive pendant 5 minutes. Ce soffritto est la base de toute bolognaise." },
            { title: "Ajouter les champignons", text: "Hacher les champignons grossièrement. Les ajouter au soffritto et cuire 3 minutes à feu vif. Ils apportent l'umami (la saveur de viande) qui remplace le bœuf. Ajouter le concentré de tomate." },
            { title: "Cuire la sauce", text: "Ajouter les lentilles cuites et la passata de tomate. Assaisonner avec de l'origan, du basilic, du sel et du poivre. Laisser mijoter 15 minutes à feu doux en remuant de temps en temps." },
            { title: "Cuire les pâtes", text: "Cuire les pâtes al dente selon les instructions du paquet. Égoutter en réservant un verre d'eau de cuisson." },
            { title: "Assembler et servir", text: "Mélanger les pâtes avec la sauce bolognaise de lentilles. Ajouter un peu d'eau de cuisson si besoin pour lier la sauce. Servir avec de la levure nutritionnelle en remplacement du parmesan." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les lentilles apportent 9g de protéines pour 100g et sont riches en fer et fibres. Les champignons hachés imitent la texture de la viande hachée. Même vos amis carnivores s'y laisseront prendre." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas utiliser les lentilles rouges/corail si vous voulez garder la texture : elles se transforment en purée à la cuisson. Préférez les lentilles vertes du Puy qui gardent leur forme." }
        ]
    },

    {
        id: "tagliatelles-poulet-pesto",
        name: "Tagliatelles Poulet-Pesto",
        subtitle: "Italien express • Savoureux et rapide",
        emoji: "🍝",
        category: "dejeuner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Express","Italien","Gourmand"],
        ingredients: [
            { id: "pates_cuites", name: "Tagliatelles complètes", detail: "Cuites al dente", emoji: "🍝", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.5 },
            { id: "poulet_grille", name: "Poulet", detail: "Émincé", emoji: "🍗", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "pesto", name: "Pesto alla genovese", detail: "1 cuillère à soupe rase", emoji: "🌿", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "tomate", name: "Tomates cerises", detail: "Coupées en deux", emoji: "🍅", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "parmesan", name: "Parmesan", detail: "En copeaux", emoji: "🧀", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "epinards", name: "Pousses d'épinards", detail: "Fraîches", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les pâtes", text: "Cuire les tagliatelles al dente dans un grand volume d'eau salée. Réserver 100ml d'eau de cuisson amidonnée avant d'égoutter." },
            { title: "Saisir le poulet", text: "Émincer le poulet en fines lanières. Les saisir à feu vif 4 minutes dans une poêle chaude. Elles doivent être bien dorées et cuites à cœur." },
            { title: "Faire sauter les tomates", text: "Ajouter les tomates cerises coupées en deux dans la poêle. Cuire 2 minutes à feu vif. Elles doivent être chaudes et légèrement éclatées." },
            { title: "Assembler", text: "Ajouter les pâtes égouttées dans la poêle. Hors du feu, ajouter le pesto et les pousses d'épinards. Mélanger en ajoutant un peu d'eau de cuisson pour obtenir une sauce qui nappe les pâtes." },
            { title: "Servir", text: "Dresser dans une assiette creuse chaude. Parsemer de copeaux de parmesan. Poivrer au moulin. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le pesto est calorique (387 cal/100g) mais une cuillère à soupe rase (15g) suffit pour parfumer tout le plat. L'eau de cuisson amidonnée permet de diluer le pesto sans perdre le goût." },
            { type: "red", title: "Erreur à éviter", text: "Ne jamais chauffer le pesto : il s'oxyde, brunit et perd ses arômes de basilic frais. L'ajouter TOUJOURS hors du feu au dernier moment." }
        ]
    },

    {
        id: "tajine-agneau-legumes",
        name: "Tajine d'Agneau aux Légumes",
        subtitle: "Marocain traditionnel • Fondant et parfumé",
        emoji: "🍲",
        category: "dejeuner",
        difficulty: "Avancé",
        time: 50,
        sliderMin: 50,
        sliderMax: 300,
        tags: ["Sans gluten","Classique","Réconfortant"],
        ingredients: [
            { id: "agneau_gigot", name: "Gigot d'agneau", detail: "En morceaux", emoji: "🍖", baseQty: 130, unit: "g", scalable: true, role: "protein" },
            { id: "carotte", name: "Carottes", detail: "En gros morceaux", emoji: "🥕", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "courgette", name: "Courgettes", detail: "En morceaux", emoji: "🥒", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "En quartiers", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "pois_chiches_cuits", name: "Pois chiches", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "concentre_tomate", name: "Concentré de tomate", detail: "", emoji: "🍅", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "couscous_cuit", name: "Semoule de couscous", detail: "Complète", emoji: "🌾", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "harissa", name: "Harissa", detail: "À part", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Saisir l'agneau", text: "Faire dorer les morceaux d'agneau dans un tajine ou une cocotte à feu vif pendant 5 minutes. Colorer sur toutes les faces pour caraméliser la surface et développer les saveurs." },
            { title: "Préparer la base aromatique", text: "Ajouter les oignons en quartiers, le concentré de tomate, du cumin, du ras el hanout, de la cannelle et du gingembre moulu. Cuire 2 minutes en remuant. Mouiller avec 300ml d'eau chaude." },
            { title: "Mijoter avec les légumes", text: "Ajouter les carottes. Couvrir et laisser mijoter 20 minutes à feu doux. Ajouter les courgettes et les pois chiches. Poursuivre la cuisson 15 minutes. La viande doit être fondante." },
            { title: "Préparer la semoule", text: "Verser la semoule dans un saladier. Arroser d'eau bouillante (1,5x son volume). Couvrir 5 minutes. Égrener à la fourchette avec un filet d'huile d'olive." },
            { title: "Servir le tajine", text: "Vérifier que la viande est tendre à la fourchette. Ajuster l'assaisonnement. Servir le tajine avec la semoule et la harissa à part. Décorer d'amandes effilées et de coriandre fraîche." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "L'agneau apporte du fer héminique (mieux absorbé que le fer végétal) et des protéines de qualité. Le tajine est un mode de cuisson lent et sans ajout de matière grasse qui attendrit la viande naturellement." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas ajouter la courgette en même temps que la carotte : elle cuirait 2x trop longtemps et deviendrait de la bouillie. Respecter l'ordre d'ajout des légumes selon leur temps de cuisson." }
        ]
    },

    {
        id: "salade-falafel-houmous",
        name: "Salade Falafel Maison et Houmous",
        subtitle: "Vegan méditerranéen • Protéines végétales",
        emoji: "🧆",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Méditerranéen","Haute protéine"],
        ingredients: [
            { id: "pois_chiches_cuits", name: "Pois chiches", detail: "Cuits, pour falafels et houmous", emoji: "🫘", baseQty: 180, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_tahini", name: "Tahini", detail: "Pour le houmous", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "salade_verte", name: "Salade", detail: "Mélange de feuilles", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En dés", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En dés", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "Émincé", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais pressé", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer les falafels", text: "Écraser 120g de pois chiches avec de l'oignon haché, du persil, du cumin, de la coriandre moulue, une pincée de bicarbonate et du sel. Former 6 petites boulettes aplaties. Cuire au four à 200°C pendant 20 minutes en retournant à mi-cuisson." },
            { title: "Préparer le houmous express", text: "Mixer les 60g de pois chiches restants avec le tahini, le jus de citron, une gousse d'ail écrasée et 2 cuillères d'eau froide. Mixer jusqu'à obtenir une crème lisse. Saler et ajuster." },
            { title: "Préparer la salade", text: "Mélanger les feuilles de salade, les dés de concombre, les dés de tomate et l'oignon rouge émincé. Assaisonner de citron, sel et poivre." },
            { title: "Vérifier les falafels", text: "Les falafels doivent être dorés et croustillants à l'extérieur, encore tendres à l'intérieur. Les laisser refroidir 2 minutes sur une grille." },
            { title: "Dresser la salade", text: "Disposer la salade au fond d'un bol large. Placer les falafels par-dessus. Ajouter une généreuse cuillère de houmous. Arroser d'un filet de jus de citron et parsemer de graines de sésame." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les falafels au four au lieu de frits divisent les calories par 3. Les pois chiches dans les falafels + le houmous apportent 20g+ de protéines végétales et toutes les fibres nécessaires." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas trop mixer la pâte à falafel : elle doit rester grossière. Une pâte trop lisse donne des falafels compacts et lourds au lieu de moelleux et aériens." }
        ]
    },

    {
        id: "filet-cabillaud-lentilles-curry",
        name: "Cabillaud Lentilles au Curry",
        subtitle: "Poisson blanc et légumineuses • Léger",
        emoji: "🐟",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Protéiné","Épicé"],
        ingredients: [
            { id: "cabillaud", name: "Cabillaud", detail: "Filet frais", emoji: "🐟", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "lentilles_cuites", name: "Lentilles", detail: "Vertes, cuites", emoji: "🫘", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2 },
            { id: "lait_coco", name: "Lait de coco", detail: "Allégé", emoji: "🥥", baseQty: 60, unit: "ml", scalable: false, role: "base" },
            { id: "pate_curry", name: "Pâte de curry", detail: "Doux", emoji: "🌶️", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Haché", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Un filet", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer les lentilles au curry", text: "Faire revenir l'oignon haché 3 minutes. Ajouter la pâte de curry et cuire 1 minute. Incorporer les lentilles cuites et le lait de coco. Laisser mijoter 8 minutes." },
            { title: "Ajouter les épinards", text: "Incorporer les épinards dans les lentilles au curry. Cuire 2 minutes. Les épinards doivent être juste tombés. Assaisonner de sel et poivre." },
            { title: "Cuire le cabillaud", text: "Saler et poivrer le filet de cabillaud. Le cuire à la poêle antiadhésive 3 à 4 minutes par face à feu moyen. La chair doit être opaque et se détacher en flocons à la fourchette." },
            { title: "Finaliser le plat", text: "Verser les lentilles au curry dans une assiette creuse. Poser le filet de cabillaud par-dessus. Arroser d'un filet de jus de citron." },
            { title: "Servir", text: "Parsemer de coriandre fraîche si disponible. Servir avec un quartier de citron à part. Le cabillaud doit être nacré et fondant sur son lit de lentilles crémeuses." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le cabillaud est le poisson le plus maigre (82 cal, 18g protéines pour 100g). Avec les lentilles riches en fibres et en fer, c'est un plat ultra-protéiné et rassasiant pour un minimum de calories." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas surcuire le cabillaud : il passe de parfait à sec en 1 minute. Dès que la chair est opaque et se détache à la fourchette, retirez du feu. Il continue de cuire hors du feu." }
        ]
    },

    {
        id: "grain-bowl-canard-quinoa",
        name: "Grain Bowl Canard-Quinoa",
        subtitle: "Gourmand et protéiné • Saveurs automnales",
        emoji: "🦆",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","Protéiné","Gourmand"],
        ingredients: [
            { id: "canard_filet", name: "Filet de canard", detail: "Peau retirée, tranché", emoji: "🦆", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "quinoa_cuit", name: "Quinoa", detail: "Cuit, tiède", emoji: "🌾", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 1.8 },
            { id: "betterave_cuite", name: "Betterave cuite", detail: "En dés", emoji: "🟣", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "Râpée", emoji: "🥕", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "noix", name: "Noix", detail: "Concassées", emoji: "🌰", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "vinaigre_balsamique", name: "Vinaigre balsamique", detail: "En réduction", emoji: "🍷", baseQty: 8, unit: "ml", scalable: false, role: "base" },
            { id: "salade_verte", name: "Roquette", detail: "Fraîche", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire le filet de canard", text: "Inciser légèrement la surface du filet de canard (sans peau). Saler et poivrer. Saisir à la poêle très chaude 3 minutes par face pour un canard rosé. Laisser reposer 5 minutes avant de trancher." },
            { title: "Préparer le quinoa", text: "Réchauffer le quinoa avec un filet d'huile d'olive, du sel et des herbes de Provence. Égrener à la fourchette pour qu'il soit léger et aérien." },
            { title: "Préparer les garnitures", text: "Couper la betterave en petits dés. Râper la carotte. Concasser grossièrement les noix. Disposer la roquette." },
            { title: "Préparer la vinaigrette balsamique", text: "Réduire le vinaigre balsamique dans une petite casserole à feu moyen pendant 3 minutes. Il doit devenir sirupeux et concentré." },
            { title: "Assembler le grain bowl", text: "Disposer le quinoa au fond du bol. Ajouter la betterave, la carotte râpée, la roquette et les tranches de canard rosé. Parsemer de noix et napper de réduction balsamique." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le canard sans peau est une viande maigre (135 cal, 24g protéines pour 100g). Le quinoa apporte des protéines complètes. La betterave est riche en nitrates qui améliorent la performance sportive." },
            { type: "red", title: "Erreur à éviter", text: "Le repos de 5 minutes après cuisson du canard est non-négociable. Le trancher immédiatement fait perdre tout le jus et donne une viande sèche et fade." }
        ]
    },

    {
        id: "wrap-dinde-moutarde-crudites",
        name: "Wrap Dinde Moutarde-Crudités",
        subtitle: "Express et équilibré • Lunch à emporter",
        emoji: "🌯",
        category: "dejeuner",
        difficulty: "Facile",
        time: 10,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Express","Protéiné","Meal prep"],
        ingredients: [
            { id: "tortilla_ble", name: "Tortilla blé complet", detail: "1 grande", emoji: "🌯", baseQty: 1, unit: "unité(s)", scalable: true, role: "carb" },
            { id: "dinde", name: "Escalope de dinde", detail: "Grillée, émincée", emoji: "🍗", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "moutarde", name: "Moutarde à l'ancienne", detail: "En sauce", emoji: "🟡", baseQty: 8, unit: "g", scalable: false, role: "base" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Mélangé à la moutarde", emoji: "🥛", baseQty: 20, unit: "g", scalable: false, role: "protein" },
            { id: "salade_verte", name: "Salade", detail: "Croquante", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "carotte", name: "Carotte", detail: "Râpée", emoji: "🥕", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En bâtonnets", emoji: "🥒", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomate", detail: "En rondelles", emoji: "🍅", baseQty: 40, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la sauce moutarde", text: "Mélanger le yaourt grec avec la moutarde à l'ancienne, du sel et du poivre. Cette sauce remplace la mayonnaise avec beaucoup moins de calories et plus de protéines." },
            { title: "Préparer les crudités", text: "Râper la carotte. Couper le concombre en bâtonnets fins et la tomate en rondelles. Préparer les feuilles de salade." },
            { title: "Griller la dinde", text: "Saisir l'escalope de dinde à la poêle 3 minutes par face. Saler et poivrer. Laisser reposer 2 minutes puis émincer en lanières." },
            { title: "Assembler le wrap", text: "Tartiner la tortilla de sauce moutarde. Disposer les feuilles de salade, les crudités, puis les lanières de dinde au centre. Bien répartir pour un wrap équilibré." },
            { title: "Rouler et servir", text: "Replier les côtés de la tortilla vers l'intérieur, puis rouler fermement en partant du bord proche de vous. Couper en diagonale au milieu. Envelopper dans du film si c'est pour emporter." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce wrap est le lunch parfait du sportif : 35g+ de protéines, glucides complexes de la tortilla, et des crudités pour les vitamines. La sauce yaourt-moutarde remplace la mayo (15 cal vs 680 cal/100g)." },
            { type: "red", title: "Erreur à éviter", text: "Pour un wrap à emporter, les crudités ne doivent PAS être mouillées. Bien égoutter et sécher la salade et le concombre, sinon la tortilla sera détrempée à midi." }
        ]
    },

    {
        id: "soupe-pho-poulet",
        name: "Phở au Poulet",
        subtitle: "Bouillon vietnamien parfumé • Réconfortant",
        emoji: "🍜",
        category: "diner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","Réconfortant","International"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "Blanc, poché puis émincé", emoji: "🍗", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "vermicelles_riz", name: "Vermicelles de riz", detail: "Cuits selon le paquet", emoji: "🍜", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "oignon", name: "Oignon", detail: "En rondelles fines", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "carotte", name: "Carotte", detail: "En julienne", emoji: "🥕", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "epinards", name: "Pousses d'épinards", detail: "Fraîches", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "sauce_nuoc_mam", name: "Nuoc-mâm", detail: "Pour le bouillon", emoji: "🥢", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_sriracha", name: "Sriracha", detail: "À part", emoji: "🌶️", baseQty: 5, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Citron vert", detail: "En quartiers", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le bouillon parfumé", text: "Porter 500ml d'eau à ébullition avec une étoile de badiane, un bâton de cannelle, 2 clous de girofle, du gingembre frais tranché et la moitié de l'oignon grillé à sec. Laisser frémir 15 minutes. Filtrer." },
            { title: "Pocher le poulet", text: "Plonger le blanc de poulet dans le bouillon filtré. Cuire 12 minutes à feu doux (frémissement, pas ébullition). Retirer, laisser tiédir et émincer finement. Garder le bouillon chaud." },
            { title: "Préparer les garnitures", text: "Cuire les vermicelles de riz selon le paquet. Émincer les champignons et la carotte en julienne. Préparer les rondelles d'oignon restantes et les pousses d'épinards." },
            { title: "Assaisonner le bouillon", text: "Ajouter le nuoc-mâm au bouillon chaud. Goûter et ajuster l'assaisonnement. Le bouillon doit être clair, parfumé et légèrement salé." },
            { title: "Assembler le phở", text: "Répartir les vermicelles dans un grand bol. Disposer le poulet émincé, les champignons, la carotte, les épinards et l'oignon frais. Verser le bouillon brûlant par-dessus. Servir avec des quartiers de citron vert et de la sriracha à part." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le phở est un dîner léger et protéiné parfait : le bouillon chaud réchauffe et hydrate, les vermicelles sont légers et le poulet poché est la cuisson la plus saine. Idéal le soir." },
            { type: "red", title: "Erreur à éviter", text: "Le poulet doit être poché (eau frémissante) et non bouilli. L'ébullition rend la viande sèche et le bouillon trouble. Le frémissement garde tout tendre et clair." }
        ]
    },

    {
        id: "gratin-patate-douce-epinards",
        name: "Gratin Patate Douce-Épinards",
        subtitle: "Végétarien réconfortant • Crémeux et gratiné",
        emoji: "🍠",
        category: "diner",
        difficulty: "Moyen",
        time: 35,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Végétarien","Sans gluten","Réconfortant","Cheat meal"],
        ingredients: [
            { id: "patate_douce_cuite", name: "Patate douce", detail: "En rondelles fines", emoji: "🍠", baseQty: 200, unit: "g", scalable: true, role: "carb" },
            { id: "epinards", name: "Épinards", detail: "Frais, tombés", emoji: "🥬", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Pour gratiner", emoji: "🧀", baseQty: 25, unit: "g", scalable: false, role: "fat" },
            { id: "oeuf", name: "Œufs", detail: "Pour l'appareil", emoji: "🥚", baseQty: 2, unit: "unité(s)", scalable: true, role: "protein" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "Pour l'appareil", emoji: "🥛", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la patate douce", text: "Éplucher et couper la patate douce en rondelles fines de 3mm. Les précuire 5 minutes à l'eau bouillante ou au micro-ondes. Elles doivent être juste tendres mais encore fermes." },
            { title: "Préparer les épinards", text: "Faire fondre les épinards avec l'oignon émincé dans une poêle pendant 3 minutes. Égoutter soigneusement pour retirer l'excès d'eau. Saler et poivrer." },
            { title: "Préparer l'appareil", text: "Battre les œufs avec la crème légère, de la noix de muscade, du sel et du poivre. Le mélange doit être bien assaisonné car il parfumera tout le gratin." },
            { title: "Assembler le gratin", text: "Dans un plat à gratin, alterner couches de patate douce et couches d'épinards. Verser l'appareil œufs-crème par-dessus. Parsemer de fromage râpé." },
            { title: "Cuire au four", text: "Enfourner à 180°C pendant 25 minutes. Le gratin doit être doré sur le dessus et l'appareil bien pris. Laisser reposer 5 minutes avant de servir." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La patate douce a un index glycémique plus bas que la pomme de terre et est riche en bêta-carotène. Les œufs dans l'appareil apportent des protéines. Un gratin complet et sain pour le dîner." },
            { type: "red", title: "Erreur à éviter", text: "Bien égoutter les épinards : leur eau rendrait le gratin spongieux et empêcherait le dessus de gratiner correctement." }
        ]
    },

    {
        id: "soupe-oignon-gratinee-light",
        name: "Soupe à l'Oignon Gratinée Light",
        subtitle: "Classique français • Réconfort hivernal",
        emoji: "🧅",
        category: "diner",
        difficulty: "Moyen",
        time: 40,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Classique","Réconfortant","Hivernal"],
        ingredients: [
            { id: "oignon", name: "Oignons", detail: "Émincés finement", emoji: "🧅", baseQty: 200, unit: "g", scalable: true, role: "base" },
            { id: "pain_complet", name: "Pain complet", detail: "Croûtons grillés", emoji: "🍞", baseQty: 30, unit: "g", scalable: true, role: "carb" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Pour gratiner", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Pour caraméliser", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Caraméliser les oignons", text: "Émincer finement tous les oignons. Les cuire dans une cocotte avec l'huile d'olive à feu moyen pendant 20 minutes en remuant toutes les 3 minutes. Ils doivent devenir brun doré, fondants et sucrés naturellement. La patience est la clé." },
            { title: "Déglacer et créer le bouillon", text: "Quand les oignons sont bien caramélisés, ajouter 500ml d'eau chaude (ou bouillon de légumes). Ajouter du thym, une feuille de laurier, du poivre. Porter à ébullition puis mijoter 10 minutes." },
            { title: "Préparer les croûtons", text: "Couper le pain complet en tranches épaisses. Les frotter avec une gousse d'ail et les toaster au four 5 minutes à 200°C." },
            { title: "Gratiner", text: "Verser la soupe dans des bols allant au four. Poser les croûtons à la surface. Parsemer de fromage râpé. Passer sous le grill 3 à 5 minutes jusqu'à ce que le fromage soit fondu et doré." },
            { title: "Servir", text: "Sortir les bols du four avec précaution (très chauds). La croûte de fromage doit être bouillonnante et dorée. Laisser tiédir 2 minutes avant de déguster." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "L'oignon caramélisé développe un goût sucré naturel sans ajout de sucre. Cette soupe est très peu calorique mais incroyablement rassasiante. Parfaite pour un dîner léger en hiver." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas presser la caramélisation : 20 minutes minimum à feu moyen. Si vous augmentez le feu, les oignons brûlent au lieu de caraméliser, et la soupe sera amère." }
        ]
    },

    {
        id: "curry-vert-tofu-coco",
        name: "Curry Vert Tofu-Coco",
        subtitle: "Thaï vegan • Crémeux et parfumé",
        emoji: "🍛",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Sans gluten","Asiatique","Épicé"],
        ingredients: [
            { id: "tofu", name: "Tofu ferme", detail: "En cubes, bien pressé", emoji: "🌱", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "lait_coco", name: "Lait de coco", detail: "Allégé", emoji: "🥥", baseQty: 120, unit: "ml", scalable: true, role: "base" },
            { id: "pate_curry", name: "Pâte de curry vert", detail: "", emoji: "🌶️", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "brocoli", name: "Brocoli", detail: "En bouquets", emoji: "🥦", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En lanières", emoji: "🌶️", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "haricots_verts", name: "Haricots verts", detail: "Coupés en tronçons", emoji: "🫛", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz thaï", detail: "Cuit vapeur", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "citron_jus", name: "Citron vert", detail: "Un filet", emoji: "🍋", baseQty: 5, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer et dorer le tofu", text: "Presser le tofu entre deux torchons pour retirer l'eau. Le couper en cubes de 2cm. Le faire dorer à la poêle sans huile 4 à 5 minutes en retournant régulièrement. Les cubes doivent être dorés et croustillants. Réserver." },
            { title: "Préparer la base du curry", text: "Dans la même poêle, faire revenir la pâte de curry vert 1 minute à feu moyen. Verser le lait de coco et mélanger. Laisser mijoter 2 minutes." },
            { title: "Cuire les légumes", text: "Ajouter les haricots verts et le brocoli en premier (3 minutes), puis le poivron (2 minutes). Les légumes doivent rester croquants et colorés." },
            { title: "Assembler le curry", text: "Remettre le tofu doré dans la sauce. Mélanger délicatement. Ajuster l'assaisonnement avec un trait de citron vert et du sel. La sauce doit napper les légumes." },
            { title: "Servir avec le riz", text: "Dresser le riz dans un bol. Verser le curry vert à côté. Garnir de basilic thaï ou de coriandre fraîche et de quelques rondelles de piment si vous aimez le piquant." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le tofu pressé et doré à sec (sans huile) est croustillant et absorbe mieux la sauce. Le lait de coco allégé réduit les lipides de moitié. Un curry vert réconfortant à 100% végétal." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas sauter l'étape de pressage du tofu : l'eau qu'il contient empêche la caramélisation et dilue la sauce du curry. 10 minutes de pressage font toute la différence." }
        ]
    },

    {
        id: "filet-porc-miel-moutarde",
        name: "Filet de Porc Miel-Moutarde",
        subtitle: "Glacé et fondant • Sucré-salé",
        emoji: "🍖",
        category: "diner",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Protéiné","Gourmand"],
        ingredients: [
            { id: "porc_filet", name: "Filet de porc", detail: "En médaillons de 2cm", emoji: "🍖", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "miel", name: "Miel", detail: "Pour le glaçage", emoji: "🍯", baseQty: 10, unit: "g", scalable: false, role: "carb" },
            { id: "moutarde", name: "Moutarde à l'ancienne", detail: "Pour le glaçage", emoji: "🟡", baseQty: 10, unit: "g", scalable: false, role: "base" },
            { id: "patate_douce_cuite", name: "Patate douce", detail: "En purée ou rôtie", emoji: "🍠", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "haricots_verts", name: "Haricots verts", detail: "Cuits vapeur", emoji: "🫛", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 3, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Préparer le glaçage", text: "Mélanger le miel avec la moutarde à l'ancienne, une pincée de thym et du poivre. Réserver cette sauce qui servira à glacer le porc en fin de cuisson." },
            { title: "Cuire les médaillons de porc", text: "Couper le filet de porc en médaillons de 2cm d'épaisseur. Saler. Les saisir à la poêle à feu vif 3 minutes par face. L'extérieur doit être bien doré." },
            { title: "Glacer le porc", text: "Baisser le feu à moyen. Badigeonner les médaillons de sauce miel-moutarde. Cuire 2 minutes de chaque côté en les arrosant de sauce. Le glaçage doit caraméliser et devenir brillant." },
            { title: "Préparer les accompagnements", text: "Cuire les haricots verts vapeur 8 minutes. Préparer la patate douce en purée (écraser avec un trait de lait) ou en rondelles rôties au four." },
            { title: "Dresser l'assiette", text: "Disposer la purée ou les rondelles de patate douce. Ajouter les médaillons de porc glacés et les haricots verts. Napper du jus de cuisson caramélisé." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le filet de porc est une viande très maigre (143 cal, 26g protéines/100g). Le glaçage miel-moutarde ajoute du goût pour seulement 30 calories. C'est un plat savoureux et parfaitement protéiné." },
            { type: "red", title: "Erreur à éviter", text: "Le filet de porc est très maigre et se dessèche vite. Ne pas dépasser 3 minutes par face à feu vif. Le repos de 3 minutes couvert de papier alu est recommandé." }
        ]
    },

    {
        id: "saumon-teriyaki-legumes-vapeur",
        name: "Saumon Teriyaki et Légumes Vapeur",
        subtitle: "Japonais • Laqué et fondant",
        emoji: "🐟",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Asiatique","Protéiné"],
        ingredients: [
            { id: "saumon", name: "Pavé de saumon", detail: "Frais, avec peau", emoji: "🐟", baseQty: 130, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Pour la sauce teriyaki", emoji: "🥢", baseQty: 15, unit: "ml", scalable: false, role: "base" },
            { id: "miel", name: "Miel", detail: "Pour la sauce teriyaki", emoji: "🍯", baseQty: 8, unit: "g", scalable: false, role: "carb" },
            { id: "brocoli", name: "Brocoli", detail: "En bouquets", emoji: "🥦", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "En bâtonnets", emoji: "🥕", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "edamame", name: "Edamame", detail: "Décortiqués", emoji: "🫛", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz", detail: "Cuit vapeur", emoji: "🍚", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 }
        ],
        options: [],
        steps: [
            { title: "Préparer la sauce teriyaki", text: "Mélanger la sauce soja avec le miel, une cuillère de vinaigre de riz et une pointe de gingembre râpé. Réserver. Cette sauce sera réduite pendant la cuisson du saumon." },
            { title: "Cuire le saumon", text: "Poser le pavé de saumon côté peau dans une poêle antiadhésive à feu moyen-vif. Cuire 4 minutes côté peau (elle doit être croustillante). Retourner et cuire 2 minutes côté chair." },
            { title: "Glacer le saumon", text: "Verser la sauce teriyaki sur le saumon dans la poêle. La laisser réduire et caraméliser 1 à 2 minutes en arrosant le poisson avec la sauce. Elle doit devenir brillante et sirupeuse." },
            { title: "Cuire les légumes vapeur", text: "Cuire le brocoli et les bâtonnets de carotte à la vapeur ou au micro-ondes 5 à 6 minutes. Ils doivent être croquants-tendres. Ajouter les edamame en fin de cuisson." },
            { title: "Dresser l'assiette", text: "Disposer le riz, les légumes vapeur et le pavé de saumon laqué. Napper le saumon du reste de sauce teriyaki. Parsemer de graines de sésame." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le saumon apporte des oméga-3 essentiels pour la récupération et la santé cardiovasculaire. La sauce teriyaki maison est bien moins sucrée et salée que les versions du commerce." },
            { type: "red", title: "Erreur à éviter", text: "Commencer la cuisson du saumon côté peau dans une poêle froide puis monter le feu : c'est le secret d'une peau ultra-croustillante qui ne colle pas." }
        ]
    },

    {
        id: "soupe-miso-tofu-soba",
        name: "Soupe Miso Tofu et Soba",
        subtitle: "Japonais vegan • Léger et umami",
        emoji: "🍜",
        category: "diner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Vegan","Express","Asiatique","Léger"],
        ingredients: [
            { id: "tofu", name: "Tofu ferme", detail: "En cubes de 1cm", emoji: "🌱", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "nouilles_soba_cuites", name: "Nouilles soba", detail: "Cuites", emoji: "🍜", baseQty: 100, unit: "g", scalable: true, role: "carb" },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon vert", detail: "Émincé", emoji: "🧅", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Quelques gouttes", emoji: "🥢", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "edamame", name: "Edamame", detail: "Décortiqués", emoji: "🫛", baseQty: 30, unit: "g", scalable: true, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer le bouillon miso", text: "Faire chauffer 400ml d'eau. Hors du feu, dissoudre 1 cuillère à soupe de pâte miso dans un peu d'eau tiède, puis l'incorporer. La pâte miso ne doit JAMAIS bouillir car elle perdrait ses probiotiques et sa saveur." },
            { title: "Cuire les légumes", text: "Ajouter les champignons émincés dans le bouillon miso. Cuire 3 minutes à feu doux. Ajouter les épinards et les edamame. Cuire 1 minute." },
            { title: "Cuire les nouilles soba", text: "Cuire les nouilles soba à part dans de l'eau bouillante selon les instructions (environ 4 minutes). Rincer à l'eau froide et égoutter." },
            { title: "Ajouter le tofu", text: "Couper le tofu en cubes de 1cm. L'ajouter délicatement au bouillon. Laisser chauffer 2 minutes sans remuer pour ne pas casser les cubes." },
            { title: "Assembler et servir", text: "Répartir les nouilles soba dans un grand bol. Verser le bouillon miso avec les légumes et le tofu. Garnir d'oignon vert émincé et de graines de sésame. Servir très chaud." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La soupe miso est un dîner ultra-léger et riche en probiotiques. Parfait quand on veut manger léger le soir tout en se sentir rassasié grâce au tofu et aux fibres des soba." },
            { type: "red", title: "Erreur à éviter", text: "Ne JAMAIS faire bouillir le miso : la chaleur excessive tue les probiotiques bénéfiques et dénature le goût. Toujours l'ajouter hors du feu ou à frémissement léger." }
        ]
    },

    {
        id: "poulet-basquaise-light",
        name: "Poulet Basquaise Light",
        subtitle: "Sud-Ouest • Tomates, poivrons et piment",
        emoji: "🍗",
        category: "diner",
        difficulty: "Moyen",
        time: 35,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","Classique","Familial"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "Cuisses ou blancs, en morceaux", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "poivron_rouge", name: "Poivrons", detail: "Rouge et vert, en lanières", emoji: "🌶️", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "tomate", name: "Tomates", detail: "Mûres, concassées", emoji: "🍅", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "jambon_blanc", name: "Jambon de Bayonne", detail: "En lanières (optionnel)", emoji: "🥓", baseQty: 20, unit: "g", scalable: false, role: "protein" },
            { id: "riz_basmati_cuit", name: "Riz", detail: "Cuit vapeur", emoji: "🍚", baseQty: 150, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Saisir le poulet", text: "Saler et poivrer les morceaux de poulet. Les saisir dans une cocotte à feu vif pendant 5 minutes en les colorant sur toutes les faces. Ajouter les lanières de jambon et cuire 1 minute. Réserver." },
            { title: "Cuire les poivrons et l'oignon", text: "Dans la même cocotte, faire fondre l'oignon émincé 3 minutes. Ajouter les lanières de poivrons et cuire 5 minutes à feu moyen. Les poivrons doivent commencer à fondre." },
            { title: "Ajouter les tomates", text: "Incorporer les tomates concassées, du piment d'Espelette, du thym et du laurier. Laisser mijoter 5 minutes pour que la sauce épaississe." },
            { title: "Mijoter le poulet", text: "Remettre le poulet dans la cocotte. Couvrir et laisser mijoter 20 minutes à feu doux. La sauce doit réduire et enrober le poulet. La viande doit être tendre et se détacher." },
            { title: "Servir avec le riz", text: "Vérifier l'assaisonnement. Servir le poulet basquaise nappé de sauce avec le riz basmati. Parsemer de persil frais et d'un soupçon de piment d'Espelette." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le poulet basquaise est un plat du terroir naturellement sain : poulet maigre, poivrons riches en vitamine C, tomates en antioxydants. Presque aucune matière grasse ajoutée grâce au mijotage." },
            { type: "red", title: "Erreur à éviter", text: "Le piment d'Espelette n'est pas très fort. N'ayez pas peur d'en mettre une bonne pincée. Il apporte un parfum unique sans brûler le palais comme le piment fort." }
        ]
    },

    {
        id: "crevettes-sautees-ail-brocoli",
        name: "Crevettes Sautées Ail et Brocoli",
        subtitle: "Ultra-rapide • Protéiné et léger",
        emoji: "🦐",
        category: "diner",
        difficulty: "Facile",
        time: 12,
        sliderMin: 50,
        sliderMax: 220,
        tags: ["Sans gluten","Express","Protéiné"],
        ingredients: [
            { id: "crevettes", name: "Crevettes", detail: "Décortiquées", emoji: "🦐", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "brocoli", name: "Brocoli", detail: "En petits bouquets", emoji: "🥦", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "citron_jus", name: "Jus de citron", detail: "Un filet", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz basmati", detail: "Cuit", emoji: "🍚", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 }
        ],
        options: [],
        steps: [
            { title: "Blanchir le brocoli", text: "Cuire les bouquets de brocoli dans l'eau bouillante salée pendant 3 minutes. Ils doivent être vert vif et encore croquants. Égoutter et plonger dans l'eau froide pour stopper la cuisson." },
            { title: "Saisir les crevettes", text: "Chauffer l'huile d'olive dans une poêle à feu vif. Ajouter 2 gousses d'ail émincées et cuire 30 secondes (attention, l'ail brûle vite). Ajouter les crevettes et les saisir 2 minutes de chaque côté." },
            { title: "Ajouter le brocoli", text: "Incorporer le brocoli blanchi dans la poêle. Sauter le tout 1 minute à feu vif. Assaisonner de sel, poivre et piment rouge en flocons si désiré." },
            { title: "Finir au citron", text: "Arroser de jus de citron frais. Mélanger rapidement. Le citron dégénère les sucs de cuisson et crée une sauce légère et parfumée." },
            { title: "Servir", text: "Dresser le riz dans une assiette. Disposer les crevettes à l'ail et le brocoli par-dessus. Napper du jus de la poêle. Servir immédiatement très chaud." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les crevettes sont l'une des protéines les plus maigres : 99 cal et 21g de protéines pour 100g. Avec le brocoli riche en vitamine C et en fibres, c'est le dîner parfait en sèche." },
            { type: "red", title: "Erreur à éviter", text: "L'ail brûle en 30 secondes et devient amer. Le mettre juste avant les crevettes et baisser le feu dès que les crevettes sont dans la poêle. Jamais d'ail seul à feu vif." }
        ]
    },

    {
        id: "veloute-butternut-lentilles",
        name: "Velouté Butternut-Lentilles Corail",
        subtitle: "Vegan réconfortant • Onctueux et soyeux",
        emoji: "🎃",
        category: "diner",
        difficulty: "Facile",
        time: 30,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Vegan","Sans gluten","Réconfortant","Hivernal"],
        ingredients: [
            { id: "patate_douce_cuite", name: "Courge butternut", detail: "En morceaux (ou patate douce)", emoji: "🎃", baseQty: 200, unit: "g", scalable: true, role: "carb" },
            { id: "lentilles_cuites", name: "Lentilles corail", detail: "Cuites, pour l'épaisseur", emoji: "🫘", baseQty: 80, unit: "g", scalable: true, role: "protein", rawRatio: 2 },
            { id: "oignon", name: "Oignon", detail: "Haché", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "lait_coco", name: "Lait de coco", detail: "Un trait pour l'onctuosité", emoji: "🥥", baseQty: 40, unit: "ml", scalable: false, role: "base" },
            { id: "pain_complet", name: "Pain complet", detail: "Croûtons grillés", emoji: "🍞", baseQty: 30, unit: "g", scalable: true, role: "carb" },
            { id: "graines_chia", name: "Graines de chia", detail: "En topping", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Cuire les légumes", text: "Faire revenir l'oignon haché 3 minutes. Ajouter la courge butternut (ou patate douce) en morceaux. Couvrir d'eau à hauteur. Cuire 15 minutes à couvert jusqu'à ce que la courge soit fondante." },
            { title: "Ajouter les lentilles", text: "Incorporer les lentilles corail cuites. Cuire 5 minutes de plus. Les lentilles vont se désintégrer et épaissir naturellement le velouté." },
            { title: "Mixer le velouté", text: "Mixer au blender plongeant jusqu'à obtenir une texture parfaitement lisse et soyeuse. Ajouter le lait de coco et mixer de nouveau. Assaisonner de cumin, sel et poivre." },
            { title: "Préparer les croûtons", text: "Couper le pain complet en petits cubes. Les toaster à la poêle sèche 3 minutes en remuant. Ils doivent être dorés et croustillants." },
            { title: "Servir le velouté", text: "Verser le velouté dans des bols. Ajouter un trait de lait de coco en spirale sur le dessus. Parsemer de graines de chia et de croûtons. Servir bien chaud." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les lentilles corail se dissolvent à la cuisson et épaississent le velouté naturellement, sans crème ni beurre. Elles ajoutent aussi 9g de protéines pour 100g. Un velouté vegan riche en protéines." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas trop diluer : le velouté doit être épais et onctueux. Si vous mettez trop d'eau à la cuisson, laissez-le réduire à découvert avant de mixer." }
        ]
    },

    {
        id: "truite-amandes-haricots-verts",
        name: "Truite aux Amandes et Haricots Verts",
        subtitle: "Bistrot classique • Beurre noisette light",
        emoji: "🐟",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Classique","Protéiné"],
        ingredients: [
            { id: "truite", name: "Filet de truite", detail: "Avec peau", emoji: "🐟", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "amandes", name: "Amandes", detail: "Effilées", emoji: "🌰", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "haricots_verts", name: "Haricots verts", detail: "Frais ou surgelés", emoji: "🫛", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais pressé", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "Vapeur, en accompagnement", emoji: "🥔", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 1 }
        ],
        options: [],
        steps: [
            { title: "Cuire les haricots verts et pommes de terre", text: "Cuire les haricots verts à l'eau bouillante salée 8 minutes (ou vapeur). Cuire les pommes de terre vapeur 15 minutes. Les deux doivent être tendres mais pas en bouillie." },
            { title: "Toaster les amandes", text: "Faire dorer les amandes effilées à sec dans une poêle 2 minutes à feu moyen en remuant constamment. Elles doivent être uniformément dorées. Réserver immédiatement (elles brûlent très vite)." },
            { title: "Cuire la truite", text: "Saler le filet de truite. Le placer côté peau dans une poêle avec l'huile d'olive à feu moyen. Cuire 4 minutes côté peau (croustillante), retourner et cuire 2 minutes côté chair." },
            { title: "Préparer la sauce noisette light", text: "Dans la même poêle, ajouter les amandes toastées et un filet de jus de citron. Déglacer rapidement. L'huile de cuisson prend une couleur noisette et un arôme intense." },
            { title: "Dresser l'assiette", text: "Disposer les haricots verts et les pommes de terre vapeur. Poser le filet de truite par-dessus. Napper des amandes et de la sauce noisette citronnée. Parsemer de persil frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La truite est un poisson gras riche en oméga-3, plus économique que le saumon. Les amandes ajoutent des bonnes graisses et du croquant. Ce classique de bistrot est naturellement sain." },
            { type: "red", title: "Erreur à éviter", text: "Les amandes effilées passent de dorées à brûlées en 30 secondes. Ne quittez jamais la poêle des yeux et remuez constamment. Retirez-les dès qu'elles sont blondes." }
        ]
    },

    {
        id: "pad-thai-tofu-cacahuetes",
        name: "Pad Thaï Tofu-Cacahuètes",
        subtitle: "Street food thaï vegan • Sucré-salé-piquant",
        emoji: "🍜",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Sans gluten","Asiatique","Gourmand"],
        ingredients: [
            { id: "tofu", name: "Tofu ferme", detail: "En cubes, pressé", emoji: "🌱", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "vermicelles_riz", name: "Vermicelles de riz", detail: "Cuits", emoji: "🍜", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "carotte", name: "Carotte", detail: "En julienne", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En lanières", emoji: "🌶️", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "Pour la sauce", emoji: "🥜", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Pour la sauce", emoji: "🥢", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "citron_jus", name: "Citron vert", detail: "Jus frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_sriracha", name: "Sriracha", detail: "Selon goût", emoji: "🌶️", baseQty: 3, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la sauce pad thaï", text: "Mélanger le beurre de cacahuète avec la sauce soja, le jus de citron vert, la sriracha et 2 cuillères d'eau chaude. Fouetter pour obtenir une sauce lisse et fluide." },
            { title: "Cuire le tofu", text: "Presser et couper le tofu en cubes. Le faire dorer à feu vif dans une poêle 5 minutes en le retournant pour dorer toutes les faces. Réserver." },
            { title: "Sauter les légumes", text: "Dans la même poêle à feu vif, faire sauter la carotte en julienne 2 minutes, puis le poivron en lanières 1 minute. Les légumes doivent rester croquants et colorés." },
            { title: "Assembler le pad thaï", text: "Ajouter les vermicelles de riz cuits, le tofu doré et la sauce pad thaï. Sauter le tout à feu vif 2 minutes en mélangeant bien pour que la sauce enrobe tous les ingrédients." },
            { title: "Servir", text: "Dresser dans un bol ou une assiette creuse. Garnir de cacahuètes concassées, de coriandre fraîche et d'un quartier de citron vert. Servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le beurre de cacahuète dans la sauce apporte protéines et graisses saines pour seulement 15g. Les vermicelles de riz sont sans gluten et légers. Un pad thaï vegan complet et savoureux." },
            { type: "red", title: "Erreur à éviter", text: "Les vermicelles de riz surcuits deviennent pâteux. Cuire al dente et les rincer à l'eau froide immédiatement. Les ajouter au wok en dernier pour juste les réchauffer." }
        ]
    },

    {
        id: "poulet-citron-olives-marocain",
        name: "Poulet Citron-Olives à la Marocaine",
        subtitle: "Tajine express • Parfumé et tendre",
        emoji: "🍋",
        category: "diner",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Classique","Épicé"],
        ingredients: [
            { id: "poulet_grille", name: "Poulet", detail: "Blancs, en morceaux", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "oignon", name: "Oignon", detail: "Émincé finement", emoji: "🧅", baseQty: 60, unit: "g", scalable: false, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais + zeste", emoji: "🍋", baseQty: 20, unit: "ml", scalable: false, role: "base" },
            { id: "couscous_cuit", name: "Semoule de couscous", detail: "Complète", emoji: "🌾", baseQty: 150, unit: "g", scalable: true, role: "carb" },
            { id: "carotte", name: "Carottes", detail: "En bâtonnets", emoji: "🥕", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Faire revenir le poulet", text: "Saisir les morceaux de poulet à feu vif 4 minutes pour les colorer. Assaisonner de cumin, curcuma, gingembre moulu et une pincée de cannelle. Réserver." },
            { title: "Préparer la base", text: "Faire fondre l'oignon dans l'huile d'olive 5 minutes à feu doux. Ajouter les carottes en bâtonnets. Remettre le poulet. Mouiller avec 150ml d'eau et le jus de citron." },
            { title: "Mijoter", text: "Couvrir et laisser mijoter 20 minutes à feu doux. Le poulet doit être très tendre. Ajouter des olives vertes dénoyautées en fin de cuisson si disponible." },
            { title: "Préparer la semoule", text: "Verser la semoule dans un saladier. Arroser d'eau bouillante (1,5x le volume). Couvrir 5 minutes. Égrener à la fourchette avec un filet d'huile d'olive." },
            { title: "Servir", text: "Dresser la semoule dans une assiette creuse. Disposer le poulet et les légumes. Napper de la sauce citronnée réduite. Parsemer de coriandre fraîche et de zeste de citron." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Ce plat d'inspiration marocaine utilise les épices pour donner du goût sans matière grasse. Le citron confit est remplacé par du jus et du zeste frais pour alléger tout en gardant l'authenticité." },
            { type: "red", title: "Erreur à éviter", text: "Ne pas oublier la cannelle : c'est elle qui donne la touche sucrée caractéristique des tajines marocains. Une pincée suffit mais elle est indispensable." }
        ]
    },

    {
        id: "salade-asiatique-gambas",
        name: "Salade Asiatique Gambas Grillées",
        subtitle: "Fraîche et croquante • Dîner léger",
        emoji: "🦐",
        category: "diner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Sans gluten","Léger","Protéiné","Asiatique"],
        ingredients: [
            { id: "gambas", name: "Gambas", detail: "Décortiquées", emoji: "🦐", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "chou_rouge", name: "Chou rouge", detail: "En fine chiffonnade", emoji: "🥬", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "Râpée ou en julienne", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "concombre", name: "Concombre", detail: "En bâtonnets", emoji: "🥒", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "edamame", name: "Edamame", detail: "Décortiqués", emoji: "🫛", baseQty: 40, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Pour la vinaigrette", emoji: "🥢", baseQty: 8, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_nuoc_mam", name: "Nuoc-mâm", detail: "Quelques gouttes", emoji: "🥢", baseQty: 3, unit: "ml", scalable: false, role: "base" },
            { id: "citron_jus", name: "Citron vert", detail: "Jus frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer la vinaigrette asiatique", text: "Mélanger la sauce soja, le nuoc-mâm, le jus de citron vert, une pointe de gingembre râpé et une pincée de sucre. Fouetter vigoureusement. La vinaigrette doit être équilibrée : acide, salée, légèrement sucrée." },
            { title: "Griller les gambas", text: "Saisir les gambas à feu très vif à la poêle ou au grill 1 à 2 minutes par face. Les assaisonner d'un trait de sauce soja et de piment. Elles doivent être rosées et légèrement caramélisées." },
            { title: "Préparer la salade", text: "Ciseler finement le chou rouge en chiffonnade. Râper la carotte ou la couper en julienne. Couper le concombre en bâtonnets. Mélanger dans un grand saladier avec les edamame." },
            { title: "Assembler", text: "Verser la vinaigrette sur la salade et mélanger. Disposer les gambas grillées chaudes sur la salade froide. Le contraste chaud-froid est essentiel." },
            { title: "Servir", text: "Parsemer de graines de sésame, de menthe et de coriandre fraîche. Servir immédiatement avec un quartier de citron vert." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette salade est probablement le dîner le plus léger et protéiné de toute l'app. Les gambas + edamame apportent 30g+ de protéines pour moins de 250 calories. Parfait en sèche." },
            { type: "red", title: "Erreur à éviter", text: "La vinaigrette asiatique ne contient PAS d'huile, c'est ce qui la rend si légère. Ne soyez pas tenté d'en ajouter. Les saveurs umami du nuoc-mâm et de la soja suffisent." }
        ]
    },

    {
        id: "one-pot-pasta-legumes",
        name: "One-Pot Pasta aux Légumes",
        subtitle: "Tout dans une seule casserole • Zéro vaisselle",
        emoji: "🍝",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Végétarien","Express","Familial"],
        ingredients: [
            { id: "pates_cuites", name: "Pâtes complètes", detail: "Penne ou fusilli", emoji: "🍝", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2.5 },
            { id: "tomate", name: "Tomates", detail: "Concassées", emoji: "🍅", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "courgette", name: "Courgette", detail: "En dés", emoji: "🥒", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Émincé", emoji: "🧅", baseQty: 30, unit: "g", scalable: false, role: "base" },
            { id: "epinards", name: "Épinards", detail: "Frais, en fin de cuisson", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "parmesan", name: "Parmesan", detail: "Râpé", emoji: "🧀", baseQty: 10, unit: "g", scalable: false, role: "fat" },
            { id: "mozzarella", name: "Mozzarella", detail: "En morceaux", emoji: "🧀", baseQty: 30, unit: "g", scalable: false, role: "fat" }
        ],
        options: [],
        steps: [
            { title: "Tout mettre dans la casserole", text: "Dans une grande casserole, placer les pâtes crues, les tomates concassées, la courgette en dés, les champignons émincés et l'oignon. Ajouter 400ml d'eau, du sel, du poivre, de l'origan et un filet d'huile d'olive." },
            { title: "Cuire à couvert", text: "Porter à ébullition puis réduire le feu à moyen. Cuire à couvert pendant 10 à 12 minutes en remuant toutes les 2 à 3 minutes pour que les pâtes ne collent pas au fond." },
            { title: "Vérifier la cuisson", text: "Goûter une pâte : elle doit être al dente. Si l'eau est absorbée mais les pâtes pas cuites, ajouter un peu d'eau chaude. Si les pâtes sont cuites et qu'il reste de l'eau, cuire à découvert 2 minutes." },
            { title: "Ajouter les épinards et fromage", text: "Incorporer les épinards frais et la mozzarella en morceaux. Remuer 1 à 2 minutes. Les épinards tombent et la mozzarella fond en fils gourmands." },
            { title: "Servir", text: "Servir directement dans des assiettes creuses chaudes. Râper le parmesan sur le dessus. Le plat doit être crémeux grâce à l'amidon des pâtes et la mozzarella fondue." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le one-pot pasta est magique : l'amidon libéré par les pâtes crée une sauce crémeuse naturellement, sans ajout de crème ni de beurre. Moins de vaisselle, moins de matière grasse." },
            { type: "red", title: "Erreur à éviter", text: "Remuer régulièrement est essentiel : dans un one-pot, les pâtes collent facilement au fond. Toutes les 2 minutes, décollez le fond avec une spatule en bois." }
        ]
    },

    {
        id: "steak-dinde-puree-chou-fleur",
        name: "Steak de Dinde et Purée de Chou-Fleur",
        subtitle: "Ultra-protéiné • Low carb",
        emoji: "🍗",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Haute protéine","Low carb"],
        ingredients: [
            { id: "dinde", name: "Escalope de dinde", detail: "Épaisse, en steak", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "chou_fleur", name: "Chou-fleur", detail: "En bouquets, pour la purée", emoji: "🥦", baseQty: 200, unit: "g", scalable: true, role: "base" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Dans la purée", emoji: "🧀", baseQty: 15, unit: "g", scalable: false, role: "fat" },
            { id: "haricots_verts", name: "Haricots verts", detail: "En accompagnement", emoji: "🫛", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "moutarde", name: "Moutarde", detail: "Pour la sauce", emoji: "🟡", baseQty: 8, unit: "g", scalable: false, role: "base" },
            { id: "creme_fraiche_legere", name: "Crème légère 15%", detail: "Dans la purée", emoji: "🥛", baseQty: 20, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire le chou-fleur", text: "Cuire les bouquets de chou-fleur à l'eau bouillante salée pendant 12 minutes ou au micro-ondes 8 minutes. Il doit être très tendre pour être mixé en purée lisse." },
            { title: "Préparer la purée", text: "Égoutter le chou-fleur et le mixer avec la crème légère et le fromage râpé. Saler, poivrer et ajouter une pincée de muscade. La purée doit être lisse et onctueuse, comme une purée de pomme de terre." },
            { title: "Cuire la dinde", text: "Saler et poivrer le steak de dinde. Le cuire à la poêle antiadhésive 4 minutes par face à feu moyen. La dinde doit être bien cuite à cœur mais pas sèche." },
            { title: "Préparer la sauce moutarde", text: "Dans la même poêle, déglacer avec un trait d'eau et la moutarde. Laisser réduire 1 minute pour obtenir une sauce onctueuse qui nappe le dos d'une cuillère." },
            { title: "Dresser l'assiette", text: "Disposer la purée de chou-fleur au centre. Poser le steak de dinde. Napper de sauce moutarde. Ajouter les haricots verts cuits vapeur en accompagnement." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "La purée de chou-fleur remplace la purée de pomme de terre avec 5x moins de glucides (25 cal/100g vs 87 cal/100g). Avec le fromage râpé, elle est aussi onctueuse. Parfait en low carb." },
            { type: "red", title: "Erreur à éviter", text: "La dinde sèche vite car elle est très maigre. Ne dépassez pas 4 minutes par face à feu moyen. La couvrir d'alu 2 minutes après cuisson redistribue les jus." }
        ]
    },

    {
        id: "gambas-ail-piment-spaghetti",
        name: "Gambas Ail-Piment Spaghetti",
        subtitle: "Italien • Aglio e olio revisité aux gambas",
        emoji: "🦐",
        category: "diner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Express","Gourmand","Italien"],
        ingredients: [
            { id: "gambas", name: "Gambas", detail: "Décortiquées", emoji: "🦐", baseQty: 130, unit: "g", scalable: true, role: "protein" },
            { id: "pates_cuites", name: "Spaghetti complets", detail: "Cuits al dente", emoji: "🍝", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2.5 },
            { id: "huile_olive", name: "Huile d'olive", detail: "Vierge extra", emoji: "🫒", baseQty: 8, unit: "g", scalable: false, role: "fat" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "tomate", name: "Tomates cerises", detail: "Coupées en deux", emoji: "🍅", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "epinards", name: "Pousses d'épinards", detail: "Fraîches", emoji: "🥬", baseQty: 30, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les spaghetti", text: "Cuire les spaghetti complets al dente. Réserver un verre d'eau de cuisson amidonnée. Égoutter les pâtes." },
            { title: "Saisir les gambas", text: "Chauffer l'huile d'olive dans une grande poêle. Ajouter 3 gousses d'ail émincées et des flocons de piment. Cuire 30 secondes. Ajouter les gambas et les saisir 2 minutes de chaque côté." },
            { title: "Ajouter les tomates", text: "Ajouter les tomates cerises coupées en deux. Cuire 2 minutes à feu vif. Elles doivent éclater légèrement et libérer leur jus." },
            { title: "Assembler les pâtes", text: "Ajouter les spaghetti égouttés dans la poêle. Verser un peu d'eau de cuisson. Mélanger vigoureusement en sautant les pâtes 1 minute. Ajouter les pousses d'épinards." },
            { title: "Finir et servir", text: "Arroser de jus de citron frais. Mélanger une dernière fois. Servir immédiatement dans des assiettes chaudes. Pas de fromage sur les pâtes aux fruits de mer en Italie." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "L'eau de cuisson des pâtes est le secret d'une sauce onctueuse sans crème : l'amidon émulsionne avec l'huile d'olive et crée une sauce qui nappe les spaghetti. Technique 100% italienne." },
            { type: "red", title: "Erreur à éviter", text: "En Italie, on ne met JAMAIS de parmesan sur les pâtes aux fruits de mer. Le fromage masque le goût délicat des gambas. Le citron est le seul assaisonnement de finition." }
        ]
    },

    {
        id: "chili-sin-carne-vegan",
        name: "Chili Sin Carne",
        subtitle: "Chili vegan • Réconfortant et épicé",
        emoji: "🌶️",
        category: "diner",
        difficulty: "Facile",
        time: 30,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Sans gluten","Batch cooking","Réconfortant"],
        ingredients: [
            { id: "haricots_rouges", name: "Haricots rouges", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "haricots_noirs", name: "Haricots noirs", detail: "Cuits, égouttés", emoji: "🫘", baseQty: 80, unit: "g", scalable: true, role: "protein" },
            { id: "tomate", name: "Tomates", detail: "Concassées", emoji: "🍅", baseQty: 150, unit: "g", scalable: true, role: "base" },
            { id: "mais_conserve", name: "Maïs", detail: "Égoutté", emoji: "🌽", baseQty: 60, unit: "g", scalable: true, role: "carb" },
            { id: "oignon", name: "Oignon", detail: "Haché", emoji: "🧅", baseQty: 50, unit: "g", scalable: false, role: "base" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "En dés", emoji: "🌶️", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "concentre_tomate", name: "Concentré de tomate", detail: "", emoji: "🍅", baseQty: 15, unit: "g", scalable: false, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz", detail: "Cuit, en accompagnement", emoji: "🍚", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 }
        ],
        options: [],
        steps: [
            { title: "Faire revenir les aromates", text: "Faire fondre l'oignon haché 3 minutes. Ajouter le poivron en dés et cuire 3 minutes. Incorporer le concentré de tomate et des épices : cumin, paprika fumé, piment de Cayenne, coriandre moulue." },
            { title: "Ajouter les tomates et légumineuses", text: "Verser les tomates concassées. Ajouter les haricots rouges, les haricots noirs et le maïs égoutté. Mélanger et porter à ébullition." },
            { title: "Mijoter", text: "Réduire le feu et laisser mijoter 20 minutes à couvert en remuant de temps en temps. La sauce doit réduire et épaissir. Les saveurs se développent avec le temps." },
            { title: "Ajuster l'assaisonnement", text: "Goûter et ajuster le sel, le piment et le cumin. Un bon chili doit être légèrement piquant avec une profondeur fumée. Ajouter du cacao en poudre (1 cuillère) pour la profondeur si désiré." },
            { title: "Servir", text: "Servir le chili avec du riz basmati. Accompagner d'avocat en tranches, de coriandre fraîche et d'un trait de citron vert. Des tortillas chips en complément si cheat meal." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les haricots rouges + noirs apportent 17g de protéines pour 100g combinés. Ce chili vegan est aussi protéiné qu'un chili con carne classique, avec plus de fibres et moins de graisses saturées." },
            { type: "red", title: "Erreur à éviter", text: "L'astuce secrète du chili : 1 cuillère de cacao en poudre non sucré. Ça ne donne pas un goût chocolaté mais une profondeur et une complexité incroyables à la sauce." }
        ]
    },

    {
        id: "gratin-aubergine-boeuf",
        name: "Gratin d'Aubergine au Bœuf",
        subtitle: "Façon moussaka light • Méditerranéen",
        emoji: "🍆",
        category: "diner",
        difficulty: "Moyen",
        time: 40,
        sliderMin: 50,
        sliderMax: 280,
        tags: ["Sans gluten","Méditerranéen","Cheat meal"],
        ingredients: [
            { id: "aubergine", name: "Aubergines", detail: "En tranches épaisses", emoji: "🍆", baseQty: 200, unit: "g", scalable: true, role: "base" },
            { id: "boeuf_hache_5", name: "Bœuf haché 5%", detail: "Maigre", emoji: "🥩", baseQty: 130, unit: "g", scalable: true, role: "protein" },
            { id: "sauce_tomate", name: "Sauce tomate", detail: "Passata", emoji: "🍅", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "Haché", emoji: "🧅", baseQty: 40, unit: "g", scalable: false, role: "base" },
            { id: "fromage_rape", name: "Emmental râpé", detail: "Pour gratiner", emoji: "🧀", baseQty: 20, unit: "g", scalable: false, role: "fat" },
            { id: "yaourt_grec", name: "Yaourt grec", detail: "Pour la béchamel light", emoji: "🥛", baseQty: 60, unit: "g", scalable: false, role: "protein" },
            { id: "oeuf", name: "Œuf", detail: "Dans la béchamel", emoji: "🥚", baseQty: 1, unit: "unité(s)", scalable: false, role: "protein" }
        ],
        options: [],
        steps: [
            { title: "Préparer les aubergines", text: "Couper les aubergines en tranches de 1cm. Les saler et les laisser dégorger 10 minutes. Les éponger et les griller à la poêle ou au four 5 minutes par face jusqu'à ce qu'elles soient tendres et dorées." },
            { title: "Cuire la viande", text: "Faire revenir l'oignon haché 3 minutes. Ajouter le bœuf haché et le cuire en l'émiettant 5 minutes. Incorporer la sauce tomate, de l'origan, de la cannelle (pincée) et du sel. Mijoter 10 minutes." },
            { title: "Préparer la béchamel grecque", text: "Mélanger le yaourt grec avec l'œuf battu, une pincée de muscade, du sel et du poivre. Cette sauce remplace la béchamel classique de la moussaka." },
            { title: "Assembler le gratin", text: "Dans un plat à gratin, alterner : couche d'aubergines, couche de viande à la tomate. Répéter 2 fois. Verser la béchamel grecque sur le dessus. Parsemer de fromage râpé." },
            { title: "Gratiner au four", text: "Enfourner à 180°C pendant 20 minutes. Le dessus doit être doré et bouillonnant. Laisser reposer 10 minutes avant de servir pour que les couches se tiennent." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette moussaka utilise du yaourt grec au lieu de la béchamel traditionnelle : 97 cal/100g contre 200+ cal/100g pour la béchamel. L'aubergine grillée au lieu de frite divise aussi les calories." },
            { type: "red", title: "Erreur à éviter", text: "Faire dégorger les aubergines au sel est essentiel : elles rendent leur amertume et leur eau. Si vous sautez cette étape, les aubergines seront spongieuses et le gratin aqueux." }
        ]
    },

    {
        id: "wok-canard-nouilles-soja",
        name: "Wok Canard Nouilles-Soja",
        subtitle: "Asiatique gourmand • Rapide et savoureux",
        emoji: "🦆",
        category: "diner",
        difficulty: "Moyen",
        time: 20,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Sans gluten","Asiatique","Gourmand"],
        ingredients: [
            { id: "canard_filet", name: "Filet de canard", detail: "Sans peau, émincé", emoji: "🦆", baseQty: 120, unit: "g", scalable: true, role: "protein" },
            { id: "nouilles_soba_cuites", name: "Nouilles soba", detail: "Cuites", emoji: "🍜", baseQty: 120, unit: "g", scalable: true, role: "carb" },
            { id: "brocoli", name: "Brocoli", detail: "En petits bouquets", emoji: "🥦", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "carotte", name: "Carotte", detail: "En julienne", emoji: "🥕", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Pour la sauce", emoji: "🥢", baseQty: 12, unit: "ml", scalable: false, role: "base" },
            { id: "miel", name: "Miel", detail: "Pour le glaçage", emoji: "🍯", baseQty: 5, unit: "g", scalable: false, role: "carb" }
        ],
        options: [],
        steps: [
            { title: "Mariner le canard", text: "Émincer le filet de canard en fines lanières. Les mariner avec la moitié de la sauce soja, le miel et du gingembre râpé pendant 10 minutes." },
            { title: "Saisir le canard", text: "Chauffer un wok à feu très vif. Saisir les lanières de canard marinées 3 minutes en les retournant pour les caraméliser. Le miel va créer un glaçage doré. Réserver." },
            { title: "Sauter les légumes", text: "Dans le même wok brûlant, sauter les carottes 2 minutes, le brocoli 2 minutes et les champignons 1 minute. Les légumes doivent rester croquants et colorés." },
            { title: "Assembler le wok", text: "Remettre le canard dans le wok. Ajouter les nouilles soba et le reste de sauce soja. Sauter le tout 1 minute à feu vif en mélangeant bien." },
            { title: "Servir", text: "Servir immédiatement dans un grand bol. Parsemer de graines de sésame et d'oignon vert émincé. Le canard doit être tendre et caramélisé au miel-soja." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Le canard sans peau est une viande maigre et protéinée. Le glaçage miel-soja ajoute un goût intense pour seulement 5g de miel. Les nouilles soba sont plus riches en protéines que les pâtes classiques." },
            { type: "red", title: "Erreur à éviter", text: "Le wok DOIT être brûlant pour que le canard caramélise. Si la poêle est tiède, les lanières bouillent dans leur jus au lieu de griller, et le résultat sera décevant." }
        ]
    },

    {
        id: "sardines-grillees-salade-pomme-terre",
        name: "Sardines Grillées et Salade Tiède",
        subtitle: "Méditerranéen simple • Omega-3",
        emoji: "🐟",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Sans gluten","Méditerranéen","Omega-3"],
        ingredients: [
            { id: "sardines_conserve", name: "Sardines", detail: "En conserve au naturel, égouttées", emoji: "🐟", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "pomme_de_terre", name: "Pommes de terre", detail: "Vapeur, en rondelles", emoji: "🥔", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 1 },
            { id: "tomate", name: "Tomates cerises", detail: "Coupées en deux", emoji: "🍅", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon rouge", detail: "Émincé", emoji: "🧅", baseQty: 20, unit: "g", scalable: false, role: "base" },
            { id: "haricots_verts", name: "Haricots verts", detail: "Cuits vapeur", emoji: "🫛", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Vierge extra", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais pressé", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Cuire les pommes de terre", text: "Cuire les pommes de terre à la vapeur ou à l'eau pendant 15 minutes. Elles doivent être tendres mais fermes. Les laisser tiédir puis les couper en rondelles épaisses." },
            { title: "Cuire les haricots verts", text: "Cuire les haricots verts vapeur 8 minutes. Les laisser refroidir légèrement. Ils doivent être croquants-tendres." },
            { title: "Préparer la vinaigrette", text: "Mélanger l'huile d'olive, le jus de citron, du sel et du poivre. Ajouter du persil frais haché si disponible." },
            { title: "Assembler la salade tiède", text: "Disposer les rondelles de pomme de terre tiède, les haricots verts, les tomates cerises et l'oignon émincé dans un grand plat. Arroser de vinaigrette." },
            { title: "Ajouter les sardines et servir", text: "Égoutter les sardines et les disposer sur la salade. Arroser d'un filet de citron. Servir tiède avec du pain complet." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Les sardines en conserve sont un super-aliment : riches en oméga-3, calcium (arêtes comestibles) et protéines. Économiques et pratiques, elles sont sous-estimées en nutrition sportive." },
            { type: "red", title: "Erreur à éviter", text: "Choisir des sardines au naturel et non à l'huile : la différence calorique est énorme. Si vous ne trouvez que des sardines à l'huile, bien les égoutter et rincer." }
        ]
    },

    {
        id: "soupe-thai-coco-legumes",
        name: "Soupe Thaï Coco aux Légumes",
        subtitle: "Tom Kha Gai revisitée • Crémeuse et parfumée",
        emoji: "🥥",
        category: "diner",
        difficulty: "Facile",
        time: 20,
        sliderMin: 40,
        sliderMax: 220,
        tags: ["Vegan","Sans gluten","Asiatique","Réconfortant"],
        ingredients: [
            { id: "lait_coco", name: "Lait de coco", detail: "Allégé", emoji: "🥥", baseQty: 120, unit: "ml", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "Émincés", emoji: "🍄", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "tofu", name: "Tofu ferme", detail: "En cubes", emoji: "🌱", baseQty: 100, unit: "g", scalable: true, role: "protein" },
            { id: "carotte", name: "Carotte", detail: "En rondelles fines", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "chou_kale", name: "Chou kale", detail: "Haché grossièrement", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "sauce_soja", name: "Sauce soja", detail: "Quelques gouttes", emoji: "🥢", baseQty: 5, unit: "ml", scalable: false, role: "base" },
            { id: "citron_jus", name: "Citron vert", detail: "Jus frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "base" },
            { id: "sauce_sriracha", name: "Sriracha", detail: "Pour le piquant", emoji: "🌶️", baseQty: 3, unit: "g", scalable: false, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préparer le bouillon parfumé", text: "Faire chauffer 300ml d'eau avec du gingembre frais tranché, de la citronnelle écrasée si disponible et une pincée de galanga ou curcuma. Laisser frémir 5 minutes pour infuser." },
            { title: "Ajouter le lait de coco", text: "Verser le lait de coco dans le bouillon. Ajouter la sauce soja. Porter à frémissement doux." },
            { title: "Cuire les légumes", text: "Ajouter les rondelles de carotte et les champignons émincés. Cuire 5 minutes. Ajouter le chou kale haché et cuire 2 minutes de plus." },
            { title: "Ajouter le tofu", text: "Couper le tofu en cubes de 2cm. L'ajouter dans la soupe et laisser chauffer 3 minutes à feu doux." },
            { title: "Assaisonner et servir", text: "Retirer du feu. Ajouter le jus de citron vert et la sriracha. Le citron doit être ajouté hors du feu pour préserver sa fraîcheur. Servir dans de grands bols avec de la coriandre fraîche." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "Cette soupe inspirée du Tom Kha Gai est un dîner léger mais rassasiant grâce au lait de coco et au tofu. Le gingembre et le citron vert stimulent la digestion. Parfait en repas du soir." },
            { type: "red", title: "Erreur à éviter", text: "Le citron vert doit être ajouté APRÈS avoir coupé le feu : la chaleur tue son parfum frais et vif. C'est cette touche finale qui fait la magie de la soupe thaï." }
        ]
    },

    {
        id: "escalope-dinde-piccata",
        name: "Escalope de Dinde Piccata",
        subtitle: "Italien classique • Citronné et capreux",
        emoji: "🍗",
        category: "diner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Express","Italien","Protéiné"],
        ingredients: [
            { id: "dinde", name: "Escalope de dinde", detail: "Aplatie finement", emoji: "🍗", baseQty: 150, unit: "g", scalable: true, role: "protein" },
            { id: "citron_jus", name: "Jus de citron", detail: "Frais pressé, généreux", emoji: "🍋", baseQty: 20, unit: "ml", scalable: false, role: "base" },
            { id: "farine_complete", name: "Farine complète", detail: "Pour fariner légèrement", emoji: "🌾", baseQty: 10, unit: "g", scalable: false, role: "carb" },
            { id: "huile_olive", name: "Huile d'olive", detail: "Un filet", emoji: "🫒", baseQty: 5, unit: "g", scalable: false, role: "fat" },
            { id: "brocoli", name: "Brocoli", detail: "Vapeur en accompagnement", emoji: "🥦", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "riz_basmati_cuit", name: "Riz", detail: "Cuit vapeur", emoji: "🍚", baseQty: 120, unit: "g", scalable: true, role: "carb", rawRatio: 2.25 }
        ],
        options: [],
        steps: [
            { title: "Préparer l'escalope", text: "Aplatir l'escalope de dinde entre deux feuilles de film alimentaire avec un rouleau à pâtisserie (5mm d'épaisseur). Saler, poivrer et fariner légèrement des deux côtés. Secouer l'excédent de farine." },
            { title: "Saisir l'escalope", text: "Chauffer l'huile d'olive dans une poêle à feu moyen-vif. Cuire l'escalope 2 à 3 minutes par face. Elle doit être dorée et croustillante grâce à la farine. Réserver au chaud." },
            { title: "Préparer la sauce piccata", text: "Dans la même poêle, déglacer avec le jus de citron et 3 cuillères d'eau. Gratter les sucs. Ajouter des câpres si disponible. Laisser réduire 1 minute pour obtenir une sauce citronnée concentrée." },
            { title: "Cuire les accompagnements", text: "Cuire le brocoli vapeur 5 minutes et préparer le riz basmati. Assaisonner le brocoli d'un trait de citron." },
            { title: "Dresser et servir", text: "Disposer le riz et le brocoli dans l'assiette. Poser l'escalope piccata. Napper de la sauce citronnée aux câpres. Décorer de rondelles de citron et de persil frais." }
        ],
        tips: [
            { type: "green", title: "Conseil coach", text: "L'escalope aplatie cuit en 5 minutes et la farine complète crée une croûte croustillante pour seulement 10g. La sauce au citron est la plus légère qui existe : zéro matière grasse ajoutée." },
            { type: "red", title: "Erreur à éviter", text: "L'escalope aplatie est fine et cuit très vite. 2-3 minutes par face maximum. Au-delà, elle sera sèche et caoutchouteuse. La farine aide à garder le jus à l'intérieur." }
        ]
    },

    {
        id: "protein-balls-matcha-coco",
        name: "Protein Balls Matcha-Coco",
        subtitle: "Bouchées énergétiques au thé vert et coco",
        emoji: "🍵",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 15,
        sliderMin: 30,
        sliderMax: 150,
        tags: ["Sans cuisson","Express","Végétarien","Sans gluten","Haute protéine"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés fin", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "", emoji: "🥜", baseQty: 25, unit: "g", scalable: true, role: "liant" },
            { id: "whey_protein", name: "Whey protéine", detail: "vanille ou nature", emoji: "💪", baseQty: 15, unit: "g", scalable: true, role: "protéine" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: true, role: "sucrant" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "", emoji: "🥥", baseQty: 15, unit: "g", scalable: true, role: "enrobage" },
            { id: "lait_amande", name: "Lait d'amande", detail: "non sucré", emoji: "🥛", baseQty: 20, unit: "ml", scalable: true, role: "liant" }
        ],
        options: [],
        steps: [
            { title: "Mixer les flocons d'avoine en", text: "Mixer les flocons d'avoine en poudre grossière dans un blender." },
            { title: "Dans un bol, mélanger la", text: "Dans un bol, mélanger la poudre d'avoine, la whey protéine et la moitié de la noix de coco râpée." },
            { title: "Ajouter le beurre de cacahuète", text: "Ajouter le beurre de cacahuète et le miel, mélanger à la cuillère." },
            { title: "Verser progressivement le lait d'amande", text: "Verser progressivement le lait d'amande jusqu'à obtenir une pâte collante mais façonnable." },
            { title: "Former 4 à 5 boules", text: "Former 4 à 5 boules régulières avec les mains légèrement humides." },
            { title: "Rouler chaque boule dans le", text: "Rouler chaque boule dans le reste de noix de coco râpée." },
            { title: "Réfrigérer au moins 30 minutes", text: "Réfrigérer au moins 30 minutes avant de déguster. Se conserve 5 jours au frigo." }
        ],
        tips: [
            { type: "green", title: "💡 Transport", text: "Parfaites dans une petite boîte hermétique pour le sac de sport. Sortir 10 min avant dégustation." },
            { type: "red", title: "⚠️ Texture", text: "Si la pâte est trop sèche, ajouter du lait d'amande cuillère par cuillère. Trop collante, ajouter de la coco." }
        ]
    },

    {
        id: "muffins-myrtilles-citron-proteines",
        name: "Muffins Myrtilles-Citron Protéinés",
        subtitle: "Moelleux fruités enrichis en protéines",
        emoji: "🫐",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Haute protéine"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "whey_protein", name: "Whey protéine", detail: "vanille", emoji: "💪", baseQty: 20, unit: "g", scalable: true, role: "protéine" },
            { id: "oeuf", name: "Œuf", detail: "entier", emoji: "🥚", baseQty: 1, unit: "unité", scalable: true, role: "liant" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 60, unit: "g", scalable: true, role: "moelleux" },
            { id: "myrtilles", name: "Myrtilles", detail: "fraîches ou surgelées", emoji: "🫐", baseQty: 50, unit: "g", scalable: true, role: "fruit" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: true, role: "sucrant" },
            { id: "citron_jus", name: "Jus de citron", detail: "frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "arôme" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 180°C", text: "Préchauffer le four à 180°C. Préparer un moule à muffins avec des caissettes en papier." },
            { title: "Mixer les flocons d'avoine en", text: "Mixer les flocons d'avoine en farine fine dans un blender." },
            { title: "Dans un bol, mélanger la", text: "Dans un bol, mélanger la farine d'avoine et la whey protéine." },
            { title: "Dans un autre bol, battre", text: "Dans un autre bol, battre l'œuf avec le fromage blanc, le miel et le jus de citron." },
            { title: "Incorporer les ingrédients secs aux", text: "Incorporer les ingrédients secs aux ingrédients humides, mélanger délicatement sans trop travailler la pâte." },
            { title: "Ajouter les myrtilles et mélanger", text: "Ajouter les myrtilles et mélanger doucement avec une spatule." },
            { title: "Répartir dans les moules à", text: "Répartir dans les moules à muffins (2-3 muffins selon la taille)." },
            { title: "Enfourner 18-22 minutes jusqu'à ce", text: "Enfourner 18-22 minutes jusqu'à ce qu'un cure-dent ressorte propre." },
            { title: "Laisser refroidir sur une grille", text: "Laisser refroidir sur une grille avant de transporter." }
        ],
        tips: [
            { type: "green", title: "💡 Meal prep", text: "Se congèlent très bien. Préparer un batch le dimanche pour la semaine. Décongeler la veille au frigo." },
            { type: "red", title: "⚠️ Cuisson", text: "Ne pas ouvrir le four pendant les 15 premières minutes pour éviter que les muffins ne retombent." }
        ]
    },

    {
        id: "cookies-avoine-chocolat-proteines",
        name: "Cookies Avoine-Chocolat Protéinés",
        subtitle: "Cookies croustillants enrichis en protéines",
        emoji: "🍪",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Haute protéine"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "", emoji: "🥜", baseQty: 20, unit: "g", scalable: true, role: "liant" },
            { id: "whey_protein", name: "Whey protéine", detail: "chocolat ou vanille", emoji: "💪", baseQty: 15, unit: "g", scalable: true, role: "protéine" },
            { id: "oeuf", name: "Œuf", detail: "entier", emoji: "🥚", baseQty: 1, unit: "unité", scalable: true, role: "liant" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "concassé", emoji: "🍫", baseQty: 15, unit: "g", scalable: true, role: "garniture" },
            { id: "banane", name: "Banane", detail: "bien mûre, écrasée", emoji: "🍌", baseQty: 40, unit: "g", scalable: true, role: "sucrant" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 175°C", text: "Préchauffer le four à 175°C. Chemiser une plaque de papier cuisson." },
            { title: "Écraser la banane à la", text: "Écraser la banane à la fourchette dans un grand bol." },
            { title: "Ajouter le beurre de cacahuète", text: "Ajouter le beurre de cacahuète et l'œuf, fouetter jusqu'à obtenir un mélange lisse." },
            { title: "Incorporer les flocons d'avoine et", text: "Incorporer les flocons d'avoine et la whey protéine, mélanger à la spatule." },
            { title: "Ajouter le chocolat noir concassé", text: "Ajouter le chocolat noir concassé et mélanger délicatement." },
            { title: "Former des boules de pâte", text: "Former des boules de pâte sur la plaque (3-4 cookies), les aplatir légèrement." },
            { title: "Enfourner 12-15 minutes jusqu'à ce", text: "Enfourner 12-15 minutes jusqu'à ce que les bords soient dorés." },
            { title: "Laisser refroidir 5 minutes sur", text: "Laisser refroidir 5 minutes sur la plaque avant de transférer sur une grille." }
        ],
        tips: [
            { type: "green", title: "💡 Texture", text: "Pour des cookies plus croustillants, laisser cuire 2 minutes de plus. Pour des cookies moelleux, retirer dès que les bords dorent." },
            { type: "red", title: "⚠️ Conservation", text: "Se conservent 4 jours dans une boîte hermétique à température ambiante. Ne pas réfrigérer, ils deviennent caoutchouteux." }
        ]
    },

    {
        id: "mini-wraps-houmous-legumes",
        name: "Mini Wraps Houmous-Légumes",
        subtitle: "Wraps roulés à l'houmous et crudités croquantes",
        emoji: "🌯",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Express","Vegan","Haute protéine"],
        ingredients: [
            { id: "tortilla_ble", name: "Tortilla de blé", detail: "complète", emoji: "🌯", baseQty: 1, unit: "unité", scalable: true, role: "base" },
            { id: "pois_chiches_cuits", name: "Houmous", detail: "maison ou du commerce", emoji: "🫘", baseQty: 40, unit: "g", scalable: true, role: "tartinade" },
            { id: "concombre", name: "Concombre", detail: "en bâtonnets", emoji: "🥒", baseQty: 40, unit: "g", scalable: true, role: "crudité" },
            { id: "carotte", name: "Carotte", detail: "râpée", emoji: "🥕", baseQty: 30, unit: "g", scalable: true, role: "crudité" },
            { id: "poivron_rouge", name: "Poivron rouge", detail: "en fines lamelles", emoji: "🌶️", baseQty: 30, unit: "g", scalable: true, role: "crudité" },
            { id: "salade_verte", name: "Jeunes pousses", detail: "", emoji: "🥬", baseQty: 15, unit: "g", scalable: true, role: "verdure" }
        ],
        options: [],
        steps: [
            { title: "Laver et préparer tous les", text: "Laver et préparer tous les légumes : râper la carotte, couper le concombre en bâtonnets, émincer le poivron en fines lamelles." },
            { title: "Étaler la tortilla sur un", text: "Étaler la tortilla sur un plan de travail propre." },
            { title: "Tartiner généreusement le houmous sur", text: "Tartiner généreusement le houmous sur toute la surface de la tortilla." },
            { title: "Disposer les jeunes pousses en", text: "Disposer les jeunes pousses en une couche régulière." },
            { title: "Répartir les légumes au centre", text: "Répartir les légumes au centre en ligne horizontale : carotte, concombre, poivron." },
            { title: "Rouler la tortilla en serrant", text: "Rouler la tortilla en serrant bien, en repliant d'abord les côtés." },
            { title: "Couper en 2 ou 3 tronçons", text: "Couper en 2 ou 3 tronçons. Emballer dans du film alimentaire ou du papier pour le transport." }
        ],
        tips: [
            { type: "green", title: "💡 Variante", text: "Ajouter quelques feuilles de menthe fraîche ou un filet de jus de citron dans le houmous pour plus de fraîcheur." },
            { type: "red", title: "⚠️ Transport", text: "Emballer serré pour éviter que le wrap ne se déroule. Consommer dans les 4h pour garder le croquant." }
        ]
    },

    {
        id: "banana-bread-noix-chocolat",
        name: "Banana Bread Noix-Chocolat",
        subtitle: "Cake moelleux banane-noix riche en protéines",
        emoji: "🍞",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 45,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Haute protéine","Batch cooking"],
        ingredients: [
            { id: "banane", name: "Banane", detail: "très mûres, écrasées", emoji: "🍌", baseQty: 80, unit: "g", scalable: true, role: "base" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "farine" },
            { id: "whey_protein", name: "Whey protéine", detail: "vanille", emoji: "💪", baseQty: 25, unit: "g", scalable: true, role: "protéine" },
            { id: "oeuf", name: "Œuf", detail: "entier", emoji: "🥚", baseQty: 1, unit: "unité", scalable: true, role: "liant" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 50, unit: "g", scalable: true, role: "moelleux" },
            { id: "noix", name: "Noix", detail: "concassées", emoji: "🌰", baseQty: 15, unit: "g", scalable: true, role: "croquant" },
            { id: "chocolat_noir_70", name: "Pépites de chocolat noir", detail: "70%", emoji: "🍫", baseQty: 10, unit: "g", scalable: true, role: "garniture" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 170°C", text: "Préchauffer le four à 170°C. Chemiser un petit moule à cake de papier cuisson." },
            { title: "Écraser les bananes très mûres", text: "Écraser les bananes très mûres à la fourchette jusqu'à obtenir une purée lisse." },
            { title: "Battre l'œuf avec le fromage", text: "Battre l'œuf avec le fromage blanc, incorporer à la purée de banane." },
            { title: "Mixer les flocons d'avoine en", text: "Mixer les flocons d'avoine en farine, mélanger avec la whey protéine." },
            { title: "Incorporer les ingrédients secs aux", text: "Incorporer les ingrédients secs aux ingrédients humides, mélanger délicatement." },
            { title: "Ajouter les noix concassées et", text: "Ajouter les noix concassées et les pépites de chocolat, mélanger à la spatule." },
            { title: "Verser dans le moule à", text: "Verser dans le moule à cake, lisser la surface. Disposer quelques cerneaux de noix sur le dessus." },
            { title: "Enfourner 30-35 minutes", text: "Enfourner 30-35 minutes. Le cake est cuit quand un cure-dent inséré au centre ressort propre." },
            { title: "Laisser refroidir complètement dans le", text: "Laisser refroidir complètement dans le moule avant de démouler et trancher." }
        ],
        tips: [
            { type: "green", title: "💡 Meal prep", text: "Découper en tranches individuelles et congeler. Parfait pour la semaine : décongeler la veille au frigo." },
            { type: "red", title: "⚠️ Bananes", text: "Les bananes doivent être très mûres (peau tachetée de noir) pour apporter assez de sucre et de moelleux." }
        ]
    },

    {
        id: "onigiri-thon-mayo",
        name: "Onigiri Thon-Mayo",
        subtitle: "Boulettes de riz japonaises garnies au thon",
        emoji: "🍙",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Haute protéine","Sans gluten"],
        ingredients: [
            { id: "riz_basmati_cuit", name: "Riz à sushi", detail: "cuit et légèrement vinaigré", emoji: "🍚", baseQty: 120, unit: "g", scalable: true, role: "base", rawRatio: 2.25 },
            { id: "thon_conserve", name: "Thon en conserve", detail: "égoutté", emoji: "🐟", baseQty: 40, unit: "g", scalable: true, role: "protéine" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "remplace la mayo", emoji: "🥛", baseQty: 15, unit: "g", scalable: true, role: "liant" },
            { id: "sauce_soja", name: "Sauce soja", detail: "", emoji: "🫘", baseQty: 5, unit: "ml", scalable: false, role: "assaisonnement" },
            { id: "concombre", name: "Concombre", detail: "coupé en dés fins", emoji: "🥒", baseQty: 20, unit: "g", scalable: true, role: "garniture" },
            { id: "graines_lin", name: "Graines de sésame", detail: "pour l'extérieur", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "décoration" }
        ],
        options: [],
        steps: [
            { title: "Cuire le riz selon les instructions du paquet", text: "Cuire le riz selon les instructions du paquet. Le laisser tiédir légèrement." },
            { title: "Émietter le thon égoutté dans un bol", text: "Émietter le thon égoutté dans un bol. Ajouter le fromage blanc et la sauce soja, mélanger." },
            { title: "Ajouter les dés de concombre", text: "Ajouter les dés de concombre à la garniture de thon." },
            { title: "Mouiller vos mains avec de", text: "Mouiller vos mains avec de l'eau légèrement salée pour éviter que le riz colle." },
            { title: "Prendre une portion de riz", text: "Prendre une portion de riz dans la paume, creuser un puits au centre." },
            { title: "Déposer une cuillère de garniture", text: "Déposer une cuillère de garniture thon dans le puits, refermer avec du riz." },
            { title: "Former une boule puis lui", text: "Former une boule puis lui donner une forme triangulaire en pressant doucement." },
            { title: "Parsemer de graines de sésame sur l'extérieur", text: "Parsemer de graines de sésame sur l'extérieur. Emballer dans du film alimentaire." }
        ],
        tips: [
            { type: "green", title: "💡 Transport", text: "S'emportent facilement emballés dans du film alimentaire. Consommer dans les 4h à température ambiante ou garder au frais." },
            { type: "red", title: "⚠️ Riz", text: "Le riz doit être encore tiède pour bien se façonner. Trop froid, il ne collera pas ; trop chaud, il brûle les mains." }
        ]
    },

    {
        id: "barres-granola-choco-amandes",
        name: "Barres Granola Choco-Amandes",
        subtitle: "Barres croquantes maison au chocolat et amandes",
        emoji: "🍫",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 35,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Batch cooking","Haute protéine"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "amandes", name: "Amandes", detail: "concassées", emoji: "🌰", baseQty: 15, unit: "g", scalable: true, role: "croquant" },
            { id: "whey_protein", name: "Whey protéine", detail: "chocolat", emoji: "💪", baseQty: 15, unit: "g", scalable: true, role: "protéine" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 15, unit: "g", scalable: true, role: "liant" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "", emoji: "🥜", baseQty: 15, unit: "g", scalable: true, role: "liant" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "fondu", emoji: "🍫", baseQty: 15, unit: "g", scalable: true, role: "enrobage" },
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "nutrition" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 160°C", text: "Préchauffer le four à 160°C. Chemiser un petit moule rectangulaire de papier cuisson." },
            { title: "Dans un grand bol, mélanger", text: "Dans un grand bol, mélanger les flocons d'avoine, les amandes concassées, la whey et les graines de chia." },
            { title: "Faire tiédir le miel et", text: "Faire tiédir le miel et le beurre de cacahuète au micro-ondes 20 secondes." },
            { title: "Verser le mélange tiède sur", text: "Verser le mélange tiède sur les ingrédients secs, bien mélanger pour enrober uniformément." },
            { title: "Presser fermement le mélange dans", text: "Presser fermement le mélange dans le moule en tassant bien avec le dos d'une cuillère." },
            { title: "Enfourner 18-20 minutes jusqu'à ce", text: "Enfourner 18-20 minutes jusqu'à ce que les bords soient dorés." },
            { title: "Laisser refroidir complètement dans le", text: "Laisser refroidir complètement dans le moule avant de démouler." },
            { title: "Faire fondre le chocolat noir", text: "Faire fondre le chocolat noir au bain-marie ou micro-ondes, napper le dessus des barres." },
            { title: "Réfrigérer 15 minutes pour figer", text: "Réfrigérer 15 minutes pour figer le chocolat, puis découper en barres." }
        ],
        tips: [
            { type: "green", title: "💡 Batch cooking", text: "Préparer un batch de 6-8 barres le dimanche. Se conservent 1 semaine au frigo dans du film alimentaire." },
            { type: "red", title: "⚠️ Tassage", text: "Bien tasser le mélange dans le moule sinon les barres s'émiettent. Utiliser le fond d'un verre pour presser uniformément." }
        ]
    },

    {
        id: "boulettes-falafel-emporter",
        name: "Boulettes de Falafel à Emporter",
        subtitle: "Falafels maison croustillants au four",
        emoji: "🧆",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 35,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Vegan","Haute protéine","Batch cooking"],
        ingredients: [
            { id: "pois_chiches_cuits", name: "Pois chiches", detail: "égouttés", emoji: "🫘", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "oignon", name: "Oignon", detail: "haché fin", emoji: "🧅", baseQty: 20, unit: "g", scalable: true, role: "arôme" },
            { id: "farine_complete", name: "Farine complète", detail: "", emoji: "🌾", baseQty: 10, unit: "g", scalable: true, role: "liant" },
            { id: "citron_jus", name: "Jus de citron", detail: "frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "fraîcheur" },
            { id: "sauce_tahini", name: "Tahini", detail: "", emoji: "🥄", baseQty: 10, unit: "g", scalable: true, role: "onctuosité" },
            { id: "huile_olive", name: "Huile d'olive", detail: "pour badigeonner", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "cuisson" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 200°C", text: "Préchauffer le four à 200°C. Chemiser une plaque de papier cuisson." },
            { title: "Égoutter et rincer les pois chiches", text: "Égoutter et rincer les pois chiches. Les sécher avec du papier absorbant." },
            { title: "Mixer les pois chiches dans", text: "Mixer les pois chiches dans un robot avec l'oignon haché, le jus de citron et le tahini." },
            { title: "Mixer par à-coups pour obtenir", text: "Mixer par à-coups pour obtenir une texture grossière (pas une purée lisse)." },
            { title: "Ajouter la farine complète, saler et poivrer", text: "Ajouter la farine complète, saler et poivrer. Mixer brièvement pour incorporer." },
            { title: "Former des boulettes de la", text: "Former des boulettes de la taille d'une noix avec les mains légèrement huilées." },
            { title: "Disposer les boulettes sur la", text: "Disposer les boulettes sur la plaque, les badigeonner d'un peu d'huile d'olive." },
            { title: "Enfourner 20-25 minutes en retournant", text: "Enfourner 20-25 minutes en retournant à mi-cuisson, jusqu'à ce qu'elles soient dorées et croustillantes." },
            { title: "Laisser refroidir avant de transporter", text: "Laisser refroidir avant de transporter dans une boîte hermétique." }
        ],
        tips: [
            { type: "green", title: "💡 Sauce", text: "Emporter un petit pot de sauce au yaourt (fromage blanc + citron + herbes) pour tremper les falafels." },
            { type: "red", title: "⚠️ Texture", text: "Ne pas trop mixer sinon la pâte devient trop lisse et les falafels seront secs. Garder des morceaux." }
        ]
    },

    {
        id: "barre-dattes-noix-cacao",
        name: "Barres Dattes-Noix-Cacao",
        subtitle: "Barres raw sans cuisson au cacao cru",
        emoji: "🌰",
        category: "collation-emporter",
        difficulty: "Facile",
        time: 15,
        sliderMin: 30,
        sliderMax: 150,
        tags: ["Vegan","Sans cuisson","Sans gluten"],
        ingredients: [
            { id: "noix", name: "Noix", detail: "", emoji: "🌰", baseQty: 25, unit: "g", scalable: true, role: "base" },
            { id: "amandes", name: "Amandes", detail: "", emoji: "🌰", baseQty: 20, unit: "g", scalable: true, role: "base" },
            { id: "cacao_poudre", name: "Cacao en poudre", detail: "non sucré", emoji: "🍫", baseQty: 8, unit: "g", scalable: true, role: "arôme" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "", emoji: "🥥", baseQty: 10, unit: "g", scalable: true, role: "texture" },
            { id: "sirop_erable", name: "Sirop d'érable", detail: "", emoji: "🍁", baseQty: 10, unit: "ml", scalable: true, role: "liant" },
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "nutrition" }
        ],
        options: [],
        steps: [
            { title: "Mixer grossièrement les noix et", text: "Mixer grossièrement les noix et les amandes dans un robot : garder des morceaux pour le croquant." },
            { title: "Ajouter le cacao en poudre", text: "Ajouter le cacao en poudre et les graines de chia, mixer 2-3 secondes pour mélanger." },
            { title: "Verser le sirop d'érable et", text: "Verser le sirop d'érable et mixer par à-coups jusqu'à obtenir une pâte qui se tient." },
            { title: "Étaler le mélange dans un", text: "Étaler le mélange dans un petit moule tapissé de film alimentaire, tasser fermement." },
            { title: "Saupoudrer de noix de coco", text: "Saupoudrer de noix de coco râpée et presser pour faire adhérer." },
            { title: "Réfrigérer au moins 1h puis", text: "Réfrigérer au moins 1h puis découper en barres." },
            { title: "Emballer individuellement dans du film", text: "Emballer individuellement dans du film alimentaire pour le transport." }
        ],
        tips: [
            { type: "green", title: "💡 Conservation", text: "Se conservent 2 semaines au frigo et 2 mois au congélateur. Toujours prêtes à emporter !" },
            { type: "red", title: "⚠️ Liant", text: "Si le mélange ne tient pas, ajouter une cuillère de sirop d'érable. Les noix doivent libérer leur huile en mixant." }
        ]
    },

    {
        id: "scones-avoine-fromage-herbes",
        name: "Scones Avoine-Fromage-Herbes",
        subtitle: "Scones salés à l'avoine et fromage râpé",
        emoji: "🧀",
        category: "collation-emporter",
        difficulty: "Moyen",
        time: 30,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Haute protéine","Batch cooking"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés en farine", emoji: "🌾", baseQty: 60, unit: "g", scalable: true, role: "base" },
            { id: "fromage_rape", name: "Fromage râpé", detail: "emmental ou comté", emoji: "🧀", baseQty: 20, unit: "g", scalable: true, role: "goût" },
            { id: "oeuf", name: "Œuf", detail: "entier", emoji: "🥚", baseQty: 1, unit: "unité", scalable: true, role: "liant" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 40, unit: "g", scalable: true, role: "moelleux" },
            { id: "epinards", name: "Épinards", detail: "frais, ciselés", emoji: "🥬", baseQty: 20, unit: "g", scalable: true, role: "légume" },
            { id: "tomate", name: "Tomates séchées", detail: "hachées", emoji: "🍅", baseQty: 10, unit: "g", scalable: true, role: "garniture" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 190°C", text: "Préchauffer le four à 190°C. Chemiser une plaque de papier cuisson." },
            { title: "Mixer les flocons d'avoine en", text: "Mixer les flocons d'avoine en farine grossière." },
            { title: "Dans un grand bol, mélanger", text: "Dans un grand bol, mélanger la farine d'avoine et le fromage râpé." },
            { title: "Ciseler les épinards frais et", text: "Ciseler les épinards frais et hacher les tomates séchées, les ajouter au mélange." },
            { title: "Dans un petit bol, battre", text: "Dans un petit bol, battre l'œuf avec le fromage blanc. Saler et poivrer." },
            { title: "Verser les ingrédients humides sur", text: "Verser les ingrédients humides sur les secs, mélanger à la spatule jusqu'à obtenir une pâte épaisse." },
            { title: "Former 3-4 petits scones sur", text: "Former 3-4 petits scones sur la plaque en les façonnant à la main." },
            { title: "Enfourner 18-22 minutes jusqu'à ce", text: "Enfourner 18-22 minutes jusqu'à ce qu'ils soient dorés sur le dessus." },
            { title: "Laisser refroidir sur une grille", text: "Laisser refroidir sur une grille avant d'emballer pour le transport." }
        ],
        tips: [
            { type: "green", title: "💡 Variante", text: "Remplacer les épinards par des herbes fraîches (ciboulette, persil) ou ajouter des olives noires hachées." },
            { type: "red", title: "⚠️ Texture", text: "Ne pas trop travailler la pâte pour garder des scones tendres. Quelques grumeaux sont normaux." }
        ]
    },

    {
        id: "panna-cotta-vanille-fruits-rouges",
        name: "Panna Cotta Vanille & Coulis Fruits Rouges",
        subtitle: "Dessert onctueux allégé au fromage blanc",
        emoji: "🍮",
        category: "collation-maison",
        difficulty: "Moyen",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Haute protéine"],
        ingredients: [
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "", emoji: "🥛", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "lait_demi", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 50, unit: "ml", scalable: true, role: "texture" },
            { id: "fruits_rouges", name: "Fruits rouges", detail: "mélangés (frais ou surgelés)", emoji: "🍓", baseQty: 60, unit: "g", scalable: true, role: "coulis" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: true, role: "sucrant" },
            { id: "whey_protein", name: "Whey protéine", detail: "vanille", emoji: "💪", baseQty: 15, unit: "g", scalable: true, role: "protéine" }
        ],
        options: [],
        steps: [
            { title: "Dans un bol, fouetter le", text: "Dans un bol, fouetter le fromage blanc avec la whey protéine vanille jusqu'à obtenir un mélange lisse." },
            { title: "Ajouter le lait progressivement en", text: "Ajouter le lait progressivement en fouettant pour obtenir une texture crémeuse et homogène." },
            { title: "Ajouter la moitié du miel, mélanger", text: "Ajouter la moitié du miel, mélanger. Verser dans un verre ou ramequin." },
            { title: "Réfrigérer au moins 2h (ou", text: "Réfrigérer au moins 2h (ou toute la nuit) pour que la texture se raffermisse." },
            { title: "Pendant ce temps, préparer le", text: "Pendant ce temps, préparer le coulis : mixer les fruits rouges avec le reste du miel." },
            { title: "Passer le coulis au tamis", text: "Passer le coulis au tamis pour retirer les graines si désiré." },
            { title: "Au moment de servir, napper", text: "Au moment de servir, napper la panna cotta du coulis de fruits rouges." }
        ],
        tips: [
            { type: "green", title: "💡 Astuce", text: "Pour une texture plus ferme type vraie panna cotta, ajouter 1g de gélatine (ou agar-agar) dissoute dans le lait tiède." },
            { type: "red", title: "⚠️ Patience", text: "La prise en texture nécessite au moins 2h de frigo. Idéal de préparer la veille au soir." }
        ]
    },

    {
        id: "bowl-acai-granola",
        name: "Bowl Açaï-Granola-Fruits",
        subtitle: "Bowl brésilien à l'açaï garni de fruits et granola",
        emoji: "🫐",
        category: "collation-maison",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Vegan","Sans gluten","Sans cuisson"],
        ingredients: [
            { id: "acai_puree", name: "Purée d'açaï", detail: "surgelée", emoji: "🫐", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "banane", name: "Banane", detail: "surgelée en rondelles", emoji: "🍌", baseQty: 60, unit: "g", scalable: true, role: "texture" },
            { id: "lait_amande", name: "Lait d'amande", detail: "non sucré", emoji: "🥛", baseQty: 40, unit: "ml", scalable: true, role: "liquide" },
            { id: "granola", name: "Granola", detail: "", emoji: "🥣", baseQty: 20, unit: "g", scalable: true, role: "topping" },
            { id: "myrtilles", name: "Myrtilles", detail: "fraîches", emoji: "🫐", baseQty: 25, unit: "g", scalable: true, role: "topping" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "", emoji: "🥥", baseQty: 5, unit: "g", scalable: false, role: "topping" },
            { id: "graines_chia", name: "Graines de chia", detail: "", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "topping" }
        ],
        options: [],
        steps: [
            { title: "Sortir la purée d'açaï du", text: "Sortir la purée d'açaï du congélateur 5 minutes avant pour qu'elle se ramollisse légèrement." },
            { title: "Casser la purée d'açaï en", text: "Casser la purée d'açaï en morceaux, la mettre dans un blender avec la banane surgelée." },
            { title: "Ajouter le lait d'amande et", text: "Ajouter le lait d'amande et mixer en raclant les parois, jusqu'à obtenir une texture épaisse type sorbet." },
            { title: "Verser la base d'açaï dans", text: "Verser la base d'açaï dans un bol en lissant la surface." },
            { title: "Disposer les toppings en rangées", text: "Disposer les toppings en rangées décoratives : granola d'un côté, myrtilles fraîches de l'autre." },
            { title: "Parsemer de noix de coco", text: "Parsemer de noix de coco râpée et de graines de chia." },
            { title: "Servir immédiatement avant que la", text: "Servir immédiatement avant que la base ne fonde trop." }
        ],
        tips: [
            { type: "green", title: "💡 Texture", text: "La clé est une texture épaisse type frozen yogurt. Ajouter le lait petit à petit pour ne pas trop liquéfier." },
            { type: "red", title: "⚠️ Consommation", text: "À déguster immédiatement après préparation. La base fond vite et le granola ramollit." }
        ]
    },

    {
        id: "mousse-chocolat-tofu-soyeux",
        name: "Mousse au Chocolat au Tofu Soyeux",
        subtitle: "Mousse légère et protéinée sans œufs ni crème",
        emoji: "🍫",
        category: "collation-maison",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Vegan","Sans gluten","Sans cuisson","Haute protéine"],
        ingredients: [
            { id: "tofu", name: "Tofu soyeux", detail: "ferme", emoji: "🧊", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "chocolat_noir_70", name: "Chocolat noir 70%", detail: "fondu", emoji: "🍫", baseQty: 25, unit: "g", scalable: true, role: "arôme" },
            { id: "cacao_poudre", name: "Cacao en poudre", detail: "non sucré", emoji: "🍫", baseQty: 5, unit: "g", scalable: true, role: "arôme" },
            { id: "sirop_erable", name: "Sirop d'érable", detail: "", emoji: "🍁", baseQty: 10, unit: "ml", scalable: true, role: "sucrant" },
            { id: "banane", name: "Banane", detail: "mûre", emoji: "🍌", baseQty: 30, unit: "g", scalable: true, role: "sucrant" }
        ],
        options: [],
        steps: [
            { title: "Faire fondre le chocolat noir", text: "Faire fondre le chocolat noir au bain-marie ou au micro-ondes par intervalles de 20 secondes." },
            { title: "Égoutter le tofu soyeux et", text: "Égoutter le tofu soyeux et le couper en morceaux." },
            { title: "Mettre le tofu, la banane,", text: "Mettre le tofu, la banane, le cacao en poudre et le sirop d'érable dans un blender." },
            { title: "Mixer jusqu'à obtenir une texture", text: "Mixer jusqu'à obtenir une texture parfaitement lisse et crémeuse (environ 1 minute)." },
            { title: "Ajouter le chocolat fondu tiédi,", text: "Ajouter le chocolat fondu tiédi, mixer encore 30 secondes pour incorporer." },
            { title: "Verser dans des ramequins ou des verres", text: "Verser dans des ramequins ou des verres." },
            { title: "Réfrigérer au moins 2h pour", text: "Réfrigérer au moins 2h pour que la mousse prenne en texture." },
            { title: "Servir frais, parsemé d'un peu", text: "Servir frais, parsemé d'un peu de cacao en poudre si souhaité." }
        ],
        tips: [
            { type: "green", title: "💡 Astuce", text: "Le tofu soyeux donne une texture incroyablement crémeuse sans aucun goût de soja une fois le chocolat ajouté." },
            { type: "red", title: "⚠️ Chocolat", text: "Le chocolat fondu doit être tiédi (pas chaud) avant d'être ajouté, sinon il fige au contact du tofu froid et crée des grumeaux." }
        ]
    },

    {
        id: "porridge-poire-noisette-chocolat",
        name: "Porridge Poire-Noisette-Chocolat",
        subtitle: "Porridge gourmand aux saveurs d'automne",
        emoji: "🍐",
        category: "collation-maison",
        difficulty: "Facile",
        time: 10,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Haute protéine"],
        ingredients: [
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "petits", emoji: "🌾", baseQty: 40, unit: "g", scalable: true, role: "base" },
            { id: "lait_demi", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 120, unit: "ml", scalable: true, role: "liquide" },
            { id: "whey_protein", name: "Whey protéine", detail: "chocolat", emoji: "💪", baseQty: 15, unit: "g", scalable: true, role: "protéine" },
            { id: "pomme", name: "Poire", detail: "en dés", emoji: "🍐", baseQty: 60, unit: "g", scalable: true, role: "fruit" },
            { id: "amandes", name: "Noisettes", detail: "concassées", emoji: "🌰", baseQty: 10, unit: "g", scalable: true, role: "croquant" },
            { id: "chocolat_noir_70", name: "Pépites de chocolat noir", detail: "70%", emoji: "🍫", baseQty: 10, unit: "g", scalable: true, role: "gourmandise" }
        ],
        options: [],
        steps: [
            { title: "Verser les flocons d'avoine et", text: "Verser les flocons d'avoine et le lait dans une casserole." },
            { title: "Porter à feu moyen en", text: "Porter à feu moyen en remuant régulièrement pendant 4-5 minutes." },
            { title: "Pendant ce temps, couper la", text: "Pendant ce temps, couper la poire en petits dés." },
            { title: "Quand le porridge épaissit, retirer", text: "Quand le porridge épaissit, retirer du feu et laisser tiédir 1 minute." },
            { title: "Incorporer la whey protéine et", text: "Incorporer la whey protéine et mélanger vigoureusement pour éviter les grumeaux." },
            { title: "Verser dans un bol, garnir", text: "Verser dans un bol, garnir des dés de poire, des noisettes concassées et des pépites de chocolat." },
            { title: "Servir tiède pour que les", text: "Servir tiède pour que les pépites de chocolat commencent à fondre légèrement." }
        ],
        tips: [
            { type: "green", title: "💡 Saison", text: "En automne-hiver, poêler les poires 2 minutes avec un soupçon de cannelle pour un résultat encore plus gourmand." },
            { type: "red", title: "⚠️ Whey", text: "Toujours ajouter la whey hors du feu pour éviter qu'elle ne crée des grumeaux en coagulant avec la chaleur." }
        ]
    },

    {
        id: "riz-au-lait-vanille-cannelle",
        name: "Riz au Lait Vanille-Cannelle",
        subtitle: "Classique réconfortant allégé en sucre",
        emoji: "🍚",
        category: "collation-maison",
        difficulty: "Moyen",
        time: 35,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten"],
        ingredients: [
            { id: "riz_basmati_cuit", name: "Riz rond", detail: "cru", emoji: "🍚", baseQty: 40, unit: "g", scalable: true, role: "base", rawRatio: 2.25 },
            { id: "lait_demi", name: "Lait demi-écrémé", detail: "", emoji: "🥛", baseQty: 200, unit: "ml", scalable: true, role: "liquide" },
            { id: "whey_protein", name: "Whey protéine", detail: "vanille", emoji: "💪", baseQty: 15, unit: "g", scalable: true, role: "protéine" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 10, unit: "g", scalable: true, role: "sucrant" },
            { id: "citron_jus", name: "Zeste de citron", detail: "bio", emoji: "🍋", baseQty: 3, unit: "g", scalable: false, role: "arôme" }
        ],
        options: [],
        steps: [
            { title: "Rincer le riz sous l'eau", text: "Rincer le riz sous l'eau froide pour retirer l'excès d'amidon." },
            { title: "Dans une casserole, porter le", text: "Dans une casserole, porter le lait à frémissement avec le zeste de citron." },
            { title: "Ajouter le riz, baisser le", text: "Ajouter le riz, baisser le feu au minimum et couvrir partiellement." },
            { title: "Cuire 25-30 minutes en remuant", text: "Cuire 25-30 minutes en remuant régulièrement pour que le riz n'accroche pas." },
            { title: "Quand le riz est crémeux", text: "Quand le riz est crémeux et a absorbé la majorité du lait, retirer du feu." },
            { title: "Laisser tiédir 2 minutes puis", text: "Laisser tiédir 2 minutes puis incorporer la whey protéine et le miel, bien mélanger." },
            { title: "Servir tiède ou réfrigérer pour", text: "Servir tiède ou réfrigérer pour déguster froid. Saupoudrer de cannelle au moment de servir." }
        ],
        tips: [
            { type: "green", title: "💡 Meal prep", text: "Préparer une grande quantité et portionner pour la semaine. Se réchauffe bien au micro-ondes avec un peu de lait." },
            { type: "red", title: "⚠️ Cuisson", text: "Remuer souvent pour éviter que le riz colle au fond. Le feu doit être très doux pour une cuisson homogène." }
        ]
    },

    {
        id: "crumble-pomme-express",
        name: "Crumble Pomme Express",
        subtitle: "Crumble individuel rapide aux flocons d'avoine",
        emoji: "🍎",
        category: "collation-maison",
        difficulty: "Facile",
        time: 20,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien"],
        ingredients: [
            { id: "pomme", name: "Pomme", detail: "type Golden, en dés", emoji: "🍎", baseQty: 100, unit: "g", scalable: true, role: "fruit" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "", emoji: "🌾", baseQty: 30, unit: "g", scalable: true, role: "crumble" },
            { id: "beurre_cacahuete", name: "Beurre de cacahuète", detail: "ou beurre d'amande", emoji: "🥜", baseQty: 10, unit: "g", scalable: true, role: "liant" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 8, unit: "g", scalable: true, role: "sucrant" },
            { id: "amandes", name: "Amandes", detail: "effilées", emoji: "🌰", baseQty: 8, unit: "g", scalable: true, role: "croquant" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "pour servir", emoji: "🥛", baseQty: 40, unit: "g", scalable: true, role: "accompagnement" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 190°C", text: "Préchauffer le four à 190°C." },
            { title: "Couper la pomme en petits", text: "Couper la pomme en petits dés et les disposer dans un ramequin allant au four." },
            { title: "Saupoudrer d'un peu de cannelle", text: "Saupoudrer d'un peu de cannelle si souhaité, mélanger." },
            { title: "Dans un bol, mélanger les", text: "Dans un bol, mélanger les flocons d'avoine, le beurre de cacahuète ramolli et le miel du bout des doigts." },
            { title: "Ajouter les amandes effilées, mélanger", text: "Ajouter les amandes effilées, mélanger pour obtenir un crumble grossier." },
            { title: "Répartir le crumble sur les", text: "Répartir le crumble sur les pommes en une couche uniforme." },
            { title: "Enfourner 15-18 minutes jusqu'à ce", text: "Enfourner 15-18 minutes jusqu'à ce que le dessus soit doré et les pommes tendres." },
            { title: "Servir tiède avec une cuillère", text: "Servir tiède avec une cuillère de fromage blanc 0% sur le dessus." }
        ],
        tips: [
            { type: "green", title: "💡 Express", text: "Pour aller encore plus vite, utiliser de la compote de pomme sans sucre ajouté à la place des pommes fraîches." },
            { type: "red", title: "⚠️ Surveillance", text: "Les amandes effilées brunissent vite : surveiller les 5 dernières minutes de cuisson." }
        ]
    },

    {
        id: "smoothie-vert-proteine-epinard",
        name: "Smoothie Vert Protéiné",
        subtitle: "Smoothie détox aux épinards, banane et mangue",
        emoji: "🥬",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Express","Sans cuisson","Haute protéine"],
        ingredients: [
            { id: "epinards", name: "Épinards frais", detail: "jeunes pousses", emoji: "🥬", baseQty: 30, unit: "g", scalable: true, role: "verdure" },
            { id: "banane", name: "Banane", detail: "mûre", emoji: "🍌", baseQty: 50, unit: "g", scalable: true, role: "onctuosité" },
            { id: "mangue", name: "Mangue", detail: "surgelée", emoji: "🥭", baseQty: 50, unit: "g", scalable: true, role: "fruit" },
            { id: "whey_protein", name: "Whey protéine", detail: "vanille", emoji: "💪", baseQty: 20, unit: "g", scalable: true, role: "protéine" },
            { id: "lait_amande", name: "Lait d'amande", detail: "non sucré", emoji: "🥛", baseQty: 150, unit: "ml", scalable: true, role: "liquide" },
            { id: "graines_lin", name: "Graines de lin", detail: "moulues", emoji: "🌱", baseQty: 5, unit: "g", scalable: false, role: "oméga-3" }
        ],
        options: [],
        steps: [
            { title: "Mettre les épinards frais et", text: "Mettre les épinards frais et le lait d'amande dans le blender, mixer 20 secondes pour broyer les feuilles." },
            { title: "Ajouter la banane coupée en", text: "Ajouter la banane coupée en morceaux et la mangue surgelée." },
            { title: "Ajouter la whey protéine et", text: "Ajouter la whey protéine et les graines de lin moulues." },
            { title: "Mixer à pleine puissance 45-60", text: "Mixer à pleine puissance 45-60 secondes jusqu'à obtenir un smoothie parfaitement lisse." },
            { title: "Goûter et ajuster : plus", text: "Goûter et ajuster : plus de banane pour le sucré, plus de lait pour la fluidité." },
            { title: "Verser dans un grand verre", text: "Verser dans un grand verre et servir immédiatement." }
        ],
        tips: [
            { type: "green", title: "💡 Astuce", text: "Les épinards n'ont aucun goût dans le smoothie ! La mangue et la banane masquent complètement. Parfait pour les réticents aux légumes verts." },
            { type: "red", title: "⚠️ Ordre", text: "Toujours mixer les épinards avec le liquide en premier pour éviter les morceaux de feuilles non mixés." }
        ]
    },

    {
        id: "tartine-cottage-cheese-tomate-basilic",
        name: "Tartine Cottage Cheese Tomate-Basilic",
        subtitle: "Toast gourmand à l'italienne",
        emoji: "🍅",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien","Express","Haute protéine"],
        ingredients: [
            { id: "pain_complet", name: "Pain complet", detail: "1 tranche épaisse", emoji: "🍞", baseQty: 1, unit: "tranche", scalable: true, role: "base" },
            { id: "cottage_cheese", name: "Cottage cheese", detail: "", emoji: "🧀", baseQty: 60, unit: "g", scalable: true, role: "protéine" },
            { id: "tomate", name: "Tomate", detail: "en rondelles", emoji: "🍅", baseQty: 50, unit: "g", scalable: true, role: "garniture" },
            { id: "huile_olive", name: "Huile d'olive", detail: "un filet", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "assaisonnement" },
            { id: "vinaigre_balsamique", name: "Vinaigre balsamique", detail: "un filet", emoji: "🫗", baseQty: 3, unit: "ml", scalable: false, role: "assaisonnement" }
        ],
        options: [],
        steps: [
            { title: "Toaster la tranche de pain", text: "Toaster la tranche de pain complet jusqu'à ce qu'elle soit bien dorée et croustillante." },
            { title: "Laver la tomate et la", text: "Laver la tomate et la couper en fines rondelles." },
            { title: "Tartiner généreusement le cottage cheese", text: "Tartiner généreusement le cottage cheese sur le toast chaud." },
            { title: "Disposer les rondelles de tomate", text: "Disposer les rondelles de tomate par-dessus en les faisant se chevaucher." },
            { title: "Saler et poivrer les tomates", text: "Saler et poivrer les tomates. Ajouter un filet d'huile d'olive et de vinaigre balsamique." },
            { title: "Servir immédiatement pour profiter du", text: "Servir immédiatement pour profiter du contraste chaud/frais." }
        ],
        tips: [
            { type: "green", title: "💡 Été", text: "En été, utiliser des tomates cerises de différentes couleurs coupées en deux pour un résultat plus coloré et savoureux." },
            { type: "red", title: "⚠️ Pain", text: "Le toast doit être bien grillé pour supporter le poids du cottage cheese sans ramollir." }
        ]
    },

    {
        id: "skyr-bowl-tropical-granola",
        name: "Skyr Bowl Tropical & Granola",
        subtitle: "Bowl islandais aux fruits exotiques et granola croquant",
        emoji: "🥣",
        category: "collation-maison",
        difficulty: "Facile",
        time: 5,
        sliderMin: 30,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Express","Sans cuisson","Haute protéine"],
        ingredients: [
            { id: "skyr_0", name: "Skyr 0%", detail: "nature", emoji: "🥛", baseQty: 120, unit: "g", scalable: true, role: "base" },
            { id: "mangue", name: "Mangue", detail: "fraîche, en dés", emoji: "🥭", baseQty: 50, unit: "g", scalable: true, role: "fruit" },
            { id: "ananas", name: "Ananas", detail: "frais, en morceaux", emoji: "🍍", baseQty: 40, unit: "g", scalable: true, role: "fruit" },
            { id: "granola", name: "Granola", detail: "", emoji: "🥣", baseQty: 20, unit: "g", scalable: true, role: "croquant" },
            { id: "noix_coco_rapee", name: "Noix de coco râpée", detail: "", emoji: "🥥", baseQty: 5, unit: "g", scalable: false, role: "topping" },
            { id: "miel", name: "Miel", detail: "", emoji: "🍯", baseQty: 5, unit: "g", scalable: true, role: "sucrant" }
        ],
        options: [],
        steps: [
            { title: "Verser le skyr nature dans un bol large", text: "Verser le skyr nature dans un bol large." },
            { title: "Lisser la surface avec le dos d'une cuillère", text: "Lisser la surface avec le dos d'une cuillère." },
            { title: "Couper la mangue et l'ananas", text: "Couper la mangue et l'ananas en petits dés réguliers." },
            { title: "Disposer les fruits sur un", text: "Disposer les fruits sur un côté du bol en alternant les couleurs." },
            { title: "Ajouter le granola de l'autre", text: "Ajouter le granola de l'autre côté pour garder le croquant." },
            { title: "Parsemer de noix de coco", text: "Parsemer de noix de coco râpée et arroser d'un filet de miel." },
            { title: "Servir immédiatement pour profiter du", text: "Servir immédiatement pour profiter du contraste de textures." }
        ],
        tips: [
            { type: "green", title: "💡 Post-entraînement", text: "Le skyr apporte 10g de protéines pour 100g avec très peu de matière grasse. Idéal en récupération post-effort." },
            { type: "red", title: "⚠️ Granola", text: "Ajouter le granola au dernier moment pour qu'il reste croquant. Il ramollit vite au contact du skyr." }
        ]
    },

    {
        id: "galette-courgette-parmesan",
        name: "Galettes de Courgette au Parmesan",
        subtitle: "Galettes croustillantes de légumes au four",
        emoji: "🥒",
        category: "collation-maison",
        difficulty: "Moyen",
        time: 25,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Haute protéine"],
        ingredients: [
            { id: "courgette", name: "Courgette", detail: "râpée et essorée", emoji: "🥒", baseQty: 100, unit: "g", scalable: true, role: "base" },
            { id: "oeuf", name: "Œuf", detail: "entier", emoji: "🥚", baseQty: 1, unit: "unité", scalable: true, role: "liant" },
            { id: "parmesan", name: "Parmesan", detail: "râpé", emoji: "🧀", baseQty: 15, unit: "g", scalable: true, role: "goût" },
            { id: "flocons_avoine", name: "Flocons d'avoine", detail: "mixés", emoji: "🌾", baseQty: 15, unit: "g", scalable: true, role: "liant" },
            { id: "oignon", name: "Oignon", detail: "haché fin", emoji: "🧅", baseQty: 15, unit: "g", scalable: true, role: "arôme" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "pour la sauce", emoji: "🥛", baseQty: 30, unit: "g", scalable: true, role: "sauce" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 200°C", text: "Préchauffer le four à 200°C. Chemiser une plaque de papier cuisson." },
            { title: "Râper la courgette et la", text: "Râper la courgette et la presser fermement dans un torchon propre pour extraire un maximum d'eau." },
            { title: "Dans un bol, mélanger la", text: "Dans un bol, mélanger la courgette essorée, l'œuf battu, le parmesan râpé et les flocons d'avoine mixés." },
            { title: "Ajouter l'oignon haché fin, saler et poivrer", text: "Ajouter l'oignon haché fin, saler et poivrer. Bien mélanger." },
            { title: "Former des galettes aplaties (3-4", text: "Former des galettes aplaties (3-4 environ) et les déposer sur la plaque." },
            { title: "Enfourner 10 minutes, retourner délicatement,", text: "Enfourner 10 minutes, retourner délicatement, puis cuire encore 8-10 minutes jusqu'à ce qu'elles soient dorées." },
            { title: "Servir tiède avec le fromage", text: "Servir tiède avec le fromage blanc 0% assaisonné (sel, poivre, herbes)." }
        ],
        tips: [
            { type: "green", title: "💡 Essorer", text: "L'étape d'essorage de la courgette est cruciale. Plus vous retirez d'eau, plus les galettes seront croustillantes." },
            { type: "red", title: "⚠️ Retournement", text: "Utiliser une spatule large pour retourner les galettes délicatement. Elles sont fragiles avant la fin de cuisson." }
        ]
    },

    {
        id: "quiche-lorraine-legere",
        name: "Quiche Lorraine Légère",
        subtitle: "La classique revisitée sans pâte",
        emoji: "🥧",
        category: "dejeuner",
        difficulty: "Moyen",
        time: 40,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Végétarien","Sans gluten","Haute protéine"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "entiers", emoji: "🥚", baseQty: 2, unit: "unité", scalable: true, role: "base" },
            { id: "jambon_blanc", name: "Jambon blanc", detail: "en dés", emoji: "🥓", baseQty: 40, unit: "g", scalable: true, role: "protéine" },
            { id: "fromage_rape", name: "Fromage râpé", detail: "emmental", emoji: "🧀", baseQty: 20, unit: "g", scalable: true, role: "goût" },
            { id: "fromage_blanc_0", name: "Fromage blanc 0%", detail: "remplace la crème", emoji: "🥛", baseQty: 80, unit: "g", scalable: true, role: "appareil" },
            { id: "oignon", name: "Oignon", detail: "émincé", emoji: "🧅", baseQty: 30, unit: "g", scalable: true, role: "arôme" },
            { id: "epinards", name: "Épinards", detail: "frais", emoji: "🥬", baseQty: 40, unit: "g", scalable: true, role: "légume" },
            { id: "farine_complete", name: "Farine complète", detail: "pour le fond", emoji: "🌾", baseQty: 15, unit: "g", scalable: true, role: "base" }
        ],
        options: [],
        steps: [
            { title: "Préchauffer le four à 180°C", text: "Préchauffer le four à 180°C. Huiler légèrement un moule à tarte." },
            { title: "Faire revenir l'oignon émincé dans", text: "Faire revenir l'oignon émincé dans une poêle antiadhésive 3 minutes jusqu'à ce qu'il soit translucide." },
            { title: "Ajouter les épinards frais, cuire", text: "Ajouter les épinards frais, cuire 2 minutes jusqu'à ce qu'ils tombent. Égoutter l'excès d'eau." },
            { title: "Dans un grand bol, fouetter", text: "Dans un grand bol, fouetter les œufs avec le fromage blanc 0% jusqu'à obtenir un mélange lisse." },
            { title: "Ajouter le jambon en dés,", text: "Ajouter le jambon en dés, les épinards-oignons et la moitié du fromage râpé. Saler et poivrer." },
            { title: "Saupoudrer le fond du moule", text: "Saupoudrer le fond du moule d'un peu de farine complète pour former une fine croûte." },
            { title: "Verser l'appareil dans le moule,", text: "Verser l'appareil dans le moule, parsemer du reste de fromage râpé." },
            { title: "Enfourner 25-30 minutes jusqu'à ce", text: "Enfourner 25-30 minutes jusqu'à ce que la quiche soit bien dorée et gonflée." },
            { title: "Laisser reposer 5 minutes avant de servir", text: "Laisser reposer 5 minutes avant de servir. Accompagner d'une salade verte." }
        ],
        tips: [
            { type: "green", title: "💡 Sans pâte", text: "Le fromage blanc 0% remplace la crème fraîche et la farine saupoudrée remplace la pâte. Résultat allégé et tout aussi gourmand." },
            { type: "red", title: "⚠️ Épinards", text: "Bien essorer les épinards après cuisson sinon la quiche sera trop humide et ne prendra pas correctement." }
        ]
    },

    {
        id: "soupe-lentilles-corail-curcuma",
        name: "Soupe de Lentilles Corail au Curcuma",
        subtitle: "Velouté réconfortant aux épices douces",
        emoji: "🥣",
        category: "diner",
        difficulty: "Facile",
        time: 25,
        sliderMin: 50,
        sliderMax: 250,
        tags: ["Vegan","Sans gluten","Haute protéine","Perte de poids"],
        ingredients: [
            { id: "lentilles_cuites", name: "Lentilles corail", detail: "sèches", emoji: "🫘", baseQty: 60, unit: "g", scalable: true, role: "base", rawRatio: 2 },
            { id: "carotte", name: "Carotte", detail: "en rondelles", emoji: "🥕", baseQty: 50, unit: "g", scalable: true, role: "légume" },
            { id: "oignon", name: "Oignon", detail: "haché", emoji: "🧅", baseQty: 30, unit: "g", scalable: true, role: "arôme" },
            { id: "lait_coco", name: "Lait de coco", detail: "", emoji: "🥥", baseQty: 30, unit: "ml", scalable: true, role: "onctuosité" },
            { id: "tomate", name: "Tomate", detail: "concassée", emoji: "🍅", baseQty: 50, unit: "g", scalable: true, role: "base" },
            { id: "citron_jus", name: "Jus de citron", detail: "frais", emoji: "🍋", baseQty: 10, unit: "ml", scalable: false, role: "fraîcheur" },
            { id: "huile_olive", name: "Huile d'olive", detail: "", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "cuisson" }
        ],
        options: [],
        steps: [
            { title: "Faire chauffer l'huile d'olive dans", text: "Faire chauffer l'huile d'olive dans une casserole. Faire revenir l'oignon haché 3 minutes." },
            { title: "Ajouter les rondelles de carotte,", text: "Ajouter les rondelles de carotte, cuire 2 minutes en remuant." },
            { title: "Ajouter les lentilles corail rincées,", text: "Ajouter les lentilles corail rincées, la tomate concassée et couvrir d'eau (environ 300ml)." },
            { title: "Ajouter le curcuma (1/2 cuillère", text: "Ajouter le curcuma (1/2 cuillère à café) et une pincée de cumin si disponible." },
            { title: "Porter à ébullition puis baisser le feu", text: "Porter à ébullition puis baisser le feu. Cuire 15-18 minutes jusqu'à ce que les lentilles soient fondantes." },
            { title: "Ajouter le lait de coco,", text: "Ajouter le lait de coco, mixer la soupe au blender ou au mixeur plongeant jusqu'à obtenir un velouté lisse." },
            { title: "Assaisonner avec le jus de", text: "Assaisonner avec le jus de citron, sel et poivre. Réchauffer doucement." },
            { title: "Servir dans un bol avec", text: "Servir dans un bol avec un trait de lait de coco et quelques herbes fraîches." }
        ],
        tips: [
            { type: "green", title: "💡 Batch cooking", text: "Cette soupe se congèle parfaitement. Préparer une grande quantité et portionner en portions individuelles." },
            { type: "red", title: "⚠️ Lentilles corail", text: "Les lentilles corail cuisent très vite et se désagrègent facilement — c'est normal, c'est ce qui donne la texture veloutée." }
        ]
    },

    {
        id: "omelette-forestiere-champignons",
        name: "Omelette Forestière aux Champignons",
        subtitle: "Omelette garnie de champignons poêlés et herbes",
        emoji: "🍄",
        category: "diner",
        difficulty: "Facile",
        time: 15,
        sliderMin: 40,
        sliderMax: 200,
        tags: ["Végétarien","Sans gluten","Haute protéine","Express","Perte de poids"],
        ingredients: [
            { id: "oeuf", name: "Œufs", detail: "entiers", emoji: "🥚", baseQty: 2, unit: "unité", scalable: true, role: "base" },
            { id: "champignon", name: "Champignons", detail: "de Paris, émincés", emoji: "🍄", baseQty: 80, unit: "g", scalable: true, role: "garniture" },
            { id: "fromage_rape", name: "Fromage râpé", detail: "emmental", emoji: "🧀", baseQty: 10, unit: "g", scalable: true, role: "goût" },
            { id: "oignon", name: "Échalote", detail: "émincée", emoji: "🧅", baseQty: 15, unit: "g", scalable: true, role: "arôme" },
            { id: "salade_verte", name: "Salade verte", detail: "en accompagnement", emoji: "🥬", baseQty: 30, unit: "g", scalable: true, role: "accompagnement" },
            { id: "huile_olive", name: "Huile d'olive", detail: "", emoji: "🫒", baseQty: 5, unit: "ml", scalable: false, role: "cuisson" }
        ],
        options: [],
        steps: [
            { title: "Nettoyer et émincer les champignons", text: "Nettoyer et émincer les champignons. Émincer finement l'échalote." },
            { title: "Faire chauffer un filet d'huile", text: "Faire chauffer un filet d'huile d'olive dans une poêle. Faire sauter les champignons à feu vif 4-5 minutes." },
            { title: "Ajouter l'échalote, cuire encore 2 minutes", text: "Ajouter l'échalote, cuire encore 2 minutes. Saler, poivrer et réserver." },
            { title: "Battre les œufs dans un", text: "Battre les œufs dans un bol avec une pincée de sel et de poivre." },
            { title: "Dans la même poêle légèrement", text: "Dans la même poêle légèrement huilée, verser les œufs battus à feu moyen." },
            { title: "Quand le dessous est pris", text: "Quand le dessous est pris mais le dessus encore baveaux, disposer les champignons sur une moitié." },
            { title: "Parsemer de fromage râpé, replier", text: "Parsemer de fromage râpé, replier l'omelette en deux." },
            { title: "Cuire encore 1 minute pour", text: "Cuire encore 1 minute pour que le fromage fonde. Servir avec la salade verte assaisonnée." }
        ],
        tips: [
            { type: "green", title: "💡 Champignons", text: "Ne pas laver les champignons sous l'eau courante, les essuyer avec un papier humide pour garder leur texture." },
            { type: "red", title: "⚠️ Cuisson", text: "Ne pas trop cuire l'omelette : elle doit rester légèrement baveuse au centre pour être moelleuse." }
        ]
    }

];
