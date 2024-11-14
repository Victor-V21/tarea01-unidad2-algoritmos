// Escriba un programa que pida 3 números y escriba en la consola el mayor de los tres.

const num1 = parseFloat(prompt('Ingrese un primer Numero'))
const num2 = parseFloat(prompt('Ingrese un segundo Numero'))
const num3 = parseFloat(prompt('Ingrese un tercer Numero'))

console.log(`El mayor de los numeros es: ${Math.max(num1, num2, num3)}`);