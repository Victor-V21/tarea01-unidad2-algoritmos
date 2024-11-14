// La siguiente función devuelve undefined en lugar de la multiplicación, se pide arreglarla:
// function multiply(a,b)
// {
//     a * b
// }


const num1 = parseInt(prompt('Ingrese a: '));
const num2 = parseInt(prompt('Ingrese b: '));

function multiply(a,b)
{
    return a * b;
}

console.log('Resultado: ' + multiply(num1,num2));