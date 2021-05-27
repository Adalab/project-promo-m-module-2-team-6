"use strict";

const boxNameJob = document.querySelector(".section__photo--boxnamejob");
const photoLinks = document.querySelectorAll(".section__photo--link");

function resetPalette() {
  console.log(photoFullName.classList);
  photoFullName.classList.remove(
    "color-palette-g1",
    "color-palette-b1",
    "color-palette-r1"
  );

  boxNameJob.classList.remove(
    "border-palette-r2",
    "border-palette-g2",
    "border-palette-b2"
  );

  for (const p of photoLinks) {
    ("b");
    p.classList.remove(
      "border-palette-g3",
      "border-palette-r3",
      "border-palette-b3"
    );
  }
}

const form = document.querySelector(".main-cards__form");
form.addEventListener("change", onFormChange);

function onFormChange(event) {
  if (event.target.name === "design-color") {
    resetPalette();

    const paletteValue = event.target.value;
    console.log(paletteValue);

    if (paletteValue === "g") {
      formElement.palette = "1";
    } else if (paletteValue === "r") {
      formElement.palette = "2";
    } else if (paletteValue === "b") {
      formElement.palette = "3";
    }
    saveInLocalStorage();

    updatePalette(paletteValue);
  }
}

function updatePalette(paletteValue) {
  photoFullName.classList.add(`color-palette-${paletteValue}1`);
  boxNameJob.classList.add(`border-palette-${paletteValue}2`);

  for (const p of photoLinks) {
    p.classList.add(`border-palette-${paletteValue}3`);
  }
}

function handlePalette(selectedPalette) {
  document.querySelector(`.js-colorPalette${selectedPalette}`).checked = true;
  let paletteValue;
  if (selectedPalette === "1") {
    paletteValue = "g";
  } else if (selectedPalette === "2") {
    paletteValue = "r";
  } else if (selectedPalette === "3") {
    paletteValue = "b";
  }
  updatePalette(paletteValue);
}
