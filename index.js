const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close-button");
const popupOpened = document.querySelector(".popup");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_name");
const jobInput = formElement.querySelector(".popup__input_job");
const profileInfo = document.querySelector(".profile__info");
const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubTitle = profileInfo.querySelector(".profile__subtitle");
const editButtonTag = '<button type="button" class="profile__edit-button" name="editButton"></button>'

function showClick() {
  popupOpened.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

function closeForm() {
  popupOpened.classList.remove("popup_opened");
  formElement.reset();
}
function formElementSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileTitle.insertAdjacentHTML('beforeend', editButtonTag);
  profileSubTitle.textContent = jobInput.value;
  closeForm();
}

popupClose.addEventListener("click", closeForm);
formElement.addEventListener("submit", formElementSubmitHandler);
editButton.addEventListener("click", showClick);
