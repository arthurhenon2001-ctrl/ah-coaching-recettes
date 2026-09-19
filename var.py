ing={}
for l in open('ing.txt'):
    p=l.strip().split('|')
    if len(p)>1: ing[p[0]]=tuple(float(x) for x in p[1:])
def calc(label,portions,items,water=0):
    kc=p_=g_=l_=w=0
    for n,q in items:
        k,pr,gl,li=ing[n]; kc+=k*q/100; p_+=pr*q/100; g_+=gl*q/100; l_+=li*q/100; w+=q
    print(f"{label:52} {portions}p  {kc/portions:6.0f}kcal {p_/portions:5.1f}P {g_/portions:5.1f}G {l_/portions:5.1f}L  {(w+water)/portions:5.0f}g/port  total {w:.0f}g")

# A grande salade : version allegee compatible tag Perte de poids
calc("salade boulgour CORRIGEE",6,[("poulet_grille",800),("boulgour_cuit",600),("pois_chiches_cuits",480),
 ("poivron_rouge",300),("carotte",250),("oignon",120),("sauce_tahini",60),("citron_jus",60),
 ("huile_olive",25),("ail",10),("feta",120),("coriandre",20)])
# B tajine : poulet 1100 -> 900, couscous 700 -> 600
calc("tajine CORRIGE (poulet 900, couscous 600)",6,[("poulet_grille",900),("pois_chiches_cuits",500),
 ("couscous_cuit",600),("carotte",400),("courgette",400),("oignon",250),("concentre_tomate",80),
 ("huile_olive",30),("citron_jus",60),("ail",15),("coriandre",15)],400)
# C veloute lentilles : monter au-dessus de 350 kcal
calc("veloute lentilles CORRIGE (poulet 800, lent 1100, eau 1.7L)",8,[("poulet_grille",800),("lentilles_cuites",1100),
 ("carotte",400),("oignon",200),("celeri_branche",150),("concentre_tomate",60),("ail",15),
 ("huile_olive",30),("epinards",200),("citron_jus",30)],1700)
# D muffins : appareil reduit pour tenir dans 24 empreintes standard
calc("muffins CORRIGES (12 oeufs, 24 empreintes)",8,[("oeuf",600),("blanc_oeuf",300),("jambon_blanc",250),
 ("fromage_rape",120),("epinards",150),("poivron_rouge",150),("oignon",80),("creme_fraiche_legere",80),("huile_olive",15)])
calc("muffins ALT (18 oeufs, 6 portions de 4 muffins)",6,[("oeuf",900),("blanc_oeuf",400),("jambon_blanc",300),
 ("fromage_rape",150),("epinards",200),("poivron_rouge",200),("oignon",100),("creme_fraiche_legere",100),("huile_olive",15)])
# G moussaka : courgette 500 -> 350
calc("moussaka CORRIGEE (courgette 350)",6,[("lentilles_cuites",1200),("aubergine",900),("courgette",350),
 ("oignon",250),("ail",20),("sauce_tomate",500),("concentre_tomate",60),("yaourt_grec",400),
 ("oeuf",150),("feta",150),("fromage_rape",60),("huile_olive",30)])
# H veloute chou-fleur : 1 L de bouillon au lieu de 1,5 L
calc("veloute chou-fleur CORRIGE (1 L bouillon)",6,[("chou_fleur",1200),("poireaux",400),("pomme_de_terre",400),
 ("jambon_blanc",500),("skyr_0",400),("fromage_rape",80),("oignon",150),("ail",10),("moutarde",20),("huile_olive",15)],1000)
# bowl cake : verif epaisseur
tot=400+150+40+300+500+350+300+12+60+60
print("bowl cake: masse totale",tot,"g -> plaque 30x20 =",round(tot/600,1),"cm d'epaisseur ; 30x40 =",round(tot/1200,1),"cm")
print("porridge: masse totale",400+900+200+120+500+300+250+60+30+40,"g -> plat 30x20 =",round(2800/600,1),"cm")
print("pots skyr: masse totale",1200+60+200+60+400+50+480+50,"g -> ",round(2500/6),"g par bocal (bocaux annonces 400 ml)")
print("muffins d'origine:",900+400+300+150+200+200+100+100+15,"g pour 24 empreintes =",round(2365/24),"g par empreinte")
