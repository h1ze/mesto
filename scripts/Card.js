class Card {
    constructor(data, templateSelector, enlargePicture) {
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._enlargePicture = enlargePicture;
    }

// Получаем разметку карточки
    _getElement() {
        const cardElement = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode('true');
        return cardElement;
    }


// Заполняем разметку карточки, вызываем добавление обработчиков и возвращаем готовую карточку
    createCard() {
        this._element = this._getElement();
        const imageElement = this._element.querySelector(".element__image");
        const btnDelete = this._element.querySelector(".element__button-delete");
        const btnLike = this._element.querySelector(".element__button-like");
        imageElement.src = this._link;
        imageElement.alt = this._name;
        this._element.querySelector(".element__title").textContent = this._name;
        this._setEventListeners(imageElement, btnDelete, btnLike);
        return this._element;
      }

// Навешиваем обработчики на элементы карточки
    _setEventListeners(imageElement, btnDelete, btnLike) {
        imageElement.addEventListener("click", () => {this._enlargePicture(this.name, this.link)});
        btnDelete.addEventListener('click', () => {this._deleteCard});
        btnLike.addEventListener('click', () => this._toggleLike(btnLike));
    }

// Переключения состояния активности лайка на карточке
    _toggleLike(btnLike) {
    btnLike.classList.toggle("element__button-like_active");
  }
  
// Удаление карточки 
    _deleteCard() {
    this._element.remove();
  }


}