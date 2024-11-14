// Usando while, solicitar al usuario un número y utilizando console.log para mostrar la
// tabla del número hasta 12.

const numero = parseInt(prompt('Ingrese un numero para mostrar la tabla de dicho numero:'));
let i = 0;

while (i <= 12) {
    console.log(`${numero} x ${i} = ${numero * i}`);
    i++;
}