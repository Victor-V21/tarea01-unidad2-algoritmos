//  Usando while mostrar todos los números de 1 a N aumentando de 2 en 2 donde n lo
// ingresa el usuario en un prompt.

const n = parseInt(prompt('Ingrese un numero N :'));
let i = 1;

console.log(`Numeros de 1 a ${n}, de 2 en 2: `);

while (i <= n) {
    console.log(i);
    i += 2;
}