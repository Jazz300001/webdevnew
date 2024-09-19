const myDiv = document.querySelector("#div1"); 
myDiv.addEventListener('click', addParagraph); 
function addParagraph(event) { 
    const myDiv = event.currentTarget; 
    let para = document.createElement("p"); 
    let node = document.createTextNode("This is new."); 
    para.appendChild(node); 
    myDiv.appendChild(para); }