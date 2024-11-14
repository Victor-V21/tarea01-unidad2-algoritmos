// Usar while, realizar la suma de todos los números pares entre N y M donde N y M los
// ingresa un usuario.

const m = parseInt(prompt('Ingrese un primer numero (M) :'));
const n = parseInt(prompt('Ingrese un segundo numero (N) :'));

let suma = 0;

let numMayor = n > m ? n : m ;
let numMenor = n > m ? m : n ;

console.log(`Se calculara la suma de los numeros pares entre ${numMenor} y ${numMayor}\nNumeros a sumar: `);

while (numMenor <= numMayor) {
    if ( numMenor % 2 === 0){
        suma +=  numMenor
        console.log(numMenor);
    }
    numMenor++;
}

console.log(`Total de la suma: ${suma}`);