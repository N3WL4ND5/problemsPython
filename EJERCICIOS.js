//ejercicio if, switch, array//

const adversario1 = ''
let loki1 = ''

if (adversario1 == 'Iron-man'){
    loki1 = 'Magneto' ;
}
else if (adversario1 == 'Hulk'){
    loki1 = 'Odin' ;
}
else if (adversario1 == 'Thor'){
    loki1 = 'Thanos' ;
}    
else {
        loki1 = 'Loki' ;  
}

console.log(loki1)

/*--------------------------------------------*/

const adversario2 = 'Spider-ma'
let loki2 = ''

switch (adversario2) {
    case 'Iron-man' :
        loki2 = 'Thanos'
        break

    case 'Hulk' :
        loki2 = 'Odin'
        break

    case 'Spider-man' :
        loki2 = 'Octavio'
        break    
        
    default :
        loki2 = 'loki'

}

console.log(loki2)

/*-----------------------------------*/
//objeto de metodos flecha
const adversario = 'Hulk'

let loki_disfraz = {
    Ironman: ()=> "Odin",
    Hulk: ()=>'Thanos',
    Thor: ()=>'Magneto'
}

let loki_demas = 'loki'

let loki = loki_disfraz[adversario]?loki_disfraz[adversario]():loki_demas
console.log(loki)

/*---------------------------------------------------*/

// Definición de la función con parámetros nombrados
function saludar({nombre, edad}) {
    console.log(`Hola, ${nombre}. Tienes ${edad} años.`);
}

// Llamada de la función con argumentos nombrados
saludar({nombre: 'Jn', edad: 14});

//EJERCICIO VALIDACION STOCK//

let reqQuantity = 999
const stockQuantity = 998

let  validQ = reqQuantity <= stockQuantity? 
'available stock': `falta ${reqQuantity - stockQuantity} unidades en stock` 

console.log(validQ)


//FOR, DO-WHILE, WHILE//

for (let y=0; y<5; y++){
    console.log(y)
}


let z = 1
do{
    console.log(z)
    z++
}while(z<6)


let x = 0
while(x<=3){
    console.log(x)
    x++
}


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
        nombreCarrera : "Giro Italia",
        pilotos:[
           {nombre: 'piloto4', cuota: 1.1},
           {nombre: 'piloto5', cuota: 2.2},
           {nombre: 'piloto6',cuota: 3.3}
           ]
    },
    {
        nombreCarrera : "Vuelta de Alemania",
        pilotos:[
           {nombre: 'piloto7', cuota: 1.2},
           {nombre: 'piloto8', cuota: 2.3},
           {nombre: 'piloto9',cuota: 3.4}
           ]
    }
    
]
console.log(carreras[0].pilotos[2].cuota)


const ganador = Math.floor(Math.random()*(2+1)+0)

console.log(ganador)

let second = Math.floor(Math.random()*(2+1)+0) 
    while(second==ganador){
    second = Math.floor(Math.random()*(2+1)+0)
    }
console.log(second)


for (let i=0; i<carreras.length;i++){

    const carrera = carreras[i].nombreCarrera
    const campeon = carreras[i].pilotos[ganador]
     second = carreras[i].pilotos[second]


    console.log(carrera,campeon, second)
}
// Función para encontrar la información de un piloto por su nombre
function encontrarInfoPiloto(pilotoApuesta) {
    carreras.forEach(carrera => {
      carrera.pilotos.forEach(piloto => {
        if (piloto.nombre === pilotoApuesta) {
          console.log(`Carrera: ${carrera.nombreCarrera}`)
          console.log(`Piloto: ${piloto.nombre}, Cuota: ${piloto.cuota}`)
        }
      });
    });
  }
  
  // Llamar a la función con el nombre del piloto
 encontrarInfoPiloto("piloto");

 
 /************************ */
 //Funciones anonimas

const saludo = function(mensaje) {
  console.log(mensaje)
}

saludo("funcion anonima!")
/****************************** */
//Funciones flecha
const saludo1 = mensaje => {
    console.log(mensaje)
  }
  
  saludo1("Hola, funcion flecha!")
  