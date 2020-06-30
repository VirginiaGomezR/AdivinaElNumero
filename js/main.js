'use strict';
let inputNumber = document.querySelector('.inputNumber');
let text = document.querySelector('.text');
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
    text.innerHTML = 'Demasiado bajo';
  } else if (randomNumber == inputNumber.value) {
    text.innerHTML = 'Has ganado campeona!';
  } else {
    text.innerHTML = 'Demasiado alto';
  }
}

button.addEventListener('click', () => validationNumber(randomNumber));
