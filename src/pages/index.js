import './index.css';
import { Card}  from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { Popup } from '../components/Popup.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { btnEditProfile, btnAddCard, profileForm, cardForm, inputName, inputInfo, cardsList, constConfig, initialCards } from '../utils/constants.js';

// создание обьекта с редактируемыми текстовыми полями профиля

const userInfo = new UserInfo({
  userNameSelector: '.profile__title',
  userDescriptionSelector: '.profile__subtitle',
});

// создать формы с валидацией

const formProfileEdit = new FormValidator(profileForm, constConfig);
formProfileEdit.enableValidation();

const formCardAdd = new FormValidator(cardForm, constConfig);
formCardAdd.enableValidation();

// Создание экземпляра карточки

const createCard = (data) => {
  const cardObj = new Card(data, '#card', () => popupWithImage.open(data.name, data.link));
  const cardElement =  cardObj.createCard();
  return cardElement;
}

// создание блока карт

const cardsListSection = new Section ({
    items: initialCards,
    renderer: (cardData) => {
      cardsListSection.addItem(createCard(cardData));
    },
  },
  ".elements__list",
);

cardsListSection.renderItems();

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
    const cardElement = createCard(formValues);
    cardsList.prepend(cardElement);
    popupCard.close();
  }
})
popupCard.setEventListeners();

btnEditProfile.addEventListener("click", (evt) => {
  popupProfile.open();
  const inputsProfileValues = userInfo.getUserInfo();
  inputName.value = inputsProfileValues.name; 
  inputInfo.value = inputsProfileValues.description;
  formProfileEdit.resetValidation(); 
});

btnAddCard.addEventListener("click", () => {
  popupCard.open();
  formCardAdd.resetValidation();
}); 




