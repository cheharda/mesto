const config  = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    inputTypeError: 'popup__input_type_error',
    buttonSelector: '.popup__save-button',
    buttonInactive: 'button_inactive', 
    inputError: 'popup__input_error',
  };

function enableValidation (validationConfig) {
    const forms =  Array.from (document.querySelectorAll(validationConfig.formSelector));
    forms.forEach((form) => formListeners(form, validationConfig));
        
    };
  
  function handlSubmit(event) {
    event.preventDefault();
  }    
  
  function formListeners (form, validationConfig) {
    form.addEventListener('submit', handlSubmit);
    form.addEventListener('input', buttonState(form, validationConfig));
  
    const inputs = [...form.querySelectorAll(config.inputSelector)];
    inputs.forEach(inputElement => {
        inputElement.addEventListener('input', 
        () => handleFieldValidation(inputElement, form, validationConfig))
    })
  
    buttonState(form, validationConfig);
  } 
  
  function buttonState(form, validationConfig) {
    const button = form.querySelector(validationConfig.buttonSelector);
    button.disabled = !form.checkValidity();
    button.classList.toggle(validationConfig.buttonInactive, !form.checkValidity());
  }
  
  function handleFieldValidation(inputElement, form, validationConfig) {
    if (!inputElement.validity.valid) {
        showInputError(inputElement, form, validationConfig);
        buttonState(form, validationConfig);
      } else {
        hideInputError(inputElement, form, validationConfig);
        buttonState(form, validationConfig);
      }
  }
  
  function showInputError(inputElement, form, validationConfig) { 
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.add(validationConfig.inputTypeError);
    errorElement.textContent = inputElement.validationMessage;
  }
  
  function hideInputError(inputElement, form, validationConfig) {
    const errorElement = document.getElementById(`${inputElement.id}-error`);
    inputElement.classList.remove(validationConfig.inputTypeError);
    errorElement.textContent = '';  
  };

  //включение валидации
enableValidation(config);