import { people, render } from "./character-list.js";
const chrName = document.querySelector("#name");
const chrUniverse = document.querySelector("#universe");
const addInput = document.querySelector("#addBTN");
const addCharacter = () => addInput.addEventListener("click", () =>{
    const nameInput = chrName.value;
    const universeInput = chrUniverse.value;
    const newCharacter = people.push(`${nameInput} - ${universeInput}`);   
    console.log(newCharacter)
    console.log(people);
    render();
    chrName.value ="";
    chrUniverse.value = "";
});  
export { addCharacter };
