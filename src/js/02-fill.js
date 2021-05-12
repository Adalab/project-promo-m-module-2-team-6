'use strict';

const fillForm = document.querySelector('.js-fillform');
const photoFullName = document.querySelector('.js-photoFullName');
const photoJob = document.querySelector('.js-photoJob');
const photoEmail = document.querySelector('.js-photoEmail');
const photoLinkedin = document.querySelector('.js-photoLinkedin');
const photoGitHub = document.querySelector('.js-photoGithub');

function onFormKeyUp(ev) {
  const element = ev.target;
  const value = element.value;

  if (element.name === 'full-name') {
    photoFullName.innerText = value;
  }
  else if (element.name === 'job') {
    photoJob.innerText = value;
  }
  else if (element.name === 'email') {
    photoEmail.href = value;
  }
  else if (element.name === 'linkedin') {
    photoLinkedin.href = value;
  }
  else if (element.name === 'github') {
    photoGitHub.href = value;
  }
}

fillForm.addEventListener('keyup', onFormKeyUp);
