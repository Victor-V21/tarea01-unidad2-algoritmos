// Escriba un programa que pida un número y diga si es divisible por 2.

const num = parseInt(prompt(`Ingrese Un numero: `))

console.log(num % 2 === 0 ? `El numero ${num} es divisible por 2`: `El numero ${num} NO es divisible por 2`);