const config  = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  inputTypeError: 'popup__input_type_error',
  buttonSelector: '.popup__save-button',
  buttonInactive: 'button_inactive', 
  inputError: 'popup__input_error',
};

class FormValidator {
  constructor(config) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._inputTypeError = config.inputTypeError;
    this._inputError = config.inputError;
    this._buttonSelector = config.buttonSelector;
    this._buttonInactive = config.buttonInactive;
    this._config = config;

  }

  enableValidation (config) {
    const forms =  Array.from (document.querySelectorAll(this._formSelector));
    forms.forEach((form) => this._setFormListeners(form, config));        
    };  

  _showInputError(inputElement) { 
    this._errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputTypeError);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._inputError);
  } 

  _hideInputError(inputElement) {
    this._errorElement = document.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputTypeError);
    this._errorElement.classList.remove(this._inputError);
    this._errorElement.textContent = '';  
  }

  _handleFieldValidation(inputElement, form) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
        this._togglebuttonState(form);
      } else {
        this._hideInputError(inputElement);
        this._togglebuttonState(form);
      }
  }

  _setFormListeners (form) {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    form.addEventListener('input', this._togglebuttonState(form));
    
    const inputs = [...form.querySelectorAll(this._inputSelector)];
    inputs.forEach(inputElement => {
        inputElement.addEventListener('input', 
        () => this._handleFieldValidation(inputElement, form))
    })

    this._togglebuttonState(form);
  } 
  
  _togglebuttonState(form) {
    const button = form.querySelector(this._buttonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(this._buttonInactive, !form.checkValidity());
  }

  disableSubmitButton(form) {
    const button = form.querySelector(this._buttonSelector);
    button.classList.add(this._buttonInactive);
    button.disabled = true;
}
  
}

export default FormValidator;