"use strict";

const fillForm = document.querySelector(".js-fillform");
const photoFullName = document.querySelector(".js-photoFullName");
const photoJob = document.querySelector(".js-photoJob");
const photoEmail = document.querySelector(".js-photoEmail");
const photoLinkedin = document.querySelector(".js-photoLinkedin");
const photoGitHub = document.querySelector(".js-photoGithub");
const photoPhone = document.querySelector(".js-photoPhone");

let formElement = {
  palette: "1",
  name: "Nombre Apellido",
  job: "Front-end developer",
  photo:
    "https://github.com/Adalab/project-promo-m-module-2-team-6/blob/main/src/images/vegan-deburguer-photo.jpg",
  email: "",
  linkedin: "",
  phone: "",
  github: "https://github.com/",
};

function newPhotoElements() {
  photoFullName.innerText = formElement.name;
  photoJob.innerText = formElement.job;
  photoEmail.href = formElement.email;
  photoLinkedin.href += formElement.linkedin;
  photoGitHub.href += formElement.github;
  photoPhone.href = formElement.phone;
}

function onFormKeyUp(ev) {
  const element = ev.target;
  formElement[element.name] = element.value;
  saveInLocalStorage();
}

function handlerFormKeyUp(ev) {
  onFormKeyUp(ev);
  console.log(formElement);
  newPhotoElements();
  getFromLocalStorage();
}

fillForm.addEventListener("keyup", handlerFormKeyUp);

function updateAllInputs(userData) {
  document.querySelector(".js-fullName").value = userData.name;
  document.querySelector(".js-fillJob").value = userData.job;
  document.querySelector(".js-input-email").value = userData.email;
  document.querySelector(".js-input-phone").value = userData.phone;
  document.querySelector(".js-input-linkedin").value = userData.linkedin;
  document.querySelector(".js-input-github").value = userData.github;
}
