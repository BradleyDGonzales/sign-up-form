const form = document.forms[0];
const selectPwdElement = form.querySelector(`input[name="pwd"]`);
const selectCpwdElement = form.querySelector(`input[name="cpwd"]`);
const button = form.querySelector(`input[type="submit"]`)
//const selectCpwdElement = form2.querySelector(`input[name="cpwd"]`);
button.addEventListener('click', function(e) {
    let pwd = selectPwdElement.value;
    let cpwd = selectCpwdElement.value;
    if (pwd !== cpwd) {
        selectPwdElement.classList.add(`error`);
        selectCpwdElement.classList.add(`error`);
        button.setCustomValidity(`Passwords do not match`);
    }
    else {
        selectPwdElement.classList.remove(`error`);
        selectCpwdElement.classList.remove(`error`);
        button.setCustomValidity(``);
    }
})
