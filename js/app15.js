// Usando while mostrar todos los números de N a 1 disminuyendo de 1 en 1 donde n lo
// ingresa el usuario en un prompt.

const n = parseInt(prompt('Ingrese un número n :'));
let i = n;

console.log(`Numeros de n = ${n} a 1 :`);

while (i >= 1) {
    console.log(i);
    i--;
}