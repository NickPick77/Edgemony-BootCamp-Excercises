//SCROLL MAGIC STICKY ELEMENT
  // init controller
  
  var controller = new ScrollMagic.Controller();
  
  // get the scene's trigger position
  

function sticky () { // wait for document ready
		
  // build scene
		
  var scene = new ScrollMagic.Scene({triggerElement: "#start", offset: -100})
						.setPin("#target")
						.addTo(controller);
	
};

sticky()


//QUOTES GENERATOR

const quotes = [
    "Io sono tuo padre!",
    "guerra nessuno fatto grande",
    "fare o non fare... non c'è provare",
    "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
    "Sto più in alto di te!",
    ".... (cit. Darth Maul)",
    "Eri come un fratello per me! (pianto)",
  ]; //array with quotes

const cits = document.querySelector("#quotesList"); //DOM Selector of the html <textarea></textarea>

document.querySelector("button").addEventListener("click", () => {
    
  const random = Math.floor(Math.random() * quotes.length);
   
  cits.innerHTML = quotes[random];

}) //Event listener that list event on click the button "btnRNDM" in the  html then rend a random quote in "cits"

//LEAVE A COMMENTS AREA
const input = document.querySelector("#input");

const submit = document.querySelector("#submit");

const commentsList = document.querySelector("#comments");     //DOM Selector

const username = document.querySelector("#nickName");

const email = document.querySelector("#userEmail");

const img = document.querySelector("#userImg");

const comments = [];  //Empty array for comments

const renderComments = () => {
    
  commentsList.innerHTML = comments
    
    .map((comment) => 
      
      `<li class="flex-comments">
      
        <div class="userIMG">
        
          <img src="${comment[3]}" width="100px" height="100px" alt="userAvatar" class="imgContainer">
        
        </div>
        
        <div class="userID">
          
          <h3>${comment[1]}</h3>
          
          <h4>${comment[2]}</h4>
        
        </div>
        
        <div class="userComm">
        
          <p>" ${comment[0]} "</p>
        
        </div> 
      
      </li>
    
      <hr>`
    
    )
    .join("");

  };                                  // Map of "comments" to rend the comment into html 

submit.addEventListener("click", () => {
    
  comments.push([
    
    input.value,
       
    username.value,
    
    email.value,
       
    img.value,
    
  ]);
    
  input.value = "";
    
  renderComments();

});              //On click Push into "comments" Array the value of comment form  
  

