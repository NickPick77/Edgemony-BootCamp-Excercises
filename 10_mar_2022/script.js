let Contacts = [
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
] ;



function addContacts() {
    
    let newContact = {
    
        Name: prompt("Name"),
    
        Surname: prompt("Surname"),
    
        TelephonNumber: parseInt(prompt("Numero di Telefono")),
}
    
    Contacts.push(newContact);

}

addContacts();

//funziona male ma funziona!

function removeContacts(){
    
    const i = parseInt(prompt("quale numero vuoi cancellare?"))
    
    Contacts.splice(i -1, 1);

}

removeContacts();

console.log(Contacts);

const contactListEL = document.querySelector(".contactList");

for (index in Contacts){
    
    contactListEL.children[index].textContent = Contacts [index].Name;

}