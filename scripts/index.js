import { Card}  from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { Popup } from './Popup.js';
import { PopupWithImage } from './PopupWithImage.js';

const btnEditProfile = document.querySelector(".profile__btn-edit");
const btnAddCard = document.querySelector(".profile__btn-add");
const popupProfile = document.querySelector(".popup_menu_profile");
const popupCard = document.querySelector(".popup_menu_card");
const popupImage = document.querySelector(".popup_menu_image");
const popupContentImage = popupImage.querySelector(".popup__image");
const popupContentCaption = popupImage.querySelector(".popup__caption");
const buttonCloseList = document.querySelectorAll('.popup__close'); 



const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const inputName = profileForm.querySelector(".form__input_value_name");
const inputInfo = profileForm.querySelector(".form__input_value_info");
const inputTitle = cardForm.querySelector(".form__input_value_title");
const inputLink = cardForm.querySelector(".form__input_value_link");
const cardsList = document.querySelector(".elements__list");


const constConfig = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button',
  inactiveButtonClass: 'form__button_status_disabled',
  inputErrorClass: 'form__input_state_error',
  errorClass: 'form__error_active',
};

// Массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


// создать формы с валидацией

const formProfileEdit = new FormValidator(profileForm, constConfig);
formProfileEdit.enableValidation();

const formCardAdd = new FormValidator(cardForm, constConfig);
formCardAdd.enableValidation();


// Проверка класса Popup
// const popupProfileClass = new Popup(".popup_menu_profile");
// popupProfileClass.setEventListeners();
// console.log(popupProfileClass);

// Проверка класса PopupWithImage

const popupWithImageClass = new PopupWithImage('.popup_menu_image');
popupWithImageClass.setEventListeners();


//Открыть переданный попап и добавить слушатель кнопок

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', handleEscUp);
}

// Закрыть переданный попап и удалить слушатель кнопок

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', handleEscUp);
}

// Закрыть активный попап по ESC 

function handleEscUp(evt) {
  if (evt.key === 'Escape') {
    const currentOpenPopup = document.querySelector('.popup_opened');
    closePopup(currentOpenPopup);
  }
}

// Закрыть активный попап при клике вне формы

function handleClickOutside(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
}


// Открытие попапа при клике на картинку

// function enlargePicture(name, link) {
//   openPopup(popupImage);
//   popupContentImage.src = link; 
//   popupContentImage.alt = name;
//   popupContentCaption.textContent = name;
// } 


// Создание экземпляра карточки
function createCard(data) {
  const cardObj = new Card(data, '#card', () => popupWithImageClass.open(data.name, data.link));
  const cardElement =  cardObj.createCard();
  return cardElement;
}


// Добавление карточки в конец списка;

function appendCard(card) {
  const cardElement = createCard(card);
  cardsList.append(cardElement);
}

initialCards.forEach(appendCard);


function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  closePopup(popupProfile);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const newCardObject = {
    link: inputLink.value,
    name: inputTitle.value,
  };
  const cardElement = createCard(newCardObject);
  cardsList.prepend(cardElement);
  evt.target.reset();
  closePopup(popupCard);
}

btnEditProfile.addEventListener("click", (evt) => {
  openPopup(popupProfile);
  inputName.value = profileName.textContent; 
  inputInfo.value = profileInfo.textContent;
  formProfileEdit.resetValidation(); 
});

// btnAddCard.addEventListener("click", () => {
//   openPopup(popupCard);
//   formCardAdd.resetValidation();
// }); 

// buttonCloseList.forEach(btn => {
//   const currentOpenPopup = btn.closest('.popup');
//   currentOpenPopup.addEventListener('mousedown', handleClickOutside);
//   btn.addEventListener('click', () => closePopup(currentOpenPopup)); 
// }) 

profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);





