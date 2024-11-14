// Crear un programa que determine si un número introducido en un Prompt es divisible
// por 5 o no, mostrar el resultado con console.log.

const numero = parseInt(prompt('Introduzca un numero:'));

if (numero % 5 === 0)
{
    console.log(`El numero (${numero}) es dividible por 5`);
}   else
{
    console.log(`El numero (${numero}) NO es dividible por 5`);
}