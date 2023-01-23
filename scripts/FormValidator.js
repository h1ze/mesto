export class FormValidator {


    constructor(form, config) {
        this._form = form;
        this._errorClass = config.errorClass;
        this._inputErrorClass = config.inputErrorClass;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inputs = [...this._form.querySelectorAll(this._inputSelector)];
        this._button = this._form.querySelector(this._submitButtonSelector);
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

    _hasError() {
        return !this._inputs.every(input => input.validity.valid);
    };

    _enableButton() {
        this._button.classList.remove(this._inactiveButtonClass);
        this._button.disabled = '';
    };
    
    _disableButton() {
        this._button.classList.add(this._inactiveButtonClass);
        this._button.disabled = 'disabled';
    };

    _toggleButton() {
        if (this._hasError()) {
            this._disableButton();
        } else {
            this._enableButton();
        };
    };

    _setEventListeners() {
        this._inputs.forEach(input => {
            this._toggleButton();
            input.addEventListener('input', () => {
                this._checkInputValidity(input);
                this._toggleButton();
            })
        });
    }

    resetValidation() {
        this._toggleButton(); 
        this._inputs.forEach((input) => {
            this._checkInputValidity(input);
        });
    } 

    enableValidation() {
            this._setEventListeners();
    };

}

