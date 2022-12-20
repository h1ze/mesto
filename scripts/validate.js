
function hideError(input, error, config) {
    error.textContent = '';
    error.classList.remove(config.errorClass);
    input.classList.remove(config.inputErrorClass);
};

function showError(input, error, config) {
    error.textContent = input.validationMessage;
    error.classList.add(config.errorClass);
    input.classList.add(config.inputErrorClass);
};

function checkInputValidity(input, config) {
    const error = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
        hideError(input, error, config);
    } else {
        showError(input, error, config);
    }
};

function hasError(inputs) {
    return !inputs.every(input => input.validity.valid);
};

function enableButton(button, config) {
    button.classList.remove(config.inactiveButtonClass);
    button.disabled = '';
};

function disableButton(button, config) {
    button.classList.add(config.inactiveButtonClass);
    button.disabled = 'disabled';
};

function toggleButton(inputs, button, config) {
    if (hasError(inputs)) {
        disableButton(button, config);
    } else {
        enableButton(button, config);
    };
};

function setEventListeners(form, config) {
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    const button = form.querySelector(config.submitButtonSelector);
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(input, config);
            toggleButton(inputs,button,config);
        })
    });
}



function enableValidation(config) {
    const forms = [...document.querySelectorAll(config.formSelector)];
    forms.forEach(form => {
        setEventListeners(form, config);
    });
};


enableValidation(constConfig);
