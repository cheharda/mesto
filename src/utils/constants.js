export const config  = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputTypeError: 'popup__input_type_error',
    buttonSelector: '.popup__save-button',
    buttonInactive: 'button_inactive', 
    inputError: 'popup__input_error',
  };


export const editPopup = document.querySelector(".popup_type_edit-profile");
export const addPopup = document.querySelector(".popup_type_add-card");
export const confirmPopup = document.querySelector(".popup_type_confirm");
export const avatarPopup = document.querySelector(".popup_type_avatar");

export const profile = document.querySelector(".profile");
export const editButton = profile.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");
export const avatarButton = document.querySelector(".profile__avatar-item");
export const avatar = document.querySelector(".profile__avatar");

export const editForm = editPopup.querySelector(".popup__form");
export const addForm = addPopup.querySelector(".popup__form");
export const avatarForm = avatarPopup.querySelector(".popup__form");

export const nameInput = document.querySelector(".popup__input_name");
export const jobInput = document.querySelector(".popup__input_job");

export const containerSelector = ".illustration";
export const editPopupSelector = ".popup_type_edit-profile";
export const addPopupSelector = ".popup_type_add-card";
export const avatarPopupSelector = ".popup_type_avatar";
export const confirmPopupSelector = ".popup_type_confirm";
export const imagePopupSelector = ".popup_type_image";
export const nameSelector = ".profile__title";
export const jobSelector = ".profile__subtitle";

export const apiConfig = {
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-32',
    headers: {
      authorization: '7888a6eb-196b-49ee-8ab1-114d4441b76b',
      'Content-Type': 'application/json'
    }
  };