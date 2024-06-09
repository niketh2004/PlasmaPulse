document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".popup-link");

    popupLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const target = this.getAttribute("href").substring(1);
            const popup = document.getElementById(target);
            if (popup) {
                popup.classList.add("active");
                setTimeout(function () {
                    popup.classList.remove("active");
                }, 3000); // Adjust the delay (in milliseconds) as needed
            }
        });
    });
});
