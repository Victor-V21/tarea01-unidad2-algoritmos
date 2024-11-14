// Escriba un programa que pida una frase y escriba cuantas veces aparece la letra a.

const frase = prompt('Ingrese una frase')
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    if ( frase [i] === 'a')
    {
        contador++
    }
}

console.log('La letra "a" aparece un total de: ' + contador + ' veces');