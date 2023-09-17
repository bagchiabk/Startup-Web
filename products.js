
// IMAGE-PORTFOLIO GALLERY

let filterItem = document.querySelector(".product-btns");
let fileteImages = document.querySelectorAll(".content");

window.addEventListener("load", () => {
    filterItem.addEventListener("click", (selectedItem) => {
        if (selectedItem.target.classList.contains("item-link")) {
            document.querySelector(".btn-active").classList.remove("btn-active");
            selectedItem.target.classList.add("btn-active");
            let filterName = selectedItem.target.getAttribute("data-name");
            fileteImages.forEach((image) => {
                let filterImages = image.getAttribute("data-name");
                if ((filterImages == filterName) || filterName == "all") {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            })
        }
    })
})