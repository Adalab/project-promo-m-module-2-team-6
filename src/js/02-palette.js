/* eslint-disable no-console */
/* eslint-disable no-undef */
"use strict";

// photoFullName ya esta definido en otro script.
const boxNameJob = document.querySelector(".section__photo--boxnamejob");
const photoLinks = document.querySelectorAll(".section__photo--link");

/* Quita los estilos relacionados con las paletas de colores
   a todos los elementos: nombre, trabajo y los links de abajo de la tarjeta.

   Importante: "elemento.classList" hace referencia a todas las clases CSS que
   tiene asignado elemento. Por ejemplo:
      <div id="elemento" classNames="clase1 clase2"></div>
      document.getElementById("elemento").classList -> [clase1, clase2]
      document.getElementById("elemento").classList.add("clase3") ->
                              <div id="elemento" classNames="clase1 clase2 clase3"></div>

      document.getElementById("elemento").classList.remove("clase2") ->
                              <div id="elemento" classNames="clase1 clase3"></div>
*/
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

// solucion 1: nos suscribimos al evento change del formulario
// escribimos menos codigo pero es mas dificil de entender
const form = document.querySelector(".main-cards__form");
form.addEventListener("change", onFormChange);

function onFormChange(event) {
  // solo atendemos los eventos que vienen de los input radio de las
  // paletas de colores
  //console.log("* event.target ->", event.target);
  if (event.target.name === "design-color") {
    resetPalette();

    // obtenemos el valor del input radio que puede ser "g", "r" y "b"
    const paletteValue = event.target.value;
    console.log("* paletteValue ->", paletteValue);

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
  // añadimos las clases en funcion del radio button que se haya seleccionado
  photoFullName.classList.add(`color-palette-${paletteValue}1`);
  boxNameJob.classList.add(`border-palette-${paletteValue}2`);

  // hay que recorrer todos los links para cambiar a cada uno el color del borde
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
