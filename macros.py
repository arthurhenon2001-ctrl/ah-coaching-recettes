# -*- coding: utf-8 -*-
# id: (kcal, P, G, L) per 100 g
ING = {
"poulet_grille":(165,31,0,3.6),"saumon":(208,20,0,13.4),"thon_conserve":(116,25.5,0,1),
"boeuf_hache_5":(137,21.4,0,5),"dinde":(135,29.3,0,1.5),"crevettes":(99,20.9,0.2,1.7),
"oeuf":(143,12.6,0.7,9.5),"jambon_blanc":(115,19,0.8,3.5),"blanc_oeuf":(52,10.9,0.7,0.2),
"cabillaud":(82,17.8,0,0.7),"tofu":(144,15.6,2.3,8.7),"porc_filet":(143,26,0,3.5),
"agneau_gigot":(175,25,0,8),"moules":(86,12,3.7,2.2),"gambas":(85,18,0,1.2),
"tempeh":(192,20,7.6,10.8),"seitan":(150,28,6,1),"skyr_0":(59,10,3.6,0.2),
"fromage_blanc_0":(46,7.5,3.8,0.2),"cottage_cheese":(98,11.1,3.4,4.3),"lait_demi":(46,3.2,4.8,1.6),
"fromage_rape":(380,27.4,0.5,29.7),"mozzarella":(280,22.2,2.2,20.3),"chevre_frais":(209,12.8,1,17),
"ricotta":(174,11.3,3,13),"parmesan":(431,38.5,3.2,29.7),"creme_fraiche_legere":(161,2.6,3.5,15),
"lait_coco":(197,2.2,2.7,19.7),"yaourt_grec":(97,9,3.6,5),"feta":(264,14.2,4.1,21.3),
"riz_basmati_cuit":(130,2.7,28.2,0.3),"pates_cuites":(158,5.8,30.6,0.9),"quinoa_cuit":(120,4.4,21.3,1.9),
"patate_douce_cuite":(90,2,20.7,0.1),"flocons_avoine":(379,13.2,67.7,6.5),"pain_complet":(247,9.7,43.1,3.4),
"tortilla_ble":(295,8.8,44,8.5),"farine_complete":(340,13.2,61.5,2.5),"nouilles_soba_cuites":(99,5.1,21.4,0.1),
"riz_complet_cuit":(123,2.7,25.6,1),"boulgour_cuit":(83,3.1,18.6,0.2),"couscous_cuit":(112,3.8,23.2,0.2),
"pomme_de_terre":(87,1.9,20.1,0.1),"banane":(89,1.1,22.8,0.3),"pomme":(52,0.3,13.8,0.2),
"fruits_rouges":(45,0.9,10.2,0.3),"myrtilles":(57,0.7,14.5,0.3),"mangue":(60,0.8,15,0.4),
"citron_jus":(22,0.4,6.9,0.2),"brocoli":(34,2.8,7,0.4),"courgette":(17,1.2,3.1,0.3),
"tomate":(18,0.9,3.9,0.2),"epinards":(23,2.9,3.6,0.4),"poivron_rouge":(31,1,6,0.3),
"oignon":(40,1.1,9.3,0.1),"champignon":(22,3.1,3.3,0.3),"salade_verte":(15,1.4,2.9,0.2),
"concombre":(12,0.6,2.2,0.2),"carotte":(41,0.9,9.6,0.2),"haricots_verts":(31,1.8,7,0.1),
"aubergine":(25,1,5.9,0.2),"chou_fleur":(25,1.9,5,0.3),"patate_douce_crue":(86,1.6,20.1,0.1),
"betterave_cuite":(44,1.7,9.6,0.2),"avocat":(160,2,8.5,14.7),"chou_rouge":(31,1.4,7.4,0.2),
"fenouil":(31,1.2,7.3,0.2),"celeri_branche":(14,0.7,3,0.2),"radis":(16,0.7,3.4,0.1),
"petits_pois":(81,5.4,14.5,0.4),"edamame":(121,11.9,8.9,5.2),"asperges":(20,2.2,3.9,0.1),
"poireaux":(31,1.5,7.3,0.3),"chou_kale":(49,4.3,8.8,0.9),"haricots_noirs":(132,8.9,23.7,0.5),
"lentilles_cuites":(116,9,20.1,0.4),"pois_chiches_cuits":(164,8.9,27.4,2.6),"haricots_rouges":(127,8.7,22.8,0.5),
"huile_olive":(884,0,0,100),"beurre_cacahuete":(588,25.1,20,50.4),"amandes":(579,21.2,21.7,49.9),
"noix":(654,15.2,13.7,65.2),"graines_chia":(486,16.5,42.1,30.7),"graines_lin":(534,18.3,28.9,42.2),
"sauce_soja":(53,8.1,4.9,0.6),"pesto":(387,5,4,38),"sauce_tomate":(26,1.3,4.6,0.2),
"concentre_tomate":(82,4.3,18.9,0.5),"creme_coco":(230,2.3,3.3,23.8),"pate_curry":(113,2,9,7.5),
"mais_conserve":(82,2.4,17.5,0.8),"sauce_sriracha":(93,2,18.5,1),"sauce_tahini":(595,17,21,54),
"vinaigre_balsamique":(88,0.5,17,0),"moutarde":(66,4,5.8,3.3),"harissa":(79,3,9,3),
"sauce_nuoc_mam":(35,5.1,3.6,0),"cacao_poudre":(228,19.6,57.9,13.7),"miel":(304,0.3,82.4,0),
"sirop_erable":(260,0,67.2,0.1),"chocolat_noir_70":(598,7.8,45.9,42.6),"whey_protein":(400,80,6.7,5),
"chorizo":(455,24,2,38),"lardons":(330,15,1,30),"ail":(149,6,33,0.5),"gingembre":(80,2,18,0.7),
"huile_sesame":(884,0,0,100),"cacahuetes":(567,26,16,49),"citron_vert":(25,0.4,8,0.1),
"farine":(350,10,73,1),"levure":(105,8,19,0.5),"coriandre":(23,2,4,0.5),
"mais":(86,3.3,19,1.4),"thon":(116,25.5,0,1),
}
UNIT_G = {"oeuf":50}

R = []
def r(rid, portions, active, total, ings):
    R.append((rid, portions, active, total, ings))

r("plaque-poulet-patate-douce-brocoli",8,20,60,[("poulet_grille",1200),("patate_douce_crue",1200),("brocoli",600),("poivron_rouge",400),("oignon",300),("huile_olive",50),("moutarde",40),("ail",25),("citron_jus",40)])
r("hachis-parmentier-patate-douce-boeuf",8,25,70,[("boeuf_hache_5",1200),("patate_douce_cuite",1600),("oignon",250),("carotte",300),("champignon",300),("sauce_tomate",300),("concentre_tomate",90),("lait_demi",150),("fromage_rape",150),("huile_olive",30),("ail",20)])
r("tian-saumon-legumes-four",6,20,55,[("saumon",1100),("pomme_de_terre",700),("tomate",700),("courgette",600),("poivron_rouge",400),("fenouil",300),("oignon",200),("huile_olive",40),("ail",20),("citron_jus",50)])
r("poulet-tandoori-four-riz",8,20,75,[("poulet_grille",1200),("yaourt_grec",500),("pate_curry",80),("concentre_tomate",60),("oignon",400),("poivron_rouge",400),("riz_basmati_cuit",1400),("ail",25),("gingembre",25),("citron_jus",40),("huile_olive",30)])
r("moussaka-lentilles-feta",6,25,80,[("lentilles_cuites",1200),("aubergine",900),("courgette",500),("oignon",250),("ail",20),("sauce_tomate",500),("concentre_tomate",60),("yaourt_grec",400),("oeuf",150),("feta",150),("fromage_rape",60),("huile_olive",30)])
r("chili-con-carne-xxl-cocotte",8,20,80,[("boeuf_hache_5",1200),("haricots_rouges",800),("haricots_noirs",400),("sauce_tomate",700),("concentre_tomate",70),("oignon",300),("poivron_rouge",300),("carotte",200),("mais_conserve",200),("ail",20),("huile_olive",20)])
r("dahl-lentilles-tofu-lait-coco",8,15,45,[("lentilles_cuites",1200),("tofu",600),("pois_chiches_cuits",400),("lait_coco",400),("sauce_tomate",400),("epinards",300),("oignon",250),("carotte",200),("concentre_tomate",50),("pate_curry",60),("ail",20),("gingembre",20),("huile_olive",20)])
r("curry-poulet-patate-douce-coco",8,20,60,[("poulet_grille",1200),("patate_douce_crue",700),("lait_coco",400),("poivron_rouge",300),("oignon",250),("epinards",200),("pate_curry",80),("concentre_tomate",60),("gingembre",25),("ail",20),("citron_vert",30),("coriandre",20),("huile_olive",20)])
r("navarin-agneau-legumes-cocotte",8,25,130,[("agneau_gigot",1300),("pomme_de_terre",800),("carotte",500),("oignon",300),("petits_pois",300),("haricots_verts",300),("concentre_tomate",60),("farine",30),("ail",20),("huile_olive",25)])
r("mijote-porc-lentilles-chorizo",8,20,70,[("porc_filet",1200),("lentilles_cuites",900),("chorizo",120),("carotte",400),("poireaux",300),("oignon",250),("celeri_branche",150),("concentre_tomate",50),("moutarde",30),("ail",20),("huile_olive",20)])
r("grande-salade-poulet-pois-chiches-boulgour",6,25,50,[("poulet_grille",700),("boulgour_cuit",700),("pois_chiches_cuits",480),("poivron_rouge",300),("carotte",250),("oignon",120),("sauce_tahini",90),("citron_jus",60),("huile_olive",45),("ail",10),("feta",180),("coriandre",20)])
r("bol-thon-lentilles-quinoa",6,20,35,[("thon_conserve",700),("lentilles_cuites",600),("quinoa_cuit",600),("poivron_rouge",250),("carotte",250),("celeri_branche",150),("oignon",100),("mais_conserve",150),("huile_olive",45),("moutarde",20),("vinaigre_balsamique",30),("citron_jus",40),("coriandre",20)])
r("coleslaw-proteine-dinde-edamame",6,25,50,[("dinde",700),("chou_rouge",600),("carotte",400),("edamame",250),("pomme",300),("yaourt_grec",350),("moutarde",40),("citron_jus",40),("huile_olive",20),("amandes",60)])
r("bol-soba-tofu-edamame-cacahuete",6,30,55,[("tofu",800),("nouilles_soba_cuites",700),("edamame",400),("carotte",300),("chou_rouge",300),("poivron_rouge",250),("beurre_cacahuete",80),("sauce_soja",60),("huile_sesame",20),("gingembre",20),("ail",10),("citron_vert",30),("sirop_erable",20),("cacahuetes",60)])
r("bol-saumon-grenailles-haricots-verts",5,25,60,[("saumon",750),("pomme_de_terre",800),("haricots_verts",500),("oeuf",5*UNIT_G["oeuf"]),("radis",150),("oignon",80),("yaourt_grec",300),("moutarde",30),("citron_jus",40),("huile_olive",30)])
r("muffins-oeufs-jambon-emmental-semaine",8,15,45,[("oeuf",18*UNIT_G["oeuf"]),("blanc_oeuf",400),("jambon_blanc",300),("fromage_rape",150),("epinards",200),("poivron_rouge",200),("oignon",100),("creme_fraiche_legere",100),("huile_olive",15)])
r("porridge-proteine-au-four-semaine",8,12,55,[("flocons_avoine",400),("lait_demi",900),("oeuf",4*UNIT_G["oeuf"]),("whey_protein",120),("fromage_blanc_0",500),("banane",300),("myrtilles",250),("beurre_cacahuete",60),("graines_chia",30),("miel",40)])
r("pancakes-proteines-a-congeler",8,20,35,[("flocons_avoine",400),("fromage_blanc_0",600),("oeuf",8*UNIT_G["oeuf"]),("whey_protein",150),("lait_demi",300),("banane",200),("levure",12),("huile_olive",20)])
r("pots-skyr-proteines-semaine",6,15,15,[("skyr_0",1200),("whey_protein",60),("flocons_avoine",200),("graines_chia",60),("lait_demi",400),("beurre_cacahuete",50),("fruits_rouges",480),("miel",50)])
r("bowl-cake-plaque-cacao-banane",8,12,40,[("flocons_avoine",400),("whey_protein",150),("cacao_poudre",40),("oeuf",6*UNIT_G["oeuf"]),("fromage_blanc_0",500),("lait_demi",350),("banane",300),("levure",12),("chocolat_noir_70",60),("beurre_cacahuete",60)])
r("veloute-lentilles-poulet-effiloche",8,20,60,[("poulet_grille",600),("lentilles_cuites",900),("carotte",400),("oignon",200),("celeri_branche",150),("concentre_tomate",60),("ail",15),("huile_olive",20),("epinards",200),("citron_jus",30)])
r("soupe-thai-poulet-crevettes-coco",6,20,45,[("poulet_grille",500),("crevettes",300),("lait_coco",300),("champignon",300),("poivron_rouge",300),("carotte",300),("oignon",150),("gingembre",25),("ail",15),("pate_curry",60),("sauce_nuoc_mam",40),("citron_vert",40),("coriandre",20),("huile_sesame",15)])
r("veloute-chou-fleur-jambon-skyr",6,15,45,[("chou_fleur",1200),("poireaux",400),("pomme_de_terre",400),("jambon_blanc",500),("skyr_0",400),("fromage_rape",80),("oignon",150),("ail",10),("moutarde",20),("huile_olive",15)])
r("minestrone-boeuf-haricots-rouges",8,25,60,[("boeuf_hache_5",700),("haricots_rouges",800),("sauce_tomate",700),("concentre_tomate",60),("carotte",300),("celeri_branche",200),("oignon",200),("courgette",300),("pates_cuites",400),("ail",15),("huile_olive",20),("parmesan",60)])
r("harira-proteinee-tofu-pois-chiches",8,20,55,[("pois_chiches_cuits",600),("lentilles_cuites",800),("tofu",600),("sauce_tomate",600),("concentre_tomate",60),("oignon",250),("carotte",300),("celeri_branche",200),("ail",15),("gingembre",20),("huile_olive",25),("coriandre",30),("citron_jus",40)])
r("chili-con-carne-geant-8-portions",8,20,80,[("boeuf_hache_5",1200),("haricots_rouges",800),("sauce_tomate",800),("concentre_tomate",120),("oignon",300),("poivron_rouge",400),("mais_conserve",200),("ail",20),("huile_olive",30),("harissa",30)])
r("poulet-teriyaki-plaque-riz",8,20,55,[("poulet_grille",1400),("riz_basmati_cuit",1200),("brocoli",600),("carotte",300),("edamame",300),("sauce_soja",150),("miel",80),("gingembre",20),("ail",20),("huile_sesame",20)])
r("tajine-poulet-pois-chiches",6,25,75,[("poulet_grille",1100),("pois_chiches_cuits",500),("couscous_cuit",700),("carotte",400),("courgette",400),("oignon",250),("concentre_tomate",80),("huile_olive",30),("citron_jus",60),("ail",15),("coriandre",15)])
r("bolognaise-allegee-boeuf-lentilles",8,25,85,[("boeuf_hache_5",1000),("lentilles_cuites",500),("pates_cuites",1200),("sauce_tomate",1000),("concentre_tomate",100),("champignon",400),("carotte",300),("oignon",250),("celeri_branche",200),("ail",20),("huile_olive",30),("parmesan",80)])
r("bibimbap-boeuf-en-bac",6,30,50,[("boeuf_hache_5",900),("oeuf",6*UNIT_G["oeuf"]),("riz_complet_cuit",1200),("epinards",400),("carotte",300),("champignon",300),("courgette",300),("sauce_soja",80),("sauce_sriracha",40),("huile_sesame",20),("ail",15),("gingembre",10)])

print(f"{'id':46} {'port':>4} {'masse':>6} {'g/port':>6} {'kcal':>6} {'P':>6} {'G':>6} {'L':>6} {'min/p':>6}")
for rid,p,a,t,ings in R:
    kc=pr=gl=li=mass=0.0
    for i,q in ings:
        if i not in ING: print("!! INCONNU", i, rid); continue
        k,P,G,L = ING[i]
        kc+=q*k/100; pr+=q*P/100; gl+=q*G/100; li+=q*L/100; mass+=q
    print(f"{rid:46} {p:4d} {mass:6.0f} {mass/p:6.0f} {kc/p:6.0f} {pr/p:6.1f} {gl/p:6.1f} {li/p:6.1f} {a/p:6.2f}")
