
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import './index.css'
import UserInfo from '../components/UserInfo.js';

import {editPopup, 
  addPopup, 
  editButton, 
  addButton,
  editForm,
  addForm,
  inputPlace,
  inputUrl,
  containerSelector,
  editPopupSelector, 
  addPopupSelector,
  imagePopupSelector,
  nameSelector,
  jobSelector,
  nameInput, 
  jobInput,
  config} from '../ utils/constants.js';

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
  formSubmit: (data) => {
    userInfo.setUserInfo(data);
    popupUserInfo.close();
  }
});
popupUserInfo.setEventListeners();

const addPopupForm = new PopupWithForm(addPopupSelector, {
  formSubmit: (event) => {
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
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name
  jobInput.value = userData.job;
  popupUserInfo.open();
});

const editProfileFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
