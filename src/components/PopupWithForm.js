import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor({popupSelector, handleFormSubmit}) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popup.querySelector(".form");
        this._inputs = this._form.querySelectorAll(".form__input");
        this._button = this._form.querySelector(".form__button");
        
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputs.forEach((input) => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

    showLoadingStatus(status) {
        status
            ? this._button.textContent = "Сохранение..."
            : this._button.textContent = "Сохранить";
    }

    close() {
        super.close();
        this._form.reset();
    }
}