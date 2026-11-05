let risposta = document.getElementById("risposta");
let situazionePeso = document.getElementById("situazione-peso");

document.getElementById("calcola").addEventListener("click", () => {
    let altezza = document.getElementById("altezza").value;
    let massa = document.getElementById("massa").value;
    calcolaImc(altezza, massa);
})

function calcolaImc(altezza, massa) {
    // verifichiamo i parametri della funzione prima di fare il calcolo
    if (altezza < 100) {
        risposta.textContent = "L'altezza è eccessivamente bassa.";
        return;
    }
    if (altezza > 250) {
        risposta.textContent = "L'altezza è eccessivamente alta.";
        return;
    }
    if (massa < 30) {
        risposta.textContent = "La massa è eccessivamente bassa.";
        return;
    }
    if (massa > 300) {
        risposta.textContent = "La massa è eccessivamente alta.";
        return;
    }

    // applicazione della formula massa/altezza^2
    let altezzam = altezza / 100; // l'altezza viene richiesta in cm ma per il calcolo è necessario che sia in metri
    let calcolo = massa / (altezzam ** 2);
    let calcoloFormattato = calcolo.toFixed(2); // serve a far vedere solo 2 cifre dopo la virgola
    risposta.textContent = `Il risultato è ${calcoloFormattato}`;
    situazionePeso.textContent = `Situazione peso - ${didascalia(calcolo)}`;
    return;
}

function didascalia(n) {
    if (n <= 16) {
        return "Grave magrezza (inedia)";
    }
    if (n > 16 && n <= 17.50) {
        return "Sottopeso";
    }
    if (n > 17.50 && n <= 18.50) {
        return "Leggermente sottopeso";
    }
    if (n > 18.50 && n <= 25) {
        return "Regolare";
    }
    if (n > 25 && n <= 30) {
        return "Sovrappeso";
    }
    if (n > 30 && n <= 35) {
        return "Obesità di I classe (moderata)";
    }
    if (n > 35 && n <= 40) {
        return "Obesità di II classe (grave)";
    }
    if (n > 40) {
        return "Obesità di III classe (gravissima)";
    }
}