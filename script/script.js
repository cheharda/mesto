const editPopup = document.querySelector(".popup_type_edit-profile");
const addPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image");
const list = document.querySelector(".illustration");

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

const imagePopupImg = imagePopup.querySelector(".popup__image");
const imagePopupFigcapture = imagePopup.querySelector(".popup__figcapture");

const cardTemplate = document.querySelector(".template-card").content.querySelector(".illustration__item"); // темплейт элемент на странице

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

//удаление карточки
const deleteCard = (evt) => {
  evt.target.closest(".illustration__item").remove();
};

//лайк карточки
const likeCard = (evt) => {
  evt.target.classList.toggle("illustration__heart_active");
};

//функция создания карточки
function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector(".illustration__image");
  const cardTitle = cardElement.querySelector(".illustration__title");
  const cardLikeButton = cardElement.querySelector(".illustration__heart");
  const cardDeleteButton = cardElement.querySelector(".illustration__del-button");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;

  cardDeleteButton.addEventListener("click", deleteCard);
  cardLikeButton.addEventListener("click", likeCard);

  const clickImage = (evt) => {
    evt.target.closest("illustration__item");
    imagePopupImg.src = data.link;
    imagePopupFigcapture.textContent = data.name;
    togglePopup(imagePopup);
  };

    cardImage.addEventListener("click", clickImage);
    return cardElement;
}

function renderCard(data) {
  list.prepend(createCard(data));
}

initialCards.forEach(function(data) {
  renderCard(data);
});

//заполнение первой модалки
function showClick() {
  popupOpened.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

//открытие-закрытие формы
function closeForm() {
  popupOpened.classList.remove("popup_opened");
}

//сохранение данных
function formElementSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closeForm();
}

//слушатели событий
popupClose.addEventListener("click", closeForm);
formElement.addEventListener("submit", formElementSubmitHandler);
editButton.addEventListener("click", showClick);
