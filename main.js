// let cont = 0;
// console.log(cont);
// cont ++;

// 1 lunes 2 martes 3 mier
// for (let i = 1; i <= 7; i++) {
//      if (i == 6 || i == 7) {
//          continue;
//      }
// console.log('Hoy es el día ' + i + ' y se trabaja')
// }

// Chofer de colectivo, 10 personas
// parada 1 se bajan 2 pers
//  par 2 se bajan 3
// Parada 3 se bajan 5

// let pasajeros = 10;
// let primerParada = 8;
// let segundaParada = 5;
// let tercerParada = 0;
// let colectivoRoto = false

// for (let i = pasajeros; i >= 0; i--) {
//     console.log(i);
//     if (i == primerParada) {
//         console.log('Primer parada se bajan ' + 2 + ' quedan ' + (pasajeros-= 2));
//     } else if (i == segundaParada) {
//         console.log (
//             'Segunda parada se bajan ' + 3 + ' quedan ' + (pasajeros = pasajeros - 3)
//         );
//         // colectivoRoto = true;
//     } else if (i == tercerParada) {
//         console.log (
//             `Tercer parada se bajan ${5}, quedan ${(pasajeros -= 5)} `
//         );

//     }

//     if( colectivoRoto ==  true){
//         console.log('se rompio el colectivo');
//         break;
//     }

// }

// let entrada = prompt('contanos tu historia');

// while (entrada != 'FIN') {
//     console.log(`${entrada}`);
//     entrada = prompt('sigue contando tu historia');
// }

// do  {
//     console.log(`${entrada}`);
//     entrada = prompt('sigue contando tu historia');
// } while (entrada != 'FIN');


// hay que hacer una mayonesa
// hay que batir 3 min
// si bato menos de 3 min, no se hace la mayo
// si bato de mas se corta
// si bato justo, queda perfecta

// let continuarBatiendo = true;
// let batidas = 0;

// do {
//     let preguntarBatir = prompt('sigo batiendo? Y / N').toUpperCase();
//     if (preguntarBatir == 'N') {
//         if (batidas > 3) {
//             console.log(`se te corto la mayo kpo`);
//             continuarBatiendo = false;
//         } else if (batidas == 3) {
//          console.log(`quedo zarpada la mayo`);
//          continuarBatiendo = false;           
//         } else if (batidas < 3) {
//            console.log(`no se hace`)
//            continuarBatiendo = false;
//         }
//     } else if (preguntarBatir == 'Y') {
//         batidas++;
//         console.log(`van ${batidas} batidas`);
//     } else {
//         console.log(`ponete a batir`)
//     }
// } while (continuarBatiendo);

// let mes = prompt(`ingresa el mes que naciste`).toLowerCase();

// switch (mes) {
//     case 'enero':
//         console.log(`Felicidades, cumplis en Enero!`)
//         break;

//     case 'febrero':
//         console.log(`Felicidades, cumplis en Febrero!`)
//         break;

//     case 'octubre':
//         console.log(`Felicidades, cumplis en Octubre!`)
//         break;

//     default:
//         console.log(`no conozco ese mes fiera`)
//         break;
// }

// DESAFIO: VOY A PEDIR UN NUMERO Y SE IRA SUMANDO EL ANTERIOR HASTA LLEGAR A 100.
// Defino un numero = 0;
let num = 0;

// mientras que ese numero sea menor a 100 seguira pidiendo un numeor
while (num < 100) {
    // pido el numero
    let num1 = Number(prompt(`Escriba un numero`));
    // sumo este numero al numero anterior.
    num = num + num1;
    console.log(num);
}


// contrasenia: pedire una contrasenia y solo hay 5 intentos para escribirla bien

let password = 'amigo';
let cont = 5;
do {
    // la primer vez no mostrara el alert porque cont = 5, es decir nunca escribimos una contraseña
    // entonces contara hacia atrás cada vez que escribamos mal la contraseña.
    if (cont < 5) {
        // mostrara cuantos intentos quedan
        console.log(`contraseña incorrecta, le quedan ${cont} intento/s.`);
    }
    let contrasenia = prompt(`escriba contraseña`);
    cont = cont - 1;
    if (contrasenia == password) {
        console.log(`ha iniciado sesión!`);
        break;
    }

} while (cont > 0);

// si gastamos todos los intentos bloqueamos la cuenta
if (cont == 0) {
    console.log(`se ha bloqueado la cuenta`)
}



