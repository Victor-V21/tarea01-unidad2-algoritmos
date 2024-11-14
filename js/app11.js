// Determinar si una palabra empieza con mayúscula o no.

const palabra = prompt('Ingrese una palabra:')


if ( palabra[0] === palabra[0].toLowerCase() && isNaN(palabra[0]))
{
    console.log(`La palabra "${palabra}" inicia con Minusculas`);
} else if ( palabra[0] === palabra[0].toUpperCase() && isNaN(palabra[0]))
{
    console.log(`La palabra "${palabra}" inicia con Mayusculas`);
} else {
    console.log(`La palabra "${palabra}" no inicia con una letra`);
}