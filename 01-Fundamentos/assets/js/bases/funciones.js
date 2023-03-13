//forma 1

function saludar (nombre){
    console.log(arguments);
    console.log("hola "+ nombre);
}

console.log(saludar('carlos',true,23));
//forma 2 funcion anonima con asignacion de nombre

const saludar2 = function(nombre){
    console.log("hola "+ nombre);
    return 101;
}

//forma 3 funciones flecha

const saludarFlecha = () =>{
    console.log("hola flecha");
}

const saludarFlecha2 = (nombre) =>{
    console.log("hola "+ nombre+', como estas'); 
}

const sumar = (a,b) =>a+b;
////////////////////////////

const getAleatorio = () =>Math.random();


////////log//////
// const retornoSaludo = saludar2("marta");
// console.log({retornoSaludo});

// console.log(getAleatorio());

