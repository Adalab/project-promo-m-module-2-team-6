"use strict";

const fr = new FileReader();
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", () => writeImage(fr.result));
  fr.readAsDataURL(myFile);
}

function writeImage(url) {
  updatePhoto(url);
  formElement.photo = url;
  saveInLocalStorage();
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);

function updatePhoto(photo) {
  profileImage.style.backgroundImage = `url(${photo})`;
  profilePreview.style.backgroundImage = `url(${photo})`;
}
