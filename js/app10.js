// Crear un programa donde se introduzcan los tres ángulos internos de un triángulo y se
// determine si el triángulo es válido o no.

const angulo1 = parseFloat(prompt('Ingrese el primer ángulo'))
const angulo2 = parseFloat(prompt('Ingrese el segundo ángulo'))
const angulo3 = parseFloat(prompt('Ingrese el tercer ángulo'))

if ( angulo1 + angulo2 + angulo3 === 180)
{
    console.log('El triangulo es válido');
} else  {
    console.log('El triangulo no es válido');
}