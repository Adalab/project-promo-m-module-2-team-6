'user strict';

const fillForm = document.querySelector(".js-fillform");
const photoFullName = document.querySelector(".js-photoFullName");
const photoJob = document.querySelector(".js-photoJob")

function onFormKeyUp(ev) {
    const element = ev.target;
    const value = element.value;

    if (element.name === 'full-name') {
        photoFullName.innerText = value;
    }

    if (element.name === 'job') {
        photoJob.innerText = value;
    }
}

fillForm.addEventListener('keyup', onFormKeyUp);
