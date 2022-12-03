const btnEdit = document.querySelector(".profile__btn-edit");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".popup__close");
const formElement = document.querySelector(".form");
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const inputName = formElement.querySelector(".form__input_value_name");
const inputInfo = formElement.querySelector(".form__input_value_info");
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

function openPopup () {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function closePopup () {
  popup.classList.remove("popup_opened");
}


function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  closePopup ();
}


btnEdit.addEventListener("click", openPopup );
btnClose.addEventListener("click", closePopup );
formElement.addEventListener("submit", formSubmitHandler);
