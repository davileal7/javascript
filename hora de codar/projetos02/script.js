const div = document.querySelector(".title"), 
input = document.querySelector("#validar")

input.addEventListener("input", () => {
    div.style.color = input.value;
    input.style.fontSize = input.value;
})