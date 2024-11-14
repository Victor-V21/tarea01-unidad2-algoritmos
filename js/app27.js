// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares, pista: utilizar reduce().

function arregloPares(array)
{
    return array.reduce((contenedor, num) =>
    {
        if (num % 2 === 0){
            contenedor.push(num);
        }

        return contenedor;
    }, [] )
}

const stringUsuario = prompt('Ingrese un string (ejem.: "1,2,3,4,5) :" ')

const arrayUsuario = stringUsuario.split(',').map(Number);

console.log(`Arreglo con numeros pares:`);
console.log(arregloPares(arrayUsuario));
