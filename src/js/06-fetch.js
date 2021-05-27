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
}

createBtn.addEventListener("click", handleCreateBtn);

function fetchAPI() {
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

function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/?lang=es=${shareLink}`;
}
twitterElement.addEventListener("click", handleTwitterShare);
