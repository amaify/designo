var menu = document.querySelector(".mobileNav-logo__menu");
var navItems = document.querySelector(".mobileNav-link");
var body = document.querySelector("body");

var hamburger = `<img src="./assets/shared/mobile/icon-hamburger.svg" alt="Mobile Toggle Icon">`;
var closeMenu = `<img src="./assets/shared/mobile/icon-close.svg" alt="Mobile Toggle Icon">`;

window.onload = menu.innerHTML = hamburger;

function openNav() {
	body.classList.add("add-backdrop");
	navItems.style.display = "block";
	menu.classList.toggle("transparent");

	menu.innerHTML = closeMenu;
}

function closeNav() {
	body.classList.remove("add-backdrop");
	navItems.style.display = "none";

	menu.innerHTML = hamburger;
}

menu.addEventListener("click", function () {
	// menu.innerHTML === hamburger ? openNav() : closeNav();
	if (menu.innerHTML === hamburger) {
		openNav();
	} else {
		closeNav();
	}
});

// submitBtn.addEventListener('click')

//CODE FOR FIXING NAVBAR TO TOP OF THE SCREEN
var header = document.querySelector(".header");
var sticky = header.offsetTop;
sticky = 400;
var query = window.matchMedia("(min-width: 600px)");

window.onscroll = function () {
	fixToTop();
};

function fixToTop() {
	if (window.pageYOffset >= sticky) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
}
//END OF CODE FOR FIXING NAVBAR TO TOP OF THE SCREEN

//CODE FOR ADDING AN ACTIVE CLASS
var menuItem = document.querySelectorAll(".nav-link__item a");
var currentLocation = location.href;

for (let i = 0; i < menuItem.length; i++) {
	if (menuItem[i].href === currentLocation) {
		menuItem[i].className = "active";
	}
}
//END OF CODE FOR ADDING AN ACTIVE CLASS
