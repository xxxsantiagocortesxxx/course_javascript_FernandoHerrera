let juegos = ['zelda','mario','metroid','chrono'];
console.log('largo: ',juegos.length);

let primero = juegos[2-2];
let ultimo = juegos[juegos.length-1];

console.log({primero,ultimo})

juegos.forEach((elemento,indice,array)=>{

    console.log({elemento,indice,array});
} )


let nuevoLargo = juegos.push('F-zero');
console.log({nuevoLargo, juegos});


nuevoLargo= juegos.unshift('halo');
console.log({nuevoLargo, juegos});


let juegoBorrado = juegos.pop();
console.log({juegoBorrado,juegos});


console.log(juegos);


let juegosBorrados = juegos.splice(0,2);
console.log({juegosBorrados,juegos});

let indexMario = juegos.indexOf('mario');
console.log({indexMario});