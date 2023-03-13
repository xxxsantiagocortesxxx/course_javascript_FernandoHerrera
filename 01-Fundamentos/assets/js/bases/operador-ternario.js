



const dia = 0 ;
const horaActual = 10;

let horaApertura;
let mensaje;

//               [0,6].includes(dia)
horaApertura = ( dia== 0 || dia==6 ) ? 9 : 11;


mensaje = (horaActual>= horaApertura) ?'esta abierto' : `esta cerrado, hoy abrimos a las ${ horaApertura}`

console.log({horaApertura,mensaje});

