class Card {
    constructor(data, templateSelector, handleClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleClick = handleClick;
    }

// Получаем разметку карточки
    _getElement() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode('true');
        return cardElement;
    }


// заполняем разметку карточку и возвращаем ее

    createCard() {
        this._element = _getElement();
        const imageElement = this._element.querySelector(".element__image");
        imageElement.src = this._link;
        imageElement.alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;
        const btnDelete = this._element.querySelector(".element__button-delete");
        const btnLike = this._element.querySelector(".element__button-like");
        btnDelete.addEventListener("click", deleteCard);
        btnLike.addEventListener("click", toggleLike);
        imageElement.addEventListener("click", enlargePicture);
        return this._element;
      }


 // Открытие попапа при клике на картинку
        enlargePicture(evt) {
        openPopup(popupImage);
        const imageName = evt.target.alt;
        popupContentImage.src = evt.target.src; 
        popupContentImage.alt = imageName;
        popupContentCaption.textContent =  imageName;
      } 


// Переключения состояния активности лайка на карточке

toggleLike(evt) {
    evt.target.classList.toggle("element__button-like_active");
  }
  
  // Удаление карточки
  
deleteCard(evt) {
    evt.target.closest(".element").remove();
  }


}