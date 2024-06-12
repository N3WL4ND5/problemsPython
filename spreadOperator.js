const numeros = [1,2,]

let numeroCopia = [8,9,0 ]

numeroCopia[0]= 7

console.log(numeros);
console.log(numeroCopia);

console.log([...numeros,...numeroCopia,10,11,12]);

const user = {
    name :'juan',
    id : 1234
}

const userContact = {
    email:'newlanfdsyt@gmail.com',
    telefono: 3209863479
}

const fullUser = {...user,...userContact}

console.log(user);
console.log(userContact);
console.log(fullUser);
 
/////////////SET y MAP /////////////


//                THIS

