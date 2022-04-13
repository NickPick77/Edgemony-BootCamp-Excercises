const sum = (a, b) => {
     
    //const result = a+b;
    
    //console.log(a+b);
    
    return a+b;

};

const createButton = () => {    
    
    const divEl = document.createElement("div");
    
    const buttonEl = document.createElement("button");
    
    buttonEl.textContent = "Mostra subito";
    
    divEl.appendChild(buttonEl);
    
    document.body.appendChild(divEl);

};

createButton();

const a = parseInt(prompt("primo addendo"));

const b = parseInt(prompt("secondo addendo"));


let promise = new Promise(function(resolve, reject) {

    const sumTimeout = setTimeout( () => resolve(sum(a, b)), 10000);

    const stop = () => {

        reject(clearTimeout(sumTimeout));

    }

    document.querySelector("button").addEventListener("click", stop)
    
}
    
);
        
promise.then(

    function(result) {console.log("ecco il risultato", result)},

    function(error) {console.log("hai fretta? Ecco il risultato", sum(a, b)) }

)        


