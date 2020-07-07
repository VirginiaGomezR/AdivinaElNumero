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
console.log(randomNumber);

//Funcion: validación de número

function validationNumber(randomNumber) {
  if (randomNumber >= 100 || randomNumber <= 0) {
    text.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (randomNumber > inputNumber.value) {
    text.innerHTML = 'Demasiado bajo';
  } else if (randomNumber == inputNumber.value) {
    text.innerHTML = 'Has ganado campeona!';
  } else {
    text.innerHTML = 'Demasiado alto';
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

//button.addEventListener('click', () => validationNumber(randomNumber));
button.addEventListener('click', handlerEvent);
