let addButton = document.querySelector("#add-btn "); 
addButton.addEventListener("click", displaySum); 
function displaySum() { 
    let num1 = parseInt(document.querySelector("#first").value); 
    let num2 = parseInt(document.querySelector("#second").value); 
    let res = num1 + num2; 
    let resultDiv = document.querySelector("#result"); 
    resultDiv.textContent = num1 + " + " + num2 + " = " + res; }

    let randButton = document.querySelector("#random-btn"); 
    randButton.addEventListener("click", consoleWrapper); 
    function consoleWrapper(){ 
        console.log("You clicked me!"); }

        var boxBtn = document.getElementById("random-btn");
         boxBtn.addEventListener("click", boxFunction); 
         function boxFunction() { 
            console.log("this in event handler:" + this); }