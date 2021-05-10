'use strict';

// Collapsable

const collapsibleShare = document.querySelector('.js-collapsible-share');

const arrow3 = document.querySelector('.js-arrow3');

function collapsibleArrowShare() {
  collapsibleShare.classList.toggle('collapsible-hidden');
  arrow3.classList.toggle('fa-chevron-up');
  arrow3.classList.toggle('fa-chevron-down');
}

arrow3.addEventListener('click', collapsibleArrowShare);

// Twitter

const twitterElement = document.querySelector('.js-twitter-btn');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?text=Aquí%20tienes%20mi%20nueva%20tarjeta%20`;
}
twitterElement.addEventListener('click', handleTwitterShare);