var navBarContent = document.querySelector('#navbarNav');
var sideBarMenu = document.querySelector('#menu-sidebar-body');
var menuButton = document.querySelector('#nav-container');
var overlay = document.querySelector('#menu-overlay');
var activatedClass = 'hamburger-activated';
var titlePageContainer = document.querySelector('#titlePage-container');
var titlePage = document.querySelector('.ici');

sideBarMenu.innerHTML = navBarContent.innerHTML;

titlePageContainer.innerHTML = titlePage.innerHTML;

titlePageContainer.classList.add("nav-item");

sideBarMenu.scroll();

menuButton.addEventListener('click', function (event) {
    event.preventDefault();

    if (this.parentNode.classList.contains(activatedClass, "pushed")) {
        this.parentNode.classList.remove(activatedClass, "pushed");
    } else {
        this.parentNode.classList.add(activatedClass, "pushed");
    }
});

menuButton.addEventListener('keydown', function (event) {
   if (this.parentNode.classList.contains(activatedClass, "pushed")) {
       if (event.repeat === false && event.which === 27) {
            this.parentNode.classList.remove(activatedClass, "pushed");
       }
   }
});

overlay.addEventListener('click', function (event) {
    event.preventDefault();

    this.parentNode.classList.remove(activatedClass, "pushed");
});