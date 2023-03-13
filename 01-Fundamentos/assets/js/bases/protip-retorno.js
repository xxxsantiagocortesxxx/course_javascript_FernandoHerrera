const crearP= (nombre,apellido)=>({nombre,apellido});


// const persona = crearP('david','cortes');
// console.log(persona);


//los puntos suspensivos para  mostrar todos los argumentos

// const imprimeArgumentos =(...args)=>{
//     console.log(args);
// }
// //                 ESTOS ARGUMENTOS
// imprimeArgumentos(10,true,false,'david','cortes');


const imprimeArgumentos =(edad, ...args)=>{
    return args
}

const [vivo,casado,nombre,mascota] = imprimeArgumentos(10,true,false,'david','perro');
console.log({vivo,casado,nombre,mascota});


const {apellido: nuevoApellido}= crearP('david','cortes');
console.log({nuevoApellido});


let tony = {
    nombre: 'tony',
    apellido: 'stark',
    codeName: 'ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark l', 'Mark v','Hulkbuster'],
};

const imprimePropiedades = ({nombre,apellido,codeName,vivo,edad,trajes}) =>{

    console.log({nombre});
    console.log({apellido});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );