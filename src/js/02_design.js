'use strict';

const buttons = document.querySelectorAll ('.js-palette');

function changeColor() {
  const selectedButton = document.querySelector('.js-palette:checked');
  const card = document.querySelector('.js-card');

  if (selectedButton.value === 'green') {
    card.classList.remove('js-color-blue');
    card.classList.remove('js-color-red');
  } else if (selectedButton.value === 'red') {
    card.classList.add('js-color-red');
  } else if (selectedButton.value === 'blue') {
    card.classList.add('js-color-blue');
  }
}

changeColor();

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', changeColor);
}