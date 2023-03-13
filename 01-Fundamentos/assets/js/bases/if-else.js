

//usamos el triple igual ===, para evaluar si un valor es exactamente igual al otro, hata en el tipo de da, numero,string, boolena etc

let  a = 3;


const hoy = new Date();

let dia = hoy.getDay(); //0: Domingo, 1:lunes, 2:martes ....

console.log({dia} );

// let diasDeSemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado',];

// console.log('hoy es '+ diasDeSemana[dia]);

let diasDeSemana = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',  
}

console.log('hoy es '+ diasDeSemana[dia]);
