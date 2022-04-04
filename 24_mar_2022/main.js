import { getMoviesData, createCard, createAddForm, createModal, openModal, closeModalOnCloseBtn, closeModalOnOverlay } from "./utils.js";
createAddForm();


const formatMinText = (text) => text.split(" ").slice(0, 5).join(" ") + "...";
//const formatTitleText = (text) => text.split("").slice(0, 25).join(" ") + "...";
//const format = (text) => text.toString().split(",").join(",");

let movieValues = [];

getMoviesData().then((resultAPI) => {
    movieValues = resultAPI;
    resultAPI.map((movie) => {
        createCard(
            movie.title,
            formatMinText(movie.description),
            movie.poster,
            movie.genres,
            movie.year,
            movie.id
        )
    });  
    }).then(  () => {
      const cardEls = document.querySelectorAll(".card");
      cardEls.forEach((card, i) => {
        const cardValue = movieValues[i];
        card.addEventListener("click", () => {
        createModal(cardValue.title, cardValue.description, cardValue.poster);
        openModal();
        closeModalOnCloseBtn();
        closeModalOnOverlay();
        //document.querySelector(".overlay").addDinamicEventListener("click", () => closeModal() )
        });
         
      });
      
      
    });

      


