"use strict";

function onResetClickForm() {
  form.reset();
  formElement = {
    name: "Nombre Apellido",
    job: "Front-end developer",
    email: "",
    linkedin: "",
    phone: "",
    github: "",
    photo: "https://placekitten.com/200/200",
  };
  writeImage(formElement.photo);
  newPhotoElements();
  resetPalette();
}

const buttonReset = document.querySelector(".js-photoReset");
buttonReset.addEventListener("click", onResetClickForm);
