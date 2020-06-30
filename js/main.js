'use strict';
let inputNumber = document.querySelector('.inputNumber');
const button = document.querySelector('.js-clickButton');

//Función que genera número aleatorio
let max = 100;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(max);
console.log(randomNumber);

//Funciones

function validationNumber(randomNumber) {
  if (randomNumber > inputNumber.value) {
    console.log('Demasiado bajo');
  } else if (randomNumber == inputNumber.value) {
    console.log('Has ganado campeona!');
  } else {
    console.log('Demasiado alto');
  }
}

button.addEventListener('click', () => validationNumber(randomNumber));
