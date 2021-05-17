"use strict";

const collapsibleHeaders = document.querySelectorAll(".js-collapsible-header");
const collapsibleBox = document.querySelectorAll(".js-collapsible");
for (const collapsibleHeader of collapsibleHeaders) {
  collapsibleHeader.addEventListener("click", switchCollapsible);
}

function switchCollapsible(ev) {
  const clickedHeader = ev.currentTarget;

  const allCollapsibles = document.querySelectorAll(".js-collapsible");
  for (let i = 0; i < allCollapsibles.length; i++) {
    if (clickedHeader === collapsibleHeaders[i]) {
      collapsibleBox[i].classList.toggle("collapsible--close");
    } else {
      collapsibleBox[i].classList.add("collapsible--close");
    }
  }
}
