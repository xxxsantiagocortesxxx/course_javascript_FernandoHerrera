

const elMayor = (a,b) =>(a > b) ? a: b;


const tieneMembresia = (miembro) =>{
    return (miembro) ? "2 dolares ": "10 dolares";
}

console.log ( elMayor(20,95) );
console.log(tieneMembresia(true));

const amigo = true;
const amigosArr = [
    'peter',
    'tiny',
    'dr. strange',
    amigo ? 'thor' : 'loki',
    (()=>'nick fury')(),
    elMayor(12,10)
];

console.log(amigosArr);


const nota = 65;
const grado = (nota >=95)? 'A+': 
              (nota>= 90)? 'A' :
               nota>= 85 ? 'B+':
               nota>= 80 ? 'B' : 'F';
                

console.log(nota,grado);