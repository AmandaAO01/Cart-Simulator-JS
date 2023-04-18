console.log('hola mi amore')

// Crea una función que tome dos números como argumentos y devuelva su suma.
const suma = (number1, number2) => console.log(`La suma de ${number1} + ${number2} es ${number1+number2}`)
suma(5,6)

// Crea una función que tome una cadena como argumento y devuelva la cadena invertida.
const invertir = (message) => {
    //console.log(message.split(''))
    //console.log(message.split('').reverse())
    console.log(message.split('').reverse().join(''))
}
invertir('hola, buenas tardes')

// Crea una función que tome un arreglo de números como argumento y devuelva la suma de todos los números en el arreglo.
const sumArray = (arrayNumbs) => console.log(arrayNumbs.reduce((prev, accum) => {
    return prev + accum
}))
sumArray([1,2,3,4,5,6,7,8,9])

// Crea una función que tome un objeto como argumento y devuelva el número de propiedades que tiene.
const totalProperty = (obj) => {
    let count = 0
    for (let property in obj)
        count +=1
    return count
}
console.log(`FORMA 1: El objeto tiene ${totalProperty({animal: 'conejo', color: 'blanco', size: 'chico', eyes: 1})} propiedades`)

const propertyTotal = (obj) => console.log(`FORMA 2: El objeto tiene ${Object.entries(obj).length} propiedades`)
propertyTotal({animal: 'sapo', color: 'blanco', size: 'chico', eyes: 1})

// Crea una función que tome un arreglo de objetos y devuelva un nuevo arreglo que contenga solo los objetos con una propiedad específica.
const funcion5 = (objArray) => {
    let arrayMapeado = objArray.map((object, index) => {
        if (Object.keys(object).includes("color"))
            return object
    })
    console.log(arrayMapeado)
}
funcion5([{figura: 'circulo', color: 'rojo'},{cosa: 'vaso', color: 'negro'}])

// Crea una función que tome un arreglo de números como argumento y devuelva un nuevo arreglo que contenga solo los números pares.
const funcion6 = (arreglo) => {
    return arreglo.map((num) => {
        if (num%2==0)
            return num
    })
    .filter(Boolean)
}
console.log(funcion6([3,6,1,9,24]))

const pairs = (arreglo) => {
    return arreglo.filter(n => n % 2 === 0)
}
console.log(pairs([3,6,1,9,24]))

const arrayPairs = (arreglo) => console.log(arreglo.flatMap(n => n % 2 === 0 ? n : []))
arrayPairs([3,6,1,9,24])

// Crea una función que tome un objeto como argumento y devuelva un nuevo objeto que tenga las mismas propiedades y valores, pero con todas las cadenas en mayúsculas.
const upperCase = (object) => {
    let newObject = {}
    Object.entries(object).forEach((property) => {
        newObject = {
            ...newObject,
            [property[0].toString().toUpperCase()]: property[1].toString().toUpperCase()
        }
    })
    console.log(newObject)
    return newObject
}
upperCase({id: '0', name: 'Amanda', lastname: 'Acevedo'})

// Crea una función que tome un número como argumento y devuelva true si es un número primo, y false si no lo es.
const primeNumbs = (n) => {
    let count = 0
    if (n === 1) {
        return false
    }
    else {
        [1,2,3,4,5,6,7,8,9].forEach((divisor) => {
            if (n % divisor === 0) {
                count++
            }
        })
        return count > 2 ? false : true
    }
}
console.log(primeNumbs(97) ? 'Es primo' : 'No es primo')

// Crea una función que tome una cadena como argumento y devuelva true si es un palíndromo (se lee igual de adelante hacia atrás que de atrás hacia adelante), y false si no lo es.
const palindromo = (frase) => {
    aux = frase.toLowerCase().split(' ').reverse().join('')
    frase = frase.toLowerCase().split(' ').join('')
    console.log(frase)
    console.log(aux)
    if (frase !== aux) {
        return false
    }
        return true
}
console.log(palindromo('salas')? 'Es palindromo' : 'No es palindromo')

// Crea una función que tome dos arreglos como argumentos y devuelva un nuevo arreglo que contenga los elementos que se encuentran en ambos arreglos.
const concat = (array1, array2) => console.log(`Array1 + Array2 = ${array1.concat(array2)}`)
concat([0,'Mamá'],[1,'traeme desayuno'])