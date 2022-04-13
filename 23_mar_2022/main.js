import { createCard, getAPIdata, deleteCard, formatMinText } from "./utils.js";

getAPIdata("https://fakestoreapi.com/products").then((data) => {
  
  data.map((product) => {
  
    createCard(
  
      formatMinText(product.title),
  
      formatMinText(product.description),
  
      product.image,
  
      "€ " + product.price 
  
    )})

    const cardSelector = document.querySelectorAll(".card")

    cardSelector.forEach((card) => deleteCard(card));

});





//export { createCard, getAPIdata, formatMaxText, formatMinText };
