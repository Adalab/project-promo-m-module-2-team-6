'use strict';

/*const collapsibleHeaders = document.querySelectorAll('.js-collapsible-header');

for (const collapsibleHeader of collapsibleHeaders) {
  collapsibleHeader.addEventListener('click', switchCollapsible);
}

function switchCollapsible(ev) {
  const clickedHeader = ev.currentTarget;
  const clickedCollapsible = clickedHeader.parentNode;

  const allCollapsibles = document.querySelectorAll(
    '.js-collapsible');

  for (const collapsible of allCollapsibles) {
    if (clickedCollapsible === collapsible) {
      collapsible.classList.toggle('collapsible--close');
    } else {
      collapsible.classList.add('collapsible--close');
    }
  }
}*/

const collapsibleShare = document.querySelector('.share__create');

const share = document.querySelector('.share');
const arrow = document.querySelector('.arrow');

function collapsibleArrowShare() {
  collapsibleShare.classList.toggle('collapsible--close');
  arrow.classList.toggle('fa-chevron-up');
  arrow.classList.toggle('fa-chevron-down');
}

share.addEventListener('click', collapsibleArrowShare);

/* Twitter

const twitterElement = document.querySelector('.js-card-result');
const twitterLinkElement = document.querySelector('.js-twitter-link');

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?text=Aquí%20tienes%20mi%20nueva%20tarjeta%20`;
}
twitterElement.addEventListener('click', handleTwitterShare);*/
