import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
    constructor(popupSelector, handleDeleteConfirm) {
        super(popupSelector);
        this._handleDeleteConfirm = handleDeleteConfirm;
    }

    getCardData = (card, cardId) => {
        this._card = card;
        this._cardId = cardId;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleDeleteConfirm(this._card, this._cardId);
                // .then((response) => {
                //     response.ok 
                //         ? this.close()
                //         : Promise.reject(`Ошибка: ${response.status}`);
                // });
        });
    }
}