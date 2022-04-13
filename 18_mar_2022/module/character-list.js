const charactersList = document.querySelector("#characterContainer");
const people = [
    "Luke Skywalker - Star Wars",
    "Jack Burton - Grosso guaio a Chinatown",
    "Jhonny Silverhad - Cyberpunk 2077",
    "Bilbo Baggins - Il signore degli anelli",
    "Rick Sanchez - Rick & Morty",
    "Master Chief - Halo",
    "Eleven - Stranger Things",
  ];
const render = () => {  
  charactersList.innerHTML = people.map((character) => character.split(" - "))
                                  .map((character) => `<li id="card">
                                                          <h2>${character[0]}</h2> 
                                                          <h3>${character[1]}</h3>
                                                        </li>`)
                                   .join("");
  //console.log(people, peopleID, peopleUniverse);                      
}; 
export { render, people, charactersList };