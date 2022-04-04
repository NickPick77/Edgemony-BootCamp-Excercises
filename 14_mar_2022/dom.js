//console.log ("Il file è caricato");

//camelCase
//kebab-case

//document.querySelector -> seleziona un elemento nella pagina utilizzando la sintassi dei selettori CSS
/*
document.querySelector("h1").style.color = "red";

document.querySelector("h1").innerHTML = "Non mi sento più quello di prima";
*/
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("button").addEventListener("click", () => {
        console.log("mi hai cliccato");
    
        const title = document.querySelector("h1");
        title.classList.toggle("change");
        //title.style.color = "red";
        
        //title.innerHTML = "Non mi sento più quello di prima";
    
    });
});


