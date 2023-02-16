export class Card {
        constructor(data, templateSelector, handleCardClick, handleBtnDeleteClick, handleAddLike, handleRemoveLike, userID) {
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._cardID = data._id;
        this._userID = userID;
        this._ownerID = data.owner._id;
        this._element = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode('true');
        this._imageElement = this._element.querySelector(".element__image");
        this._btnDelete = this._element.querySelector(".element__button-delete");
        this._likesCounter = this._element.querySelector(".element__counter-like");
        this._btnLike = this._element.querySelector(".element__button-like");
        this._handleBtnDeleteClick = handleBtnDeleteClick;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
    }

// Заполняем разметку карточки, вызываем добавление обработчиков и возвращаем готовую карточку
    createCard() {
        this._imageElement.src = this._link;
        this._imageElement.alt = this._name;
        this._likesCounter.textContent = this._likes.length;
        this._element.querySelector(".element__title").textContent = this._name;
        this._setEventListeners(this._imageElement, this._btnDelete, this._btnLike);
        this._checkOwner();
        this._checkLikeStatus();
        return this._element;
      }

// Переключение состояния активности лайка на карточке

_toggleLike() {
    if (this._btnLike.classList.contains("element__button-like_active")) {
        this._btnLike.classList.remove("element__button-like_active");
        this._handleRemoveLike(this, this._cardID);
    } else {
        this._btnLike.classList.add("element__button-like_active");
        this._handleAddLike(this, this._cardID);
    } 
}
  
// Удаление карточки 

    deleteCard() {
    this._element.remove();
    this._element = null;
  }

// Убрать возможность удаления карточки, если пользователь не создавал её

_checkOwner() {
    if (this._ownerID !== this._userID) {
    this._btnDelete.remove();
    };
}

// Получение лайков

setLikes(cardDataResponse) {
    this._likes = cardDataResponse.likes;
    this._likesCounter.textContent = this._likes.length;
};

_checkLikeStatus() {
   if (this._likes.some(item => this._ownerID === this._userID)) {
    this._btnLike.classList.add("element__button-like_active");
   }
}


_setBtnLikeListeners() {
    this._btnLike.addEventListener('click', () => {
        this._toggleLike();
    });
}


// Навешиваем обработчики на элементы карточки
_setEventListeners(imageElement, btnDelete, btnLike) {
    imageElement.addEventListener("click", () => this._handleCardClick(this._name, this._link));
    btnDelete.addEventListener('click', (evt) => this._handleBtnDeleteClick(this, this._cardID));
    btnLike.addEventListener('click', () => this._toggleLike());
};

}
