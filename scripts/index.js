const btnEdit = document.querySelector(".profile__btn-edit");
const btnAdd = document.querySelector(".profile__btn-add");
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector(".popup_menu_profile");
const popupCard = document.querySelector(".popup_menu_card");
const [btnCloseProfile, btnCloseCard] = document.querySelectorAll(".popup__close");
const [formElementProfile, formElementCard] = document.querySelectorAll(".form");
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const inputName = formElementProfile.querySelector(".form__input_value_name");
const inputInfo = formElementProfile.querySelector(".form__input_value_info");
const inputTitle = formElementCard.querySelector(".form__input_value_title");
const inputLink = formElementCard.querySelector(".form__input_value_link");
const cardTemplate = document.querySelector("#card").content;
const cardsList = document.querySelector(".elements__list");
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

function fillCard(card) {
  const cardElement = cardTemplate.querySelector(".element").cloneNode("true");
  cardElement.querySelector(".element__image").src = card.link;
  cardElement.querySelector(".element__title").textContent = card.name;
  cardsList.append(cardElement);
}

initialCards.forEach(fillCard);

// function openPopup () {
//   popup.classList.add("popup_opened");
//   inputName.value = profileName.textContent;
//   inputInfo.value = profileInfo.textContent;
// }

function openPopup(evt) {
  if (evt.target === btnEdit) {
    popupProfile.classList.add("popup_opened");
    inputName.value = profileName.textContent;
    inputInfo.value = profileInfo.textContent;
  } else {
    popupCard.classList.add("popup_opened");
  }
  
}

function closePopupProfile() {
  popupProfile.classList.remove("popup_opened");
}

function closePopupCard() {
  popupCard.classList.remove("popup_opened");
}


function formProfileSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  closePopupProfile();
}

function formCardSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const cardElement = cardTemplate.querySelector(".element").cloneNode("true");
  cardElement.querySelector(".element__image").src = inputLink.value;
  cardElement.querySelector(".element__title").textContent = inputTitle.value;
  cardsList.prepend(cardElement);
  closePopupCard();
}


btnEdit.addEventListener("click", openPopup );
btnAdd.addEventListener("click", openPopup );
btnCloseProfile.addEventListener("click", closePopupProfile );
btnCloseCard.addEventListener("click", closePopupCard );
formElementProfile.addEventListener("submit", formProfileSubmitHandler);
formElementCard.addEventListener("submit", formCardSubmitHandler);
