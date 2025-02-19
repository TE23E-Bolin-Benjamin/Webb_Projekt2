// En array för alla produkter i varukorgen
let varukorg = [];

// Summan av alla produkter i varukorgen
let summa = 0;

// En funktion som lägger till produkter i varukorgen
function läggTillIVarukorg(produkt, pris) {
    varukorg.push({ produkt: produkt, pris: pris });
    uppdateraVarukorg();
}

// En funktion för att ta bort produkter från varukorgen
function taBortFrånVarukorg(produkt, pris) {
    // Loopar igenom varukorgen för att hitta produkten
    for (let i = 0; i < varukorg.length; i++) {
        if (varukorg[i].produkt === produkt && varukorg[i].pris === pris) {

            // Tar bort produkten från varukorgs array:n
            varukorg.splice(i, 1);
            uppdateraVarukorg();
            break;
        }
    }
}