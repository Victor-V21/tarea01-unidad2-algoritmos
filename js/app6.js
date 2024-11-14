// Escribir un programa que escriba en pantalla los divisores de un número dado.

const num = parseInt(prompt('Ingrese un numero cualquiera: '))
let array = []

for (let i = 1; i <= num; i++) {
    if ( num % i === 0)
    {
        array.push(i);
    }
}

console.log(`Los numeros divisores de ${num} son: \n ${array}`);
