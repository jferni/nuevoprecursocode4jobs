button = document.querySelector("#btn");

document.querySelector("#num").innerHTML = "La variable está en False "


button.addEventListener("click", addOne);


function addOne() {

    p = document.querySelector("#num");


    p.innerHTML = "La variable está en True";
}