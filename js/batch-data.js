// ============================================================================
// BATCH COOKING — bibliotheque de gros plats
// ============================================================================
// Chaque plat est concu pour etre cuisine UNE fois et manger plusieurs repas.
// Le classement se fait sur le ratio activeTime / portions : les minutes de
// cuisine reellement passees pour chaque repas produit.
//
// Ces recettes ont ete produites puis passees par trois controles adversariaux
// (calcul des macros, faisabilite en cuisine, securite de conservation). Huit
// autres ont ete ecartees : doublons, volumes physiquement impossibles dans le
// materiel annonce, ou ratio reel superieur a 6 min par repas une fois le temps
// de decoupe honnetement compte.
//
// ⚠️ Les identifiants d'ingredient DOIVENT exister dans NUTRITION_DB : le
// moteur de macros ignore silencieusement un ingredient inconnu, ce qui
// sous-evaluerait les calories affichees. batch.js le verifie au chargement.
// ============================================================================

const BATCH_RECIPES = [
    {
        "id": "porridge-proteine-au-four-semaine",
        "name": "Porridge protéiné au four",
        "subtitle": "Petit-déjeuner, 8 parts dans un seul plat, 18 min de travail",
        "emoji": "🥣",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 18,
        "totalTime": 60,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo en parts individuelles, 3 mois au congélateur",
        "rechauffage": "1 min 30 au micro-ondes avec un filet de lait par dessus, ou 10 min à 160 degrés au four",
        "materiel": "1 plat à four de 35 x 25 cm, 1 saladier",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Prise de masse",
            "Congelable",
            "Économique"
        ],
        "kcalParPortion": 494,
        "proteinesParPortion": 33.2,
        "minutesParPortion": 2.3,
        "ingredients": [
            {
                "id": "flocons_avoine",
                "name": "Flocons d'avoine",
                "detail": "crus, ils absorbent tout le liquide à la cuisson",
                "emoji": "🌾",
                "baseQty": 400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "lait_demi",
                "name": "Lait demi-écrémé",
                "detail": "le liquide principal du plat",
                "emoji": "🥛",
                "baseQty": 900,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "oeuf",
                "name": "Oeufs entiers",
                "detail": "ils tiennent le plat pour pouvoir le découper en parts",
                "emoji": "🥚",
                "baseQty": 4,
                "unit": "unités",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "whey_protein",
                "name": "Whey protéine",
                "detail": "vanille de préférence, incorporée en dernier",
                "emoji": "💪",
                "baseQty": 120,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "fromage_blanc_0",
                "name": "Fromage blanc 0%",
                "detail": "apporte les protéines et le moelleux",
                "emoji": "🥄",
                "baseQty": 500,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "banane",
                "name": "Bananes bien mûres",
                "detail": "écrasées à la fourchette, elles sucrent le plat",
                "emoji": "🍌",
                "baseQty": 300,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "myrtilles",
                "name": "Myrtilles",
                "detail": "surgelées, à parsemer sur le dessus",
                "emoji": "🫐",
                "baseQty": 250,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "beurre_cacahuete",
                "name": "Beurre de cacahuète",
                "detail": "fondu quelques secondes pour l'incorporer facilement",
                "emoji": "🥜",
                "baseQty": 60,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "graines_chia",
                "name": "Graines de chia",
                "detail": "elles tiennent la texture sur les 4 jours",
                "emoji": "⚫",
                "baseQty": 30,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "miel",
                "name": "Miel",
                "detail": "à doser selon la maturité des bananes",
                "emoji": "🍯",
                "baseQty": 40,
                "unit": "g",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Préchauffe le four à 180 degrés et huile légèrement le plat de 35 x 25.",
            "Écrase les bananes à la fourchette directement au fond du saladier.",
            "Ajoute le lait, les oeufs, le fromage blanc, le beurre de cacahuète et le miel, fouette jusqu'à obtenir un mélange lisse.",
            "Incorpore les flocons d'avoine, la whey et les graines de chia, mélange sans insister.",
            "Verse dans le plat (environ 3 cm d'épaisseur), égalise et parsème les myrtilles sur toute la surface.",
            "Enfourne 40 à 45 minutes : la lame doit ressortir propre au centre et le plat ne plus trembler.",
            "Laisse refroidir complètement à découvert, découpe 8 parts et range-les dans des boîtes individuelles au frigo dans les 2 heures."
        ],
        "tips": [
            "Incorpore la whey en dernier et ne prolonge jamais la cuisson au delà du moment où la lame ressort propre : c'est elle qui assèche le plat si elle chauffe trop longtemps.",
            "Découpe les 8 parts tout de suite et range-les séparées. Ça accélère le refroidissement et ça évite qu'un plat entier traîne au frigo.",
            "Un filet de lait au réchauffage redonne exactement le moelleux du premier jour, ne saute pas ce geste."
        ],
        "variantes": [
            "Version pomme cannelle : remplace les myrtilles par 300 g de pomme en dés et ajoute une bonne cuillère de cannelle dans l'appareil.",
            "Version cacao : retire le miel, ajoute 30 g de cacao en poudre et 40 g de chocolat noir 70% concassé sur le dessus."
        ]
    },
    {
        "id": "pots-skyr-proteines-semaine",
        "name": "Pots de skyr protéinés",
        "subtitle": "Petit-déjeuner, 6 pots montés en 15 minutes, zéro cuisson",
        "emoji": "🫙",
        "category": "dejeuner",
        "portions": 6,
        "activeTime": 15,
        "totalTime": 15,
        "difficulty": "Facile",
        "conservation": "5 jours au frigo maximum, et jamais au delà de la DLC inscrite sur le pot de skyr : c'est elle qui commande. Ne se congèle pas.",
        "rechauffage": "Se mange froid, sors le pot du frigo 5 minutes avant",
        "materiel": "6 bocaux de 600 ml à couvercle, parfaitement propres et secs, 1 grand saladier",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Végétarien"
        ],
        "kcalParPortion": 474,
        "proteinesParPortion": 39,
        "minutesParPortion": 2.5,
        "ingredients": [
            {
                "id": "skyr_0",
                "name": "Skyr 0%",
                "detail": "la base de tous les pots",
                "emoji": "🥛",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "whey_protein",
                "name": "Whey protéine",
                "detail": "vanille, elle sucre et épaissit la base",
                "emoji": "💪",
                "baseQty": 60,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "flocons_avoine",
                "name": "Flocons d'avoine",
                "detail": "crus, ils ramollissent pendant la nuit au frigo",
                "emoji": "🌾",
                "baseQty": 200,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "graines_chia",
                "name": "Graines de chia",
                "detail": "elles gélifient l'ensemble en 5 minutes",
                "emoji": "⚫",
                "baseQty": 60,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "lait_demi",
                "name": "Lait demi-écrémé",
                "detail": "pour détendre le skyr",
                "emoji": "🥛",
                "baseQty": 400,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "beurre_cacahuete",
                "name": "Beurre de cacahuète",
                "detail": "une cuillère au coeur de chaque pot",
                "emoji": "🥜",
                "baseQty": 50,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "fruits_rouges",
                "name": "Fruits rouges",
                "detail": "surgelés, 80 g par pot",
                "emoji": "🍓",
                "baseQty": 480,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "miel",
                "name": "Miel",
                "detail": "à doser selon ton goût",
                "emoji": "🍯",
                "baseQty": 50,
                "unit": "g",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Mélange dans le grand saladier le skyr, le lait, la whey et le miel jusqu'à obtenir une crème parfaitement lisse.",
            "Ajoute les flocons d'avoine et les graines de chia, mélange bien pour qu'il ne reste aucun paquet.",
            "Laisse gonfler 5 minutes sur le plan de travail, le mélange doit visiblement épaissir.",
            "Répartis dans les 6 bocaux de 600 ml en laissant 2 cm de vide en haut.",
            "Dépose une cuillère de beurre de cacahuète au centre de chaque pot et enfonce-la légèrement.",
            "Termine par 80 g de fruits rouges par pot, referme tout de suite et place au frigo au moins une nuit."
        ],
        "tips": [
            "Le chia continue d'absorber le liquide jour après jour. Les bocaux de 600 ml laissent la place d'ajouter deux cuillères de lait au 3e jour pour les détendre.",
            "Mets les fruits rouges surgelés directement dans les bocaux : ils refroidissent le contenu et rendent beaucoup moins d'eau que s'ils sont décongelés avant.",
            "Monte ces 6 pots pendant que ton plat au four tourne. C'est la seule recette sans cuisson de la bibliothèque, elle ne te coûte aucune minute supplémentaire."
        ],
        "variantes": [
            "Version cacao banane : remplace les fruits rouges par de la banane en rondelles et ajoute 20 g de cacao en poudre dans la base.",
            "Version tropicale : mangue en dés, noix de coco râpée sur le dessus et un trait de jus de citron vert dans la base."
        ]
    },
    {
        "id": "bowl-cake-plaque-cacao-banane",
        "name": "Bowl cake en plaque cacao banane",
        "subtitle": "Petit-déjeuner, une plaque découpée en 8 parts, 20 min de travail",
        "emoji": "🍫",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 20,
        "totalTime": 48,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur part par part",
        "rechauffage": "40 secondes au micro-ondes, la part redevient moelleuse comme au premier jour",
        "materiel": "1 plat à bords hauts de 35 x 25 cm, 1 blender",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Prise de masse",
            "Congelable",
            "Végétarien"
        ],
        "kcalParPortion": 502,
        "proteinesParPortion": 36.4,
        "minutesParPortion": 2.5,
        "ingredients": [
            {
                "id": "flocons_avoine",
                "name": "Flocons d'avoine",
                "detail": "mixés en farine directement au blender",
                "emoji": "🌾",
                "baseQty": 400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "whey_protein",
                "name": "Whey protéine",
                "detail": "chocolat ou vanille, incorporée à la spatule",
                "emoji": "💪",
                "baseQty": 150,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "cacao_poudre",
                "name": "Cacao en poudre non sucré",
                "detail": "il fait tout le goût du bowl cake",
                "emoji": "🍫",
                "baseQty": 40,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "oeuf",
                "name": "Oeufs entiers",
                "detail": "ils tiennent la plaque pour la découpe en parts",
                "emoji": "🥚",
                "baseQty": 6,
                "unit": "unités",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "fromage_blanc_0",
                "name": "Fromage blanc 0%",
                "detail": "protéines et moelleux, ne le remplace pas par du lait seul",
                "emoji": "🥄",
                "baseQty": 500,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lait_demi",
                "name": "Lait demi-écrémé",
                "detail": "pour ajuster la pâte",
                "emoji": "🥛",
                "baseQty": 350,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "banane",
                "name": "Bananes bien mûres",
                "detail": "seul sucre de la recette",
                "emoji": "🍌",
                "baseQty": 300,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "levure",
                "name": "Levure chimique",
                "detail": "un sachet et demi",
                "emoji": "🧪",
                "baseQty": 12,
                "unit": "g",
                "role": "extra",
                "scalable": false
            },
            {
                "id": "chocolat_noir_70",
                "name": "Chocolat noir 70%",
                "detail": "concassé grossièrement sur le dessus",
                "emoji": "🍫",
                "baseQty": 60,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "beurre_cacahuete",
                "name": "Beurre de cacahuète",
                "detail": "en points à marbrer sur la plaque",
                "emoji": "🥜",
                "baseQty": 60,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Préchauffe le four à 175 degrés et tapisse le plat de 35 x 25 de papier cuisson.",
            "Mixe les flocons d'avoine seuls jusqu'à obtenir une farine.",
            "Ajoute les bananes, les oeufs, le fromage blanc et le lait, et mixe en 2 fois (la pâte fait presque 2 litres, elle ne rentre pas d'un coup dans un bol de blender).",
            "Incorpore à la spatule la whey, le cacao et la levure, sans trop travailler la pâte.",
            "Verse sur la plaque et lisse sur environ 2,5 cm d'épaisseur.",
            "Parsème le chocolat concassé, dépose des points de beurre de cacahuète et marbre à la pointe d'un couteau.",
            "Enfourne 32 minutes, la lame doit ressortir juste humide et pas liquide.",
            "Laisse refroidir complètement, découpe 8 parts et emballe-les une par une."
        ],
        "tips": [
            "Arrête la cuisson quand la lame ressort encore un peu humide. Avec de la whey dans la pâte, cinq minutes de trop transforment le moelleux en éponge sèche.",
            "Le plat de 35 x 25 donne 2,5 cm d'épaisseur, c'est la hauteur qui cuit à coeur. Dans un 30 x 20 tu montes à 3,6 cm et le centre reste cru.",
            "Congèle les parts emballées séparément et sors-en une la veille au soir. Le matin elle est prête, sans micro-ondes."
        ],
        "variantes": [
            "Version noisette caramel : remplace le cacao par 40 g de farine complète et double le beurre de cacahuète marbré sur le dessus.",
            "Version fruits rouges : retire le cacao et le chocolat, ajoute 250 g de fruits rouges enfoncés dans la pâte avant d'enfourner."
        ]
    },
    {
        "id": "frittata-jambon-emmental-plaque",
        "name": "Frittata jambon emmental en parts",
        "subtitle": "Petit-déjeuner, 1 plat au four découpé en 8 parts",
        "emoji": "🍳",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 22,
        "totalTime": 60,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo dans une boîte hermétique, 2 mois au congélateur",
        "rechauffage": "1 min 30 au micro-ondes par part, ou 10 min à 150 degrés au four. Sortie du congélateur, laisse-la une nuit au frigo avant.",
        "materiel": "1 plat à four de 30 x 20 cm, 1 poêle, 1 grand saladier",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Congelable",
            "Sans gluten"
        ],
        "kcalParPortion": 356,
        "proteinesParPortion": 33.3,
        "minutesParPortion": 2.8,
        "ingredients": [
            {
                "id": "oeuf",
                "name": "Oeufs entiers",
                "detail": "gros calibre, la base de l'appareil",
                "emoji": "🥚",
                "baseQty": 18,
                "unit": "unités",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "blanc_oeuf",
                "name": "Blancs d'oeufs",
                "detail": "en brique, pour monter les protéines sans le gras",
                "emoji": "🥛",
                "baseQty": 400,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "jambon_blanc",
                "name": "Jambon blanc",
                "detail": "coupé en petits dés",
                "emoji": "🍖",
                "baseQty": 300,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "fromage_rape",
                "name": "Emmental râpé",
                "detail": "trois quarts dans l'appareil, un quart sur le dessus",
                "emoji": "🧀",
                "baseQty": 150,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "epinards",
                "name": "Épinards frais",
                "detail": "grossièrement hachés",
                "emoji": "🥬",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "en petits dés",
                "emoji": "🫑",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "émincé fin",
                "emoji": "🧅",
                "baseQty": 100,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "creme_fraiche_legere",
                "name": "Crème fraîche légère 15%",
                "detail": "c'est elle qui garde la frittata moelleuse au jour 3",
                "emoji": "🥛",
                "baseQty": 100,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour huiler le plat et faire revenir les légumes",
                "emoji": "🫒",
                "baseQty": 15,
                "unit": "g",
                "role": "fat",
                "scalable": false
            }
        ],
        "steps": [
            "Préchauffe le four à 180 degrés chaleur tournante et huile le plat de 30 x 20.",
            "Émince l'oignon, taille le poivron en petits dés et hache les épinards.",
            "Fais revenir oignon et poivron 5 minutes à la poêle pour leur faire rendre leur eau, ajoute les épinards 1 minute puis coupe le feu.",
            "Bats les oeufs entiers avec les blancs et la crème dans un grand saladier, sale et poivre généreusement.",
            "Ajoute les légumes tiédis, le jambon en dés et les trois quarts de l'emmental, mélange.",
            "Verse dans le plat et parsème le reste d'emmental.",
            "Enfourne 40 à 45 minutes : le centre doit être ferme au toucher et la lame ressortir propre.",
            "Laisse refroidir à découvert, découpe 8 parts et range-les au frigo dans les 2 heures."
        ],
        "tips": [
            "Laisse refroidir à découvert avant de fermer la boîte. La condensation est la seule raison pour laquelle une préparation aux oeufs devient spongieuse au bout de deux jours.",
            "Ne saute pas l'étape de la poêle. Des légumes crus rendent leur eau pendant la cuisson et la frittata se détrempe par dessous.",
            "Une part apporte 5 g de glucides seulement. Si tu t'entraînes le matin, ajoute une tranche de pain complet ou une banane à côté, sinon tu vas caler."
        ],
        "variantes": [
            "Version méditerranéenne : remplace le jambon et l'emmental par 200 g de feta émiettée et 200 g de tomates coupées et bien égouttées.",
            "Version relevée : ajoute 20 g de harissa dans l'appareil et remplace le poivron par du chou kale finement haché."
        ]
    },
    {
        "id": "dahl-lentilles-tofu-lait-coco",
        "name": "Dahl de lentilles au tofu et lait de coco",
        "subtitle": "8 portions végétales, une seule cocotte",
        "emoji": "🍛",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 25,
        "totalTime": 55,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur. C'est le plat qui supporte le mieux la congélation de toute la sélection.",
        "rechauffage": "À la casserole à feu doux avec 3 cuillères à soupe d'eau, jusqu'à ce que ça fume. Le dahl épaissit beaucoup en refroidissant, c'est normal. Si le lait de coco s'est dissocié à la décongélation, fouette 10 secondes hors du feu.",
        "materiel": "1 cocotte de 6 litres",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Vegan",
            "Végétarien",
            "Sans gluten",
            "Haute protéine",
            "Économique",
            "Congelable"
        ],
        "kcalParPortion": 548,
        "proteinesParPortion": 33.7,
        "minutesParPortion": 3.1,
        "ingredients": [
            {
                "id": "lentilles_cuites",
                "name": "Lentilles cuites",
                "detail": "vertes ou corail, en bocal ou cuites la veille",
                "emoji": "🫘",
                "baseQty": 1200,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "tofu",
                "name": "Tofu ferme",
                "detail": "égoutté, en cubes de 2 cm",
                "emoji": "🧊",
                "baseQty": 600,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "pois_chiches_cuits",
                "name": "Pois chiches cuits",
                "detail": "égouttés et rincés",
                "emoji": "🫛",
                "baseQty": 400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "lait_coco",
                "name": "Lait de coco",
                "detail": "en conserve, bien secouée avant ouverture",
                "emoji": "🥥",
                "baseQty": 400,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "sauce_tomate",
                "name": "Sauce tomate (passata)",
                "detail": "nature",
                "emoji": "🍅",
                "baseQty": 400,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "epinards",
                "name": "Épinards",
                "detail": "frais ou surgelés, ajoutés en toute fin",
                "emoji": "🥬",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "en dés",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "en rondelles fines pour qu'elles cuisent vite",
                "emoji": "🥕",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "double concentré",
                "emoji": "🥫",
                "baseQty": 50,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "pate_curry",
                "name": "Pâte de curry",
                "detail": "jaune ou rouge selon ta tolérance au piquant",
                "emoji": "🍥",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "environ 5 gousses écrasées",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "gingembre",
                "name": "Gingembre frais",
                "detail": "râpé, sans l'éplucher si la peau est fine",
                "emoji": "🫚",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour la base aromatique",
                "emoji": "🫒",
                "baseQty": 20,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Éplucher et couper l'oignon et la carotte, écraser l'ail, râper le gingembre. Égoutter le tofu et le couper en cubes. Compte 10 minutes de préparation.",
            "Chauffer l'huile dans la cocotte, faire revenir oignon, ail et gingembre 4 minutes à feu moyen jusqu'à ce que ça sente bon dans toute la cuisine.",
            "Ajouter la pâte de curry et le concentré de tomate, remuer 1 minute à feu vif : les épices doivent accrocher légèrement au fond, c'est là que le goût se construit.",
            "Verser la sauce tomate, le lait de coco et 30 cl d'eau. Ajouter les carottes et les cubes de tofu, porter à frémissement.",
            "Couvrir et laisser mijoter 20 minutes à feu doux. Le tofu s'imprègne de la sauce pendant ce temps, ne le remue pas trop pour qu'il reste entier.",
            "Ajouter les lentilles et les pois chiches, poursuivre 10 minutes à découvert pour que la sauce nappe.",
            "Couper le feu, jeter les épinards dans la cocotte et mélanger : ils fondent en 2 minutes avec la chaleur résiduelle.",
            "Saler, poivrer, ajouter un filet de jus de citron. Répartir tout de suite en 8 boîtes, couvercles ouverts, et mettre au frigo dans les 2 heures."
        ],
        "tips": [
            "Le tofu ne doit jamais être ajouté en fin de cuisson dans ce plat. Il a besoin des 30 minutes de mijotage pour se charger en curry et en coco, sinon il reste fade au milieu d'une bonne sauce.",
            "Tu peux doubler la recette si tu as une marmite de 10 à 12 litres (la version simple remplit déjà 4,2 litres). Portionne immédiatement : une grosse masse qui refroidit lentement, c'est le seul vrai risque du batch cooking.",
            "Si le dahl te semble trop liquide en fin de cuisson, écrase une louche de lentilles contre la paroi de la cocotte. Ça épaissit sans ajouter une seule calorie."
        ],
        "variantes": [
            "Jour 2, en version soupe épaisse : allonge 250 g de dahl avec 15 cl d'eau chaude et un trait de jus de citron, et le plat devient un déjeuner léger.",
            "Jour 4, en version protéinée : ajoute 120 g de blanc de poulet grillé ou 2 oeufs durs sur la portion, pour ceux qui mangent avec toi et veulent de la viande."
        ]
    },
    {
        "id": "veloute-lentilles-poulet-effiloche",
        "name": "Velouté de lentilles au poulet effiloché",
        "subtitle": "8 bols à 45 g de protéines, 25 min de vrai travail",
        "emoji": "🍲",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 25,
        "totalTime": 65,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo dans des boîtes hermétiques, 3 mois au congélateur en portions individuelles",
        "rechauffage": "Casserole à feu moyen jusqu'au frémissement, la soupe doit fumer franchement, environ 6 min. Micro-ondes 4 min à couvert en remuant à mi-parcours. Une seule fois, jamais deux.",
        "materiel": "1 grande cocotte de 6 litres + 1 mixeur plongeant",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Économique",
            "Congelable",
            "Sans gluten"
        ],
        "kcalParPortion": 406,
        "proteinesParPortion": 45.4,
        "minutesParPortion": 3.1,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blancs de poulet",
                "detail": "entiers, ils cuisent dans le bouillon puis s'effilochent",
                "emoji": "🍗",
                "baseQty": 800,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lentilles_cuites",
                "name": "Lentilles vertes cuites",
                "detail": "en conserve égouttées ou cuites la veille",
                "emoji": "🫘",
                "baseQty": 1100,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carottes",
                "detail": "en rondelles épaisses, pas besoin de faire joli",
                "emoji": "🥕",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignons",
                "detail": "émincés grossièrement",
                "emoji": "🧅",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "celeri_branche",
                "name": "Céleri branche",
                "detail": "en tronçons",
                "emoji": "🥬",
                "baseQty": 150,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "à torréfier 1 min, c'est lui qui donne le goût profond",
                "emoji": "🍅",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "3 gousses écrasées",
                "emoji": "🧄",
                "baseQty": 15,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour le fond de cocotte",
                "emoji": "🫒",
                "baseQty": 30,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "epinards",
                "name": "Épinards frais",
                "detail": "ajoutés hors du feu, ils fondent tout seuls",
                "emoji": "🥬",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "indispensable, il réveille les lentilles",
                "emoji": "🍋",
                "baseQty": 30,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Chauffe l'huile d'olive dans la cocotte à feu moyen. Jette dedans oignons, carottes et céleri et laisse revenir 6 min en remuant de temps en temps.",
            "Ajoute l'ail et le concentré de tomate, remue 1 min pour torréfier le concentré.",
            "Verse les lentilles et 1,7 litre d'eau ou de bouillon, sale, poivre, puis pose les blancs de poulet entiers sur le dessus.",
            "Couvre et laisse mijoter 20 min à petits bouillons. Pendant ce temps tu ne fais rien, la cocotte travaille pour toi.",
            "Sors les blancs de poulet, pose-les dans une assiette et effiloche-les avec deux fourchettes en 2 min.",
            "Mixe la moitié de la soupe au mixeur plongeant directement dans la cocotte pour l'épaissir, laisse l'autre moitié en morceaux.",
            "Remets le poulet effiloché, ajoute les épinards et le jus de citron, remue 2 min hors du feu.",
            "Répartis tout de suite en 8 boîtes, couvercles ouverts, et mets au frigo dès qu'elles sont tièdes, moins de 2 heures après la cuisson."
        ],
        "tips": [
            "Le rapport qui compte : 25 min de travail pour 8 repas, soit 3 minutes par assiette. C'est un des meilleurs ratios de toute la bibliothèque.",
            "Pocher les blancs entiers sur le dessus du bouillon puis les effilocher, c'est la seule façon de garder du blanc de poulet moelleux au jour 4.",
            "Congèle 4 portions le jour même. Une soupe qui reste 4 jours au frigo finit toujours par être mangée en retard ou jetée."
        ],
        "variantes": [
            "Version marocaine : ajoute 2 cuillères à café de cumin et 1 de cannelle avec le concentré de tomate, et remplace le citron par de la coriandre fraîche.",
            "Version plus riche en fin de semaine : écrase 200 g de pois chiches cuits dans les 2 dernières portions, ça change complètement la texture."
        ]
    },
    {
        "id": "chili-con-carne-xxl-cocotte",
        "name": "Chili con carne XXL",
        "subtitle": "8 portions pour 27 min de travail, une seule cocotte",
        "emoji": "🌶️",
        "category": "diner",
        "portions": 8,
        "activeTime": 27,
        "totalTime": 85,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo dans des boîtes hermétiques, 3 mois au congélateur en portions individuelles",
        "rechauffage": "À la casserole 8 min à feu doux avec 2 cuillères à soupe d'eau jusqu'à ce que ça fume, ou 3 min au micro-ondes couvert en remuant à mi-parcours. Portion congelée : la sortir la veille au soir au frigo.",
        "materiel": "1 grande cocotte ou faitout de 5 litres minimum, avec couvercle",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Économique",
            "Congelable",
            "Sans gluten"
        ],
        "kcalParPortion": 512,
        "proteinesParPortion": 48.5,
        "minutesParPortion": 3.4,
        "ingredients": [
            {
                "id": "boeuf_hache_5",
                "name": "Boeuf haché 5% MG",
                "detail": "cru, en barquettes ou surgelé décongelé",
                "emoji": "🥩",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "haricots_rouges",
                "name": "Haricots rouges cuits",
                "detail": "en conserve, égouttés et rincés",
                "emoji": "🫘",
                "baseQty": 800,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "haricots_noirs",
                "name": "Haricots noirs cuits",
                "detail": "en conserve, égouttés et rincés",
                "emoji": "🫘",
                "baseQty": 400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "sauce_tomate",
                "name": "Sauce tomate (passata)",
                "detail": "nature, sans sucre ajouté",
                "emoji": "🍅",
                "baseQty": 700,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "double concentré, en tube ou petite boîte",
                "emoji": "🥫",
                "baseQty": 70,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "jaune, en petits dés",
                "emoji": "🧅",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "en dés de 2 cm, épépiné",
                "emoji": "🫑",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "en petits dés, elle fond dans la sauce",
                "emoji": "🥕",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "mais_conserve",
                "name": "Maïs en conserve",
                "detail": "égoutté, ajouté en fin de cuisson",
                "emoji": "🌽",
                "baseQty": 200,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "environ 5 gousses écrasées",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour saisir la viande et les légumes",
                "emoji": "🫒",
                "baseQty": 20,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Émincer l'oignon, le poivron et la carotte en petits dés. C'est le seul vrai travail de découpe de la recette, comptez 8 minutes montre en main.",
            "Chauffer l'huile d'olive dans la cocotte à feu vif. Faire revenir l'oignon 3 minutes, ajouter carotte et poivron, poursuivre 3 minutes en remuant.",
            "Ajouter le boeuf haché et l'ail écrasé. Écraser la viande à la cuillère en bois pour bien la séparer et cuire 5 minutes, jusqu'à ce qu'elle ne soit plus rose.",
            "Verser le concentré de tomate et remuer 1 minute à feu vif pour le torréfier. C'est ce geste de 60 secondes qui donne la profondeur du plat.",
            "Ajouter la sauce tomate, 2 cuillères à café de cumin, 2 de paprika fumé, 1 de piment en poudre, 1 feuille de laurier, du poivre et 25 cl d'eau.",
            "Baisser à feu très doux, couvrir aux trois quarts et laisser mijoter 45 minutes. Remuer deux fois seulement : à partir d'ici vous n'avez plus rien à faire.",
            "Ajouter les haricots rouges, les haricots noirs et le maïs égouttés. Poursuivre 10 minutes à découvert pour épaissir la sauce.",
            "Saler, goûter, retirer le laurier. Répartir immédiatement en 8 boîtes, couvercles ouverts, et mettre au frigo dès qu'elles sont tièdes, moins de 2 heures après la cuisson.",
            "Congeler directement les 4 dernières portions, elles seront votre filet de sécurité la semaine suivante."
        ],
        "tips": [
            "Le chili est franchement meilleur le lendemain : les épices ont eu le temps de diffuser dans la sauce. Cuisinez-le le dimanche, le meilleur sera pour le mardi.",
            "Ne salez qu'à la fin. Les haricots en conserve sont déjà salés et la sauce réduit de 20% pendant le mijotage, vous risquez de tout rendre immangeable.",
            "Pendant que ça mijote, lancez une grande casserole de riz complet. 8 accompagnements pour zéro minute de travail en plus, c'est exactement l'esprit du batch cooking."
        ],
        "variantes": [
            "Jour 3, version chili cheese : 30 g d'emmental râpé sur la portion chaude et 2 minutes sous le gril, le plat change complètement de registre.",
            "Jour 5, version tacos : 200 g de chili réchauffé, 2 tortillas de blé complet, de la salade verte et une cuillère de fromage blanc 0% à la place de la crème."
        ]
    },
    {
        "id": "pancakes-proteines-a-congeler",
        "name": "Pancakes protéinés à congeler",
        "subtitle": "24 pancakes soit 8 portions, sortis du congélateur au grille-pain",
        "emoji": "🥞",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 28,
        "totalTime": 40,
        "difficulty": "Facile",
        "conservation": "3 jours au frigo, 3 mois au congélateur séparés par du papier cuisson",
        "rechauffage": "2 minutes au grille-pain directement congelés, ou 40 secondes au micro-ondes pour 3 pancakes",
        "materiel": "1 blender, 1 grand saladier de 4 litres, 2 poêles antiadhésives de 28 cm",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Congelable",
            "Prise de masse"
        ],
        "kcalParPortion": 434,
        "proteinesParPortion": 35.1,
        "minutesParPortion": 3.5,
        "ingredients": [
            {
                "id": "flocons_avoine",
                "name": "Flocons d'avoine",
                "detail": "mixés en farine, pas besoin d'acheter de la farine d'avoine",
                "emoji": "🌾",
                "baseQty": 400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "fromage_blanc_0",
                "name": "Fromage blanc 0%",
                "detail": "le secret de pancakes protéinés qui restent moelleux",
                "emoji": "🥄",
                "baseQty": 600,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "oeuf",
                "name": "Oeufs entiers",
                "detail": "gros calibre",
                "emoji": "🥚",
                "baseQty": 8,
                "unit": "unités",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "whey_protein",
                "name": "Whey protéine",
                "detail": "vanille, ajoutée en fin de mélange",
                "emoji": "💪",
                "baseQty": 150,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lait_demi",
                "name": "Lait demi-écrémé",
                "detail": "pour ajuster la pâte, elle doit napper la louche",
                "emoji": "🥛",
                "baseQty": 300,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "banane",
                "name": "Bananes bien mûres",
                "detail": "elles sucrent la pâte sans sucre ajouté",
                "emoji": "🍌",
                "baseQty": 200,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "levure",
                "name": "Levure chimique",
                "detail": "un sachet et demi",
                "emoji": "🧪",
                "baseQty": 12,
                "unit": "g",
                "role": "extra",
                "scalable": false
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "un voile sur chaque poêle entre deux fournées",
                "emoji": "🫒",
                "baseQty": 20,
                "unit": "g",
                "role": "fat",
                "scalable": false
            }
        ],
        "steps": [
            "Mixe les flocons d'avoine seuls dans le blender jusqu'à obtenir une farine fine, et verse-la dans le grand saladier.",
            "Mixe les bananes avec les oeufs, le fromage blanc et le lait (en 2 fois si ton bol est petit, la pâte fait 2 litres), puis verse sur la farine d'avoine.",
            "Ajoute la whey et la levure, fouette au saladier jusqu'à ce que ce soit lisse et laisse reposer la pâte 5 minutes.",
            "Chauffe les deux poêles de 28 cm à feu moyen avec un voile d'huile.",
            "Dépose 3 petites louches de pâte par poêle et cuis 2 minutes, jusqu'à ce que des bulles remontent et que les bords se figent.",
            "Retourne et cuis 1 minute de plus, puis dépose sur une grille et enchaîne la fournée suivante. Compte 4 fournées.",
            "Refroidis complètement sur grille, empile par 3 avec un carré de papier cuisson entre chaque pancake et congèle les piles."
        ],
        "tips": [
            "Deux poêles en parallèle divisent le temps de cuisson par deux. C'est le seul vrai levier sur cette recette : à une seule poêle tu passes 28 minutes debout devant le feu.",
            "Feu moyen et jamais plus. La whey brunit très vite et donne un goût amer si la poêle est trop chaude.",
            "Congèle par paquets de 3 déjà empilés. Le matin tu sors un paquet, tu le passes au grille-pain et tu n'as rien à doser."
        ],
        "variantes": [
            "Version myrtilles : dépose 4 ou 5 myrtilles sur chaque pancake juste après l'avoir versé dans la poêle, avant de le retourner.",
            "Version cacao cacahuète : ajoute 25 g de cacao en poudre dans la pâte et sers avec une cuillère de beurre de cacahuète par portion."
        ]
    },
    {
        "id": "poulet-tandoori-four-riz",
        "name": "Poulet tandoori au four et riz basmati",
        "subtitle": "8 portions, la marinade travaille à ta place",
        "emoji": "🔥",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 30,
        "totalTime": 70,
        "difficulty": "Facile",
        "conservation": "3 jours au frigo pour les boîtes riz plus poulet, 4 jours si le riz est stocké à part. 3 mois au congélateur, poulet et riz congelés séparément le jour de la cuisson.",
        "rechauffage": "4 min au micro-ondes à couvert avec une cuillère à soupe d'eau sur le riz, en remuant à mi-parcours, jusqu'à ce que ça fume. Une seule fois.",
        "materiel": "2 grandes plaques de four, 1 grand saladier, 1 casserole pour le riz",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Prise de masse",
            "Sans gluten",
            "Congelable"
        ],
        "kcalParPortion": 630,
        "proteinesParPortion": 58.7,
        "minutesParPortion": 3.8,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blanc de poulet",
                "detail": "en gros morceaux de 5 cm",
                "emoji": "🍗",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "yaourt_grec",
                "name": "Yaourt grec nature",
                "detail": "base de la marinade, il attendrit la viande",
                "emoji": "🥣",
                "baseQty": 500,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "pate_curry",
                "name": "Pâte de curry",
                "detail": "ou mélange tandoori",
                "emoji": "🌶️",
                "baseQty": 80,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "pour la couleur et le goût",
                "emoji": "🍅",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "en quartiers, cuits avec le poulet",
                "emoji": "🧅",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "en gros morceaux",
                "emoji": "🫑",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "riz_basmati_cuit",
                "name": "Riz basmati cuit",
                "detail": "environ 500 g de riz cru",
                "emoji": "🍚",
                "baseQty": 1400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "écrasé, environ 6 gousses",
                "emoji": "🧄",
                "baseQty": 25,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "gingembre",
                "name": "Gingembre frais",
                "detail": "râpé",
                "emoji": "🫚",
                "baseQty": 25,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "dans la marinade et à la sortie",
                "emoji": "🍋",
                "baseQty": 40,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "sur les légumes",
                "emoji": "🫒",
                "baseQty": 30,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Dans un grand saladier, mélange le yaourt grec, la pâte de curry, le concentré de tomate, l'ail, le gingembre, le jus de citron, du sel et du poivre.",
            "Coupe le poulet en gros morceaux et enrobe-le entièrement de marinade. Laisse reposer au minimum 20 minutes, idéalement 2 heures au frigo à 4 degrés, 24 heures maximum. Pendant ce temps, tu ne fais rien.",
            "Préchauffe le four à 210 degrés chaleur tournante.",
            "Étale les quartiers d'oignon et le poivron sur les deux plaques, arrose d'huile d'olive et sale.",
            "Dispose les morceaux de poulet par-dessus, bien espacés sur les deux plaques, en laissant la marinade qui colle à la viande.",
            "Enfourne 20 à 22 minutes, sans toucher. Les bords doivent noircir légèrement, c'est le goût tandoori, mais le poulet ne doit pas aller plus loin sous peine d'être sec au jour 3.",
            "Pendant la cuisson, fais cuire le riz basmati à l'eau salée, égoutte-le et étale-le tout de suite sur un plat large pour qu'il refroidisse en moins de 20 minutes.",
            "Répartis riz et poulet dans 8 boîtes, arrose du reste de jus de citron et mets au frigo dans l'heure."
        ],
        "tips": [
            "Étaler le riz cuit sur un plat large n'est pas un détail de confort : un riz qui refroidit vite se conserve bien, un riz laissé tiède dans sa casserole non.",
            "Ne rince pas la marinade avant d'enfourner. C'est elle qui caramélise et protège le poulet du dessèchement toute la semaine.",
            "Si tu prépares le dimanche, lance la marinade le samedi soir au frigo : tu gagnes en goût sans ajouter une seule minute de travail."
        ],
        "variantes": [
            "Version bowl froid : sers le poulet sur du riz froid avec du concombre et du yaourt grec citronné, deux repas sur les huit changent complètement de registre.",
            "Version wrap : effiloche le poulet et glisse-le dans des tortillas complètes avec de la salade, parfait pour les repas à emporter en milieu de semaine."
        ]
    },
    {
        "id": "harira-proteinee-tofu-pois-chiches",
        "name": "Harira protéinée pois chiches, lentilles et tofu",
        "subtitle": "8 bols vegan, 100% mijoté",
        "emoji": "🌿",
        "category": "diner",
        "portions": 8,
        "activeTime": 30,
        "totalTime": 60,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur. Elle est encore meilleure le lendemain.",
        "rechauffage": "Casserole à feu moyen 6 min avec un fond d'eau jusqu'à ce que ça fume, ou micro-ondes 4 min à couvert. Ajoute le jus de citron et la coriandre frais à chaque bol.",
        "materiel": "1 grande cocotte de 6 à 7 litres + 1 grande poêle de 28 cm",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Vegan",
            "Végétarien",
            "Sans gluten",
            "Haute protéine",
            "Économique",
            "Congelable"
        ],
        "kcalParPortion": 438,
        "proteinesParPortion": 29.8,
        "minutesParPortion": 3.8,
        "ingredients": [
            {
                "id": "pois_chiches_cuits",
                "name": "Pois chiches cuits",
                "detail": "égouttés et rincés",
                "emoji": "🫛",
                "baseQty": 600,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "lentilles_cuites",
                "name": "Lentilles cuites",
                "detail": "vertes ou corail, au choix",
                "emoji": "🫘",
                "baseQty": 800,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "tofu",
                "name": "Tofu ferme",
                "detail": "émietté à la main et doré à part, c'est ce qui fait grimper les protéines",
                "emoji": "🧊",
                "baseQty": 600,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "sauce_tomate",
                "name": "Passata de tomate",
                "detail": "la base du bouillon",
                "emoji": "🍅",
                "baseQty": 600,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "torréfié avec les épices",
                "emoji": "🥫",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignons",
                "detail": "émincés",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carottes",
                "detail": "en dés",
                "emoji": "🥕",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "celeri_branche",
                "name": "Céleri branche",
                "detail": "en dés fins",
                "emoji": "🥬",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "3 gousses",
                "emoji": "🧄",
                "baseQty": 15,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "gingembre",
                "name": "Gingembre frais",
                "detail": "râpé",
                "emoji": "🫚",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "moitié pour la cocotte, moitié pour dorer le tofu",
                "emoji": "🫒",
                "baseQty": 25,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "coriandre",
                "name": "Coriandre fraîche",
                "detail": "ciselée, ajoutée dans le bol",
                "emoji": "🌿",
                "baseQty": 30,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "hors du feu, il réveille tout le plat",
                "emoji": "🍋",
                "baseQty": 40,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Fais revenir oignons, carottes et céleri dans la moitié de l'huile d'olive 6 min à feu moyen.",
            "Ajoute l'ail, le gingembre, le concentré de tomate, 2 cuillères à café de cumin et 1 de paprika, remue 1 min.",
            "Verse la passata, les pois chiches, les lentilles et 1,8 litre d'eau ou de bouillon. Couvre et laisse mijoter 25 min à feu doux.",
            "Pendant ce temps, émiette le tofu à la main et fais-le dorer dans la grande poêle avec le reste d'huile, en 2 fournées de 6 min, sans remuer tout le temps : en une seule fournée il rend son eau et ne croustille jamais.",
            "Ajoute le tofu doré dans la cocotte 5 min avant la fin pour qu'il s'imprègne du bouillon.",
            "Coupe le feu, verse le jus de citron, goûte et resale si besoin.",
            "Répartis dès la fin de cuisson dans 8 boîtes, couvercles ouverts, frigo dans les 2 heures. Garde la coriandre à part et ajoute-la fraîche à chaque bol."
        ],
        "tips": [
            "Dore toujours le tofu avant de l'ajouter, et en deux fournées. Jeté cru dans le bouillon il reste mou et sans goût, doré il tient la semaine et il passe par une vraie température de cuisson.",
            "30 min de travail pour 8 repas, soit moins de 4 minutes par assiette, et c'est la recette la moins chère de la série.",
            "Elle épaissit beaucoup au frigo car les lentilles continuent de boire. Garde une bouteille d'eau à côté pour la détendre au réchauffage."
        ],
        "variantes": [
            "Version enrichie aux oeufs : casse 2 oeufs battus dans la soupe frémissante en filet et remue tout de suite. Cette version se mange le jour même ou le lendemain, elle ne se garde pas 4 jours, ne se congèle pas et n'est plus vegan.",
            "Version fraîche pour la fin de semaine : ajoute 200 g d'épinards et une grosse cuillère de harissa dans les 3 dernières portions, le plat repart complètement."
        ]
    },
    {
        "id": "plaque-poulet-patate-douce-brocoli",
        "name": "Plaque de poulet rôti, patate douce et brocoli",
        "subtitle": "8 portions, 3 plaques, une seule fournée",
        "emoji": "🍗",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 32,
        "totalTime": 70,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo à 4 degrés, en boîtes individuelles fermées seulement une fois la portion froide. 3 mois au congélateur, et jamais de recongélation d'un poulet déjà décongelé.",
        "rechauffage": "3 à 4 min au micro-ondes à couvert avec une cuillère à soupe d'eau, en remuant à mi-parcours, jusqu'à ce que ça fume au centre. Une seule fois, jamais deux.",
        "materiel": "3 grandes plaques de four et du papier cuisson",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Sans gluten",
            "Congelable"
        ],
        "kcalParPortion": 497,
        "proteinesParPortion": 52.3,
        "minutesParPortion": 4,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blanc de poulet",
                "detail": "coupé en gros cubes de 4 cm",
                "emoji": "🍗",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "patate_douce_crue",
                "name": "Patate douce",
                "detail": "en cubes de 2 cm, peau gardée et bien brossée",
                "emoji": "🍠",
                "baseQty": 1200,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "brocoli",
                "name": "Brocoli",
                "detail": "en fleurettes, ajouté avec le poulet",
                "emoji": "🥦",
                "baseQty": 600,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "en lanières larges",
                "emoji": "🫑",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon rouge",
                "detail": "en quartiers épais",
                "emoji": "🧅",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "30 g pour les légumes, 20 g pour le poulet",
                "emoji": "🫒",
                "baseQty": 50,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "moutarde",
                "name": "Moutarde de Dijon",
                "detail": "pour enrober le poulet",
                "emoji": "🥄",
                "baseQty": 40,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "écrasé, environ 6 gousses",
                "emoji": "🧄",
                "baseQty": 25,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "à ajouter à la sortie du four",
                "emoji": "🍋",
                "baseQty": 40,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            }
        ],
        "steps": [
            "Préchauffe le four à 200 degrés chaleur tournante et sors tes trois plaques.",
            "Coupe la patate douce en cubes de 2 cm, l'oignon en quartiers, le poivron en lanières. C'est la vraie découpe de la recette, compte 15 minutes.",
            "Mélange dans un saladier la patate douce, l'oignon, le poivron, 30 g d'huile d'olive, l'ail écrasé, du paprika fumé, du cumin, du sel et du poivre.",
            "Étale en une seule couche sur deux plaques, sans superposer, et enfourne 20 minutes. Une plaque entassée rend de l'eau et rien ne dore.",
            "Pendant ce temps, coupe le poulet en gros cubes et enrobe-le de moutarde et des 20 g d'huile restants. Sale, poivre.",
            "Sors les plaques, ajoute les fleurettes de brocoli sur les légumes, et étale le poulet sur la troisième plaque.",
            "Enfourne le tout 18 minutes : le poulet ne doit jamais dépasser 18 à 20 minutes, sinon il est sec dès le mardi. Le brocoli ressort vert et encore ferme.",
            "Arrose de jus de citron, laisse tiédir puis répartis dans 8 boîtes et mets au frigo dans l'heure."
        ],
        "tips": [
            "Une seule couche par plaque, c'est la règle numéro un. 3,7 kg de garniture ne tiennent pas sur une plaque : il en faut trois, sinon tout cuit à la vapeur.",
            "Coupe le poulet en gros cubes plutôt qu'en petits morceaux : il reste moelleux au réchauffage le jeudi comme le lundi.",
            "Le brocoli entre en même temps que le poulet, jamais au départ. Cuit 40 minutes, il devient gris et mou en boîte."
        ],
        "variantes": [
            "Version méditerranéenne : remplace le paprika et le cumin par des herbes de Provence, et ajoute 150 g de feta émiettée à la sortie du four.",
            "Version curry : remplace la moutarde par 60 g de pâte de curry mélangée à 200 g de yaourt grec, et sers avec du riz basmati au lieu de la patate douce."
        ]
    },
    {
        "id": "curry-poulet-patate-douce-coco",
        "name": "Curry de poulet, patate douce et coco",
        "subtitle": "8 portions, le reste ça mijote tout seul",
        "emoji": "🥥",
        "category": "diner",
        "portions": 8,
        "activeTime": 35,
        "totalTime": 70,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur (congèle sans les épinards). Sauce congelée seule : 3 mois.",
        "rechauffage": "Casserole à feu doux environ 8 min, jusqu'à ce que la sauce fume et frémisse sur les bords, sans ébullition franche. Micro-ondes 3 min à couvert. Ne fais jamais bouillir : le lait de coco tranche et le poulet devient sec.",
        "materiel": "1 cocotte à fond épais de 5 litres",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Sans gluten",
            "Prise de masse",
            "Congelable"
        ],
        "kcalParPortion": 498,
        "proteinesParPortion": 51.2,
        "minutesParPortion": 4.4,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blanc de poulet",
                "detail": "en gros cubes de 3 cm, pas plus petits sinon ils sèchent",
                "emoji": "🍗",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "patate_douce_crue",
                "name": "Patate douce",
                "detail": "en cubes de 3 cm, épluchée",
                "emoji": "🍠",
                "baseQty": 700,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "lait_coco",
                "name": "Lait de coco",
                "detail": "en conserve, entier pour la tenue de la sauce",
                "emoji": "🥥",
                "baseQty": 400,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "en lanières",
                "emoji": "🫑",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "émincé",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "epinards",
                "name": "Épinards",
                "detail": "frais, ajoutés hors du feu",
                "emoji": "🥬",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "pate_curry",
                "name": "Pâte de curry",
                "detail": "rouge de préférence, dose selon ton goût",
                "emoji": "🍥",
                "baseQty": 80,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "double concentré",
                "emoji": "🥫",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "gingembre",
                "name": "Gingembre frais",
                "detail": "râpé",
                "emoji": "🫚",
                "baseQty": 25,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "environ 5 gousses",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "citron_vert",
                "name": "Citron vert",
                "detail": "le jus, ajouté hors du feu",
                "emoji": "🍋",
                "baseQty": 30,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "coriandre",
                "name": "Coriandre fraîche",
                "detail": "ciselée au moment de servir",
                "emoji": "🌿",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour saisir",
                "emoji": "🫒",
                "baseQty": 20,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Éplucher et couper la patate douce en cubes de 3 cm, émincer l'oignon et le poivron, râper le gingembre, couper le poulet en gros cubes. 15 minutes de découpe, c'est le gros du travail.",
            "Chauffer l'huile à feu vif dans la cocotte et saisir le poulet en 2 fournées, 4 minutes chacune, juste pour le colorer. En une seule fois il bout dans son jus. Le réserver dans un saladier.",
            "Dans la même cocotte, faire revenir oignon, ail et gingembre 3 minutes. Ajouter la pâte de curry et le concentré de tomate, remuer 1 minute.",
            "Verser le lait de coco et 25 cl d'eau, gratter le fond de la cocotte à la cuillère en bois pour décoller les sucs. C'est là que se trouve tout le goût.",
            "Ajouter la patate douce, couvrir et laisser mijoter 20 minutes à feu doux, jusqu'à ce qu'un couteau traverse un cube sans résistance.",
            "Remettre le poulet et son jus avec le poivron, poursuivre 10 minutes à découvert. Le poulet finit de cuire dans la sauce et reste moelleux.",
            "Couper le feu, ajouter les épinards, le jus de citron vert et la coriandre. Mélanger, saler et poivrer.",
            "Répartir tout de suite en 8 boîtes, couvercles ouverts, et mettre au frigo dans les 2 heures."
        ],
        "tips": [
            "Le poulet se saisit en deux fournées puis se réserve, et il ne mijote que 10 minutes à la fin. C'est la seule façon d'avoir un blanc encore tendre au jour 4.",
            "La patate douce remplace le riz dans la cocotte : tu as déjà tes glucides dans le plat, une portion se mange telle quelle si tu es en perte de poids.",
            "Cuisine la double dose de sauce et congèle-la seule, 3 mois. Il suffira de la ressortir avec du poulet frais pour un plat complet en 12 minutes un soir de semaine."
        ],
        "variantes": [
            "Jour 3, version thaï : un trait de sauce soja et une poignée de cacahuètes concassées sur la portion réchauffée, ça ne coûte rien et le plat change de pays.",
            "Jour 5, version bowl froid : le curry tiède sur du riz basmati froid avec du concombre en rondelles, parfait quand il fait chaud."
        ]
    },
    {
        "id": "navarin-agneau-legumes-cocotte",
        "name": "Navarin d'agneau aux légumes",
        "subtitle": "8 portions du dimanche, 1h10 de cocotte sans toi",
        "emoji": "🐑",
        "category": "diner",
        "portions": 8,
        "activeTime": 35,
        "totalTime": 95,
        "difficulty": "Moyen",
        "conservation": "4 jours au frigo, 3 mois au congélateur. La viande continue de s'attendrir pendant les 2 premiers jours.",
        "rechauffage": "À la cocotte ou à la casserole, 12 à 15 min à feu doux à couvert avec 3 cuillères à soupe d'eau, jusqu'à ce que la sauce frémisse et que les morceaux soient chauds à coeur. Une seule fois. Évite le micro-ondes à pleine puissance, il durcit les fibres de l'agneau.",
        "materiel": "1 cocotte en fonte de 6 à 7 litres avec couvercle",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Congelable",
            "Prise de masse"
        ],
        "kcalParPortion": 505,
        "proteinesParPortion": 47,
        "minutesParPortion": 4.4,
        "ingredients": [
            {
                "id": "agneau_gigot",
                "name": "Gigot d'agneau",
                "detail": "dégraissé, en cubes de 4 cm, demande au boucher",
                "emoji": "🍖",
                "baseQty": 1300,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "pomme_de_terre",
                "name": "Pomme de terre",
                "detail": "à chair ferme, en gros morceaux",
                "emoji": "🥔",
                "baseQty": 800,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "en tronçons de 3 cm",
                "emoji": "🥕",
                "baseQty": 500,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "émincé grossièrement",
                "emoji": "🧅",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "petits_pois",
                "name": "Petits pois",
                "detail": "surgelés, ajoutés en fin de cuisson",
                "emoji": "🫛",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "haricots_verts",
                "name": "Haricots verts",
                "detail": "surgelés, ajoutés avec les petits pois",
                "emoji": "🫛",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "double concentré",
                "emoji": "🥫",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "farine",
                "name": "Farine",
                "detail": "pour singer la viande et lier la sauce",
                "emoji": "🌾",
                "baseQty": 30,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "environ 5 gousses en chemise",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour saisir la viande en deux fois",
                "emoji": "🫒",
                "baseQty": 25,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Sors l'agneau 30 minutes avant, pas plus et jamais au soleil, éponge-le et sale-le. Une viande sèche et tempérée colore, une viande froide et humide bout dans son jus.",
            "Chauffe l'huile dans la cocotte et saisis les cubes d'agneau en deux fois, 5 minutes par fournée. Ne les entasse pas, c'est la seule erreur qui coûte vraiment cher ici.",
            "Remets toute la viande, saupoudre la farine et remue 2 minutes pour l'enrober. Ajoute le concentré de tomate et poursuis 1 minute.",
            "Ajoute l'oignon, l'ail, 1 litre d'eau chaude, 2 branches de thym, 1 feuille de laurier et du poivre. Racle le fond pour décoller les sucs.",
            "Couvre, baisse à feu très doux et laisse mijoter 30 minutes. Le gigot est un morceau maigre : au delà de 1h10 de cocotte au total il devient sec et filandreux.",
            "Épluche et coupe les pommes de terre et les carottes pendant ce temps, puis ajoute-les. Poursuis 30 minutes à couvert.",
            "Ajoute les petits pois et les haricots verts encore surgelés, cuis 10 dernières minutes à découvert pour réduire la sauce.",
            "Sale, retire le thym et le laurier, laisse reposer 15 minutes puis répartis en 8 boîtes et mets au frigo dans les 2 heures."
        ],
        "tips": [
            "Coupe les pommes de terre pendant la première demi-heure de mijotage plutôt qu'avant. Tu transformes un temps d'attente en temps utile.",
            "Les légumes verts arrivent surgelés en toute fin de cuisson. Ajoutés au début, ils seraient gris et sans goût.",
            "Pour les portions destinées au congélateur, cuis les pommes de terre à part et ajoute-les au moment de manger : congelées dans la sauce, elles deviennent farineuses."
        ],
        "variantes": [
            "Jour 2, en parmentier : écrase les pommes de terre du plat avec la viande effilochée, un peu d'emmental râpé dessus et 15 minutes au four.",
            "Jour 4, en version légère : sers la viande et la sauce sur des haricots verts supplémentaires plutôt que sur des féculents."
        ]
    },
    {
        "id": "minestrone-boeuf-haricots-rouges",
        "name": "Minestrone épais boeuf et haricots rouges",
        "subtitle": "8 bols, le plat qui tient vraiment au corps",
        "emoji": "🍅",
        "category": "diner",
        "portions": 8,
        "activeTime": 35,
        "totalTime": 70,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur. Congèle la base sans les pâtes.",
        "rechauffage": "Casserole à feu moyen 6 min avec un fond d'eau jusqu'à ce que ça fume, la soupe épaissit au frigo. Ajoute les pâtes chaudes dans le bol au dernier moment.",
        "materiel": "1 grande cocotte de 7 litres, 1 casserole pour les pâtes, 8 petits contenants pour les pâtes",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Prise de masse",
            "Économique",
            "Congelable"
        ],
        "kcalParPortion": 506,
        "proteinesParPortion": 38.2,
        "minutesParPortion": 4.4,
        "ingredients": [
            {
                "id": "boeuf_hache_5",
                "name": "Boeuf haché 5% MG",
                "detail": "à bien colorer au départ, c'est là que se fait le goût",
                "emoji": "🥩",
                "baseQty": 700,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "haricots_rouges",
                "name": "Haricots rouges cuits",
                "detail": "égouttés et rincés",
                "emoji": "🫘",
                "baseQty": 800,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "sauce_tomate",
                "name": "Passata de tomate",
                "detail": "2 bouteilles",
                "emoji": "🍅",
                "baseQty": 700,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "torréfié avec la viande",
                "emoji": "🥫",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carottes",
                "detail": "en petits dés",
                "emoji": "🥕",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "celeri_branche",
                "name": "Céleri branche",
                "detail": "en petits dés",
                "emoji": "🥬",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignons",
                "detail": "émincés",
                "emoji": "🧅",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "courgette",
                "name": "Courgettes",
                "detail": "en dés, ajoutées en fin de cuisson pour rester fermes",
                "emoji": "🥒",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "pates_cuites",
                "name": "Petites pâtes cuites",
                "detail": "cuites à part et stockées à part, 88 g par portion",
                "emoji": "🍝",
                "baseQty": 700,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "3 gousses",
                "emoji": "🧄",
                "baseQty": 15,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour saisir la viande",
                "emoji": "🫒",
                "baseQty": 20,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "parmesan",
                "name": "Parmesan râpé",
                "detail": "au moment de servir",
                "emoji": "🧀",
                "baseQty": 60,
                "unit": "g",
                "role": "protein",
                "scalable": true
            }
        ],
        "steps": [
            "Chauffe l'huile d'olive fort dans la cocotte et fais colorer le boeuf haché 6 min sans y toucher au début, il doit accrocher légèrement.",
            "Ajoute oignons, carottes et céleri, remue 5 min à feu moyen.",
            "Ajoute l'ail et le concentré de tomate, remue 1 min.",
            "Verse la passata, les haricots rouges et 1,5 litre d'eau ou de bouillon. Sale, poivre, couvre et laisse mijoter 25 min.",
            "Pendant ce temps, fais cuire les pâtes à part, égoutte-les et passe-les sous l'eau froide pour stopper la cuisson et les refroidir vite.",
            "Ajoute les courgettes dans la cocotte 6 min avant la fin, elles doivent rester légèrement croquantes.",
            "Répartis la soupe en 8 boîtes et les pâtes dans 8 petits contenants séparés, frigo dans les 2 heures. Le parmesan se râpe au moment de manger."
        ],
        "tips": [
            "Pâtes toujours à part. Dans la soupe elles gonflent au frigo, boivent tout le bouillon et tu retrouves une bouillie le lendemain.",
            "35 min de travail pour 8 repas, soit 4 min 30 par assiette, et tu as un plat qui rassasie vraiment le soir.",
            "Si la soupe est trop épaisse après 2 jours, c'est normal. Rallonge avec un peu d'eau chaude au réchauffage."
        ],
        "variantes": [
            "Version chorizo : remplace 200 g de boeuf par 100 g de chorizo en dés, la soupe devient fumée et piquante sans effort.",
            "Version verte : jette 200 g d'épinards frais dans les 2 dernières portions au réchauffage, ça relance complètement le plat en fin de semaine."
        ]
    },
    {
        "id": "mijote-porc-lentilles-chorizo",
        "name": "Mijoté de porc aux lentilles et chorizo",
        "subtitle": "8 portions, encore meilleur le lendemain",
        "emoji": "🥘",
        "category": "dejeuner",
        "portions": 8,
        "activeTime": 40,
        "totalTime": 70,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur. Les lentilles absorbent la sauce en refroidissant, c'est normal.",
        "rechauffage": "Casserole à feu doux 8 min avec 3 cuillères à soupe d'eau, jusqu'au frémissement. Micro-ondes 3 min à couvert. Une seule fois. Ajoute toujours un peu de liquide, le plat épaissit beaucoup au froid.",
        "materiel": "1 cocotte ou 1 faitout de 5 litres",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Économique",
            "Congelable",
            "Sans gluten"
        ],
        "kcalParPortion": 494,
        "proteinesParPortion": 54.8,
        "minutesParPortion": 5,
        "ingredients": [
            {
                "id": "porc_filet",
                "name": "Filet mignon de porc",
                "detail": "en médaillons épais de 3 cm",
                "emoji": "🥓",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lentilles_cuites",
                "name": "Lentilles cuites",
                "detail": "vertes du Puy si possible, elles tiennent mieux",
                "emoji": "🫘",
                "baseQty": 900,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "chorizo",
                "name": "Chorizo",
                "detail": "en fines rondelles, 120 g suffisent pour parfumer tout le plat",
                "emoji": "🌭",
                "baseQty": 120,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "en rondelles",
                "emoji": "🥕",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poireaux",
                "name": "Poireau",
                "detail": "émincé, bien lavé",
                "emoji": "🥬",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "en dés",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "celeri_branche",
                "name": "Céleri branche",
                "detail": "en petits tronçons",
                "emoji": "🥬",
                "baseQty": 150,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "double concentré",
                "emoji": "🥫",
                "baseQty": 50,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "moutarde",
                "name": "Moutarde de Dijon",
                "detail": "ajoutée hors du feu pour garder son piquant",
                "emoji": "🫙",
                "baseQty": 30,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "environ 5 gousses écrasées",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour saisir le porc",
                "emoji": "🫒",
                "baseQty": 20,
                "unit": "g",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Couper les carottes, le poireau, le céleri et l'oignon. Trancher le chorizo en fines rondelles et le porc en médaillons épais. 15 minutes de découpe.",
            "Faire revenir le chorizo seul 2 minutes à feu moyen dans la cocotte, sans huile. Il rend sa graisse parfumée qui va servir de base à tout le plat, le réserver.",
            "Ajouter l'huile et saisir les médaillons de porc en 3 fournées, 3 minutes par face, dans cette graisse. En une seule fois la viande bout. Les réserver avec le chorizo.",
            "Jeter l'oignon, la carotte, le poireau, le céleri et l'ail dans la cocotte, faire suer 6 minutes en raclant le fond.",
            "Ajouter le concentré de tomate, remuer 1 minute, puis verser 60 cl d'eau chaude avec 2 branches de thym et 1 feuille de laurier. Laisser mijoter 30 minutes à couvert, sans la viande.",
            "Remettre le porc et le chorizo avec les lentilles, poursuivre 10 minutes seulement : le filet mignon est un morceau à cuisson rapide, braisé 40 minutes il devient sec et granuleux.",
            "Couper le feu, incorporer la moutarde hors du feu, saler et poivrer. Retirer thym et laurier.",
            "Répartir tout de suite en 8 boîtes, couvercles ouverts, frigo dans les 2 heures."
        ],
        "tips": [
            "Le chorizo n'est pas un ingrédient de plus, c'est la matière grasse de cuisson. 120 g parfument 8 portions et permettent de ne mettre qu'un filet d'huile.",
            "La moutarde s'ajoute toujours hors du feu. Cuite, elle perd son piquant et le plat devient plat au bout de trois jours de frigo.",
            "Double les légumes sans toucher au reste si tu es en perte de poids : la portion gagne en volume et en satiété sans faire bouger les calories de façon significative."
        ],
        "variantes": [
            "Jour 2, en version soupe repas : mixe 2 portions avec 40 cl d'eau, tu obtiens un velouté de lentilles très protéiné pour les soirs sans faim.",
            "Jour 4, en version salade tiède : sers les lentilles et le porc froid sur de la salade verte avec un trait de vinaigre balsamique."
        ]
    },
    {
        "id": "bol-thon-lentilles-quinoa",
        "name": "Bol thon, lentilles et quinoa",
        "subtitle": "6 portions, zéro four, rien à réchauffer",
        "emoji": "🐟",
        "category": "dejeuner",
        "portions": 6,
        "activeTime": 30,
        "totalTime": 45,
        "difficulty": "Facile",
        "conservation": "3 jours au frigo, vinaigrette à part dans son bocal. Ne se congèle pas. Pour le bureau : sac isotherme avec un pack de froid, jamais plus de 4 heures hors du frigo.",
        "rechauffage": "Aucun. Ce bol est fait pour être mangé froid, sans micro-ondes et sans odeur dans l'open space.",
        "materiel": "1 casserole + 1 saladier de 5 litres + 6 boîtes hermétiques + 1 petit bocal",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Économique"
        ],
        "kcalParPortion": 507,
        "proteinesParPortion": 45.2,
        "minutesParPortion": 5,
        "ingredients": [
            {
                "id": "thon_conserve",
                "name": "Thon au naturel",
                "detail": "6 à 7 boîtes de 140 g, bien égouttées et pressées",
                "emoji": "🐟",
                "baseQty": 700,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lentilles_cuites",
                "name": "Lentilles vertes cuites",
                "detail": "2 bocaux égouttés, ou 220 g de lentilles crues cuites 20 minutes",
                "emoji": "🫘",
                "baseQty": 600,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "quinoa_cuit",
                "name": "Quinoa cuit",
                "detail": "soit 200 g de quinoa cru",
                "emoji": "🌾",
                "baseQty": 600,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "2 poivrons en dés",
                "emoji": "🫑",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "3 carottes en petits dés ou râpées gros",
                "emoji": "🥕",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "celeri_branche",
                "name": "Céleri branche",
                "detail": "3 branches en fines tranches, c'est lui qui apporte le croquant",
                "emoji": "🌿",
                "baseQty": 150,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon rouge",
                "detail": "1 oignon ciselé",
                "emoji": "🧅",
                "baseQty": 100,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "mais_conserve",
                "name": "Maïs en conserve",
                "detail": "1 petite boîte égouttée",
                "emoji": "🌽",
                "baseQty": 150,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour la vinaigrette du bocal",
                "emoji": "🫒",
                "baseQty": 45,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "moutarde",
                "name": "Moutarde de Dijon",
                "detail": "elle fait tenir l'émulsion toute la semaine",
                "emoji": "🥄",
                "baseQty": 20,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "vinaigre_balsamique",
                "name": "Vinaigre balsamique",
                "detail": "dans le bocal avec la moutarde",
                "emoji": "🍶",
                "baseQty": 30,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "1 citron pressé",
                "emoji": "🍋",
                "baseQty": 40,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "coriandre",
                "name": "Persil ou coriandre",
                "detail": "à ciseler le jour J, jamais à l'avance",
                "emoji": "🌿",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": false
            }
        ],
        "steps": [
            "Rince le quinoa, mets-le dans la casserole avec 1,5 fois son volume d'eau salée, couvre et laisse cuire 15 minutes à feu doux puis 5 minutes hors du feu, couvercle fermé.",
            "Pendant la cuisson, coupe le poivron, la carotte, le céleri et l'oignon. Objectif : des dés de la taille d'un pois chiche. Compte 16 minutes de couteau.",
            "Égoutte les lentilles et le maïs, rince-les à l'eau froide et sèche-les au torchon.",
            "Ouvre les boîtes de thon, égoutte-les et presse-les avec le dos d'une fourchette. Un thon mal égoutté, c'est une salade mouillée jeudi.",
            "Prépare la vinaigrette dans le bocal : moutarde, vinaigre balsamique, jus de citron, huile d'olive, sel, poivre. Ferme et secoue 20 secondes.",
            "Étale le quinoa cuit sur une plaque pendant 5 à 10 minutes pour qu'il refroidisse vite : une céréale tiède mise en boîte se conserve mal.",
            "Mélange le quinoa froid, les lentilles, le thon émietté et tous les légumes dans le saladier de 5 litres, à sec.",
            "Répartis dans les 6 boîtes et mets au frigo dans l'heure. Le bocal de vinaigrette reste dans la porte du frigo.",
            "Le jour J : 1 grosse cuillère de vinaigrette, les herbes fraîches, tu secoues la boîte."
        ],
        "tips": [
            "Refroidis toujours le quinoa avant de l'ajouter. Une céréale encore tiède continue de cuire les légumes dans la boîte et tu retrouves du mou dès le lendemain.",
            "Le céleri branche et la carotte sont les deux légumes qui tiennent le mieux. Quand tu improvises une salade de batch cooking, construis autour d'eux.",
            "C'est la recette la moins chère du lot : thon en conserve et lentilles en bocal, environ 2 euros par portion pour 45 g de protéines."
        ],
        "variantes": [
            "Remplace le thon par 6 oeufs durs écrasés et 200 g de fromage blanc pour une version plus douce, parfaite quand tu satures du poisson.",
            "Passe le bol en version mexicaine : haricots rouges à la place des lentilles, une pointe de sriracha dans la vinaigrette et un demi avocat coupé le matin même."
        ]
    },
    {
        "id": "veloute-chou-fleur-jambon-skyr",
        "name": "Velouté de chou-fleur au jambon et au skyr",
        "subtitle": "6 bols crémeux, sans une goutte de crème",
        "emoji": "🥣",
        "category": "dejeuner",
        "portions": 6,
        "activeTime": 30,
        "totalTime": 60,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo à 4 degrés, 2 mois au congélateur. Congèle avant l'ajout de l'emmental ET du skyr, tu les incorpores au réchauffage.",
        "rechauffage": "Feu doux jusqu'au frémissement, environ 5 min, ou micro-ondes 3 min. Le skyr peut légèrement grainer, un coup de mixeur plongeant et c'est réparé.",
        "materiel": "1 casserole ou faitout de 6 litres + 1 mixeur plongeant",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Perte de poids",
            "Sans gluten",
            "Congelable"
        ],
        "kcalParPortion": 351,
        "proteinesParPortion": 32.7,
        "minutesParPortion": 5,
        "ingredients": [
            {
                "id": "chou_fleur",
                "name": "Chou-fleur",
                "detail": "environ 1 grosse tête, en fleurettes",
                "emoji": "🥦",
                "baseQty": 1200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poireaux",
                "name": "Poireaux",
                "detail": "blancs et vert clair en rondelles",
                "emoji": "🥬",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "pomme_de_terre",
                "name": "Pommes de terre",
                "detail": "en cubes, elles donnent le côté velouté",
                "emoji": "🥔",
                "baseQty": 400,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "jambon_blanc",
                "name": "Jambon blanc",
                "detail": "en dés, la moitié mixée et la moitié en morceaux",
                "emoji": "🍖",
                "baseQty": 500,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "skyr_0",
                "name": "Skyr 0%",
                "detail": "ajouté hors du feu, jamais pendant l'ébullition",
                "emoji": "🥛",
                "baseQty": 400,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "fromage_rape",
                "name": "Emmental râpé",
                "detail": "fondu dans le velouté chaud",
                "emoji": "🧀",
                "baseQty": 80,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "émincé",
                "emoji": "🧅",
                "baseQty": 150,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "2 gousses",
                "emoji": "🧄",
                "baseQty": 10,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "moutarde",
                "name": "Moutarde de Dijon",
                "detail": "1 cuillère à soupe, elle relève le chou-fleur",
                "emoji": "🌭",
                "baseQty": 20,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour le fond de casserole",
                "emoji": "🫒",
                "baseQty": 15,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Fais revenir oignon et poireaux dans l'huile d'olive 5 min à feu moyen.",
            "Ajoute le chou-fleur, les pommes de terre, l'ail et 1 litre d'eau ou de bouillon. Couvre et laisse cuire 25 min, jusqu'à ce que la pointe du couteau entre sans résistance.",
            "Pendant la cuisson, coupe le jambon en dés. Mets-en la moitié de côté pour les morceaux.",
            "Mixe la casserole au mixeur plongeant avec la moutarde et la moitié du jambon, jusqu'à obtenir un velouté bien lisse.",
            "Ajoute les dés de jambon réservés dans le velouté encore bien chaud, puis l'emmental râpé, et remue jusqu'à ce qu'il fonde.",
            "Coupe le feu, attends 5 min, puis incorpore le skyr au fouet. Le velouté doit être tiède, pas bouillant.",
            "Goûte, poivre généreusement et répartis tout de suite en 6 boîtes, frigo dans les 2 heures."
        ],
        "tips": [
            "Le skyr remplace la crème et apporte 40 g de protéines pour 236 kcal. Mais il ne supporte pas l'ébullition, attends toujours que ça redescende.",
            "Le jambon en dés entre dans le velouté encore chaud, jamais à froid dans la boîte : une charcuterie prête à consommer ajoutée à froid et gardée 4 jours, c'est le point faible classique de ce genre de soupe.",
            "1 litre de bouillon et pas 1,5 : le velouté est plus dense, plus rassasiant, et la portion reste à un format raisonnable."
        ],
        "variantes": [
            "Version fumée : remplace le jambon blanc par des lardons dorés à sec et retire l'huile d'olive, le gras des lardons suffit.",
            "Version curry : ajoute 1 cuillère à café de curry et 1 de cumin dans 2 portions au moment de réchauffer, tu as l'impression de manger une autre soupe."
        ]
    },
    {
        "id": "soupe-thai-poulet-crevettes-coco",
        "name": "Soupe thaï poulet et crevettes au lait de coco",
        "subtitle": "6 bols, tout dans une seule cocotte",
        "emoji": "🍜",
        "category": "diner",
        "portions": 6,
        "activeTime": 32,
        "totalTime": 55,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo pour la base sans crevettes, 2 mois au congélateur. Les crevettes ne couvrent que les 2 premiers jours : complète les bols des jours 3 et 4 avec du poulet ou du tofu.",
        "rechauffage": "Porte la base au frémissement à feu doux, puis ajoute les crevettes et laisse 2 à 3 min dans le liquide frémissant jusqu'à ce qu'elles soient chaudes à coeur. Si le lait de coco s'est séparé, fouette 10 secondes et tout revient.",
        "materiel": "1 cocotte de 5 litres + 6 petits contenants pour les crevettes et la coriandre",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Sans gluten",
            "Congelable"
        ],
        "kcalParPortion": 388,
        "proteinesParPortion": 41,
        "minutesParPortion": 5.3,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blancs de poulet",
                "detail": "coupés en lamelles fines, ils cuisent en 8 min",
                "emoji": "🍗",
                "baseQty": 500,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "crevettes",
                "name": "Crevettes cuites décortiquées",
                "detail": "à garder à part et à ajouter dans le bol au réchauffage",
                "emoji": "🍤",
                "baseQty": 300,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lait_coco",
                "name": "Lait de coco",
                "detail": "1 boîte et demie, versé en fin de cuisson",
                "emoji": "🥥",
                "baseQty": 300,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "champignon",
                "name": "Champignons de Paris",
                "detail": "en lamelles",
                "emoji": "🍄",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivrons rouges",
                "detail": "en lanières",
                "emoji": "🫑",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carottes",
                "detail": "en rondelles fines pour qu'elles cuisent vite",
                "emoji": "🥕",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "émincé",
                "emoji": "🧅",
                "baseQty": 150,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "gingembre",
                "name": "Gingembre frais",
                "detail": "râpé, c'est lui qui fait tout",
                "emoji": "🫚",
                "baseQty": 25,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "3 gousses écrasées",
                "emoji": "🧄",
                "baseQty": 15,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "pate_curry",
                "name": "Pâte de curry rouge",
                "detail": "à faire revenir dans l'huile pour libérer les arômes",
                "emoji": "🌶️",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "sauce_nuoc_mam",
                "name": "Nuoc-mâm",
                "detail": "remplace le sel, dose à ton goût",
                "emoji": "🐟",
                "baseQty": 40,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "citron_vert",
                "name": "Citron vert",
                "detail": "le jus, ajouté hors du feu",
                "emoji": "🍋",
                "baseQty": 40,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "coriandre",
                "name": "Coriandre fraîche",
                "detail": "ciselée, à mettre dans le bol au moment de manger",
                "emoji": "🌿",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_sesame",
                "name": "Huile de sésame",
                "detail": "pour démarrer la pâte de curry",
                "emoji": "🫗",
                "baseQty": 15,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            }
        ],
        "steps": [
            "Taille le poulet en lamelles fines, les carottes en rondelles fines, les poivrons et les champignons. C'est le gros du travail, compte 25 minutes de couteau.",
            "Chauffe l'huile de sésame dans la cocotte et fais revenir la pâte de curry 1 min avec l'oignon, l'ail et le gingembre. L'odeur doit monter.",
            "Ajoute carottes, poivrons et champignons, remue 3 min pour les enrober.",
            "Verse 1,5 litre d'eau ou de bouillon, porte à frémissement et laisse cuire 12 min à couvert.",
            "Ajoute les lamelles de poulet et laisse pocher 8 min à feu doux, elles doivent rester nacrées.",
            "Verse le lait de coco et le nuoc-mâm, chauffe 3 min sans jamais faire bouillir pour que le coco ne tranche pas.",
            "Coupe le feu, ajoute le jus de citron vert. Goûte et rectifie : le nuoc-mâm et les crevettes salent déjà beaucoup, sale-la donc légèrement en dessous.",
            "Répartis la base en 6 boîtes et mets au frigo dans les 2 heures. Crevettes et coriandre dans les petits contenants séparés."
        ],
        "tips": [
            "Crevettes à part, toujours, et réchauffées dans le liquide frémissant 2 à 3 minutes. Jetées dans un bol tiède elles ne montent jamais en température, cuites deux fois elles deviennent caoutchouteuses.",
            "Le lait de coco se verse en fin de cuisson et ne bout jamais, sinon il se sépare et la texture devient granuleuse.",
            "Prévois les jours 3 et 4 sans crevettes : des lamelles de poulet en plus dans la base ou 150 g de tofu doré font parfaitement le travail."
        ],
        "variantes": [
            "Version plus consistante : fais cuire des vermicelles de riz à part et ajoute une poignée dans le bol juste avant de verser la soupe chaude.",
            "Version végétarienne : remplace le poulet par 400 g de tofu ferme doré à la poêle et le nuoc-mâm par de la sauce soja. Attention, la sauce soja fait sauter le tag Sans gluten."
        ]
    },
    {
        "id": "bolognaise-allegee-boeuf-lentilles",
        "name": "Bolognaise allégée boeuf et lentilles",
        "subtitle": "8 portions, la sauce mijote pendant que tu fais autre chose",
        "emoji": "🍝",
        "category": "diner",
        "portions": 8,
        "activeTime": 45,
        "totalTime": 95,
        "difficulty": "Facile",
        "conservation": "3 jours au frigo pour les boîtes complètes pâtes plus sauce, 4 jours si la sauce est stockée seule. 3 mois au congélateur pour la sauce seule.",
        "rechauffage": "Sauce en casserole 6 min à feu doux avec un peu d'eau, jusqu'à ce qu'elle fume franchement. Micro-ondes 4 min à couvert. Une seule fois. Les pâtes se réchauffent avec la sauce, jamais seules.",
        "materiel": "1 cocotte ou faitout de 6 litres, 1 casserole de 6 litres pour les pâtes, 8 contenants à pâtes",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Économique",
            "Congelable"
        ],
        "kcalParPortion": 646,
        "proteinesParPortion": 49.6,
        "minutesParPortion": 5.6,
        "ingredients": [
            {
                "id": "boeuf_hache_5",
                "name": "Boeuf haché 5% MG",
                "detail": "1 kg en barquette",
                "emoji": "🥩",
                "baseQty": 1000,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "lentilles_cuites",
                "name": "Lentilles vertes cuites",
                "detail": "en conserve ou en brique, rincées",
                "emoji": "🫘",
                "baseQty": 500,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "pates_cuites",
                "name": "Pâtes complètes cuites",
                "detail": "soit environ 500 g de pâtes crues, cuites al dente",
                "emoji": "🍝",
                "baseQty": 1200,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "sauce_tomate",
                "name": "Sauce tomate (passata)",
                "detail": "2 bouteilles et demie",
                "emoji": "🍅",
                "baseQty": 1000,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "2 cuillères à soupe",
                "emoji": "🥫",
                "baseQty": 100,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "champignon",
                "name": "Champignons de Paris",
                "detail": "émincés, ils remplacent le gras de la viande",
                "emoji": "🍄",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "râpée ou en tout petits dés",
                "emoji": "🥕",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "2 gros, hachés fin",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "celeri_branche",
                "name": "Céleri branche",
                "detail": "2 branches en petits dés",
                "emoji": "🥬",
                "baseQty": 200,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "5 gousses hachées",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "2 cuillères à soupe",
                "emoji": "🫒",
                "baseQty": 30,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "parmesan",
                "name": "Parmesan râpé",
                "detail": "1 cuillère à soupe par portion au service",
                "emoji": "🧀",
                "baseQty": 80,
                "unit": "g",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Hache fin oignon, carotte et céleri et émince les champignons. C'est la vraie découpe de la recette, compte 20 minutes.",
            "Chauffe l'huile dans la cocotte de 6 litres et fais suer oignon, carotte et céleri 8 min à feu moyen sans les colorer.",
            "Ajoute les champignons et monte le feu 5 min, jusqu'à ce que toute leur eau soit évaporée. Sans cette étape la sauce sera liquide.",
            "Ajoute le boeuf haché, écrase-le et laisse colorer 5 min, puis l'ail et le concentré de tomate, remue 1 min.",
            "Verse la passata, ajoute les lentilles rincées, 200 ml d'eau, 2 feuilles de laurier et 1 cuillère à café d'origan. Couvre à moitié et laisse mijoter 45 min à feu très doux.",
            "Pendant les 15 dernières minutes, cuis les pâtes bien al dente, égoutte, rince à l'eau froide et mélange-les avec un filet d'huile pour qu'elles ne collent pas.",
            "Retire le laurier, sale, répartis la sauce en 8 boîtes et les pâtes dans 8 contenants séparés, frigo dans les 2 heures. Parmesan au dernier moment, dans l'assiette."
        ],
        "tips": [
            "Pâtes 1 min moins cuites que d'habitude et stockées à part : elles finissent de cuire au réchauffage au lieu de gonfler dans la sauce.",
            "Les lentilles font le travail de 300 g de viande en plus pour un tiers du prix, et personne ne les voit dans la sauce.",
            "Congèle la sauce seule en portions. Tu refais 9 min de pâtes le jour J et tu as un plat qui a le goût du dimanche."
        ],
        "variantes": [
            "Version gratin : verse 2 portions dans un plat, couvre de mozzarella et passe 15 min au four à 200 degrés.",
            "Version chili italien : ajoute des haricots rouges et une pointe de harissa dans une portion réchauffée, sers avec du riz complet au lieu des pâtes."
        ]
    },
    {
        "id": "hachis-parmentier-patate-douce-boeuf",
        "name": "Hachis parmentier de patate douce au boeuf",
        "subtitle": "8 portions, il se congèle en parts individuelles",
        "emoji": "🥧",
        "category": "diner",
        "portions": 8,
        "activeTime": 45,
        "totalTime": 90,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur, découpé en parts individuelles avant congélation.",
        "rechauffage": "25 min à 180 degrés au four pour retrouver le gratiné, ou 5 à 6 min au micro-ondes à couvert en tournant la part à mi-parcours. Depuis le congélateur : 45 min à 180 degrés couvert d'alu puis 10 min à découvert, ou une nuit de décongélation au frigo puis 25 min.",
        "materiel": "1 plat à gratin de 38 x 28 x 7 cm ou 2 plats moyens, 1 sauteuse, 1 grande casserole de 6 litres, 1 presse-purée",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Prise de masse",
            "Économique",
            "Congelable",
            "Sans gluten"
        ],
        "kcalParPortion": 557,
        "proteinesParPortion": 44.8,
        "minutesParPortion": 5.6,
        "ingredients": [
            {
                "id": "boeuf_hache_5",
                "name": "Boeuf haché 5%",
                "detail": "cru, à saisir en sauteuse",
                "emoji": "🥩",
                "baseQty": 1200,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "patate_douce_cuite",
                "name": "Patate douce cuite",
                "detail": "environ 1,8 kg crues, cuites à l'eau puis écrasées",
                "emoji": "🍠",
                "baseQty": 1600,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "émincé finement",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "en petits dés ou râpée pour aller plus vite",
                "emoji": "🥕",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "champignon",
                "name": "Champignons de Paris",
                "detail": "émincés",
                "emoji": "🍄",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "sauce_tomate",
                "name": "Sauce tomate (passata)",
                "detail": "pour lier la farce",
                "emoji": "🥫",
                "baseQty": 300,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "il donne la profondeur de goût",
                "emoji": "🍅",
                "baseQty": 90,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "lait_demi",
                "name": "Lait demi-écrémé",
                "detail": "pour détendre la purée",
                "emoji": "🥛",
                "baseQty": 150,
                "unit": "ml",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "fromage_rape",
                "name": "Emmental râpé",
                "detail": "pour le dessus",
                "emoji": "🧀",
                "baseQty": 150,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "pour la sauteuse",
                "emoji": "🫒",
                "baseQty": 30,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "écrasé, environ 5 gousses",
                "emoji": "🧄",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Mets les patates douces épluchées et coupées en gros morceaux dans la grande casserole d'eau salée et lance la cuisson : 20 minutes. C'est le poste le plus long, il tourne pendant tout le reste.",
            "Préchauffe le four à 190 degrés.",
            "Dans une sauteuse avec l'huile, fais revenir l'oignon et la carotte 5 minutes, ajoute les champignons et l'ail, laisse 5 minutes de plus.",
            "Ajoute le boeuf haché, écrase-le à la cuillère en bois et fais-le colorer 6 à 7 minutes.",
            "Verse le concentré de tomate, laisse-le torréfier 1 minute, puis ajoute la sauce tomate. Sale, poivre, thym, laurier. Laisse mijoter 10 minutes à découvert.",
            "Égoutte les patates douces, écrase-les au presse-purée avec le lait, du sel et du poivre. Ne les mixe pas, elles deviendraient collantes.",
            "Verse la farce dans le grand plat (ou répartis dans 2 plats moyens, plus pratique pour en congeler la moitié), recouvre de purée, lisse à la fourchette et parsème d'emmental.",
            "Enfourne 25 minutes, puis 3 minutes sous le gril pour la croûte. Laisse reposer 20 minutes, découpe 8 parts nettes, laisse-les refroidir à découvert et mets-les au frigo dans l'heure."
        ],
        "tips": [
            "Découpe les parts AVANT de mettre au frigo ou au congélateur. Un plat entier froid se découpe mal, il refroidit lentement et tu perds 5 minutes chaque soir.",
            "Le concentré de tomate torréfié 1 minute change tout : c'est ce qui donne le goût de plat mijoté longtemps alors que la farce n'a cuit que 20 minutes.",
            "Purée à la fourchette ou au presse-purée uniquement. Au mixeur, l'amidon se libère et tu obtiens de la colle."
        ],
        "variantes": [
            "Moitié patate douce, moitié pomme de terre pour une version plus classique et moins sucrée, à faire une semaine sur deux.",
            "Version chili : ajoute 400 g de haricots rouges cuits et du cumin dans la farce, et remplace l'emmental par du cheddar."
        ]
    },
    {
        "id": "grande-salade-poulet-pois-chiches-boulgour",
        "name": "Grande salade poulet, pois chiches et boulgour",
        "subtitle": "6 portions, une plaque au four, sauce dans un bocal",
        "emoji": "🥗",
        "category": "dejeuner",
        "portions": 6,
        "activeTime": 35,
        "totalTime": 60,
        "difficulty": "Facile",
        "conservation": "3 jours au frigo pour les portions avec poulet, 5 jours pour la base sans poulet (boulgour, pois chiches, légumes) à compléter au thon ou aux oeufs durs jeudi et vendredi. Sauce tahini 5 jours dans son bocal. Ne se congèle pas.",
        "rechauffage": "Aucun, ça se mange froid. Sors la boîte 10 minutes avant. Si tu veux chaud, 90 secondes au micro-ondes sans la sauce puis tu sauces ensuite.",
        "materiel": "1 plaque de four + 1 saladier de 6 litres + 6 boîtes hermétiques + 1 petit bocal pour la sauce",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine"
        ],
        "kcalParPortion": 629,
        "proteinesParPortion": 57.4,
        "minutesParPortion": 5.8,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blanc de poulet",
                "detail": "rôti au four puis coupé en cubes de 2 cm",
                "emoji": "🍗",
                "baseQty": 800,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "boulgour_cuit",
                "name": "Boulgour cuit",
                "detail": "soit environ 210 g de boulgour cru gonflé à l'eau bouillante",
                "emoji": "🌾",
                "baseQty": 600,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "pois_chiches_cuits",
                "name": "Pois chiches cuits",
                "detail": "2 bocaux égouttés, rincés et bien séchés",
                "emoji": "🫘",
                "baseQty": 480,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "poivron_rouge",
                "name": "Poivron rouge",
                "detail": "2 gros, en petits dés",
                "emoji": "🫑",
                "baseQty": 300,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "3 moyennes, en petits dés (elles restent croquantes)",
                "emoji": "🥕",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon rouge",
                "detail": "1 gros, ciselé finement",
                "emoji": "🧅",
                "baseQty": 120,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "sauce_tahini",
                "name": "Tahini",
                "detail": "la base de la sauce, à garder à part",
                "emoji": "🥣",
                "baseQty": 60,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "2 citrons pressés",
                "emoji": "🍋",
                "baseQty": 60,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "10 ml dans la sauce, 15 ml pour rôtir le poulet",
                "emoji": "🫒",
                "baseQty": 25,
                "unit": "ml",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "2 gousses écrasées dans la sauce",
                "emoji": "🧄",
                "baseQty": 10,
                "unit": "g",
                "role": "sauce",
                "scalable": false
            },
            {
                "id": "feta",
                "name": "Feta",
                "detail": "à émietter au dernier moment, jamais dans la base",
                "emoji": "🧀",
                "baseQty": 120,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "coriandre",
                "name": "Coriandre fraîche",
                "detail": "1 bouquet, à ciseler le jour J",
                "emoji": "🌿",
                "baseQty": 20,
                "unit": "g",
                "role": "extra",
                "scalable": false
            }
        ],
        "steps": [
            "Préchauffe le four à 200 degrés. C'est ce qui prend le plus de temps, ça part en premier.",
            "Pose les blancs de poulet sur la plaque, arrose de 15 ml d'huile d'olive, sale, poivre et saupoudre de cumin ou de paprika. Enfourne 22 minutes.",
            "Pendant que le four tourne, verse le boulgour cru dans le saladier, couvre d'eau bouillante salée à hauteur plus 1 cm, pose une assiette dessus et laisse gonfler 15 minutes.",
            "Coupe les poivrons, les carottes et l'oignon en petits dés réguliers. Ce sont des légumes fermes, c'est eux qui font tenir la salade.",
            "Rince les pois chiches, égoutte-les et roule-les dans un torchon propre pour les sécher. L'eau restante est l'ennemie numéro un du jour 3.",
            "Prépare la sauce dans le bocal : tahini, jus de citron, ail écrasé, 10 ml d'huile d'olive, 4 cuillères à soupe d'eau froide et du sel. Ferme et secoue 20 secondes. Le bocal reste à part.",
            "Sors le poulet, laisse-le tiédir 10 minutes sur la planche puis coupe-le en cubes de 2 cm.",
            "Égrène le boulgour à la fourchette, étale-le 10 minutes sur un plat large pour qu'il refroidisse vite, puis ajoute les pois chiches, les légumes et le poulet. Mélange à sec, sans une goutte de sauce.",
            "Répartis dans les 6 boîtes et mets au frigo dans l'heure. Feta et coriandre dans un petit contenant à part."
        ],
        "tips": [
            "La règle qui sauve toutes les salades de la semaine : base sèche d'un côté, sauce dans un bocal, fromage et herbes à part.",
            "Sèche vraiment les pois chiches et les légumes après lavage. C'est l'eau résiduelle, pas la sauce, qui transforme une salade en soupe au bout de 48 heures.",
            "Monte 3 boîtes avec poulet pour les 3 premiers jours et 2 boîtes de base sans poulet pour la fin de semaine, que tu compléteras au thon en conserve ou aux oeufs durs. Du poulet rôti mangé froid au jour 5, c'est non."
        ],
        "variantes": [
            "Jour 3, passe ta portion 90 secondes au micro-ondes avant de saucer, puis jette une poignée d'épinards dessus : ils tombent à la chaleur et tu manges un plat chaud.",
            "Remplace la feta par du chèvre frais et ajoute une pointe de harissa dans la sauce : même base, l'assiette change complètement de pays."
        ]
    },
    {
        "id": "tajine-poulet-pois-chiches",
        "name": "Tajine de poulet aux pois chiches",
        "subtitle": "6 portions, une cocotte qui mijote seule",
        "emoji": "🍲",
        "category": "diner",
        "portions": 6,
        "activeTime": 35,
        "totalTime": 75,
        "difficulty": "Facile",
        "conservation": "4 jours au frigo, 3 mois au congélateur (congèle le tajine sans la semoule).",
        "rechauffage": "Casserole à couvert 8 min à feu doux jusqu'au frémissement, ou micro-ondes 3 min. Ajoute un filet de jus de citron juste avant de manger, ça relance tout le plat.",
        "materiel": "1 cocotte en fonte ou 1 faitout à fond épais de 6 litres, 6 boîtes hermétiques",
        "tags": [
            "Batch cooking",
            "Meal prep",
            "Haute protéine",
            "Congelable"
        ],
        "kcalParPortion": 632,
        "proteinesParPortion": 61,
        "minutesParPortion": 5.8,
        "ingredients": [
            {
                "id": "poulet_grille",
                "name": "Blanc de poulet",
                "detail": "en gros morceaux de 4 cm",
                "emoji": "🍗",
                "baseQty": 900,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "pois_chiches_cuits",
                "name": "Pois chiches cuits",
                "detail": "en conserve, rincés",
                "emoji": "🫘",
                "baseQty": 500,
                "unit": "g",
                "role": "protein",
                "scalable": true
            },
            {
                "id": "couscous_cuit",
                "name": "Semoule de couscous cuite",
                "detail": "préparée à l'eau bouillante, servie à part",
                "emoji": "🌾",
                "baseQty": 700,
                "unit": "g",
                "role": "carb",
                "scalable": true
            },
            {
                "id": "carotte",
                "name": "Carotte",
                "detail": "en gros tronçons",
                "emoji": "🥕",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "courgette",
                "name": "Courgette",
                "detail": "en demi-lunes épaisses",
                "emoji": "🥒",
                "baseQty": 400,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "oignon",
                "name": "Oignon",
                "detail": "2 gros, émincés",
                "emoji": "🧅",
                "baseQty": 250,
                "unit": "g",
                "role": "veg",
                "scalable": true
            },
            {
                "id": "concentre_tomate",
                "name": "Concentré de tomate",
                "detail": "1 grosse cuillère à soupe",
                "emoji": "🥫",
                "baseQty": 80,
                "unit": "g",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "huile_olive",
                "name": "Huile d'olive",
                "detail": "2 cuillères à soupe",
                "emoji": "🫒",
                "baseQty": 30,
                "unit": "g",
                "role": "fat",
                "scalable": true
            },
            {
                "id": "citron_jus",
                "name": "Jus de citron",
                "detail": "1 citron et demi, ajouté hors du feu",
                "emoji": "🍋",
                "baseQty": 60,
                "unit": "ml",
                "role": "sauce",
                "scalable": true
            },
            {
                "id": "ail",
                "name": "Ail",
                "detail": "4 gousses hachées",
                "emoji": "🧄",
                "baseQty": 15,
                "unit": "g",
                "role": "extra",
                "scalable": true
            },
            {
                "id": "coriandre",
                "name": "Coriandre fraîche",
                "detail": "1 petit bouquet ciselé",
                "emoji": "🌿",
                "baseQty": 15,
                "unit": "g",
                "role": "extra",
                "scalable": true
            }
        ],
        "steps": [
            "Émince les oignons et coupe les carottes en tronçons de 3 cm. Les carottes cuisent plus longtemps que le reste, c'est pour ça qu'elles entrent en premier.",
            "Chauffe l'huile d'olive dans la cocotte, fais blondir les oignons 5 min, ajoute l'ail, 2 cuillères à café de ras el hanout, 1 de cumin et 1 de curcuma, remue 1 min.",
            "Incorpore le concentré de tomate, les carottes et 400 ml d'eau. Couvre et laisse mijoter 25 minutes, sans le poulet.",
            "Ajoute le poulet en gros morceaux, les courgettes et les pois chiches, et poursuis 15 minutes à couvert seulement. Un blanc de poulet braisé 45 minutes ressort cotonneux, 15 minutes suffisent et il reste moelleux.",
            "Pendant ces 15 dernières minutes, verse la semoule dans un saladier, couvre d'eau bouillante salée, laisse gonfler 5 min et égraine à la fourchette, puis étale-la pour qu'elle refroidisse vite.",
            "Hors du feu, ajoute le jus de citron et la coriandre.",
            "Répartis la semoule dans 6 boîtes et le tajine par dessus, frigo dans les 2 heures."
        ],
        "tips": [
            "Le jus de citron toujours hors du feu : cuit, il devient amer, cru il réveille le plat même au 4e jour.",
            "Les gros morceaux de poulet sèchent beaucoup moins au réchauffage que les cubes, et ils n'entrent qu'à la fin de la cuisson.",
            "Si tu congèles, mets le tajine seul dans la boîte. Tu referas 5 min de semoule le jour J, c'est toujours meilleur que de la semoule décongelée."
        ],
        "variantes": [
            "Version soupe épaisse : mixe 2 portions avec 300 ml d'eau chaude, tu obtiens un velouté protéiné pour les soirs sans faim.",
            "Version wrap : égoutte une portion, écrase grossièrement et garnis 2 pains pita complets avec de la salade et du yaourt grec citronné."
        ]
    }
];
