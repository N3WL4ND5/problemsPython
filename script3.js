

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

let a = [60,32,4,32,4,23,5,45,15,32,4,3,23,1]
let tA = a.length
console.log(tA)
let mayor = -Infinity
for (let i =0;i<=tA;i++){
    suma= a[i]+a[i+1]
    if (mayor <= suma){
        mayor = suma
    }else{
        mayor = mayor
    }

   
}
console.log(mayor)







