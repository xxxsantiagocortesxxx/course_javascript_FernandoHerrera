

const carros=  ['Ford', 'Mazda', 'Honda', 'Toyota'];

i=0;
   
while(carros[i]){

    console.log(carros[i]);
    i++;
}

console.warn('do while');

let j=0;
do{
    console.log(carros[j]);
    j++;
    
}while(j< carros.length);