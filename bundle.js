/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.css?");

/***/ }),

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Api\": () => (/* binding */ Api)\n/* harmony export */ });\nclass Api {\r\n    constructor(options) {\r\n        // тело конструктора\r\n        this._options = options;\r\n        this._baseUrl = options.baseUrl;\r\n        this._headers = options.headers;\r\n      }\r\n    \r\n    getInitialCards() {\r\n        return fetch(`${this._baseUrl}/cards`, {\r\n            headers: this._headers\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n    \r\n    getProfileData() {\r\n        return fetch(`${this._baseUrl}/users/me`, {\r\n            headers: this._headers\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n    setProfileData(profileFormData) {\r\n        return fetch(`${this._baseUrl}/users/me`, {\r\n            method: 'PATCH',\r\n            headers: this._headers,\r\n            body: JSON.stringify({\r\n                name: profileFormData.name, // Здесь нужно забрать имя пользователя из формы\r\n                about: profileFormData.about, // Здесь нужно забрать информацию о пользователе из формы\r\n              })\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n    setNewCard(newCardData) {\r\n        return fetch(`${this._baseUrl}/cards`, {\r\n            method: 'POST',\r\n            headers: this._headers,\r\n            body: JSON.stringify({\r\n                name: newCardData.name, // Здесь нужно забрать название карточки из формы\r\n                link: newCardData.link,// Здесь нужно забрать ссылку на изображение из формы\r\n              })\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n    deleteCard(cardID) {\r\n        return fetch(`${this._baseUrl}/cards/${cardID}`, {\r\n            method: 'DELETE',\r\n            headers: this._headers,\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n\r\n    addLike(cardID) {\r\n        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {\r\n            method: 'PUT',\r\n            headers: this._headers,\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n    removeLike(cardID) {\r\n        return fetch(`${this._baseUrl}/cards/${cardID}/likes`, {\r\n            method: 'DELETE',\r\n            headers: this._headers,\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n\r\n    setAvatar({avatar}) {\r\n        return fetch(`${this._baseUrl}/users/me/avatar`, {\r\n            method: 'PATCH',\r\n            headers: this._headers,\r\n            body: JSON.stringify({\r\n                avatar, // Здесь должна быть ссылка на новый аватар\r\n              })\r\n        })\r\n            .then(response => this._checkResponse(response));\r\n    };\r\n\r\n_checkResponse(response) {\r\n    if (response.ok) {\r\n        return response.json();\r\n    } else {\r\n        return Promise.reject(`Ошибка: ${response.status}`);\r\n    };\r\n};\r\n\r\n};\r\n\n\n//# sourceURL=webpack://mesto/./src/components/Api.js?");

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\nclass Card {\r\n        constructor(data, templateSelector, handleCardClick, handleBtnDeleteClick, handleAddLike, handleRemoveLike, userID) {\r\n        this._name = data.name;\r\n        this._link = data.link;\r\n        this._likes = data.likes;\r\n        this._templateSelector = templateSelector;\r\n        this._handleCardClick = handleCardClick;\r\n        this._cardID = data._id;\r\n        this._userID = userID;\r\n        this._ownerID = data.owner._id;\r\n        this._element = document.querySelector(this._templateSelector).content.querySelector('.element').cloneNode('true');\r\n        this._imageElement = this._element.querySelector(\".element__image\");\r\n        this._btnDelete = this._element.querySelector(\".element__button-delete\");\r\n        this._likesCounter = this._element.querySelector(\".element__counter-like\");\r\n        this._btnLike = this._element.querySelector(\".element__button-like\");\r\n        this._handleBtnDeleteClick = handleBtnDeleteClick;\r\n        this._handleAddLike = handleAddLike;\r\n        this._handleRemoveLike = handleRemoveLike;\r\n    }\r\n\r\n\r\n\r\n// Заполняем разметку карточки, вызываем добавление обработчиков и возвращаем готовую карточку\r\n    createCard() {\r\n        this._imageElement.src = this._link;\r\n        this._imageElement.alt = this._name;\r\n        this._likesCounter.textContent = this._likes.length;\r\n        this._element.querySelector(\".element__title\").textContent = this._name;\r\n        this._setEventListeners(this._imageElement, this._btnDelete, this._btnLike);\r\n        this._checkOwner();\r\n        return this._element;\r\n      }\r\n\r\n// Переключение состояния активности лайка на карточке\r\n//     _toggleLike() {\r\n//         this._btnLike.classList.toggle(\"element__button-like_active\");\r\n//   }\r\n\r\n_toggleLike() {\r\n    if (this._btnLike.classList.contains(\"element__button-like_active\")) {\r\n        this._btnLike.classList.remove(\"element__button-like_active\");\r\n        this._handleRemoveLike(this, this._cardID);\r\n    } else {\r\n        this._btnLike.classList.add(\"element__button-like_active\");\r\n        this._handleAddLike(this, this._cardID);\r\n    } \r\n}\r\n  \r\n// Удаление карточки \r\n\r\n    deleteCard() {\r\n    this._element.remove();\r\n    this._element = null;\r\n  }\r\n\r\n// Убрать возможность удаления карточки, если пользователь не создавал её\r\n\r\n_checkOwner() {\r\n    if (this._ownerID !== this._userID) {\r\n    this._btnDelete.remove();\r\n    };\r\n}\r\n\r\n// Получение лайков\r\n\r\nsetLikes(cardDataResponse) {\r\n    this._likes = cardDataResponse.likes;\r\n    this._likesCounter.textContent = this._likes.length;\r\n};\r\n\r\n\r\n_setBtnLikeListeners() {\r\n    this._btnLike.addEventListener('click', () => {\r\n        this._toggleLike();\r\n    });\r\n}\r\n\r\n\r\n// Навешиваем обработчики на элементы карточки\r\n_setEventListeners(imageElement, btnDelete, btnLike) {\r\n    imageElement.addEventListener(\"click\", () => this._handleCardClick(this._name, this._link));\r\n    // btnDelete.addEventListener('click', () => this._deleteCard());\r\n    btnDelete.addEventListener('click', (evt) => this._handleBtnDeleteClick(this, this._cardID));\r\n    // btnLike.addEventListener('click', () => this._toggleLike(btnLike));\r\n    btnLike.addEventListener('click', () => this._toggleLike());\r\n};\r\n\r\n}\r\n\n\n//# sourceURL=webpack://mesto/./src/components/Card.js?");

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FormValidator\": () => (/* binding */ FormValidator)\n/* harmony export */ });\nclass FormValidator {\r\n\r\n\r\n    constructor(form, config) {\r\n        this._form = form;\r\n        this._errorClass = config.errorClass;\r\n        this._inputErrorClass = config.inputErrorClass;\r\n        this._inactiveButtonClass = config.inactiveButtonClass;\r\n        this._inputSelector = config.inputSelector;\r\n        this._submitButtonSelector = config.submitButtonSelector;\r\n        this._inputs = [...this._form.querySelectorAll(this._inputSelector)];\r\n        this._button = this._form.querySelector(this._submitButtonSelector);\r\n    }\r\n\r\n    _hideError(input) {\r\n        const error = this._form.querySelector(`.${input.id}-error`);\r\n        error.textContent = '';\r\n        error.classList.remove(this._errorClass);\r\n        input.classList.remove(this._inputErrorClass);\r\n    };\r\n\r\n    _showError(input) {\r\n        const error = this._form.querySelector(`.${input.id}-error`);\r\n        error.textContent = input.validationMessage;\r\n        error.classList.add(this._errorClass);\r\n        input.classList.add(this._inputErrorClass);\r\n    };\r\n\r\n    _checkInputValidity(input) {\r\n        if (input.validity.valid) {\r\n            this._hideError(input);\r\n        } else {\r\n            this._showError(input);\r\n        }\r\n    };\r\n\r\n    _hasError() {\r\n        return !this._inputs.every(input => input.validity.valid);\r\n    };\r\n\r\n    _enableButton() {\r\n        this._button.classList.remove(this._inactiveButtonClass);\r\n        this._button.disabled = '';\r\n    };\r\n    \r\n    _disableButton() {\r\n        this._button.classList.add(this._inactiveButtonClass);\r\n        this._button.disabled = 'disabled';\r\n    };\r\n\r\n    _toggleButton() {\r\n        if (this._hasError()) {\r\n            this._disableButton();\r\n        } else {\r\n            this._enableButton();\r\n        };\r\n    };\r\n\r\n    _setEventListeners() {\r\n        this._inputs.forEach(input => {\r\n            this._toggleButton();\r\n            input.addEventListener('input', () => {\r\n                this._checkInputValidity(input);\r\n                this._toggleButton();\r\n            })\r\n        });\r\n    }\r\n\r\n    resetValidation() {\r\n        this._toggleButton(); \r\n        this._inputs.forEach((input) => {\r\n            this._hideError(input);\r\n        });\r\n    } \r\n\r\n    enableValidation() {\r\n            this._setEventListeners();\r\n    };\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack://mesto/./src/components/FormValidator.js?");

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Popup\": () => (/* binding */ Popup)\n/* harmony export */ });\nclass Popup {\r\n    constructor(popupSelector) {\r\n        this._popup = document.querySelector(popupSelector);\r\n        this._buttonClose = this._popup.querySelector('.popup__close');\r\n    }\r\n\r\n    open() {\r\n        this._popup.classList.add(\"popup_opened\");\r\n        document.addEventListener('keyup', this._handleEscUp);\r\n    }\r\n\r\n    close() {\r\n        this._popup.classList.remove(\"popup_opened\");\r\n        document.removeEventListener('keyup', this._handleEscUp);\r\n    }\r\n\r\n    _handleEscUp = (evt) => {\r\n        if (evt.key === 'Escape') {\r\n            this.close();\r\n        }\r\n    }\r\n\r\n    _handleClickOutside = (evt) => {\r\n        if (evt.target === evt.currentTarget) {\r\n            this.close();\r\n        }\r\n    }\r\n\r\n    setEventListeners() {\r\n        this._popup.addEventListener('mousedown', this._handleClickOutside);\r\n        this._buttonClose.addEventListener('click', () => this.close()); \r\n    }\r\n\r\n\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/Popup.js?");

/***/ }),

/***/ "./src/components/PopupWithConfirmation.js":
/*!*************************************************!*\
  !*** ./src/components/PopupWithConfirmation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupWithConfirmation\": () => (/* binding */ PopupWithConfirmation)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithConfirmation extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup {\r\n    constructor(popupSelector, handlerDeleteSubmit) {\r\n        super(popupSelector);\r\n        this._handlerDeleteSubmit = handlerDeleteSubmit;\r\n    }\r\n\r\n    setEventListeners(card, id) {\r\n        super.setEventListeners();\r\n        this._popup.addEventListener('submit', (evt) => {\r\n            evt.preventDefault();\r\n            this._handlerDeleteSubmit(card,id)\r\n                .then((response) => {\r\n                    response.ok \r\n                        ? this.close()\r\n                        : Promise.reject(`Ошибка: ${response.status}`);\r\n                });\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithConfirmation.js?");

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupWithForm\": () => (/* binding */ PopupWithForm)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithForm extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup {\r\n    constructor({popupSelector, handleFormSubmit}) {\r\n        super(popupSelector);\r\n        this._handleFormSubmit = handleFormSubmit;\r\n        this._form = this._popup.querySelector(\".form\");\r\n        this._inputs = this._form.querySelectorAll(\".form__input\");\r\n        this._button = this._form.querySelector(\".form__button\");\r\n        \r\n    }\r\n\r\n    _getInputValues() {\r\n        this._inputValues = {};\r\n        this._inputs.forEach((input) => {\r\n            this._inputValues[input.name] = input.value;\r\n        });\r\n        return this._inputValues;\r\n    }\r\n\r\n    setEventListeners() {\r\n        super.setEventListeners();\r\n        this._form.addEventListener('submit', (evt) => {\r\n            evt.preventDefault();\r\n            this._handleFormSubmit(this._getInputValues());\r\n        });\r\n    }\r\n\r\n    showLoadingStatus(status) {\r\n        status\r\n            ? this._button.textContent = \"Сохранение...\"\r\n            : this._button.textContent = \"Сохранить\";\r\n    }\r\n\r\n    close() {\r\n        super.close();\r\n        this._form.reset();\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithForm.js?");

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupWithImage\": () => (/* binding */ PopupWithImage)\n/* harmony export */ });\n/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ \"./src/components/Popup.js\");\n\r\n\r\nclass PopupWithImage extends _Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup {\r\n    constructor(popupSelector) {\r\n        super(popupSelector);\r\n        this._popupImage = this._popup.querySelector('.popup__image');\r\n        this._popupImageCaption = this._popup.querySelector('.popup__caption');\r\n    }\r\n\r\n    open(name, link) {\r\n        super.open();\r\n        this._popupImage.src = link; \r\n        this._popupImage.alt = name;\r\n        this._popupImageCaption.textContent = name;\r\n    } \r\n          \r\n}\n\n//# sourceURL=webpack://mesto/./src/components/PopupWithImage.js?");

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Section\": () => (/* binding */ Section)\n/* harmony export */ });\nclass Section {\r\n    constructor({renderer}, selector) {\r\n        this._renderer = renderer;\r\n        this._selector = document.querySelector(selector);\r\n    };\r\n\r\n    renderItems(items) {\r\n        items.forEach(item => this._renderer(item))\r\n    };\r\n    \r\n    addItem(element) {\r\n        this._selector.prepend(element);\r\n    }; \r\n\r\n};\n\n//# sourceURL=webpack://mesto/./src/components/Section.js?");

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserInfo\": () => (/* binding */ UserInfo)\n/* harmony export */ });\nclass UserInfo {\r\n    constructor({userNameSelector, userDescriptionSelector, userAvatarSelector}) {\r\n        this._userName = document.querySelector(userNameSelector);\r\n        this._userDescription = document.querySelector(userDescriptionSelector);\r\n        this._userAvatar = document.querySelector(userAvatarSelector);\r\n    }\r\n\r\n    getUserInfo() {\r\n        const userInfo = {\r\n            name: this._userName.textContent,\r\n            about: this._userDescription.textContent,\r\n            avatar: this._userAvatar.src,\r\n         };\r\n         return userInfo;\r\n    }\r\n\r\n    setUserInfo({name, about, avatar}) {\r\n        this._userName.textContent = name;\r\n        this._userDescription.textContent = about;\r\n        this._userAvatar.src = avatar;\r\n    }\r\n\r\n    setAvatar({avatar}) {\r\n        this._userAvatar.src = avatar;\r\n    }\r\n}\n\n//# sourceURL=webpack://mesto/./src/components/UserInfo.js?");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card.js */ \"./src/components/Card.js\");\n/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ \"./src/components/FormValidator.js\");\n/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Section.js */ \"./src/components/Section.js\");\n/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Popup.js */ \"./src/components/Popup.js\");\n/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ \"./src/components/PopupWithImage.js\");\n/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ \"./src/components/PopupWithForm.js\");\n/* harmony import */ var _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithConfirmation.js */ \"./src/components/PopupWithConfirmation.js\");\n/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ \"./src/components/UserInfo.js\");\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/utils/constants.js\");\n/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Api.js */ \"./src/components/Api.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// Тест класса API\r\n\r\nconst api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_10__.Api({\r\n  baseUrl: \"https://mesto.nomoreparties.co/v1/cohort-59\",\r\n  headers: {\r\n    authorization: '01eb8e66-73ce-49ed-89f5-929714990adb',\r\n    'Content-Type': 'application/json'\r\n  }\r\n})\r\n\r\n// создание блока карт\r\n\r\nconst cardsListSection = new _components_Section_js__WEBPACK_IMPORTED_MODULE_3__.Section ({\r\n  renderer: (cardData) => {\r\n    cardsListSection.addItem(createCardElement(cardData));\r\n  },\r\n},\r\n\".elements__list\",\r\n);\r\n\r\nlet userID;\r\n\r\n// Получаем с сервера карточки и данные пользователя в промисе, отрисовываем после получения всех данных\r\n\r\nPromise.all([api.getInitialCards(), api.getProfileData()])\r\n  .then(([initialCards, profileData]) => {\r\n    userID = profileData._id;\r\n    cardsListSection.renderItems(initialCards);\r\n    userInfo.setUserInfo(profileData);\r\n  });\r\n\r\n// создание обьекта с редактируемыми текстовыми полями профиля\r\n\r\nconst userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__.UserInfo({\r\n  userNameSelector: '.profile__title',\r\n  userDescriptionSelector: '.profile__subtitle',\r\n  userAvatarSelector: '.profile__image'\r\n});\r\n\r\n// создать формы с валидацией\r\n\r\nconst formProfileEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.profileForm, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.constConfig);\r\nformProfileEdit.enableValidation();\r\n\r\nconst formCardAdd = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.cardForm, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.constConfig);\r\nformCardAdd.enableValidation();\r\n\r\nconst formAvatarEdit = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__.FormValidator(_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.avatarForm, _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.constConfig);\r\nformAvatarEdit.enableValidation();\r\n\r\n// Создание экземпляра карточки\r\n\r\nconst createCardElement = (cardData) => {\r\n  const card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_1__.Card(cardData, '#card', () => popupWithImage.open(cardData.name, cardData.link), handleDeleteCardeClick, handleAddLike, handleRemoveLike, userID);\r\n  const cardElement =  card.createCard();\r\n  // console.log(cardData);\r\n  return cardElement;\r\n}\r\n\r\n// Создание попапа с увеличенным изображением\r\n\r\nconst popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__.PopupWithImage('.popup_menu_image');\r\npopupWithImage.setEventListeners();\r\n\r\n// Создание попапа редактирования профиля\r\n\r\nconst popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({\r\n  popupSelector:'.popup_menu_profile', \r\n  handleFormSubmit: (formValues) => {\r\n    popupProfile.showLoadingStatus(true);\r\n    api.setProfileData(formValues)\r\n      .then((profileDataResponse) => {\r\n        userInfo.setUserInfo(profileDataResponse);\r\n        popupProfile.showLoadingStatus(false);\r\n        popupProfile.close();\r\n      });\r\n  },\r\n});\r\npopupProfile.setEventListeners();\r\n\r\n// Создание попапа редактирования аватара\r\n\r\nconst popupAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({\r\n  popupSelector: '.popup_menu_avatar',\r\n  handleFormSubmit: (formValues) => {\r\n    popupAvatar.showLoadingStatus(true);\r\n    api.setAvatar(formValues)\r\n      .then((profileDataResponse) => {\r\n        userInfo.setAvatar(profileDataResponse);\r\n        popupAvatar.showLoadingStatus(false);\r\n        popupAvatar.close();\r\n    });\r\n  }\r\n});\r\npopupAvatar.setEventListeners();\r\n\r\n\r\n// Создание попапа добавления карточки\r\n\r\nconst popupCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithForm({\r\n  popupSelector: '.popup_menu_card',\r\n  handleFormSubmit: (formValues) => {\r\n    popupCard.showLoadingStatus(true);\r\n    api.setNewCard(formValues)\r\n      .then((cardDataResponse) => {\r\n        const cardElement = createCardElement(cardDataResponse);\r\n        cardsListSection.addItem(cardElement);\r\n        popupCard.showLoadingStatus(false);\r\n        popupCard.close();\r\n      })\r\n  }\r\n});\r\npopupCard.setEventListeners();\r\n\r\n// функция для обработки сабмита удаления карточки \r\n\r\nconst handleDeleteConfirm = (card, cardId) => {\r\n  api.deleteCard(cardId)\r\n    .then(() => {\r\n      card.deleteCard();\r\n    });\r\n}\r\n\r\n// Создание попапа подтверждения удаления карточки\r\n\r\nconst popupDeleteCardConfirm = new _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithConfirmation('.popup_menu_delete', handleDeleteConfirm);\r\npopupDeleteCardConfirm.setEventListeners();\r\n\r\n// Открытие попапа  попапа подтверждения удаления карточки с передачей карточки и её ID, навешивание обработчика сабмита\r\n\r\nconst handleDeleteCardeClick = (card, cardId) => {\r\n  popupDeleteCardConfirm.open();\r\n  console.log(card, cardId);\r\n}\r\n\r\n// Добавление лайка\r\n\r\nconst handleAddLike = (card, cardId) => {\r\n  api.addLike(cardId)\r\n    .then((cardDataResponse) => {\r\n      card.setLikes(cardDataResponse);\r\n});\r\n}\r\n\r\n// Удаление лайка\r\n\r\nconst handleRemoveLike = (card, cardId) => {\r\n  api.removeLike(cardId)\r\n    .then((cardDataResponse) => {\r\n      card.setLikes(cardDataResponse);\r\n});\r\n}\r\n\r\n// Навешивание листенеров на кнопки\r\n\r\n_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.btnEditProfile.addEventListener(\"click\", (evt) => {\r\n  popupProfile.open();\r\n  const inputsProfileValues = userInfo.getUserInfo();\r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.inputName.value = inputsProfileValues.name; \r\n  _utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.inputInfo.value = inputsProfileValues.about;\r\n  formProfileEdit.resetValidation(); \r\n});\r\n\r\n_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.btnAddCard.addEventListener(\"click\", () => {\r\n  popupCard.open();\r\n  formCardAdd.resetValidation();\r\n}); \r\n\r\n_utils_constants_js__WEBPACK_IMPORTED_MODULE_9__.btnEditAvatar.addEventListener(\"click\", () => {\r\n  popupAvatar.open();\r\n  formAvatarEdit.resetValidation();\r\n});\r\n\r\n\n\n//# sourceURL=webpack://mesto/./src/pages/index.js?");

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"avatarForm\": () => (/* binding */ avatarForm),\n/* harmony export */   \"btnAddCard\": () => (/* binding */ btnAddCard),\n/* harmony export */   \"btnEditAvatar\": () => (/* binding */ btnEditAvatar),\n/* harmony export */   \"btnEditProfile\": () => (/* binding */ btnEditProfile),\n/* harmony export */   \"cardForm\": () => (/* binding */ cardForm),\n/* harmony export */   \"constConfig\": () => (/* binding */ constConfig),\n/* harmony export */   \"initialCards\": () => (/* binding */ initialCards),\n/* harmony export */   \"inputInfo\": () => (/* binding */ inputInfo),\n/* harmony export */   \"inputName\": () => (/* binding */ inputName),\n/* harmony export */   \"profileForm\": () => (/* binding */ profileForm)\n/* harmony export */ });\nconst btnEditProfile = document.querySelector(\".profile__btn-edit\");\r\nconst btnEditAvatar = document.querySelector(\".profile__btn-image-edit\");\r\nconst btnAddCard = document.querySelector(\".profile__btn-add\");\r\nconst profileForm = document.forms[\"profile-form\"];\r\nconst avatarForm = document.forms[\"avatar-form\"];\r\nconst cardForm = document.forms[\"card-form\"];\r\nconst inputName = profileForm.querySelector(\".form__input_value_name\");\r\nconst inputInfo = profileForm.querySelector(\".form__input_value_info\");\r\n\r\nconst constConfig = {\r\n    formSelector: '.form',\r\n    inputSelector: '.form__input',\r\n    submitButtonSelector: '.form__button',\r\n    inactiveButtonClass: 'form__button_status_disabled',\r\n    inputErrorClass: 'form__input_state_error',\r\n    errorClass: 'form__error_active',\r\n  };\r\n\r\nconst initialCards = [\r\n  {\r\n    name: 'Архыз',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\r\n  },\r\n  {\r\n    name: 'Челябинская область',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\r\n  },\r\n  {\r\n    name: 'Иваново',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\r\n  },\r\n  {\r\n    name: 'Камчатка',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\r\n  },\r\n  {\r\n    name: 'Холмогорский район',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\r\n  },\r\n  {\r\n    name: 'Байкал',\r\n    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\r\n  }\r\n]; \n\n//# sourceURL=webpack://mesto/./src/utils/constants.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index.js");
/******/ 	
/******/ })()
;