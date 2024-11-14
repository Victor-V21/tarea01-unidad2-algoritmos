// Crear un array vacío, luego generar N números al azar y guardarlos en un array, N es
// introducido por el usuario a través de un prompt.

let array = [];

const N = parseInt(prompt('Ingrese un numero N: '))

for (let i = 0; i < N; i++) 
   array[i] = Math.floor(Math.random() * N)

console.log(`Array generado con ${N} elementos : \n${array}`);

