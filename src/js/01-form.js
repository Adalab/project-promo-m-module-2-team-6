"use strict";

const fillForm = document.querySelector(".js-fillform");
const photoFullName = document.querySelector(".js-photoFullName");
const photoJob = document.querySelector(".js-photoJob");
const photoEmail = document.querySelector(".js-photoEmail");
const photoLinkedin = document.querySelector(".js-photoLinkedin");
const photoGitHub = document.querySelector(".js-photoGithub");
const photoPhone = document.querySelector(".js-photoPhone");

let formElement = [
  {
    name: "",
    job: "",
    email: "",
    linkedin: "",
    phone: "",
    github: "",
    photo: "",
  },
];

/*function newFormElements() {
  for (const elements of formElement) {
    if()
}
  newPhotoElements();
}

function newPhotoElements() {
  photoFullName.innerText = formElement.name;
  photoJob.innerText = formElement.job;
  photoEmail.href = formElement.email;
  photoLinkedin.href = formElement.linkedin;
  photoGitHub.href = formElement.github;
  photoPhone.href = formElement.phone;
}*/

function onFormKeyUp(ev) {
  const element = ev.target;
  console.log(element);
  formElement[ev.target.name] = ev.target.value;
  console.log(formElement);
  /*for (const user of formElement) {
    const value = element.value;

    if (element.name === "fullName") {
      photoFullName.innerText = value;
    } else if (element.name === "job") {
      photoJob.innerText = value;
    } else if (element.name === "email") {
      photoEmail.href = value;
    } else if (element.name === "linkedin") {
      photoLinkedin.href = value;
    } else if (element.name === "github") {
      photoGitHub.href = value; //Revisar
    } else {
      photoPhone.href = value;
    }
  }*/
}
/*function onFormKeyUp() {
  newFormElements();
  newPhotoElements();
}*/

fillForm.addEventListener("keyup", onFormKeyUp);
