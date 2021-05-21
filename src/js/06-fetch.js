"use strict";
const createBtn = document.querySelector(".js-create-btn");
const cardResult = document.querySelector(".js-card-link");
const shareHidden = document.querySelector(".js-share-hidden");
const formSubmit = document.querySelector(".js-submit");
const twitterElement = document.querySelector(".js-twitter-btn");
const twitterLinkElement = document.querySelector(".js-twitter-link");

function handleCreateBtn(ev) {
  ev.preventDefault();
  fetchAPI();

  shareHidden.classList.remove("js-share-hidden");
  createBtn.classList.add("js-create-hidden");
  createBtn.disabled = true;
  //twitterHiddenElement.classList.remove("hidden-share");
}
// Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena.
createBtn.addEventListener("click", handleCreateBtn);

//formSubmit.addEventListener("submit", handleCreateBtn);

// Función para enviar los datos al servidor para obtener la URL para compartir.
function fetchAPI() {
  //const url = "https://profileawesome.herokuapp.com/card";
  // const data = getUserData();

  const url = "https://awesome-profile-cards.herokuapp.com/card";
  const data = formElement;

  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        data.cardURL;
        let shareLink = data.cardURL;
        let linkElement = document.querySelector(".js-card-link");
        linkElement.innerHTML = `<a href="${shareLink}" class="share__result--link js-card-link" target="_blank">${shareLink}</a>`;
      } else {
        cardResult.innerHTML = `Debes cumplimentar todos los campos para poder crear tu enlace`;
      }
    });
}

// Añadir la funcionalidad de compartir en Twitter. Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta.

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/?lang=es=${shareLink}`;
}
twitterElement.addEventListener("click", handleTwitterShare);
