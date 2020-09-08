// Your code goes here

//images opacity
const image = document.querySelectorAll("img");
    image.forEach(picture => 
        picture.addEventListener("mouseover", ()=> {
        picture.style.opacity = ".8"}));
    image.forEach(picture => 
        picture.addEventListener("mouseleave", ()=> {
        picture.style.opacity = "1"}));


 //change header       
const mainHeader = document.querySelector(".logo-heading");
    mainHeader.addEventListener("dblclick", () => {mainHeader.textContent = "ARE YOU READY TO HAVE FUN ON THE FUN BUS?!"});

//body background white and light grey
const body = document.querySelector("body")
body.addEventListener("keydown", () => {body.style.backgroundColor = "lightgrey"})
body.addEventListener("keyup", () => {body.style.backgroundColor = "white"})

//change text to bold
body.addEventListener("wheel", () => {body.style.fontWeight = "bold"})

//change text to italics and back to normal
body.addEventListener("mousedown", () => {body.style.fontStyle = "italic"})
body.addEventListener("mouseup", () => {body.style.fontStyle = "normal"})

//footer right click
const noContext = document.querySelector(".footer")
noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  window.addEventListener('load', (event) => {
    console.log('F IS FOR FRIENDS WHO DO STUFF TOGETHER, U IS FOR YOU AND MEEEEE, N IS FOR ANYWHERE ANYTIME AT ALL, DOWN HERE IN THE DEEP BLUE SEAAAAA');
  });