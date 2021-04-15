let menu = document.querySelector('.mobileNav-logo__menu');
let navItems = document.querySelector('.mobileNav-link');
let body = document.querySelector("body");

let hamburger = `<img src="./assets/shared/mobile/icon-hamburger.svg" alt="Mobile Toggle Icon">`
let closeMenu = `<img src="./assets/shared/mobile/icon-close.svg" alt="Mobile Toggle Icon">`

window.onload = menu.innerHTML = hamburger;

function openNav() {
    body.classList.add("add-backdrop");
    navItems.style.display = "block";
    menu.classList.toggle("transparent")

    menu.innerHTML = closeMenu
}

function closeNav() {
    body.classList.remove('add-backdrop');
    navItems.style.display = "none";

    menu.innerHTML = hamburger
}


menu.addEventListener('click', () => {
    menu.innerHTML === hamburger ? openNav() : closeNav()
})


// submitBtn.addEventListener('click')

//CODE FOR FIXING NAVBAR TO TOP OF THE SCREEN
const header = document.querySelector('.header');
var sticky = header.offsetTop;
sticky = 400;
let query = window.matchMedia("(min-width: 600px)");

window.onscroll = () => fixToTop();

function fixToTop() {
    if(window.pageYOffset >= sticky) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")
    }
}
//END OF CODE FOR FIXING NAVBAR TO TOP OF THE SCREEN