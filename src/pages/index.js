import './index.css';
import { Card}  from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { PopupWithConfirmation } from '../components/PopupWithConfirmation.js';
import { UserInfo } from '../components/UserInfo.js';
import { btnEditProfile, btnAddCard, profileForm, cardForm, inputName, inputInfo, constConfig, initialCards } from '../utils/constants.js';
import { Api } from '../components/Api.js';

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

// функция для обработки сабмита удаления карточки 

const handleDeletCardeClick = () => {
  popupDeleteCardConfirm.open();
  // Здесь нужно будет добавить навешивание на кнопку подтверждения листенер с вызовом логики обработки удаления карточки из класса API
}


// Создание экземпляра карточки

const createCardElement = (cardData) => {
  const card = new Card(cardData, '#card', () => popupWithImage.open(cardData.name, cardData.link), handleDeletCardeClick);
  const cardElement =  card.createCard();
  return cardElement;
}


// создание блока карт

// const cardsListSection = new Section ({
//     items: initialCards,
//     renderer: (cardData) => {
//       cardsListSection.addItem(createCardElement(cardData));
//     },
//   },
//   ".elements__list",
// );

// cardsListSection.renderItems();

// Создание попапа с увеличенным изображением

const popupWithImage = new PopupWithImage('.popup_menu_image');
popupWithImage.setEventListeners();

// Создание попапа редактирования профиля

const popupProfile = new PopupWithForm({
  popupSelector:'.popup_menu_profile', 
  handleFormSubmit: (formValues) => {
    userInfo.setUserInfo(formValues);
    popupProfile.close();
  },
});
popupProfile.setEventListeners();

// Создание попапа добавления карточки

const popupCard = new PopupWithForm({
  popupSelector: '.popup_menu_card',
  handleFormSubmit: (formValues) => {
    const cardElement = createCardElement(formValues);
    cardsListSection.addItem(cardElement);
    popupCard.close();
  }
});
popupCard.setEventListeners();

// Создание попапа подтверждения удаления карточки

const popupDeleteCardConfirm = new PopupWithConfirmation('.popup_menu_delete');
popupDeleteCardConfirm.setEventListeners();

btnEditProfile.addEventListener("click", (evt) => {
  popupProfile.open();
  const inputsProfileValues = userInfo.getUserInfo();
  inputName.value = inputsProfileValues.name; 
  inputInfo.value = inputsProfileValues.about;
  api.setProfileData(inputsProfileValues);
  formProfileEdit.resetValidation(); 
});

btnAddCard.addEventListener("click", () => {
  popupCard.open();
  formCardAdd.resetValidation();
}); 


// Тест класса API

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: '01eb8e66-73ce-49ed-89f5-929714990adb',
    'Content-Type': 'application/json'
  }
})


// Проверка класса API получения массива карт

api.getInitialCards()
  .then((responseDataCards => {
    const cardsListSection = new Section ({
      items: responseDataCards,
      renderer: (cardData) => {
        cardsListSection.addItem(createCardElement(cardData));
      },
    },
    ".elements__list",
  )
  cardsListSection.renderItems();
  }
  ));


// Проверка класса API получения данных пользователя

  api.getProfileData()
    .then((res) => {
      console.log(res);
      userInfo.setUserInfo(res);
    })