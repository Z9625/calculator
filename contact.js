document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        document.querySelector('.back-btn').click();
    }
});


window.addEventListener("load", () => {
    let loader = document.querySelector(".loader");
    let mainSection = document.querySelector(".main-section");


    setTimeout(() => {
        loader.style.display = "none";
        mainSection.style.display = "block";
    }, 2500);
});