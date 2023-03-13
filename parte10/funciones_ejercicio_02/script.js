function numeros(numero1, numero2) {
    if (numero1 > numero2) {
        alert("True");
        console.log("El primer número es mas grande");
    }
    else {
        alert("False");
        console.log("El primer número no es más grande");
    }
}


numeros(parseInt(prompt("Escribe un numero")), parseInt(prompt("Escribe un numero")));