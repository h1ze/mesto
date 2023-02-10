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



Promise.all([api.getInitialCards(), api.getProfileData()])
  .then(([initialCards, profileData]) => {
    console.log(initialCards,profileData);
    cardsListSection.renderItems(initialCards);
    userInfo.setUserInfo(profileData);
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

// функция для обработки сабмита удаления карточки 

const handleDeleteCardeClick = () => {
  popupDeleteCardConfirm.open();
  // Здесь нужно будет добавить навешивание на кнопку подтверждения листенер с вызовом логики обработки удаления карточки из класса API
}


// Создание экземпляра карточки

const createCardElement = (cardData) => {
  const card = new Card(cardData, '#card', () => popupWithImage.open(cardData.name, cardData.link), handleDeleteCardeClick);
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
    userInfo.setUserInfo(formValues);
    api.setProfileData(formValues);
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
    api.setNewCard(formValues);
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
  formProfileEdit.resetValidation(); 
});

btnAddCard.addEventListener("click", () => {
  popupCard.open();
  formCardAdd.resetValidation();
}); 


