let personaje = {
    nombre: 'tony',
    apellido: 'stark',
    codeName: 'ironman',
    vivo: false,
    edad: 40,
    cords:{
        lat: 34.034,
        lng: -118.78
    },
    trajes: ['Mark l', 'Mark v','Hulkbuster'],
    direccion: {
        zip: '20880, 90256',
        ubicacion: 'malibu, california'
    }
};

console.log(personaje);

console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['nombre']);

console.log('edad',personaje.edad)
console.log('edad',personaje['edad']);

console.log('cord',personaje.cords);
console.log('lat',personaje.cords.lat);
console.log('lat',personaje['cords']['lat']);

console.log('no. trajes', personaje.trajes.length);

const x = 'vivo';
console.log('vivo', personaje[x]);



//Mas detalles

delete personaje.edad;

console.log(personaje);


personaje.dinero= 10000;

const entriespares = Object.entries(personaje);
console.log(entriespares);


Object.freeze(personaje);
personaje.casado= true;
personaje.direccion.ubicacion= 'costa rica';

console.log(personaje);


const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log(propiedades, valores);