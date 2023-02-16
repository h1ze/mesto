import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handlerDeleteSubmit) {
        super(popupSelector);
        this._handlerDeleteSubmit = handlerDeleteSubmit;
    }

    setEventListeners(card, id) {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handlerDeleteSubmit(card,id);
            this.close();
        });
    }
}