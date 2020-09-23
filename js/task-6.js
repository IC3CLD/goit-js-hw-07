


const valInput = document.querySelector(`#validation-input`);
const p = document.createElement(`p`);
const createAlert = (elem, className, msg) => {   
    elem.classList.add(className);
    elem.textContent = msg;
    valInput.after(elem)
}
const removeAlert = (elem, className) => {
    elem.classList(className);
    elem.textContent = ``;
}

let length = Number(valInput.dataset.length);
valInput.addEventListener(`blur`, () => {
    console.log(valInput.value);
    let textLength = valInput.value.length;

    if(length === textLength && textLength !== ``) {
        valInput.classList.remove(`invalid`);
        valInput.classList.add(`valid`);

        removeAlert(p, `js-alert-invalid`);
        createAlert(p, `js-alert-valid`, `Заполнено верно!!!`);
    } else {
        valInput.classList.remove(`valid`);
        valInput.classList.add(`invalid`);
        
        removeAlert(p, `js-alert-valid`);
        createAlert(p, `js-alert-invalid`, `Заполнено не верно!!!`);
    }
    
})