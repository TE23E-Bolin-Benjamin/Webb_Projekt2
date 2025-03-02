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

// En funktion för att hålla varukorgen uppdaterad
function uppdateraVarukorg() {
    let varukorgElement = document.getElementById("varukorg");

    // Loopar igenom varukorg-elementet tills att alla element är borttagna från variabeln
    while (varukorgElement.firstChild) {
        varukorgElement.removeChild(varukorgElement.firstChild);
    }

    // Om varukorgen är tillfälligt tom skrivs texten "Varukorgen är tom"
    if (varukorg.length === 0) {
        varukorgElement.innerHTML = "<li>Varukorgen är tom</li>";
    } 
    else {
        // Loopar igenom varukorgen och lägger till produkten
        for (let i = 0; i < varukorg.length; i++) {
            let produkt = varukorg[i].produkt;
            let pris = varukorg[i].pris;

            // skapar en ett li-element som sätter ihop namnet och priset på produkten i en string
            let produktElement = document.createElement("li");
            let produktText = document.createTextNode(produkt + " " + pris.toFixed() + " kr");
            produktElement.appendChild(produktText);

            // Skapar en ta-bort-knapp för produkten
            let taBortKnapp = document.createElement("button");
            taBortKnapp.innerHTML = "Ta bort";
            taBortKnapp.onclick = function() {
                taBortFrånVarukorg(produkt, pris);
            }
            produktElement.appendChild(taBortKnapp);

            // Lägger till den nya produkten i varukorgen
            varukorgElement.appendChild(produktElement);
        }
    }

    // Uppdaterar den totala summan av produkterna i varukorgen
    summa = beräknaSumman();
    document.getElementById("summa").innerHTML = summa.toFixed();

    // Sparar varukorgen i localstorage
    localStorage.setItem("varukorg", JSON.stringify(varukorg));
}

// En funktion som beräknar totala summan av produkterna i varukorgen
function beräknaSumman() {
    let total = 0;
    for (let i = 0; i < varukorg.length; i++) {
        total += varukorg[i].pris;
    }
    return total;
}

// En funtion för att betala
function betala() {
    // Nollställer varukorgen
    varukorg = [];
    uppdateraVarukorg();
}

