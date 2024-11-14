// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si
// un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

const array = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];

const color = prompt('Ingrese un color: ');

if (array.some(eleccion => eleccion === color))
    console.log('Su color existe en el array');
else
    console.log('Su color NO existe en el array');
