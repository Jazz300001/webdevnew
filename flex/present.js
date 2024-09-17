const gallery = document.querySelectorAll('img');
for (let index = 0; index < gallery.length; index++) { 
    const element = gallery[index]; element.addEventListener('click', openPresent); }
    function openPresent(event) { 
        element.src="https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif"; }