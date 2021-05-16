'use strict';

const fillForm = document.querySelector('.js-fillform');
const photoFullName = document.querySelector('.js-photoFullName');
const photoJob = document.querySelector('.js-photoJob');
const photoEmail = document.querySelector('.js-photoEmail');
const photoLinkedin = document.querySelector('.js-photoLinkedin');
const photoGitHub = document.querySelector('.js-photoGithub');
const photoPhone = document.querySelector('.js-photoPhone') ;

const formElement = {
  name:'',
  job:'',
  email: '',
  linkedin:'',
  phone:'',
  github:''
};

function newFormElements(ev) {
  const element = ev.target;
  const value = element.value;
  formElement[element] = value;
}

function newPhotoElements() {
  photoFullName.innerText = formElement.name;
  photoJob.innerText = formElement.job;
  photoEmail.href = formElement.email;
  photoLinkedin.href = formElement.linkedin;
  photoGitHub.href = formElement.github;
  photoPhone.href = formElement.phone;
}

/*function onFormKeyUp(ev) {
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
    photoGitHub.href = value; //Revisar
  }
  else {
    photoPhone.href = value;
  }*/

function onFormKeyUp(){
  newFormElements();
  newPhotoElements();
}

fillForm.addEventListener('keyup', onFormKeyUp);