    let button = document.querySelector("#btn");

    let numero = parseInt(prompt("Escribe un número"));
    
    document.querySelector("#num").style.background = "blue";
    document.querySelector("#num").style.color = "white";
    document.querySelector("#num").innerHTML = numero;
    
    button.addEventListener("click", function () {
        addOne(numero);
    });
    
    function addOne(number) {
        p = document.querySelector("#num");
        p.innerHTML = parseInt(p.innerHTML) + number;
    }