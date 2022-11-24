const btnEdit = document.querySelector(".profile__btn-edit");
const popup = document.querySelector(".popup");
const btnClose = document.querySelector(".popup__close");
const formElement = document.querySelector(".form");
const profileName = document.querySelector(".profile__title");
const profileInfo = document.querySelector(".profile__subtitle");
const inputName = formElement.querySelector(".form__input_value_name");
const inputInfo = formElement.querySelector(".form__input_value_info");

function popupOpen() {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputInfo.value = profileInfo.textContent;
}

function popupClose() {
  popup.classList.remove("popup_opened");
}

btnEdit.addEventListener("click", popupOpen);
 btnClose.addEventListener("click", popupClose);

function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = inputName.value;
  profileInfo.textContent = inputInfo.value;
  popupClose();
}

formElement.addEventListener("submit", formSubmitHandler);
