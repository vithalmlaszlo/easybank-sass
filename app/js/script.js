//Hamburger animation
let menu = document.getElementById('hamburgerMenu');
//Overlay animation
let overlay = document.querySelector('.overlay');
//Mobil menu animation
let headerMenu = document.querySelector(".header__menu");
let isOpen = false;

menu.onclick = function() {
    if (!isOpen) { //Open hamburger menu
        document.querySelector('.header').classList.add("open"); 
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
        headerMenu.classList.remove('fade-out');
        headerMenu.classList.add('fade-in');
        
        isOpen = true;
    } else { //Close Hamburger menu
        document.querySelector('.header').classList.remove("open"); 
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
        headerMenu.classList.add('fade-out');
        headerMenu.classList.remove('fade-in');

        isOpen = false;
    }
}

