
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

function toggleButton(inputs, button, config) {
    const isFormValid = inputs.every(input => input.validity.valid);
    
    if (isFormValid) {
        button.classList.remove(config.inactiveButtonClass);
        button.disabled = '';
    } else {
        button.classList.add(config.inactiveButtonClass);
        button.disabled = 'disabled';
    };
};

function setInputListeners() {

}

            
function enableValidation(config) {
    const forms = [...document.querySelectorAll(config.formSelector)];

    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(input, config);
                toggleButton(inputs,button,config);
            })
        });
        toggleButton(inputs,button,config);
    });
};


enableValidation(constConfig);
