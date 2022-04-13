/*let firstFactor = parseInt(prompt("Inserisci il primo numero"));
let operationChoice = prompt("Quale operazione vuoi svolgere? Inserisci '+ - / *'");
let secondFactor = parseInt(prompt("Inserisci il secondo numero"));

//IF ELSE
/*
if (operationChoice == "+") {
    alert(firstFactor + secondFactor);
}
else if(operationChoice == "-"){
    alert(firstFactor - secondFactor);

}
else if(operationChoice == "/" ){
    alert(firstFactor / secondFactor);

}
else if(operationChoice == "*"){
    alert(firstFactor * secondFactor);

}
else{
    alert ("qualcosa è andato storto... o forse sei tu")
}
*/

//SWITCH
/*switch (operationChoice){
    case "+":
        alert(firstFactor + secondFactor)
        break;
    case "-":
        alert(firstFactor - secondFactor)
        break;
    case "*":
        alert(firstFactor * secondFactor)
        break;
    case "/":
        alert(firstFactor / secondFactor)
        break;
    default:
        alert("qualcosa è andato storto... o forse sei tu")
    
}*/
//window.location.href = "/"
/*function calculator(){
    if (operationChoice == "+") {
        Result = (firstFactor + secondFactor);
    }
    else if(operationChoice == "-"){
        Result = (firstFactor - secondFactor);

    }
    else if(operationChoice == "/" ){
        Result = (firstFactor / secondFactor);

    }
    else if(operationChoice == "*"){
        Result = (firstFactor * secondFactor);

    }
    else{
        Result = ("qualcosa è andato storto... o forse sei tu")
    }
    
    return (Result);
    
}
let firstFactor = parseInt(prompt("Inserisci il primo numero"));
 prompt("Quale operazione vuoi svolgere? Inserisci '+ - / *'");
let secondFactor = parseInt(prompt("Inserisci il secondo numero"));

alert(calculator());*/
/*
let def =  parseInt ("0"); //Display default value
let total = parseInt(0); //memory total of math result
let operationChoice = null; //how going the operator choised
const DisplayRender = document.querySelector(".display");

document.querySelector(".calcButton").addEventListener("click",function(event){

    btnClick(event.target.innerHTML);
});

function btnClick(value){
    if(isNaN(parseFloat(value))){
        LookToSymbol(value);
    }else{
        LookToNumber(value);
    }
    RendToScreen();
};

function LookToSymbol(value){
    switch (value){
        case "AC":
            def = "0";
            total = 0;
            operationChoice = null;
            break;
        case "=":
            if(operationChoice == null){ //this would mean that there is nothing to be calculated yet
                return;
            }
            Operation(def);
            def = "" + total;
            operationChoice = null;
            total = 0;
            break;
        case "BK":
            if(def.length == 1){ //if the screen is any single number, always turn it to 0 when deleting
                def = "0";
            }
            else{
                def = def.substring(0, def.length-1); //delete the numbers one by one
            }
            break;
        case ".":
                def = def + "." //add a dot to float operation
            break;   
        default:
            Calculating(value);
            break;
    }
}

function LookToNumber(value){
    if(def === "0"){
        def = value;
    }else{
        def += value;
    }
};

function Calculating(value){
    const math = def;
    
    if (total === 0){
        total = math;
    }else{
        Operation(math);
    }

    operationChoice = value;

    def = "0";
}

function Operation(math){
    if(operationChoice === "+"){
        total += math;
    }else if(operationChoice === "-"){
        total -= math;
    }else if(operationChoice === "X"){
        total *= math;
    }else{
        total /= math;
    }
    return total;
}


function RendToScreen(){
    DisplayRender.value = def;
};

*/
const num = 0;
const display = document.querySelector(".calcButton");


    