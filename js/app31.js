// Crear una función que tome como parámetro un arreglo de números, retornar un nuevo
// arreglo invirtiendo los elementos ejemplo. [1,2,3] => [3,2,1].\

function invertirArray(array)
{
    let arrayInvertido  = [];

    for (let i = 0; i < array.length; i++) {
        arrayInvertido[array.length - i] = array[i];
    }
        
    return arrayInvertido;

    // return array.reverse()
}

const stringUsuario = prompt('Ingrese un string (ejem.: 1,2,3,4,5):')
const arrayUsuario = stringUsuario.split(',').map(Number);

console.log(`El array invertido es: `);
console.log(invertirArray(arrayUsuario));
