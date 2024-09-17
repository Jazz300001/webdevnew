console.log('hello.');
const button = document.querySelector('button'); button.addEventListener("click", onClick);
 function onClick() { 
    console.log("Clicked!"); }
const myImg = document.querySelector('img'); myImg.addEventListener('click', addBorders); 
function addBorders() { 
    const img = event.currentTarget; 
    img.style.border = "5px solid red"; }
    const imgArray = document.querySelectorAll('img'); 
    for (let index = 0; index < imgArray.length; index++) { 
        const element = imgArray[index]; 
        element.addEventListener('click', addBorders);}
        const image = document.querySelector('img.shown'); 
        image.addEventListener("click", remove); 
        function remove(event) { 
            const image = event.currentTarget; 
            image.classList.remove('shown'); 
            image.classList.add('hide'); }

    const gallery = document.querySelectorAll('img'); 
    for (let index = 0; index < gallery.length; index++) { 
                const element = gallery[index]; 
                element.addEventListener('click', expand); }
                function expand(event) { 
                    const smallImage = event.currentTarget; 
                    const bigImage = document.querySelector(".big"); 
                    bigImage.classList.remove('big'); 
                    bigImage.classList.add('small'); 
                    smallImage.classList.remove('small'); 
                    smallImage.classList.add('big'); }