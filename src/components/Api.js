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
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }
    
    getProfileData() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }

    setProfileData(profileFormData) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: profileFormData.name, // Здесь нужно забрать имя пользователя из формы
                about: profileFormData.about, // Здесь нужно забрать информацию о пользователе из формы
              })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }

    setNewCard(newCardData) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: newCardData.name, // Здесь нужно забрать название карточки из формы
                link: newCardData.link,// Здесь нужно забрать ссылку на изображение из формы
              })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }

    deleteCard(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }


    addLike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }

    removeLike(cardID) {
        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: this._headers,
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }


    setAvatar({avatar}) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar, // Здесь должна быть ссылка на новый аватар
              })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            });
    }


    // https://mesto.nomoreparties.co/v1/cohort-59
    // Токен: 01eb8e66-73ce-49ed-89f5-929714990adb
    // Идентификатор группы: cohort-59"
    

    //Загрузка информации о пользователе
    //GET https://nomoreparties.co/v1/cohort-59/users/me 

    // Пример объекта с информацией о пользователе

    // {
    //     "name": "Jacques Cousteau",
    //     "about": "Sailor, researcher",
    //     "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    //     "_id": "e20537ed11237f86bbb20ccb",
    //     "cohort": "cohort0"
    // } 

    

    // Запрос на получение начальных карточек
    // GET https://mesto.nomoreparties.co/v1/cohort-59/cards 

    // В ответ приходит массивом JSON  с карточками 

    // [
    //     {
    //       "likes": [],
    //       "_id": "5d1f0611d321eb4bdcd707dd",
    //       "name": "Байкал",
    //       "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    //       "owner": {
    //         "name": "Jacques Cousteau",
    //         "about": "Sailor, researcher",
    //         "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    //         "_id": "ef5f7423f7f5e22bef4ad607",
    //         "cohort": "local"
    //       },
    //       "createdAt": "2019-07-05T08:10:57.741Z"
    //     },
    //     {
    //       "likes": [],
    //       "_id": "5d1f064ed321eb4bdcd707de",
    //       "name": "Архыз",
    //       "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    //       "owner": {
    //         "name": "Jacques Cousteau",
    //         "about": "Sailor, researcher",
    //         "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
    //         "_id": "ef5f7423f7f5e22bef4ad607",
    //         "cohort": "local"
    //       },
    //       "createdAt": "2019-07-05T08:11:58.324Z"
    //     }
    //   ] 



    // другие методы работы с API
}

