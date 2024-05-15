//Lavadora//

let tipoLavado = {
    basico : 2000,
    premium : 4000
}
const bas = tipoLavado['basico']
console.log (bas)

function precioLavado (cantidad,tipo) {

    if (cantidad>0 && cantidad<=20 && (tipoLavado[tipo] == 4000||tipoLavado[tipo] == 2000)){

        precio = cantidad * tipoLavado[tipo]

    }else {

    }return precio
}
let price = precioLavado(1,'basico')
console.log(`el precio que debe pagar es : ${price}`)

//
let xi = 53263565353
 
console.log(xi.toLocaleString('es-ES'))

/***************************Ejercicio8*
*/
let carreras = [ 
    {
     nombreCarrera : "Gran Premio de Mónaco",
     pilotos:[
        {nombre: 'piloto1', cuota: 1.5},
        {nombre: 'piloto2', cuota: 2.3},
        {nombre: 'piloto3',cuota: 1.8}
        ]
    },
    {
        nombreCarrera : "Gran Premio de Italia",
        pilotos:[
           {nombre: 'piloto4', cuota: 1.1},
           {nombre: 'piloto5', cuota: 2.2},
           {nombre: 'piloto6',cuota: 3.3}
           ]
    },
    {
        nombreCarrera : "Gran Premio de Alemania",
        pilotos:[
           {nombre: 'piloto7', cuota: 1.2},
           {nombre: 'piloto8', cuota: 2.3},
           {nombre: 'piloto9',cuota: 3.8}
           ]
    }
    
]

console.log(`AQUI PUEDE VER CARREARAS Y PILOTOS DISPONIBLES:`,carreras)
//Winners
const ganador = Math.floor(Math.random()*(2+1)+0)

let second = ganador 

if (second==0 ||second==1){
    second = second + 1
}else{
    second = second - Math.floor(Math.random()*(2)+1)
}

for (let i=0; i<carreras.length;i++){

    const carrera = carreras[i].nombreCarrera
    const campeon = carreras[i].pilotos[ganador]
    let subcampeon = carreras[i].pilotos[second]

    console.log(carrera,campeon,subcampeon )
}

//ELECCION APUESTA

function apuestaUser(pilotoApuesta) {// Función que recibe nombre de piloto y devuelve cuota
    carreras.forEach (carrera => {
        carrera.pilotos.forEach(piloto => {
          if (piloto.nombre === pilotoApuesta) {
         
               cuota = piloto.cuota 
          }
        })
    })
    return cuota
}
let apuesta = prompt('REVISE LAS CARRERAS Y ESCRIBA EL NOMBRE DEL PILOTO QUE DESEA APOSTAR:') 
console.log(apuestaUser(apuesta))// Llamar a la función con el nombre del piloto

// MAYOR DE EDAD
let edad = prompt('escriba su edad:')
switch (edad>=18 ) {
    case true:
        console.log(`su edad es ${edad}`)
        break


        
    case false:
        console.log('usted es menor de edad para apostar')
        break
            
}


//MONTO

do {
    apuesta = prompt('cuando desea apostar')
    if ( isNaN(apuesta) || apuesta<10000  || apuesta>1000000 ){
        alert ('valor no valido')
    }
}
while ( isNaN(apuesta) || apuesta<10000  || apuesta>1000000 )
    
console.log(`Su apuesta :${apuesta}`)

//TIPO DE APUESTA
let tipoDeApuesta
do {
    tipoDeApuesta = prompt('Que tipo de apuesta desea hacer:\n Ganador de la carrera (1) \n Posiciones exactas (2) ')
    if ( isNaN(tipoDeApuesta) || (tipoDeApuesta!=1 && tipoDeApuesta!=2)){
        alert ('tipo de apuesta no valido')
    }else if(tipoDeApuesta==1){
        console.log('TIPO DE APUESTA: 1. Ganador de la carrera')
    }else if(tipoDeApuesta==2){
        console.log('TIPO DE APUESTA: 2. Posiciones exactas')
    }
}
while ( isNaN(tipoDeApuesta) || (tipoDeApuesta!=1 && tipoDeApuesta!=2))
//Gane o NO

function yoGane1 (nombre, cuota, apuesta){
    if (nombre == winner){
        ganancia = cuota * apuesta
    }
    return ganancia
} 

function yoGane2 (nombre, nombre1, cuota, cuota1, apuesta){
    if (nombre == winner && nombre1 == winner2){
        ganancia = cuota * apuesta + cuota1 * apuesta
    }
    return ganancia
} 