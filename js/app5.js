// Escriba un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.

const frase = prompt('Ingrese una frase: ')

console.log(`En el texto Introducido aparecen: `);
console.log(`La vocal "a": ${frase.match(/a/g).length}`);
console.log(`La vocal "e": ${frase.match(/e/g).length}`);
console.log(`La vocal "i": ${frase.match(/i/g).length}`);
console.log(`La vocal "o": ${frase.match(/o/g).length}`);
console.log(`La vocal "u": ${frase.match(/u/g).length}`);

console.log('Frase: \n' + frase);
