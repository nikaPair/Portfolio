window.onload = function () {
    const body = document.body;
    const burgerBTN = document.querySelector(".burger-menu");
    const adaptiveMenu = document.querySelector(".burger-menu_open");
    const closeBTN = document.querySelector(".close-icon");
    burgerBTN.addEventListener("click", function () {
        adaptiveMenu.style = "top:0;";
    });
    closeBTN.addEventListener("click", function () {
        adaptiveMenu.style = "top:-250px";
    });
};
