'use strict'

const prefixer = (prefix) => {
    return (message) => prefix + message
}

const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')

console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'



