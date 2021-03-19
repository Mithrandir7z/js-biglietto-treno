// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: 
// il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// chiedere con dei prompt numero km ed età
var chilometriViaggio = parseInt( prompt("Inserire i km totali" , "inserire:") );
var etaCliente = parseInt( prompt("Inserire la tua età" , "inserire:") );

// calcolare km * presso unitario (0.21€)
var prezzoUnitario = 0.21;
var totale = chilometriViaggio * prezzoUnitario;

// se è under applicare sconto 20% se è over 65 applicare sconto 40% altrimenti stampare il prezzo non scontato.
var scontoApplicato;
var prezzoFinale;

if ( etaCliente < 18 ) {
    scontoApplicato = totale * 20 / 100 ;
    //calcolo sconto minori 18
    prezzoFinale = totale - scontoApplicato;
} else if ( etaCliente > 65 ) {
    scontoApplicato = totale * 40 / 100;
    //calcolo sconto over 65
    prezzoFinale = totale - scontoApplicato;
} else {
    //calcolo senza sconto
    prezzoFinale = totale;
}

prezzoFinale = prezzoFinale.toFixed(2);
//stampa
document.getElementById("prezzo").innerHTML = "Il prezzo del biglietto è di €" + prezzoFinale;