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

    (function () {
        emailjs.init("GyiJlYYijJjsag2K9");
    })();

    document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
            event.preventDefault();

            const formData = {
                name: this.name.value,
                email: this.email.value,
                message: this.message.value,
            };

            emailjs.send("default_service", "template_ytncs4i", formData).then(
                () => {
                    this.reset();
                },
                (error) => {
                    alert("Произошла ошибка.");
                }
            );
        });
};
