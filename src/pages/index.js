
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import './index.css'
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import DeletePopup from '../components/DeletePopup.js';

import {
  apiConfig, 
  avatar,
  editPopup, 
  addPopup, 
  avatarPopup,
  confirmPopup,
  editButton, 
  addButton,
  editForm,
  addForm,
  avatarForm,
  avatarButton,
  inputAvatar,
  containerSelector,
  editPopupSelector, 
  addPopupSelector,
  imagePopupSelector,
  confirmPopupSelector,
  avatarPopupSelector,
  nameSelector,
  jobSelector,
  nameInput, 
  jobInput,
  config} from '../ utils/constants.js';

const api = new Api(apiConfig);

const userInfo = new UserInfo(nameSelector, jobSelector, avatar);

let userId = null;
const getUserInfoFromServer = api.getUserFromServer();
getUserInfoFromServer.then((data) => {
    userId = data._id;
})
.catch((err) => alert(err));

const section = new Section({
  renderer: (item) => {
    section.addItem(createCard(item).renderCard());
  }
}, containerSelector);

const popupUserInfo = new PopupWithForm (editPopupSelector, {
  formSubmit: (data) => {
    popupUserInfo.toggleButtonText('Сохранение...')
    api.editProfileUser(data)
    .then(
      data => {
        userInfo.setUserInfo(data);
        popupUserInfo.close();
        popupUserInfo.toggleButtonText('Сохранить')
      })
      .catch((err) => {
        console.error(err)
      })
  } 
});


Promise.all([api.getUserFromServer(), api.getCardsFromServer()])
  .then(result => {
    userInfo.setUserInfo(result[0]);
    section.renderItems(result[1]); 
  })
  .catch((err) => {
    console.error(err)
  }
  );

popupUserInfo.setEventListeners();

const addPopupForm = new PopupWithForm(addPopupSelector, {
  formSubmit: (formData) => {
    addPopupForm.toggleButtonText('Сохранение...');
    api.postCardsOnServer(formData).then( data => {
      const card = createCard(data)
      section.addItem(card.renderCard());
      addPopupForm.close();
      addPopupForm.toggleButtonText('Сохранить');
    })
    .catch((err) => {
      console.error(err)
    })
  }}
);

addPopupForm.setEventListeners();

const popupImage = new PopupWithImage(imagePopupSelector);

popupImage.setEventListeners();

const popupAvatar = new PopupWithForm (avatarPopupSelector, {
  formSubmit: (data) => {
    popupAvatar.toggleButtonText('Сохранение...')
    api.editProfileAvatar(data)
    .then(
      data => {
        userInfo.setUserInfo(data);
        popupAvatar.close();
        popupAvatar.toggleButtonText('Сохранить')
      })
      .catch((err) => {
        console.error(err)
      })
  }
});

popupAvatar.setEventListeners();

const deletePopup = new DeletePopup (confirmPopupSelector, {
  formSubmit: ({cardId, cardItem}) => {
    api.deleteCard(cardId).then(() => {
      deletePopup.close();
      cardItem.remove();
    })
    .catch((err) => {
      console.error(err)
    })
  }
    });

function handleCardClick(name, link) {
  popupImage.open(name, link);
}

function handleDeleteCardClick(cardId, cardItem) {
  deletePopup.open({cardId, cardItem})
  deletePopup.setEventListeners();
}


function handleAddLike (cardId, card) {
  api.makeLike(cardId).then((res) => {
    card.likesCount(res.likes.length);
    card.likeCard();
  })
  .catch((err) => console.error(err))  
}


function handleRemoveLike (cardId, card) {
  api.deleteLike(cardId).then((res) => {
    card.likesCount(res.likes.length);
    card.likeCard();
  })
  .catch((err) => console.error(err))
}

//функция создания карточки
function createCard (item) {
  const card = new Card({item, userId, handleCardClick, handleDeleteCardClick, handleAddLike, handleRemoveLike}, ".template-card");
  return card;
}

avatarButton.addEventListener("click", () => {
  avatarFormValidator.disableSubmitButton(avatarPopup);
  popupAvatar.open();
  const userData = userInfo.getUserInfo();
  inputAvatar.value = userData.avatar.src; 
});

addButton.addEventListener("click", () => {
  addCardFormValidator.disableSubmitButton(addPopup);
  addPopupForm.open();
});

editButton.addEventListener("click", function() {
  editProfileFormValidator.disableSubmitButton(editPopup);
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name
  jobInput.value = userData.about;
  popupUserInfo.open();
});

const editProfileFormValidator = new FormValidator(config, editForm);
const addCardFormValidator = new FormValidator(config, addForm);
const avatarFormValidator = new FormValidator(config, avatarForm);

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
avatarFormValidator.enableValidation();

