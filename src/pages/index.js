
import FormValidator from '../FormValidator.js';
import Card from '../Card.js';
import Section from '../Section.js';
import Popup from '../Popup.js';
import PopupWithImage from '../PopupWithImage.js';
import PopupWithForm from '../PopupWithForm.js';
import './index.css'
import UserInfo from '../UserInfo.js';

const config  = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputTypeError: 'popup__input_type_error',
  buttonSelector: '.popup__save-button',
  buttonInactive: 'button_inactive', 
  inputError: 'popup__input_error',
};

const editPopup = document.querySelector(".popup_type_edit-profile");
const addPopup = document.querySelector(".popup_type_add-card");
const list = document.querySelector(".illustration");

const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const editForm = editPopup.querySelector(".popup__form");
const addForm = addPopup.querySelector(".popup__form");

const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_job");
const profileInfo = document.querySelector(".profile__info");
const profileTitle = document.querySelector(".profile__title");
const profileSubTitle = document.querySelector(".profile__subtitle");

const inputPlace = document.querySelector(".popup__input_place");
const inputUrl = document.querySelector(".popup__input_url");

const containerSelector = ".illustration";
const editPopupSelector = ".popup_type_edit-profile";
const addPopupSelector = ".popup_type_add-card";
const imagePopupSelector = ".popup_type_image";
const nameSelector = ".profile__title";
const jobSelector = ".profile__subtitle";

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
      link: 'https://traveltimes.ru/wp-content/uploads/2021/05/d902d2010ebf12b712de6c4d950c5691.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://mospravda.ru/wp-content/uploads/2016/12/Байкал.jpg'
  }
];

const section = new Section({
  items: initialCards, 
  renderer: (item) => {
    section.addItem(createCard(item).renderCard());
  }
}, containerSelector);

section.renderItems();

const userInfo = new UserInfo({nameSelector, jobSelector});

const popupUserInfo = new PopupWithForm (editPopupSelector, {
  formSubmit: (event) => {
    event.preventDefault();
    const inputValues = popupUserInfo._getInputValues();
    userInfo.setUserInfo(inputValues);
    popupUserInfo.close();
  }
});
popupUserInfo.setEventListeners();

const addPopupForm = new PopupWithForm(addPopupSelector, {
  formSubmit: (event) => {
    event.preventDefault();
    const card = createCard({
        link: inputUrl.value,
        name: inputPlace.value,
        alt: inputPlace.value,
      })
      section.addItem(card.renderCard());
      addPopupForm.close();
  }}
);

addPopupForm.setEventListeners();

const popupImage = new PopupWithImage(imagePopupSelector);
popupImage.setEventListeners();

//открытие попапа с картинкой 
function handleCardClick(name, link) {
  popupImage.open(name, link);
}

//функция создания карточки
function createCard (item) {
  const card = new Card(item, ".template-card", handleCardClick);
  return card;
}


addButton.addEventListener("click", () => {
  addCardFormValidator.disableSubmitButton(addPopup);
  addPopupForm.open();
});

editButton.addEventListener("click", function() {
  editProfileFormValidator.disableSubmitButton(editPopup);
  popupUserInfo.open(userInfo.getUserInfo());
});

const editProfileFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();