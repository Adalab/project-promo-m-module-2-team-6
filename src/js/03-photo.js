'use strict';

// Componente de foto de perfil. Para que funcione, necesitamos estos elementos:
// Campo de tipo "file"
const fr = new FileReader();
// Botón: 
const fileField = document.querySelector('.js__profile-upload-btn');
// Contenedor principal de la imagen:
const profileImage = document.querySelector('.js__profile-image');
// Contenedor de la previsualización de la imagen:
const profilePreview = document.querySelector('.js__profile-preview');

function getImage(e){
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

function writeImage() {
  profileImage.style.backgroundImage = `url(${fr.result})`;
  profilePreview.style.backgroundImage = `url(${fr.result})`;
}

/*function fakeFileClick() {
  fileField.click();
}*/

fileField.addEventListener('change', getImage);