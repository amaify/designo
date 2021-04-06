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

