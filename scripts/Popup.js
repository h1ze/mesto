export class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._btnCLose = this._popup.querySelector('.popup__close');
    }

    openPopup(popup) {
        popup.classList.add("popup_opened");
        document.addEventListener('keyup', () => this._handleEscUp);
    }

    closePopup(popup) {
        popup.classList.remove("popup_opened");
        document.removeEventListener('keyup', () => this._handleEscUp);
    }

    _handleEscUp(evt) {
        if (evt.key === 'Escape') {
            const currentOpenPopup = document.querySelector('.popup_opened');
            this.closePopup(currentOpenPopup);
        }
    }

    _handleClickOutside(evt) {
        if (evt.target === evt.currentTarget) {
          closePopup(evt.currentTarget);
        }
    }

    setEventListeners(btn) {
        const currentOpenPopup = btn.closest('.popup');
        currentOpenPopup.addEventListener('mousedown', () => this._handleClickOutside);
        btn.addEventListener('click', () => this.closePopup(currentOpenPopup)); 
    }


}