

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
console.log(numeros.pop())
console.log(numeros)


let animal = {
    nombre: 'perro',
    patas : 4,
    cola: true
}
console.log(animal)
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
let ar = [130,0,4,32,4,23,5,45,62,32,4,3,23,1]
let tA = ar.length

let mayor = -Infinity
for (let i = 0; i<=tA; i++){
    suma = ar[i] + ar[i+1]
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
let arregloNumeros = [1, 2, 3, 4, 5]
let cadenaNumeros = parseInt(arregloNumeros.join(''))
console.log(cadenaNumeros)


const numero = +'1'
const arrayNumero = numero.toString().split('')
console.log(arrayNumero)
console.log(typeof(numero))
let su = numero+1
console.log(su)
let preub = 2//+prompt('digite un numero')
let t = preub + (1/3)
console.log(typeof(t))
console.log(t)



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

}console.log(fibonacci(10))


/***********SUCESION DE FIBONACCI (No recursiva)*************/
function fibonacci1(n){
    a = 0
    b = 1 
    if (n==0)return a
    if (n==1)return b

    for(i=2; i<=n; i++){
        c = a+b
        a = b
        b = c
    }
    return b
}console.log(fibonacci1(9))

function fibo(n){
    const fib = [0,1]
    for(i=2; i<=n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }   return fib[n]
    }   
console.log(fibo(1))
/***********TWOSUM*************/


/***********TWOSIM(sin : for, while, do while,if, ternario, switch) *************/
/***********NUMERO PALINDROMO *************/

let Producto = {
    lenteja: true,
    crema: false,
    arroz: true,
    leche: false
}

function IVA (x){
    if (Producto[x]==true){
        msm = `${x}: Paga iva`
    }else if(Producto[x]==false){
        msm = `${x}: No paga iva`
    }else
        msm = `${x}: no hace parte de nuestros productos`
    return msm
}

console.log(IVA('holaMundo'))
/******************************************** */

let entrada = '2 3 5'
let entrada2 = entrada.split(' ')

//console.log(entrada2)
//let prueba = entrada2[0]
//console.log(typeof(prueba))

//console.log(entrada2num)
//let prueba2 = entrada2num[0]
//console.log(typeof(prueba2))

    a = parseInt(entrada2[0])
    b = parseInt(entrada2[1])
    k = parseInt(entrada2[2])

function funcionLineal(a1,b1,k1) {

    for (let y=1; y<=k1; y++){

        resultado= a1 * y + b1

        console.log(resultado)
    }
}
funcionLineal(a,b,k)

/**************CLASES**************** */

class Personaje {
    constructor(nombre,años,genero,elemento){
        this._nombre = nombre
        this._años = años
        this._genero = genero
        this._elemento = elemento
    }
    hablar(){
        return `hola mi nombre es ${this._nombre} tengo ${this._años } y mi elemento es ${this._elemento} `
    }
    sumar(){}
    saltar(){}

    get nombre(){ //METODO que devuelve el valor de ese atributo del objeto instanciado
        return this._nombre
    }
    set nombreNuevo(otro){ //METODO que cambia valor de ese atributo del objeto instanciado
        this._nombre = otro
    }

}

let personaje1 = new Personaje(`aang`,12,`hombre`,true)

console.log(personaje1)

personaje1.nombre = 'korra'
console.log(personaje1)

class Secundario extends Personaje {//subclase de la clase Personaje
    constructor(nombre,años,rol){
        super(nombre,años)
        this._rol = rol//(años, elemento, nombre)
    }
    get rrol(){
        return this._rol
    }
    set nuevoRol(otroRol){

        this._rol = otroRol
    }
}

let secundario1 = new Secundario('Appa',15,'aire')
console.log(secundario1)

console.log(secundario1.hablar())
 console.log(secundario1.rrol)

secundario1.nombreNuevo = 'Mommo'
console.log(secundario1)
secundario1.nuevoRol = 'prstfituta'
console.log(secundario1)