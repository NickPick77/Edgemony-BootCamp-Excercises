
const itemList = document.querySelector("#moviesList");
const button = document.querySelector("#search");
const input = document.querySelector("#srcInput");

const movies = [
    "Deadpool",
    "Dune",
    "Grosso guaio a Chinatown",
    "V per vendetta",
    "Pulp Fiction",
    "Signore degli anelli",
    "Scarface",
    "Sharknado (1,2,3,4,5 e 6)",
    "Blade Runner",
  ];


const render = (value = "") => {
    const results = movies.filter((movie) =>
        movie.toLowerCase().includes(value.toLowerCase())
        );
    itemList.innerHTML = results.map((movie) => `<li> ${movie}</li>`).join("");
};

button.addEventListener("click", () =>{
    const value = input.value;
    render(value);
    });

input.addEventListener("keyup", () => {
    const value = input.value;
    render(value);
    });

render();