const HTMLrend = () => {
    const SectionEl = document.createElement("main");
        SectionEl.setAttribute("class", "section")
    const addDivEl = document.createElement("div");
        addDivEl.classList.add("add-contact-container");
    const srcDivEl = document.createElement("div");
        srcDivEl.classList.add("src-contact-container")
    const listDivEl = document.createElement("div");
        listDivEl.classList.add("contact-list-container")
    SectionEl.append(addDivEl, srcDivEl, listDivEl);
    document.body.appendChild(SectionEl);
    //addDivEl structure
    const labelNameEl = document.createElement("label");
        labelNameEl.classList.add("name-label");
        labelNameEl.htmlFor = ("name");
        labelNameEl.textContent = "Nome";
    const inputNameEl = document.createElement("input");
        inputNameEl.setAttribute("name", "name");
        inputNameEl.setAttribute("type", "text");
        inputNameEl.setAttribute("id", "name");
    const labelSurnameEl = document.createElement("label");
        labelSurnameEl.classList.add("surname-label");
        labelSurnameEl.htmlFor = ("surname");
        labelSurnameEl.textContent = "Cognome";
    const inputSurnameEl = document.createElement("input");
        inputSurnameEl.setAttribute("name", "surname");
        inputSurnameEl.setAttribute("type", "text");
        inputSurnameEl.setAttribute("id", "surname");
    const labelNumberEl = document.createElement("label");
        labelNumberEl.classList.add("number-label");
        labelNumberEl.htmlFor = ("number");
        labelNumberEl.textContent = "Numero di Telefono";
    const inputNumberEl = document.createElement("input");
        inputNumberEl.setAttribute("name", "number");
        inputNumberEl.setAttribute("type", "text");
        inputNumberEl.setAttribute("id", "number");
    const addButtonEl = document.createElement("button");
        addButtonEl.textContent = "Aggiungi Contatto";
        addButtonEl.setAttribute("id", "addBtn")
    addDivEl.append(labelNameEl, inputNameEl, labelSurnameEl, inputSurnameEl, labelNumberEl, inputNumberEl, addButtonEl)

    //srcDivEl structure
    const labelSrcContactEl = document.createElement("label");
        labelSrcContactEl.htmlFor = ("srcInput");
        labelSrcContactEl.textContent = "Cerca tra i contatti";
    const inputSrcContactEl = document.createElement("input");
        inputSrcContactEl.setAttribute("name", "srcInput");
        inputSrcContactEl.setAttribute("type", "text");
        inputSrcContactEl.setAttribute("id", "srcInput");
        inputSrcContactEl.setAttribute("placeholder", "Es: salvo");
    const srcButtonEl = document.createElement("button");
        srcButtonEl.textContent = "Cerca";
        srcButtonEl.setAttribute("class", "srcBtn");
    srcDivEl.append(labelSrcContactEl, inputSrcContactEl, srcButtonEl);
    //listDivEl structure
    const ulEl = document.createElement("ul");
        ulEl.setAttribute("class", "card-wrapper")
    listDivEl.append(ulEl);
};

export { HTMLrend };