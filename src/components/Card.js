export class Card {
    constructor(data, templateSelector, handleCardClick, handleBtnDeleteClick) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode('true');
        this._imageElement = this._element.querySelector(".element__image");
        this._btnDelete = this._element.querySelector(".element__button-delete");
        this._btnLike = this._element.querySelector(".element__button-like");
        this._handleBtnDeleteClick = handleBtnDeleteClick;
    }



// Заполняем разметку карточки, вызываем добавление обработчиков и возвращаем готовую карточку
    createCard() {
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;
        this._setEventListeners(this._imageElement, this._btnDelete, this._btnLike);
        return this._element;
      }

// Навешиваем обработчики на элементы карточки
    _setEventListeners(imageElement, btnDelete, btnLike) {
        imageElement.addEventListener("click", () => this._handleCardClick(this._name, this._link));
        // btnDelete.addEventListener('click', () => this._deleteCard());
        btnDelete.addEventListener('click', () => this._handleBtnDeleteClick());
        btnLike.addEventListener('click', () => this._toggleLike(btnLike));
    }

// Переключение состояния активности лайка на карточке
    _toggleLike(btnLike) {
    btnLike.classList.toggle("element__button-like_active");
  }
  
// Удаление карточки 

    _deleteCard() {
    this._element.remove();
    this._element = null;
  }



}