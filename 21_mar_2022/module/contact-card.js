//import { Contacts } from "./contacts.js";

//CREATE CONTACT CARD
const contactCard = () =>{
    const ulEl = document.querySelector("ul");
    ulEl.innerHTML = Contacts.map((contact) => ` <li class="card">
                                                        <h3>${contact.Name} ${contact.Surname}</h3>
                                                        <h4>${contact.TelephonNumber}</h4>
                                                    </li>`)
                                                    .join("");
    
    const liElsSel = document.querySelectorAll(".card");
    liElsSel.forEach((liEl) => deleteContact(liEl));
    //localStorage.setItem("Contatti", JSON.stringify(Contacts));                                                
};

//ADD NEW CONTACT
const addContact = () => {
    const addBTN = document.querySelector("#addBtn");
    addBTN.addEventListener("click", () => {
    const nameInput = document.querySelector("#name");
    const surnameInput = document.querySelector("#surname");
    const telephonInput = document.querySelector("#number");
    Contacts.push({
        Name: nameInput.value,
        Surname: surnameInput.value,
        TelephonNumber: telephonInput.value,
    });
    contactCard();
    //localStorage.clear();   
    //localStorage.setItem("Contatti", JSON.stringify(Contacts)); 
  });
};

//DELETE CONTACT ON CLICK 
const deleteContact = (element) => {
     const ulElSel = document.querySelector(".card-wrapper");
    element.addEventListener("click", () => { 
        console.log();
       
        ulElSel.removeChild(element);
        
        //localStorage.clear();   
        //localStorage.setItem("Contatti", JSON.stringify(Contacts));
    });  
};

//SEARCH CONTACT
const search = () => {
    const srcBTN = document.querySelector(".srcBtn");
    const srcInputSel = document.querySelector("#srcInput");
    const ulElSel = document.querySelector("ul");
    srcBTN.addEventListener("click", () => {
        const srcValue = srcInputSel.value;
        const contactSrc = Contacts.filter((contact) => contact.Name.toLowerCase().includes(srcValue.toLowerCase())); 
        ulElSel.innerHTML  = contactSrc.map((contact) => `  <li class="card">
                                                                <h3>${contact.Name} ${contact.Surname}</h3>
                                                                <h4>${contact.TelephonNumber}</h4>
                                                            </li>`)
                                                            .join("");
            srcInputSel.value = "";
        });
        const liElsSel = document.querySelectorAll(".card");
        liElsSel.forEach((liEl) => deleteContact(liEl));
    };

    //CONTACTS ARRAY
const ContactsFromLS = localStorage.getItem("Contatti");
const Contacts = ContactsFromLS ? JSON.parse(ContactsFromLS) : [
    {
        Name: "Nicolò",
        Surname: "Piccolo",
        TelephonNumber: "3020320",
    },
    {
        Name: "Mario",
        Surname: "Frastorno",
        TelephonNumber: "3336545689",
    },
    {
        Name: "Dolor",
        Surname: "DePanza",
        TelephonNumber: "6549878423",
    },
    {
        Name: "Santo",
        Surname: "Gennaro",
        TelephonNumber: "3020320456",
    },
    {
        Name: "Salvatore",
        Surname: "Trovatore",
        TelephonNumber: "3245668970",
    },
];

export { contactCard, addContact, search };