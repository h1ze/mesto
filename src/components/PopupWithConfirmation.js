import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.close();
        });
    }

    _handleDeleteSubmit() {
        console.log("Удалено");
    }
}