// El usuario ingresa un string con varias palabras separadas por coma en un popup y se
// deben convertir en un array, (el usuario ingresa: "1,2,3,4,5" y se convierte en [1,2,3,4,5]).

const stringUsuario = prompt('Ingrese un string (ejem.: "1,2,3,4,5) :" ')

const array = stringUsuario.split(',').map(Number);

console.log(array);
