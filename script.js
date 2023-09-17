

// FIXED NAVBAR ON SCROLL

window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= 90) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}