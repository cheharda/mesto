const editPopup = document.querySelector(".popup_type_edit-profile");
const addPopup = document.querySelector(".popup_type_add-card");
const imagePopup = document.querySelector(".popup_type_image");
const list = document.querySelector(".illustration");

const profile = document.querySelector(".profile");
const editButton = profile.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");
const popup = document.querySelector(".popup");

const popupClose = editPopup.querySelector(".popup__close-button");
const addPopupClose = addPopup.querySelector(".popup__close-button");
const imageCloseButton = imagePopup.querySelector(".popup__close-button");

const editForm = editPopup.querySelector(".popup__form");
const addForm = addPopup.querySelector(".popup__form");

const nameInput = editForm.querySelector(".popup__input_name");
const jobInput = editForm.querySelector(".popup__input_job");
const profileInfo = document.querySelector(".profile__info");

const profileTitle = profileInfo.querySelector(".profile__title");
const profileSubTitle = profileInfo.querySelector(".profile__subtitle");

const inputPlace = document.querySelector(".popup__input_place");
const inputUrl = document.querySelector(".popup__input_url");

const imagePopupImg = imagePopup.querySelector(".popup__image");
const imagePopupFigcapture = imagePopup.querySelector(".popup__figcapture");
  
// темплейт элемент на странице
const cardTemplate = document.querySelector(".template-card").content.querySelector(".illustration__item"); 

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
  cardImage.alt = data.name;
  cardImage.src = data.link;

  cardDeleteButton.addEventListener("click", deleteCard);
  cardLikeButton.addEventListener("click", likeCard);

  const clickImage = (evt) => {
    imagePopupImg.src = data.link;
    imagePopupImg.alt = data.link;
    imagePopupFigcapture.textContent = data.name;
    openPopup(imagePopup);
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

//функция добавления новой карточки
function addCard(evt) {
  evt.preventDefault();
  renderCard({name: inputPlace.value, link: inputUrl.value});
  openPopup(addPopup);
}


addButton.addEventListener("click", () => {
  inputPlace.value = "";
  inputUrl.value = "";
  openPopup(addPopup);
  togglebuttonState(addPopup, validationConfig);
});

//заполнение первой модалки
function showClick() {
  openPopup(editPopup);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubTitle.textContent;
}

//закрытие  модалки
function closePopup(popup) {
  document.removeEventListener("keyup", closePopupEsc);
  document.removeEventListener("mousedown", closePopupClick);  
  popup.classList.remove("popup_opened");
}

// открытие  модалки
function openPopup(popup) {
  document.addEventListener("keyup", closePopupEsc);
  document.addEventListener("mousedown", closePopupClick);
  popup.classList.add("popup_opened");
}


// закрытие модалки по Esc
function closePopupEsc (evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened");
    closePopup(popupOpened);
    }
}

// закрытие модалки по клику
function closePopupClick (evt) {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
}

//сохранение данных профиля
function formElementSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
  closePopup(editPopup);
}

//слушатели событий
popupClose.addEventListener("click", () => {
  closePopup(popup);
});

addPopupClose.addEventListener('click', () => {
  closePopup(addPopup);
});

imageCloseButton.addEventListener('click', () => {
  closePopup(imagePopup);
});

editForm.addEventListener("submit", formElementSubmitHandler);
editButton.addEventListener("click", showClick);
addForm.addEventListener("submit", addCard);






