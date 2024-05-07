

let buleana = true

console.log(buleana)

let buleana2 = +true
console.log(buleana2)
console.log(typeof(buleana2))

let numeros = [ 
    'uno', 
    'dos',
    'tres',
    'cuatro'
]

console.log(numeros[1])
numeros.unshift('cero')
console.log(numeros)
numeros.shift()
console.log(numeros)
numeros.pop()
console.log(numeros)


let animal = {
    nombre: 'perro',
    patas : 4,
    cola: true
}

function CreaAnimal (x,y,z){
    this.nombre = x
    this.patas = y
    this.cola = z
}

let nuevoAnimal = new CreaAnimal('cien pies',100,false)
console.log(nuevoAnimal)

let person = {
    nombre : 'erika',
    edad : 23,
    saludo : function() {
        console.log('hola mi nombre es '+ this.nombre +' y soy una perrita de '+this.edad + ' de edad')
    }
}
console.log(person.saludo())

let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: saludei
}
function saludei () {
    console.log("Hola, mi nombre es " + this.nombre + " y tengo " + this.edad + " años.");
}

persona.saludar()

/*-------------------------------------*/

let max= 3
let min= 1

const x = Math.floor(Math.random()*(max-min+1)+min)
console.log(x)

const pi = 3.141
console.log(typeof(pi))
console.log((pi))

/********************************************* */
let a = [130,0,4,32,4,23,5,45,62,32,4,3,23,1]
let tA = a.length

let mayor = -Infinity
for (let i = 0; i<=tA; i++){
    suma = a[i] + a[i+1]
    if (mayor <= suma) {
        mayor = suma
    }
}
console.log(mayor)

/***************************** */
const array = [50,4,1,5,6,3]
const{ length } = array 

function maxAdjacentSum(array){
    let maxSum = -Infinity
    for(let i = 0; i < length - 1; i++) {
        const sum = array[i] + array[i+1]
        maxSum = Math.max(maxSum, sum)
    }
    return maxSum   
}
console.log(maxAdjacentSum(array))

/**************************** */
const array1 = [8,6,1,5,6,3]

function maxAdjacentSum1(array){
    let maxSum = -Infinity
    const{ length } = array 
    
    for(let i = 0; i < length - 1; i++) {
        const sum = array[i] + array[i+1]
        if (sum > maxSum) { 
            maxSum = sum
        }
    }
    return maxSum   
}
console.log(maxAdjacentSum1(array1))
 console.log(Math.max(0,4))

/********************************/
const numbers = [1,[2,3],3]
const numbers2 = [...numbers]

numbers2[1][0] = 5

console.log(numbers)
console.log(numbers2)
/***********NUMERO PALINDROMO *************/






/***********FACTORIAL DE UN NUMERO *************/
 function factorial (n){
    switch (n){
        case 0:
            return 1
        
        default:
           return n * factorial (n-1)
    }

 }
console.log(factorial(9))



/***********SUCESION DE FIBONACCI *************/

function fibonacci(n){
    
    switch(n){
        case 0:
            return 0
        case 1:
            return 1
        default:
            return  fibonacci (n-1) + fibonacci(n-2)
            
    }        

}
console.log(fibonacci(3))

/***********NUMERO PALINDROMO *************/
/***********NUMERO PALINDROMO *************/
/***********NUMERO PALINDROMO *************/