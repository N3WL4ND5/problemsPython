function calcularAumento(sueldo, categoria) {
    let porcentajeAumento
    switch(categoria) {
        case 1:
            porcentajeAumento = 0.12;
            break
        case 2:
            porcentajeAumento = 0.10;
            break
        case 3:
            porcentajeAumento = 0.08;
            break
        case 4:
            porcentajeAumento = 0.05;
            break
        default:
            return "Categoría inválida"
    }
    return sueldo * (1 + porcentajeAumento)
}

let sueldo = 30000
let categoria = 2
console.log(calcularAumento(sueldo, categoria))

/*****************************************************/

function calcularAumentoCondicional(sueldo) {
    let porcentajeAumento
    if (sueldo < 300000) {
        porcentajeAumento = 0.12
    } else if (sueldo < 500000) {
        porcentajeAumento = 0.10
    } else {
        porcentajeAumento = 0.05
    }
    return sueldo * (1 + porcentajeAumento)
}

let sueldo1 = 450000
console.log(calcularAumentoCondicional(sueldo1))

/*****************************************************/

function calcularCostoSemilla(verdura, tipo, area) {
    const semillas = {
        "Cebolla": {"Larga": 1500, "De huevo": 1300, "Criolla": 1300},
        "Papa": {"Pastusa": 900, "Salentuna": 800},
        "Tomate": {"Santa Clara": 1200}
    }

    if (semillas[verdura] && semillas[verdura][tipo]) {
        const costoSemilla = semillas[verdura][tipo]
        const costoTotal = costoSemilla * area
        return costoTotal
    } else {
        return "Verdura o tipo inválido"
    }
}

let verdura = "Cebolla"
let tipo = "Larga"
let area = 5
console.log(calcularCostoSemilla(verdura, tipo, area))

/*****************************************************/

function calcularNotaDefinitiva(nota1, nota2, nota3) {
    const notaDefinitiva = (nota1 * 0.3) + (nota2 * 0.3) + (nota3 * 0.4)

    let descuentoOMulta
    if (notaDefinitiva >= 4.5) {
        descuentoOMulta = "Descuento del 40%"
    } else if (notaDefinitiva >= 4.0) {
        descuentoOMulta = "Descuento del 30%"
    } else if (notaDefinitiva >= 3.0) {
        descuentoOMulta = "Descuento del 20%"
    } else if (notaDefinitiva >= 2.0) {
        descuentoOMulta = "Multa del 20%"
    } else if (notaDefinitiva >= 1.0) {
        descuentoOMulta = "Multa del 40%"
    } else {
        descuentoOMulta = "Multa del 50%"
    }

    return {
        notaDefinitiva: notaDefinitiva,
        descuentoOMulta: descuentoOMulta
    };
}

let nota1 = 3.5
let nota2 = 4.0
let nota3 = 3.8
console.log(calcularNotaDefinitiva(nota1, nota2, nota3))


//                EJERCICIOS ADN                            //

let chainSize = 5
const adenina = 'A'
const citosina = 'C'
const guanina = 'G'
const timina = 'T'
let chainType = adenina
let chain = ''

for(let i=0; i<chainSize; i++){
    chain += chainType
}
console.log(chain);

chain= ''
let nBase1 = Math.floor(Math.random()*(4)+1) == 1? adenina :
             Math.floor(Math.random()*(4)+1) == 2? citosina : 
             Math.floor(Math.random()*(4)+1) == 3? guanina :
             Math.floor(Math.random()*(4)+1) == 4? timina : timina
             
let nBase2 = null

do{ 
    nBase2 = Math.floor(Math.random()*(4)+1) == 1? adenina :
             Math.floor(Math.random()*(4)+1) == 2? citosina : 
             Math.floor(Math.random()*(4)+1) == 3? guanina :
             Math.floor(Math.random()*(4)+1) == 4? timina : adenina
}while(nBase1==nBase2)

console.log(nBase1);
console.log(nBase2);

for(let i=0; i<chainSize; i++){
    chain += Math.floor(Math.random()*(2)+1)==1?nBase1:nBase2
}
console.log(chain);
// NUMERO PRIMO//

numero = 5

for (let i = 2; i < numero; i++) {
    
    if(numero%i!=0){
        residuo = true
    }else{
        residuo = false
    }
    
}console.log(residuo)

// Número que queremos verificar
const num = 100000007;
let isPrime = true

if (num < 2) {
    isPrime = false;
} else {
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false
            break
        }
    }
}

if (isPrime) {
    console.log(num + " es un número primo");
} else {
    console.log(num + " no es un número primo");
}
//Formas de encontrar primos monstruosos!! 2**(p-1) donde p es un numero primo