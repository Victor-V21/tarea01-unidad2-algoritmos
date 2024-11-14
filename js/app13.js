// Usando while mostrar todos los números de 1 a n aumentando de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

const n = parseInt(prompt('Ingrese un numero N'));
let i = 1;

console.log(`Numeros de 1 a ${n} :`);

while (i <= n) {
    console.log(i);
    i++;
}