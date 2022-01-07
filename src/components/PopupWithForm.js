import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._formSubmit = formSubmit;
        this._submitButton = document.querySelector('.popup__save-button');
    }

    _getInputValues(){
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._formValues = {};
        this._inputList.forEach(input => {
            this._formValues[input.name] = input.value;
            })
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', () => {
          this._formSubmit(this._getInputValues());
          this.close();
        });
    
        super.setEventListeners();
    } 

    close() {
        super.close();
        this._popup.querySelector('.popup__form').reset();
    }

    toggleButtonText(text) {
        this._submitButton.textContent = text;
    }

};

export default PopupWithForm;