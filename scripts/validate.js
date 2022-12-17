function checkInputValidity(input, config) {
    const error = document.querySelector(`.${input.id}-error`);
    if (input.validity.valid) {
        //убрать ошибку
        error.textContent = '';
        error.classList.remove(config.errorClass);
        input.classList.remove(config.inputErrorClass);
    } else {
        //показать ошибку
        error.textContent = input.validationMessage;
        error.classList.add(config.errorClass);
        input.classList.add(config.inputErrorClass);
    }
};

function toggleButton(inputs, button, config) {
    const isFormValid = inputs.every(input => input.validity.valid);
    
    if (isFormValid) {
        button.classList.remove(config.inactiveButtonClass);
    } else {
        button.classList.add(config.inactiveButtonClass);
    };
};

            
function enableValidation(config) {
    const forms = [...document.querySelectorAll(config.formSelector)];

    forms.forEach(form => {
        const inputs = [...form.querySelectorAll(config.inputSelector)];
        const button = form.querySelector(config.submitButtonSelector);

        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        inputs.forEach(input => {
            input.addEventListener('input', () => {
                checkInputValidity(input, config);
                toggleButton(inputs,button,config);
            })
        });
    });
};


enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__button',
    inactiveButtonClass: 'form__button_status_disabled',
    inputErrorClass: 'form__input_state_error',
    errorClass: 'form__error',
});




