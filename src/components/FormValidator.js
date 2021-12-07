
class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._inputTypeError = config.inputTypeError;
    this._inputError = config.inputError;
    this._buttonSelector = config.buttonSelector;
    this._buttonInactive = config.buttonInactive;
    this._config = config;
    this._formElement = form;
    this._button = this._formElement.querySelector(this._buttonSelector);

  }

  enableValidation () {
      this._setFormListeners(this._formElement);
      this._formElement.addEventListener('submit', (evt) => {
          evt.preventDefault();
      });
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

  _handleFieldValidation(inputElement) {
    if (!inputElement.validity.valid) {
        this._showInputError(inputElement);
        this._togglebuttonState(this._formElement);
      } else {
        this._hideInputError(inputElement);
        this._togglebuttonState(this._formElement);
      }
  }

  _setFormListeners () {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });

    this._formElement.addEventListener('input', this._togglebuttonState(this._formElement));
    
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._inputs.forEach(inputElement => {
        inputElement.addEventListener('input', 
        () => this._handleFieldValidation(inputElement));
    })

    this._togglebuttonState();
  } 
  
  _togglebuttonState() {
    this._button.disabled = !this._formElement.checkValidity();
    this._button.classList.toggle(this._buttonInactive, !this._formElement.checkValidity());
  }

  disableSubmitButton() {
    this._button.classList.add(this._buttonInactive);
    this._button.disabled = true;
}
  
}

export default FormValidator;