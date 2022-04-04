import { people, charactersList} from "./character-list.js";
const srcInput = document.querySelector("#srcInput-box");
const srcCharacters = document.querySelector("#srcBTN");
const search = () => srcCharacters.addEventListener("click", () => {
    const srcValue = srcInput.value;
    const list = people.filter((character) => character.toLowerCase().includes(srcValue.toLowerCase())) 
    charactersList.innerHTML  = list.map((character) => `<li id="card">${character}</li>`)
                                    .join(""); 
    console.log(list);
    });
const autoSrc = () => srcInput.addEventListener("keyup", () => {
    const srcValue = srcInput.value;
    const list = people.filter((character) => character.toLowerCase().includes(srcValue.toLowerCase())) 
    charactersList.innerHTML  = list.map((character) => `<li id="card">${character}</li>`)
                                    .join("");
    console.log(list);
});
export { search, autoSrc };