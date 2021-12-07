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

export const profile = document.querySelector(".profile");
export const editButton = profile.querySelector(".profile__edit-button");
export const addButton = document.querySelector(".profile__add-button");

export const editForm = editPopup.querySelector(".popup__form");
export const addForm = addPopup.querySelector(".popup__form");

export const inputPlace = document.querySelector(".popup__input_place");
export const inputUrl = document.querySelector(".popup__input_url");

export const nameInput = document.querySelector(".popup__input_name");
export const jobInput = document.querySelector(".popup__input_job");

export const containerSelector = ".illustration";
export const editPopupSelector = ".popup_type_edit-profile";
export const addPopupSelector = ".popup_type_add-card";
export const imagePopupSelector = ".popup_type_image";
export const nameSelector = ".profile__title";
export const jobSelector = ".profile__subtitle";