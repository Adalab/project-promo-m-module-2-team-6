'use strict';

// Collapsable

const collapsibleShare = document.querySelector('.share__create');

const share = document.querySelector('.share');
const arrow = document.querySelector('.arrow');

function collapsibleArrowShare() {
  collapsibleShare.classList.toggle('collapsible-hidden');
  arrow.classList.toggle('fa-chevron-up');
  arrow.classList.toggle('fa-chevron-down');
}

share.addEventListener('click', collapsibleArrowShare);

/* Twitter

const twitterElement = document.querySelector('.js-twitter-btn');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?text=Aquí%20tienes%20mi%20nueva%20tarjeta%20`;
}
twitterElement.addEventListener('click', handleTwitterShare);*/