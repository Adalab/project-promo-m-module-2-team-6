'user strict';

const fillForm = document.querySelector(".js-fillform");
const fillFullName = document.querySelector(".js-fullName");
/*const fillJob = document.querySelector(".js-fillJob");*/
const photoFullName = document.querySelector(".js-photoFullName");
/*const photoJob = document.querySelector(".js-photoJob")*/

function changeName(ev) {
    const fillFullNameChange = ev.target;
    const fillFullNameValue = fillFullNameChange.value;

    if (fillFullNameChange.name === 'full-name') {
        photoFullName.innerHTML = fillFullNameValue;
    }
    console.log('target', ev.target);
    console.log('current target', ev.currentTarget);
}

//fillForm.addEventListener(changeName);
//fillForm.addEventListener('change', changeName);
/*x.addEventListener('change', changeJob)*/