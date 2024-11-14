// Crear una función que reciba un número entero y muestre un error si el tipo de dato
// pasado es de otro tipo.

const num = prompt('Ingrese un numero entero: ');

function numEntero(a)
{
    if (!isNaN(a)) 
        !a.includes('.') ? console.log('Ha ingresado un numero entero'): console.log('ERROR ingreso un numero flotante');
    else
        console.log('ERROR ingreso un caracter');
}

numEntero(num);