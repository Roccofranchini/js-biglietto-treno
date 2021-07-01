/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


1- Creare le variabili km e years
2- chiedere numero di km e età del passeggero
3- creare una variabile fullprice sulla base dei km
4- creare una variabile saledprice data dal prezzo pieno meno lo sconto in base all'età
*/

// variabili utente

var km = prompt('quanti kilometri è lungo il tuo viaggio?');
var years = prompt('quanti anni hai?');
var fullPrice = parseInt(km) * 0.21;
var risultato = document.getElementById('risultato');

console.log(km);
console.log(years);
console.log(fullPrice);

// sconti

var minorSale = fullPrice * 20 / 100;
var seniorSale = fullPrice * 40 / 100;

console.log(minorSale);
console.log(seniorSale);

// prezzo scontato

var finalPrice;

if (years < 18) {
    finalPrice = fullPrice - minorSale;
} else if (years > 60) {
    finalPrice = fullPrice - seniorSale;
} else {
    finalPrice = fullPrice;
}

console.log(finalPrice);

// trasforma il costo risultante in euro

var euroCost = parseFloat(finalPrice).toFixed(2);

console.log(euroCost)

// modifica l'HTML

risultato.innerHTML = 'Il prezzo del tuo biglietto di ' + km + 'km ' + 'è di ' + euroCost + ' €';