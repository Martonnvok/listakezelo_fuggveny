export function rendszerSzoveg(list) {
    list.sort();
    console.log(list);
}

export function szamok(list) {
    list.sort(function(a,b){
        return a-b
        console.log(a,b,a-b);
    });
    console.log(list);
}

export function veletlenSorrend(list){
    list.sort(function(a,b){
        return Math.random()-0.5
    });
}

export function objRendezesKorszeruen(list) {
    list.sort(function(a,b){
        console.log(a,b, a.kor - b.kor);
        return a.kor - b.kor;
    });
}

export function objRendezesNevszeruen(list) {
    list.sort(function(a,b){
        let e =-1;

        console.log(a,b, a.nev < b.nev);
        if (a.nev < b.nev) {
            e =-1;
        }
        return e;
    });
}

export function objRendezesBarhogyan(list, kulcs) {
    list.sort(function(a,b){
        let e =1;

        console.log(a,b, a[kulcs]< b[kulcs]);
        if (a[kulcs] < b[kulcs]) {
            e =1;
        }
        return e;
    });
}

/*Szűrések*/

export function otvenEvAlatti(list){
    let szurtlista = list.filter(function (elem) {
        console.log(elem)

        return elem.kor <= 50
    })
    console.log(szurtlista);
    return szurtlista

}

export function nevSzerint(list, felt, kulcs){
    let szurtlista = list.filter(function (elem) {
        

        return elem[kulcs].includes(felt);
    })
    console.log(szurtlista);
    return szurtlista

}