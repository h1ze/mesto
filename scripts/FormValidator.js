export class FormValidator {
    static config = {
        formSelector: '.form',
        inputSelector: '.form__input',
        submitButtonSelector: '.form__button',
        inactiveButtonClass: 'form__button_status_disabled',
        inputErrorClass: 'form__input_state_error',
        errorClass: 'form__error_active',
    }

    constructor(form) {
        this._form = form;
    }

    _hideError(input, error) {
        error.textContent = '';
        error.classList.remove(FormValidator.config.errorClass);
        input.classList.remove(FormValidator.config.inputErrorClass);
    };

    _showError(input, error) {
        error.textContent = input.validationMessage;
        error.classList.add(FormValidator.config.errorClass);
        input.classList.add(FormValidator.config.inputErrorClass);
    };

    _checkInputValidity(input) {
        const error = this._form.querySelector(`.${input.id}-error`);
        if (input.validity.valid) {
            this._hideError(input, error);
        } else {
            this._showError(input, error);
        }
    };

    _hasError(inputs) {
        return !inputs.every(input => input.validity.valid);
    };

    _enableButton(button) {
        button.classList.remove(FormValidator.config.inactiveButtonClass);
        button.disabled = '';
    };
    
    _disableButton(button) {
        button.classList.add(FormValidator.config.inactiveButtonClass);
        button.disabled = 'disabled';
    };

    _toggleButton(inputs, button) {
        if (this._hasError(inputs)) {
            this._disableButton(button);
        } else {
            this._enableButton(button);
        };
    };

    _setEventListeners(form) {
        const inputs = [...form.querySelectorAll(FormValidator.config.inputSelector)];
        const button = form.querySelector(FormValidator.config.submitButtonSelector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButton(inputs, button);
            })
        });
    }

    enableValidation() {
            this._setEventListeners(this._form);
    };

}

