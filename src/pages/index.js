import './index.css';
import { Card}  from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { btnEditProfile, btnEditAvatar, btnAddCard, profileForm, avatarForm, cardForm, inputName, inputInfo, constConfig} from '../utils/constants.js';
import { Api } from '../components/Api.js';

// Тест класса API

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: '01eb8e66-73ce-49ed-89f5-929714990adb',
    'Content-Type': 'application/json'
  }
})

// создание блока карт

const cardsListSection = new Section ({
  renderer: (cardData) => {
    cardsListSection.addItem(createCardElement(cardData));
  },
},
".elements__list",
);

let userID;

// Получаем с сервера карточки и данные пользователя в промисе, отрисовываем после получения всех данных

Promise.all([api.getInitialCards(), api.getProfileData()])
  .then(([initialCards, profileData]) => {
    userID = profileData._id;
    cardsListSection.renderItems(initialCards);
    userInfo.setUserInfo(profileData);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль
  });

// создание обьекта с редактируемыми текстовыми полями профиля

const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userDescriptionSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__image'
});

// создать формы с валидацией

const formProfileEdit = new FormValidator(profileForm, constConfig);
formProfileEdit.enableValidation();

const formCardAdd = new FormValidator(cardForm, constConfig);
formCardAdd.enableValidation();

const formAvatarEdit = new FormValidator(avatarForm, constConfig);
formAvatarEdit.enableValidation();

// Создание экземпляра карточки

const createCardElement = (cardData) => {
  const card = new Card(cardData, '#card', () => popupWithImage.open(cardData.name, cardData.link), handleDeleteCardeClick, handleAddLike, handleRemoveLike, userID);
  const cardElement =  card.createCard();
  return cardElement;
}

// Создание попапа с увеличенным изображением

const popupWithImage = new PopupWithImage('.popup_menu_image');
popupWithImage.setEventListeners();

// Создание попапа редактирования профиля

const popupProfile = new PopupWithForm({
  popupSelector:'.popup_menu_profile', 
  handleFormSubmit: (formValues) => {
    popupProfile.showLoadingStatus(true);
    api.setProfileData(formValues)
      .then((profileDataResponse) => {
        userInfo.setUserInfo(profileDataResponse);
        popupProfile.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => popupProfile.showLoadingStatus(false));
  },
});
popupProfile.setEventListeners();

// Создание попапа редактирования аватара

const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_menu_avatar',
  handleFormSubmit: (formValues) => {
    popupAvatar.showLoadingStatus(true);
    api.setAvatar(formValues)
      .then((profileDataResponse) => {
        userInfo.setAvatar(profileDataResponse);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => popupAvatar.showLoadingStatus(false));
  }
});
popupAvatar.setEventListeners();


// Создание попапа добавления карточки

const popupCard = new PopupWithForm({
  popupSelector: '.popup_menu_card',
  handleFormSubmit: (formValues) => {
    popupCard.showLoadingStatus(true);
    api.setNewCard(formValues)
      .then((cardDataResponse) => {
        const cardElement = createCardElement(cardDataResponse);
        cardsListSection.addItem(cardElement);
        popupCard.close();
      })
      .catch((err) => {
        console.log(err); // выведем ошибку в консоль
      })
      .finally(() => popupCard.showLoadingStatus(false));
  }
});
popupCard.setEventListeners();

// функция для обработки сабмита удаления карточки 

const handleDeleteConfirm = (card, cardId) => {
  api.deleteCard(cardId)
    .then(() => {
      card.deleteCard();
      popupDeleteCardConfirm.close();
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    })  ;
}

// Создание попапа подтверждения удаления карточки

const popupDeleteCardConfirm = new PopupWithConfirmation('.popup_menu_delete', handleDeleteConfirm);
popupDeleteCardConfirm.setEventListeners();

// Открытие попапа  попапа подтверждения удаления карточки с передачей карточки и её ID, навешивание обработчика сабмита

const handleDeleteCardeClick = (card, cardId) => {
  popupDeleteCardConfirm.open();
  popupDeleteCardConfirm.getCardData(card, cardId);
}

// Добавление лайка

const handleAddLike = (card, cardId) => {
  api.addLike(cardId)
    .then((cardDataResponse) => {
      card.setLikes(cardDataResponse);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

// Удаление лайка

const handleRemoveLike = (card, cardId) => {
  api.removeLike(cardId)
    .then((cardDataResponse) => {
      card.setLikes(cardDataResponse);
    })
    .catch((err) => {
      console.log(err); // выведем ошибку в консоль
    });
}

// Навешивание листенеров на кнопки

btnEditProfile.addEventListener("click", (evt) => {
  popupProfile.open();
  const inputsProfileValues = userInfo.getUserInfo();
  inputName.value = inputsProfileValues.name; 
  inputInfo.value = inputsProfileValues.about;
  formProfileEdit.resetValidation(); 
});

btnAddCard.addEventListener("click", () => {
  popupCard.open();
  formCardAdd.resetValidation();
}); 

btnEditAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formAvatarEdit.resetValidation();
});

