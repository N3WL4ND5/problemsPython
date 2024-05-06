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

const adversario = 'Hulk'

let loki_disfraz = {
    Ironman: "Odin",
    Hulk: 'Thanos',
    Thor: 'Magneto'
}

let loki_demas = 'loki'

let loki = loki_disfraz[adversario]  || loki_demas
console.log(loki)


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


let z = 0
do{
    console.log(z)
    z++
}while(z<6)


let x = 0
while(x<=3){
    console.log(x)
    x++
}



