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
    photo:
      "https://github.com/Adalab/project-promo-m-module-2-team-6/blob/main/src/images/vegan-deburguer-photo.jpg",
  };
  writeImage(formElement.photo);
  newPhotoElements();
  resetPalette();
}

const buttonReset = document.querySelector(".js-photoReset");
buttonReset.addEventListener("click", onResetClickForm);
