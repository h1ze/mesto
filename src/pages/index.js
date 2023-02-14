import './index.css';
import { Card}  from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { btnEditProfile, btnAddCard, profileForm, cardForm, inputName, inputInfo, constConfig} from '../utils/constants.js';
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
    console.log(initialCards,profileData);
    userID = profileData._id;
    cardsListSection.renderItems(initialCards);
    userInfo.setUserInfo(profileData);
  });



// создание обьекта с редактируемыми текстовыми полями профиля

const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userDescriptionSelector: '.profile__subtitle',
  userAvatarSelector: '.profile__image'
});

console.log(userInfo);

// создать формы с валидацией

const formProfileEdit = new FormValidator(profileForm, constConfig);
formProfileEdit.enableValidation();

const formCardAdd = new FormValidator(cardForm, constConfig);
formCardAdd.enableValidation();




// Создание экземпляра карточки

const createCardElement = (cardData) => {
  const card = new Card(cardData, '#card', () => popupWithImage.open(cardData.name, cardData.link), handleDeleteCardeClick, handleAddLike, handleRemoveLike, userID);
  const cardElement =  card.createCard();
  // console.log(cardData);
  return cardElement;
}

// Создание попапа с увеличенным изображением

const popupWithImage = new PopupWithImage('.popup_menu_image');
popupWithImage.setEventListeners();

// Создание попапа редактирования профиля

const popupProfile = new PopupWithForm({
  popupSelector:'.popup_menu_profile', 
  handleFormSubmit: (formValues) => {
    api.setProfileData(formValues)
      .then((profileDataResponse) => {
        userInfo.setUserInfo(profileDataResponse);
        popupProfile.close();
      });
  },
});
popupProfile.setEventListeners();

// Создание попапа редактирования аватара

const popupAvatar = new PopupWithForm({
  popupSelector: '.popup_menu_avatar',
  handleFormSubmit: (formValues) => {
    api.setAvatar(formValues)
      .then((profileDataResponse) => {
        userInfo.setAvatar(profileDataResponse);
        popupAvatar.close();
    });
  }
});
popupAvatar.setEventListeners();

//

// Создание попапа добавления карточки

const popupCard = new PopupWithForm({
  popupSelector: '.popup_menu_card',
  handleFormSubmit: (formValues) => {
    // formValues.owner = {_id: userID};
    // formValues.likes = [];
    api.setNewCard(formValues)
      .then((cardDataResponse) => {
        console.log(cardDataResponse);
        const cardElement = createCardElement(cardDataResponse);
        cardsListSection.addItem(cardElement);
        popupCard.close();
      })
  }
});
popupCard.setEventListeners();

// функция для обработки сабмита удаления карточки 

const handleDeleteConfirm = (card, cardId) => {
  api.deleteCard(cardId)
    .then((res) => {
      console.log(res);
      card.deleteCard();
    });
}

// Создание попапа подтверждения удаления карточки

const popupDeleteCardConfirm = new PopupWithConfirmation('.popup_menu_delete', handleDeleteConfirm);

// Открытие попапа  попапа подтверждения удаления карточки с передачей карточки и её ID, навешивание обработчика сабмита

const handleDeleteCardeClick = (card, cardId) => {
  popupDeleteCardConfirm.open();
  popupDeleteCardConfirm.setEventListeners(card, cardId);
  // console.log(evt.target.closest('.element'), id);
  // Здесь нужно будет добавить навешивание на кнопку подтверждения листенер с вызовом логики обработки удаления карточки из класса API
}

const handleAddLike = (card, cardId) => {
  api.addLike(cardId)
    .then((cardDataResponse) => {
      card.setLikes(cardDataResponse);
});
}

const handleRemoveLike = (card, cardId) => {
  api.removeLike(cardId)
    .then((cardDataResponse) => {
      card.setLikes(cardDataResponse);
});
}

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


