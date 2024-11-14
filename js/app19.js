// Usando for, crear un programa que determine si un número es perfecto o no, (se dice
// que un número es perfecto si el número es igual a la suma de sus divisores, ejemplos 6 = 1 + 2 + 3).

const num = parseInt(prompt('Ingrese un numero para determinar si es perfecto'));
let suma = 0;

for (let i = 1; i < num; i++)
{
    if (num % i === 0)
    {
        suma += i;
    }
}

if (suma === num)
{
    console.log(`El número ${num} es perfecto`);
}else {
    console.log(`El número ${num} NO es perfecto`);
}