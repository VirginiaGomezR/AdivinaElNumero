'use strict';
let inputNumber = document.querySelector('.inputNumber');
let text = document.querySelector('.text');
const tries = document.querySelector('.tries');
const button = document.querySelector('.js-clickButton');

//Función que genera número aleatorio
let max = 100;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(max);
console.log('Mi número aleatorio es:', randomNumber);

//Funcion: validación de número

function validationNumber() {
  let number = parseInt(inputNumber.value);

  if (number >= 1 && number <= 100) {
    if (number > randomNumber) {
      text.innerHTML = 'Demasiado alto';
    } else if (number < randomNumber) {
      text.innerHTML = 'Demasiado bajo';
    } else if (number === randomNumber) {
      text.innerHTML = 'Has ganado campeona!';
    }
  } else {
    text.innerHTML = 'El número debe estar entre 1 y 100';
  }
}

//Funcion: contador de intentos
let acc = 0;
function counter() {
  tries.innerHTML = acc++;
}

//Funcion: función manejadora

function handlerEvent(ev) {
  ev.preventDefault();
  validationNumber();
  counter();
}

button.addEventListener('click', handlerEvent);
