function hola(pasadas) {
    let numeropasadas = pasadas
    for (i = 1; i <= numeropasadas; i++) {
        alert("Hola");
    }
    return numeropasadas
}

let cinco = hola(parseInt(prompt("Escribe un numero")));
let tres = hola(parseInt(prompt("Escribe un numero")));