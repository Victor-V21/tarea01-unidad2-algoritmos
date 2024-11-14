// Escribir un programa JavaScript en el que el programa escoge al azar un entero entre 1 y
// 10, el usuario , luego a el usuario se le pedirá que introduzca un número en un popup
// para intentar adivinarlo. Si la entrada del usuario coincide con el número de conjetura, el
// programa mostrará un mensaje de "buen trabajo" de lo contrario mostrará un mensaje de
// "Vuelva a intentarlo"

const numAleatorio = Math.round(Math.random() * 9 + 1); //Num maximo 9 + 1= 10

const numUsuario = parseInt(prompt('Debe adivinar un numero del 1 al 10, ingrese un numero:'));

numAleatorio === numUsuario ?
    console.log(`Buen trabajo, Adivino`): 
    console.log('Vuelva a intentarlo');