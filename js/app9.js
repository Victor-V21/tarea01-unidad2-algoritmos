// Crear un programa que determine si un string introducido por un usuario inicia con un
// número o con una letra.

const caracteres = prompt('Ingrese un STRING que inicie con una letra o un número')

if (!isNaN(caracteres[0]))
{
    console.log('Incluye un numero al inicio');
} else {
    console.log('Inicia con una letra')
}
