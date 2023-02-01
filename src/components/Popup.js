export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonClose = this._popup.querySelector('.popup__close');
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keyup', this._handleEscUp);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keyup', this._handleEscUp);
    }

    _handleEscUp = (evt) => {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickOutside = (evt) => {
        if (evt.target === evt.currentTarget) {
            this.close();
        }
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._handleClickOutside);
        this._buttonClose.addEventListener('click', () => this.close()); 
    }


}