// Crear una función que tome como parámetro un arreglo de números, retornar el número
// menor, si es un número negativo mostrar su valor absoluto.

function numMenor(array)
{
    let min = Math.min(...array);

    if (min < 0)
    {
        min = Math.abs(min)
    }

    return min;
}

const stringUsuario = prompt('Ingrese un string (ejem.: "1,2,3,4,5) :" ')
const arrayUsuario = stringUsuario.split(',').map(Number);

console.log(`El numero menor del array ( si es negativo pasara a ser positivo ):`);
console.log(numMenor(arrayUsuario));

