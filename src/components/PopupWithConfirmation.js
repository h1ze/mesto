import { Popup } from "./Popup.js";

class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);

    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }

}