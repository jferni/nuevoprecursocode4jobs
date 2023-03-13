function numeros(numero1, numero2) {
    let division = numero1 / numero2;
    alert(division);

}

for (i = 0; i <= Infinity; i++) {
    let numeros1 = parseInt(prompt("Escribe un numero"))
    let numeros2 = parseInt(prompt("Escribe un numero"))
    numeros(numeros1, numeros2);
    if (numeros2 == 0) {
        break;
    }
}