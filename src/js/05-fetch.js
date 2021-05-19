"use strict";

const createBtn = document.querySelector(".js-create-btn");
const cardResult = document.querySelector(".js-card-link");
const shareHidden = document.querySelector(".js-share-hidden");
const formSubmit = document.querySelector(".js-submit");

function handleCreateBtn(ev) {
  ev.preventDefault();
  fetchAPI();

  shareHidden.classList.remove("js-share-hidden");
  createBtn.classList.add("js-create-hidden");
  createBtn.disabled = true;
  twitterHiddenElement.classList.remove("hidden-share");
}
// Al hacer clic en el botón de "Enviar" enviaremos el formulario (submit) a un API que devolverá la URL de una web con la tarjeta de visita con la información rellena.
createBtn.addEventListener("click", handleCreateBtn);
formSubmit.addEventListener("submit", handleCreateBtn);

// Función para enviar los datos al servidor para obtener la URL para compartir.
function fetchAPI() {
  const url = "https://profileawesome.herokuapp.com/card";
  const data = getUserData();
  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        data.cardURL;
        shareLink = data.cardURL;
        const linkElement = document.querySelector(".js-card-link");
        linkElement.innerHTML = `<a href="${shareLink}" class="share__result--link js-card-link" target="_blank">${shareLink}</a>;`;
      } else {
        cardResult.innerHTML =
          "Debes cumplimentar todos los campos para poder crear tu enlace";
      }
    });
}

// Añadir la funcionalidad de compartir en Twitter. Mostraremos esta URL para que el usuario verifique si la tarjeta está bien definida y un botón de "Compartir" que enlazará a Twitter donde habrá un tweet con texto predefinido que incluye la URL de la tarjeta.

const twitterElement = document.querySelector(".js-twitter-btn");
const twitterLinkElement = document.querySelector(".js-twitter-link");

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`;
}
twitterElement.addEventListener("click", handleTwitterShare);
