const btnEdit = document.querySelector(".profile__btn-edit");
const btnAdd = document.querySelector(".profile__btn-add");
const popupProfile = document.querySelector(".popup_menu_profile");
const popupCard = document.querySelector(".popup_menu_card");
const popupImage = document.querySelector(".popup_menu_image");
const popupContentImage = popupImage.querySelector(".popup__image");
const popupContentCaption = popupImage.querySelector(".popup__caption");
const btnCloseProfile = document.querySelector(".btn-shut-profile");
const btnCloseCard = document.querySelector(".btn-shut-card");
const btnCloseImage = document.querySelector(".btn-shut-image");
const profileForm = document.forms["profile-form"];
const cardForm = document.forms["card-form"];
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const inputName = profileForm.querySelector(".form__input_value_name");
const inputInfo = profileForm.querySelector(".form__input_value_info");
const inputTitle = cardForm.querySelector(".form__input_value_title");
const inputLink = cardForm.querySelector(".form__input_value_link");
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




function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keyup', handleEscUp);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keyup', handleEscUp);
}

function handleEscUp(evt) {
  if (evt.key === 'Escape') {
    const targetClosePopup = document.querySelector('.popup_opened');
    closePopup(targetClosePopup);
  }
}

document.addEventListener('keyup', handleEscUp);

function toggleLike(evt) {
  evt.target.classList.toggle("element__button-like_active");
}

function deleteCard(evt) {
  evt.target.closest(".element").remove();
}

function enlargePicture(evt) {
  openPopup(popupImage);
  const imageName = evt.target.closest(".element").querySelector(".element__title").textContent; 
  popupContentImage.src = evt.target.src; 
  popupContentImage.alt = imageName;
  popupContentCaption.textContent =  imageName;
} 

function createCard(item) {
  // тут создаем карточку и возвращаем ее
  const cardElement = cardTemplate.querySelector(".element").cloneNode("true");
  const imageElement = cardElement.querySelector(".element__image");
  imageElement.src = item.link;
  imageElement.alt = item.name;
  cardElement.querySelector(".element__title").textContent = item.name;
  const btnDelete = cardElement.querySelector(".element__button-delete");
  const btnLike = cardElement.querySelector(".element__button-like");
  btnDelete.addEventListener("click", deleteCard);
  btnLike.addEventListener("click", toggleLike);
  imageElement.addEventListener("click", enlargePicture);
  return cardElement;
}

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
  const newCardObject = {};
  newCardObject.link = inputLink.value;
  newCardObject.name = inputTitle.value;
  const cardElement = createCard(newCardObject);
  cardsList.prepend(cardElement);
  evt.target.reset();
  closePopup(popupCard);
}

btnEdit.addEventListener("click", (evt) => {
  openPopup(popupProfile);
  handleEscUp(evt);
  inputName.value = profileName.textContent; 
  inputInfo.value = profileInfo.textContent; 
});

btnAdd.addEventListener("click", () => openPopup(popupCard)); 
btnCloseProfile.addEventListener("click", () => closePopup(popupProfile));
btnCloseCard.addEventListener("click", () => closePopup(popupCard));
btnCloseImage.addEventListener('click', () => closePopup(popupImage));
profileForm.addEventListener("submit", handleProfileFormSubmit);
cardForm.addEventListener("submit", handleCardFormSubmit);

