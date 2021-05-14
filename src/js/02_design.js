'use strict';

const buttons = document.querySelectorAll ('.js-palette');

function changeColor() {
  const selectedButton = document.querySelector('.js-palette:checked');
  const card = document.querySelector('.js-card');
  card.classList.remove('js-color-blue');
  card.classList.remove('js-color-red');

  // eslint-disable-next-line no-empty
  if (selectedButton.value === 'green') {
  } else if (selectedButton.value === 'red') {
    card.classList.add('js-color-red');
  } else {
    card.classList.add('js-color-blue');
  }
}

changeColor();

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener('click', changeColor);
}