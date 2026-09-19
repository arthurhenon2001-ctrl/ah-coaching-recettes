ing={}
for l in open('ing.txt'):
    l=l.strip()
    if not l: continue
    p=l.split('|')
    ing[p[0]]=tuple(float(x) for x in p[1:])
lines=[l.rstrip('\n') for l in open('rec.txt') if l.strip()]
out=[]
for i in range(0,len(lines),2):
    head=lines[i].split('|'); rid=head[0]; portions=int(head[1]); water=float(head[2])
    items=[x.strip() for x in lines[i+1].split(';') if x.strip()]
    kc=p_=g_=l_=0.0; wt=0.0; unknown=[]
    prot_from=[]
    for it in items:
        name,q=it.rsplit(' ',1); q=float(q)
        if name not in ing: unknown.append(name); continue
        k,pr,gl,li=ing[name]
        kc+=k*q/100; p_+=pr*q/100; g_+=gl*q/100; l_+=li*q/100; wt+=q
        prot_from.append((pr*q/100,name))
    prot_from.sort(reverse=True)
    out.append((rid,portions,kc/portions,p_/portions,g_/portions,l_/portions,wt/portions,(wt+water)/portions,unknown,prot_from[:3],kc,wt))
print(f"{'id':46}{'por':>4}{'kcal':>7}{'P':>7}{'G':>7}{'L':>7}{'g/por':>7}{'g+eau':>7}  flags")
for r in out:
    rid,po,kc,p_,g_,l_,w1,w2,unk,pf,tk,tw=r
    fl=[]
    if unk: fl.append('INCONNU:'+','.join(unk))
    if p_<25: fl.append('P<25')
    if kc>900: fl.append('kcal>900')
    if kc<350: fl.append('kcal<350')
    if w2<250: fl.append('poids<250')
    if w2>700: fl.append('poids>700')
    print(f"{rid:46}{po:>4}{kc:7.0f}{p_:7.1f}{g_:7.1f}{l_:7.1f}{w1:7.0f}{w2:7.0f}  {' '.join(fl)}")
print()
for r in out:
    print(r[0], '| top P:', ', '.join(f"{n} {v:.0f}g" for v,n in r[9]))
