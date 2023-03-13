let button = document.querySelector("#btn")
let imagen = document.querySelector("#imagen")

button.addEventListener("click", cambioimg);

function cambioimg() {
    if (imagen.src.includes('reverso')) {  // revisa el String para checkear si esta la palabra reverso.

        imagen.src = "./anverso.jpg";
    }
    else {
        imagen.src = "./reverso.png";
    }
}