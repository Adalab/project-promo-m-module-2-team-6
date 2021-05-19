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
  profileImage.style.backgroundImage = `url(${url})`;
  profilePreview.style.backgroundImage = `url(${url})`;
  formElement.photo = url;
}

function fakeFileClick() {
  fileField.click();
}

fileField.addEventListener("change", getImage);
