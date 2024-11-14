// Crear una función que devuelva el promedio de un arreglo, en caso de que el arreglo este
// vacío debe devolver cero.

function promedioArray(array)
{
    if (array.length === 0)
    {
        return 0;
    }

    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    const promedio = suma / array.length;

    return promedio;
}

const stringUsuario = prompt('Ingrese un string (ejem.: "1,2,3,4,5) :" ')
const arrayUsuario = stringUsuario.split(',').map(Number);

console.log(`Promedio del arreglo`);
console.log(promedioArray(arrayUsuario));
