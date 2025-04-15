document.querySelector(".expand-button").addEventListener("click", function() {
    const letter = document.querySelector(".full-letter");
    if (letter.style.display === "block") {
        letter.style.display = "none";
        this.textContent = "Leer más";
    } else {
        letter.style.display = "block";
        this.textContent = "Leer menos";
    }
});