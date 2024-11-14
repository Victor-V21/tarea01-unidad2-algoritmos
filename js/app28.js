// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

const vocales = ['a','e','i','o','u']

function arregloVocalInicio(array)
{
    return array.reduce((contenedor, palabra) =>
    {
        if(vocales.includes(palabra[0].toLowerCase()))
        {
            contenedor.push(palabra);
        }

        return contenedor;
    }, [])
}
const arreglo = ['Hola','Ola','Arroz','Pepino','Tomate','Arena'];

console.log(arregloVocalInicio(arreglo));