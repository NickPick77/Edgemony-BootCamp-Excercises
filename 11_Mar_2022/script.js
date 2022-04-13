/*  
  ESERCIZI SULLO SCOPE
  ATTENZIONE: provare a prima dare prima la risposta e solo dopo testare il codice!!
  Giustificatene il motivo con un commento, subito accanto a 'RISPOSTA:'.
*/

// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual'è il risultato dei console.log?

// RISPOSTA: 
/*
  Lo scopo dello snippet è stampare la variabile "PI" su console.log. 
  Il primo console log stampa la variabile con scope globale, il secondo invece ha uno scope locale riferito al ciclo if. 
  All'interno del ciclo, la variabile verrà stampa solo se la condizione di "PI >= 3" viene rispettata.
*/

const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  
  console.log(PI);

};

// Es. 2: Dato il seguente, qual'è il risultato dei console.log?

// RISPOSTA:
/* 
  Il primo stamperà la variabile "favColour" essendo if una condizione sempre vera in questo caso. 
  Il secondo stamperà "monthsInAYear".
  le variabili dichiarate con var però ignorano lo scope locale essendo lette in tutti il codice

*/

var favColour = "violet";

let monthsInAYear = 12;

if (true) {
  
  var favColour = "violet";
  
  console.log("Il mio colore preferito è:", favColour);

}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");



// Es. 3: Dato il seguente, qual'è il risultato dei console.log?

// RISPOSTA:
/*
  la funzione stamperà le variabili "theSecond e moreIngredients con una virgola in mezzo".
  Il ciclo if invece non stampa niente poichè la variabile "theSecond" ha scope locale all'interno della funzione "makePizza(moreIngredients)" e non del ciclo.
  Risultando in errore per la variabile non dichiarata.
*/

function makePizza(moreIngredients) {
  
  let theSecond = "Sugo di pomodoro freschissimo";
  
  // { ... }
  
  console.log(theSecond + ", " + moreIngredients);
  
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)

}

if (true) {
  
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  
  console.log("Il secondo ingrediente necessario: ", theSecond);

}
