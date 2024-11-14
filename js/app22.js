// Dado el array = [1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en
// pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos
// en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

let array = [1,2,3,4,5,6]
let i = 0;

console.log('----- Usando While -----');

while(i<array.length)
{
    console.log(array[i]);
    i++;
}

console.log('----- Usando for -----');

for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log('----- Usando .foreach -----');

array.forEach(num => console.log(num));

console.log('----- Mostrando elementos de array sumando 1 c/u -----');

array.forEach(num => console.log(num+1));

console.log('-- Generar una copia de un array con elementos incrementados en 1 --');

const array2 = array.map(num => num + 1)
console.log(array2);

console.log('----- Calcular el promedio -----');

let promedio = 0;
let suma = 0;

array.forEach(num => suma += num)
promedio = suma / array.length;

console.log(promedio);