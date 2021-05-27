"use strict";

function onResetClickForm() {
  form.reset();
  formElement = {
    name: "",
    job: "",
    email: "",
    linkedin: "",
    phone: "",
    github: "",
    photo: "./assets/images/vegan-deburguer-photo.jpg",
  };
  writeImage(formElement.photo);
  newPhotoElements();
  resetPalette();
}

const buttonReset = document.querySelector(".js-photoReset");
buttonReset.addEventListener("click", onResetClickForm);
