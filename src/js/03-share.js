'use strict';

// Collapsable

const arrow = document.querySelector('.js-hidden');

const arrowElement = document.querySelector('.js-hidden');

function handleShow() {
  arrow.classList.toggle('collapsable--close');
}

arrowElement.addEventListener('click', handleShow);

// Twitter

const twitterElement = document.querySelector('.js-twitter-btn');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?text=Aquí%20tienes%20mi%20nueva%20tarjeta%20`;
}
//twitterElement.addEventListener('click', handleTwitterShare);