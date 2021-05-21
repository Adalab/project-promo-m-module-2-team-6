function saveInLocalStorage() {
  const userDataInString = JSON.stringify(formElement);
  localStorage.setItem("userData", userDataInString);
}

// Al arrancar la página recogemos los datos desde el local storage y actualizamos el formulario
function getFromLocalStorage() {
  // obtengo los datos desde el local storage
  const userDataInString = localStorage.getItem("userData");
  // compruebo si hay datos válidos, es decir si la usuaria ya había entrado en nuestra web anteriormente
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);

    // Propago los datos desde el formulario a la tarjeta
    formElement = userData;
    newPhotoElements();

    updateAllInputs(userData);
    handlePalette(userData.palette);
    updatePhoto(userData.photo);
  }
}

getFromLocalStorage();
