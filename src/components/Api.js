export class Api {
    constructor(options) {
        // тело конструктора
        this._options = options;
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
      }
    
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers
        })
            .then(response => this._checkResponse(response));
    };
    
    getProfileData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then(response => this._checkResponse(response));
    };

    setProfileData(profileFormData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileFormData.name, // Здесь нужно забрать имя пользователя из формы
                about: profileFormData.about, // Здесь нужно забрать информацию о пользователе из формы
              })
        })
            .then(response => this._checkResponse(response));
    };

    setNewCard(newCardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newCardData.name, // Здесь нужно забрать название карточки из формы
                link: newCardData.link,// Здесь нужно забрать ссылку на изображение из формы
              })
        })
            .then(response => this._checkResponse(response));
    };

    deleteCard(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(response => this._checkResponse(response));
    };


    addLike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then(response => this._checkResponse(response));
    };

    removeLike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then(response => this._checkResponse(response));
    };


    setAvatar({avatar}) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar, // Здесь должна быть ссылка на новый аватар
              })
        })
            .then(response => this._checkResponse(response));
    };

_checkResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(`Ошибка: ${response.status}`);
    };
};

};
