const query = (selector) => document.querySelector(selector);
const create = (create) => document.createElement(create);
const getMoviesData = async () => {
        const res = await fetch("https://edgemony-backend.herokuapp.com/movies", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
        if (res.status >= 200 && res.status <= 299) {
        return await res.json();
      } else {
        // Redirect
        // window.location.href = "/";
    
        const h1El = create("h1");
        h1El.textContent = "404 pagina non trovata";
    
        document.body.append(h1El);
    
        throw new Error("La pagina non è stata trovata");
      }
    };
const createCard = (title, desc, imgUrl, genres, year, id) => {
    const imgEl = create("img");
            imgEl.setAttribute("src", imgUrl);
            imgEl.setAttribute("alt", "Movie poster");
    const spanEl = create("span");
            spanEl.classList.add("material-icons-outlined");
            spanEl.textContent = "delete_forever";
    const divEl = create("div");
            divEl.classList.add("card");
    const h3El = create("h3");
            h3El.textContent = title;
    const divbckEl = create("div")
            divbckEl.classList.add("bckground");
    const parDescEl = create("p");
            parDescEl.classList.add("description");
            parDescEl.textContent = desc;   
    const parGenEl = create("p");
            parGenEl.classList.add("genres");
            parGenEl.textContent = genres;
    const parYearEl = create("p");
            parYearEl.classList.add("year"); 
            parYearEl.textContent = year;

    divbckEl.append(h3El,parDescEl, parGenEl, parYearEl)
    divEl.append(imgEl, spanEl, divbckEl);
    query(".movie-wrapper").appendChild(divEl);
    
    //FUNCTION IN FUNCTION TO REMOVE MOVIE FROM SERVER
    spanEl.addEventListener("click", () => {
        fetch(`https://edgemony-backend.herokuapp.com/movies/${id}`, {
          method: "DELETE",
          headers: {
            'Content-Type': "application/json"
          }
        }).then(() => {
          location.reload()
        })
     });
  };
// RENDER FUNCTION FOR MOVIE ADDING FORM
const createAddForm = () => {
    const formEl = create("form");
    //TITLE INPUT
    const titleLabel = create("label");
            titleLabel.setAttribute("for", "title");
            titleLabel.textContent = "Inserisci il titolo del film";
    const titleInput = create("input");
            titleInput.setAttribute("id", "title");
            titleInput.setAttribute("name", "title");
            titleInput.setAttribute("placeholder", "Es: Deadpool");
    //POSTER INPUT
    const posterLabel = create("label");
            posterLabel.setAttribute("for", "poster");
            posterLabel.textContent = "Inserisci l'immagine di copertina del film";
    const posterInput = create("input");
            posterInput.setAttribute("id", "poster");
            posterInput.setAttribute("name", "poster");
            posterInput.setAttribute("placeholder", "Es: https://../.jpg");
    //DESCRIPTION INPUT
    const descLabel = create("label");
            descLabel.setAttribute("for", "description");
            descLabel.textContent = "Inserisci l'anno di uscita del film";
    const descInput = create("input");
            descInput.setAttribute("id", "description");
            descInput.setAttribute("name", "description");
            descInput.setAttribute("placeholder", "Es: una piccola descrizione del film");
    //GENRES INPUT
    //CHECK BOX INPUT FOR GENRES
    const genresDiv = create("div");
            genresDiv.classList.add("genr-check-container")        
    const genresLegend = create("legend");
            genresLegend.textContent = "Inserisci il genere del film";
    //action box
    const actionLabel = create("label");
            actionLabel.setAttribute("for", "action");
            actionLabel.classList.add("check-label");
            actionLabel.textContent = "Azione";
    const actionCheckbox = create("input");
            actionCheckbox.setAttribute("id", "action");
            actionCheckbox.setAttribute("name", "action");
            actionCheckbox.setAttribute("type", "checkbox");
            actionCheckbox.setAttribute("value", "Azione");
    //comic box
    const comicLabel = create("label");
            comicLabel.setAttribute("for", "comic");
            comicLabel.classList.add("check-label");
            comicLabel.textContent = "Comico";
    const comicCheckbox = create("input");
            comicCheckbox.setAttribute("id", "comic");
            comicCheckbox.setAttribute("name", "comic");
            comicCheckbox.setAttribute("type", "checkbox");
            comicCheckbox.setAttribute("value", "Comico");
    //adventure box
    const adventureLabel = create("label");
            adventureLabel.setAttribute("for", "adventure");
            adventureLabel.classList.add("check-label");
            adventureLabel.textContent = "Avventura";
    const adventureCheckbox = create("input");
            adventureCheckbox.setAttribute("id", "adventure");
            adventureCheckbox.setAttribute("name", "adventure");
            adventureCheckbox.setAttribute("type", "checkbox");
            adventureCheckbox.setAttribute("value", "Avventura");
    // sci-fi
    const scifiLabel = create("label");
            scifiLabel.setAttribute("for", "scifi");
            scifiLabel.classList.add("check-label")
            scifiLabel.textContent = "Sci-fi";
    const scifiCheckbox = create("input");
            scifiCheckbox.setAttribute("id", "scifi");
            scifiCheckbox.setAttribute("name", "scifi");
            scifiCheckbox.setAttribute("type", "checkbox");
            scifiCheckbox.setAttribute("value", "Sci-fi");
    //END CHECKBOX STRUCTURE
    //YEAR INPUT
    const yearLabel = create("label");
            yearLabel.setAttribute("for", "year");
            yearLabel.textContent = "Inserisci l'anno di uscita del film";
    const yearInput = create("input");
            yearInput.setAttribute("id", "year");
            yearInput.setAttribute("name", "year");
            yearInput.setAttribute("placeholder", "Es: 2005");
    //SUBMIT INPUT
    const addInputSubmit = create("input");
            addInputSubmit.setAttribute("id", "addSubmit")
            addInputSubmit.setAttribute("type", "submit");
            addInputSubmit.setAttribute("value", "Aggiungi film");
    
    //APPEND ELEMENT ON HTML
    genresDiv.append(genresLegend, comicLabel, comicCheckbox,actionLabel, actionCheckbox, adventureLabel, adventureCheckbox, scifiLabel, scifiCheckbox,);
    formEl.append(titleLabel, titleInput, posterLabel, posterInput, descLabel, descInput, genresDiv, yearLabel, yearInput, addInputSubmit);
    query(".add-film-container").appendChild(formEl);
    
    //FUNCTION IN FUNCTION TO "POST" THE MOVIE ON SERVER
    addInputSubmit.addEventListener("click", (event) => {
        event.preventDefault();
        let genresCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        const checkedGenres = [];
        genresCheckbox.forEach((e) => checkedGenres.push(e.value));
        console.log(genresCheckbox);
        fetch("https://edgemony-backend.herokuapp.com/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            description: descInput.value,
            genres: checkedGenres,
            poster: posterInput.value,
            title: titleInput.value,
            year: yearInput.value,
            }),
        })
        .then((data) => {
                location.reload();
        });
    });
    
}


const createModal = (title, desc, imgUrl) => {
        
        const divEl = create("div")
                
                divEl.classList.add("modal");
        
        const titleEl = create("h1");
                
                titleEl.textContent = title
        
        const descEl = create("p");
                
                descEl.textContent = desc
        
        const imgEl = create("img");
                
                imgEl.setAttribute("src", imgUrl);
                
                imgEl.setAttribute("alt", "Movie poster")
        
        const overlayDiv = create("div");
                
                overlayDiv.classList.add("overlay");
        
        const closeBtnSpan = create("span");
                
                closeBtnSpan.classList.add("material-icons-outlined")
                
                closeBtnSpan.id = "closeModalBtn"
                
                closeBtnSpan.textContent = "close"
        
        divEl.append(imgEl, titleEl, descEl, closeBtnSpan)       
        
        query(".modal-wrapper").append(divEl, overlayDiv);    
}

const openModal = () => {
        
                const modalWrapperEl = query(".modal-wrapper");
                
                        modalWrapperEl.classList.toggle("show")

}
const closeModalOnCloseBtn = () => {
        
        query("#closeModalBtn").addEventListener("click", () =>{
        
                const modalWrapperEl = query(".modal-wrapper");
        
                        modalWrapperEl.classList.toggle("show");
        
        const overlay = query(".overlay");
        
        const modalEl = query(".modal");        
       
        modalWrapperEl.removeChild(modalEl);
       
        modalWrapperEl.removeChild(overlay);
       
        })

}
const closeModalOnOverlay = () => {
        query(".overlay").addEventListener("click", () =>{

                const modalWrapperEl = query(".modal-wrapper");
                
                        modalWrapperEl.classList.toggle("show");
        
                const overlay = query(".overlay");
       
                const modalEl = query(".modal");        
       
                modalWrapperEl.removeChild(modalEl);
       
                modalWrapperEl.removeChild(overlay);
        
        })
}

export { getMoviesData, createCard, createAddForm, createModal, openModal, closeModalOnCloseBtn, closeModalOnOverlay };