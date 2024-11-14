// Todos los ejercicios de while anteriores los debe replicar con el ciclo for.

let n = 0;
const eleccion = parseInt(prompt('Ingrese el ejercicio que desea ingresar ( 13 al 17 )'))

switch (eleccion) {
    case 13:
        n = parseInt(prompt('(Ejercicio 13) Ingrese un numero N'));
        console.log(` (Ejercicio 13) Numeros de 1 a ${n} :`);

        for (let i = 1; i <= n; i++) {
            console.log(i);
        }
        break;
    case 14:
        n = parseInt(prompt('(Ejercicio 14) Ingrese un numero N :'));
        console.log(`(Ejercicio 14) Numeros de 1 a ${n}, de 2 en 2: `);

        for (let i = 1; i <= n; i += 2) {
            console.log(i);
        }
        break;
    case 15:
        n = parseInt(prompt('(Ejercicio 15) Ingrese un número n :'));
        console.log(`(Ejercicio 15) Numeros de n = ${n} a 1 :`);

        for (let i = n; i >= 1; i--){
            console.log(i);
        }
    break;

    case 16:
        n = parseInt(prompt('(Ejercicio 16) Ingrese un numero para mostrar la tabla de dicho numero:'));
        console.log('(Ejercicio 16) Tabla de multiplicar del ' + n);
        
        for (let i = 0; i <= 12 ; i++) {
          console.log(`${n} x ${i} = ${n * i}`);
        }
        break;

    case 17:
        const m = parseInt(prompt('(Ejercicio 17) Ingrese un primer numero (M) :'));
        n = parseInt(prompt('(Ejercicio 17) Ingrese un segundo numero (N) :'));

        let suma = 0;

        let numMayor = n > m ? n : m ;
        let numMenor = n > m ? m : n ;

        console.log(` (Ejercicio 17) Se calculara la suma de los numeros pares entre ${numMenor} y ${numMayor}\nNumeros a sumar: `);

        for (numMenor; numMenor <= numMayor; numMenor++) {
            if ( numMenor % 2 === 0){
                suma +=  numMenor
                console.log(numMenor);
            }
        }

        console.log(`Total de la suma: ${suma}`);
        break;

    default:
        alert('Selecciono un ejercicio equivocado');
        break;
}
