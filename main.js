import { OBJLISTA, SZOVEGLISTA, SZAMOK } from "./adat.js";
import {rendszerSzoveg, szamok, veletlenSorrend, objRendezesKorszeruen, objRendezesNevszeruen, objRendezesBarhogyan, otvenEvAlatti} from "./adatkezeles.js";
$(function () {
    const OBJ = {
        nev: "Jenő",
        kor: 23,

    };
    console.log(OBJ);
    let jsonOBJ = JSON.stringify(OBJ);
    console.log(jsonOBJ);
    console.log(OBJLISTA[1].csaladiAllapot);
    
    OBJLISTA.sort();
    rendszerSzoveg(SZOVEGLISTA);
    szamok(SZAMOK);
    veletlenSorrend(SZAMOK);
    objRendezesKorszeruen(OBJLISTA);
    objRendezesNevszeruen(OBJLISTA);
    objRendezesBarhogyan(OBJLISTA, "nev");

    const SZURTLISTA = otvenEvAlatti(OBJLISTA);
    console.log(SZURTLISTA);
});


