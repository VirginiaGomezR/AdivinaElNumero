'use strict';
const inputNumber = document.querySelector('.js-inputNumber');
const text = document.querySelector('.js-text');
const tries = document.querySelector('.js-tries');

const button = document.querySelector('.js-clickButton');

//Función que genera número aleatorio
let max = 100;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(max);
console.log('Mi número aleatorio es:', randomNumber);

//Funciones

function handleSubmitButton(ev) {
  ev.preventDefault();
  //prevenir el evento del formulario ya que es de tipo "submit" ev.preventDefault();
  validationNumber();
  updateCounter();
}

function validationNumber() {
  console.log(inputNumber.value, randomNumber, inputNumber === randomNumber);
  //transformamos a número para que la equivalencia sea númerica para ambos valores
  let numberValue = parseInt(inputNumber.value);
  if (numberValue <= 1 || numberValue >= 100) {
    attemps++;
    text.innerHTML = 'El número debe estar entre 1 y 100';
  } else if (randomNumber > numberValue) {
    attemps++;
    text.innerHTML = 'Demasiado bajo';
  } else if (randomNumber === numberValue) {
    text.innerHTML = 'Has ganado campeona!';
  } else {
    attemps++;
    text.innerHTML = 'Demasiado alto';
  }
}

//Intentos
let attemps = 0;
function updateCounter() {
  attemps++; //equivale a (attemps=attemps +1)
  tries.innerHTML = attemps;
  console.log('Incrementando', attemps);
}

button.addEventListener('click', handleSubmitButton);
