function saveInLocalStorage() {
  const userDataInString = JSON.stringify(formElement);
  localStorage.setItem("userData", userDataInString);
}

function getFromLocalStorage() {
  const userDataInString = localStorage.getItem("userData");

  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);

    formElement = userData;
    newPhotoElements();

    updateAllInputs(userData);
    handlePalette(userData.palette);
    updatePhoto(userData.photo);
  }
}

getFromLocalStorage();
