const createCard = (title, desc, imgUrl, price) => {
    
  const divEl = document.createElement("div");
  
  const h3El = document.createElement("h3");
  
  const parDescEl = document.createElement("p");
  
  const imgEl = document.createElement("img");
  
  const parPriceEl = document.createElement("p");
  
  
  divEl.classList.add("card");
  
  parPriceEl.classList.add("price");
  
  parDescEl.classList.add("description");
  
  
  imgEl.setAttribute("src", imgUrl);
  
  imgEl.setAttribute("alt", "img cosi");
  
  h3El.textContent = title;
  
  parDescEl.textContent = desc;
  
  parPriceEl.textContent = price;
  
  divEl.append(h3El, parDescEl, imgEl, parPriceEl);
  
  document.querySelector(".cards-wrapper").appendChild(divEl);
  
};

  const getAPIdata = async (URL, item = "") => {
    
    const res = await fetch(`${URL}${item}`);
  
    
    return await res.json();
  
  };


const deleteCard = (element) => {
  
  const wrapperSel = document.querySelector(".cards-wrapper");
  
  element.addEventListener("click", () => { 
  
    wrapperSel.removeChild(element);
       
  });  

};


//const formatMaxText = (text) => text.split(".")[0];

const formatMinText = (text) => text.split(" ").slice(0, 6).join(" ") + "...";

export { createCard, getAPIdata, deleteCard, formatMinText };