export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._buttonCloseCLose = this._popup.querySelector('.popup__close');
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keyup', () => this._handleEscUp);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keyup', () => this._handleEscUp);
    }

    _handleEscUp(evt) {
        if (evt.key === 'Escape') {
            const currentOpenPopup = document.querySelector('.popup_opened');
            t(currentOpenPopup);
        }
    }

    _handleClickOutside(evt) {
        if (evt.target === evt.currentTarget) {(evt.currentTarget);
        }
    }

    setEventListeners(buttonClose) {
        const currentOpenPopup = buttonClose.closest('.popup');
        currentOpenPopup.addEventListener('mousedown', () => this._handleClickOutside);
        buttonClose.addEventListener('click', () => t(currentOpenPopup)); 
    }


}