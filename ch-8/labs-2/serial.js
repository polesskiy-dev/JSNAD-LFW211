'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}

const promisifiedOpA = promisify(opA);
const promisifiedOpB = promisify(opB);
const promisifiedOpC = promisify(opC);

const functionsList = [promisifiedOpA, promisifiedOpB, promisifiedOpC];

(async () => {
  for (let f of functionsList) {
    await f().then(print);
  }
})();
