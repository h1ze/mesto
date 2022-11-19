let editBtn = document.querySelector(".profile__btn-edit");
let popup = document.querySelector(".popup");
let closeBtn = document.querySelector(".popup__close");
let formElement = document.querySelector(".form");
let profileName = document.querySelector(".profile__title");
let profileInfo = document.querySelector(".profile__subtitle");
let inputName = formElement.querySelector(".form__input_name");
let inputInfo = formElement.querySelector(".form__input_info");

function popupOpen() {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

editBtn.addEventListener("click", popupOpen);

closeBtn.addEventListener("click", popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);
