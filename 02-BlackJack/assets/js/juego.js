

let deck = [];
const tiposCartas = ['C','D','H','S'];
const especiales  = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

//Referencias del Html

const btnPedirC  = document.querySelector('#btnPedirC');
const btnDetener = document.querySelector('#btnDetener');
const btnNuevo   = document.querySelector('#btnNuevo');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');

const puntosHtml =document.querySelectorAll('small');


//esta funcion me crea un nuevo deck
const crearDeck = () =>{

    for(let i =2 ; i<=10 ; i++){
        for (let tipoC of tiposCartas) {
            deck.push(i+tipoC)
        }
    }

    //la mejorada mia
    // for(let especial of especiales){
    //     for (let tipoC of tiposCartas) {
    //         deck.push(especial+tipoC)     
    //     }  
    // }

    //del profesor
    for(let tipoC of tiposCartas ){
        for(let especial of especiales){
            deck.push(especial+tipoC)
        }
    }

    //esto me permite revolver la baraja (array) importando underscore
    deck = _.shuffle(deck);
    console.log(deck);

    return deck;
}
//llama funcion
crearDeck();

//Esta funcion me permite tomar una carta
const pedirCarta = () =>{

    if (deck.length===0){
        throw ' :no hay carta en el deck';
    }
    const carta = deck.pop(); // saca una carta de la baraja( el ultimo elemento del array)
    return carta;
}


// pedirCarta();

const valorCarta = ( carta ) =>{

    const valor = carta.substring(0,carta.length-1);

    return ( isNaN( valor ) ) ? 
        (valor=== 'A')? 11:10 
        :valor*1 ; //o parseInt para convertir la variable valor de string a int
}

//turno de la computadora
const turnoComputadora = ( puntosMinimos ) => {

    do{
        const carta = pedirCarta();

        puntosComputadora =  puntosComputadora + valorCarta(carta);
    
        puntosHtml[1].innerText =  puntosComputadora;
       
        const imgCarta  = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
    
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21) {
            break;       
        }

    }while(puntosComputadora < puntosMinimos && puntosMinimos<=21);


    setTimeout( () => {

        if(puntosJugador>21){
            alert("computadora ganó");
        }else if(puntosComputadora>21){
            alert("jugador ganó");
        }
        else if(puntosJugador>puntosComputadora){
            alert("juagador ganó");
        }else if(puntosJugador<puntosComputadora){
            alert("computadora ganó");
        }
        else if(puntosJugador===puntosComputadora){
            alert("empate");
        }7

    }, 100 );


}


//Eventos

btnPedirC.addEventListener('click', ()=>{

   const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);

    puntosHtml[0].innerText = puntosJugador;
   
    const imgCartaJ  = document.createElement('img');

    imgCartaJ.src = `assets/cartas/${ carta }.png`;
    imgCartaJ.classList.add('carta');

    divCartasJugador.append(imgCartaJ);

    // turnoComputadora(puntosJugador);
    
    if(puntosJugador > 21){

        btnPedirC.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);

    }
    else if(puntosJugador === 21 ){

        console.warn('genial 21');


        btnPedirC.disabled = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);


    }




});

btnDetener.addEventListener('click',()=>{

    btnPedirC.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
});


btnNuevo.addEventListener('click',()=>{
    
    deck = [];
    crearDeck();

    btnPedirC.disabled= false;
    btnDetener.disabled = false;

    puntosComputadora = 0;
    puntosJugador = 0;
    
    puntosHtml[0].innerText = 0;
    puntosHtml[1].innerText = 0;

    divCartasComputadora.innerHTML = '';
    divCartasJugador.innerHTML = '';

});

//TODO: borrar



