/* VERSIONE BASE
//ARRAY
let nInput =  [3, 5, 10, 2, 8];
*/
let sum = 0;
/*
//CICLO SOMMA ELEMENTI ARRAY nINPUT
for (let i=0; i < nInput.length; i++) {
    sum += nInput[i];  
}

//MEDIA nINPUT
let media = sum / nInput.length ;

nInput.push(media)

console.log("la media è:", media)
alert( "la media è : " + media);
*/

/*USER INPUT*/

let nInput = [];

//CICLO MEDIA USER nINPUT
for (i=0; i < 4; i++)
{
    nInput.push(+prompt("Digita un numero" ))
    sum+= nInput[i];
}

// LOG nINPUT, MEDIA
console.log(nInput)
let media = sum / nInput.length ;
console.log("la media è:", media);

//OUTPUT

alert( "la media è : " + media);