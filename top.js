// TO-TOP BUTTON

let toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function(){
    if (window.pageYOffset > 150) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
})
