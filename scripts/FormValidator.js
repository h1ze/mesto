export class FormValidator {


    constructor(form, config) {
        this._form = form;
        this._errorClass = config.errorClass;
        this._inputErrorClass = config.inputErrorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
    }

    _hideError(input, error) {
        error.textContent = '';
        error.classList.remove(this._errorClass);
        input.classList.remove(this._inputErrorClass);
    };

    _showError(input, error) {
        error.textContent = input.validationMessage;
        error.classList.add(this._errorClass);
        input.classList.add(this._inputErrorClass);
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
        button.classList.remove(this._inactiveButtonClass);
        button.disabled = '';
    };
    
    _disableButton(button) {
        button.classList.add(this._inactiveButtonClass);
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
        const inputs = [...form.querySelectorAll(this._inputSelector)];
        const button = form.querySelector(this._submitButtonSelector);
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

