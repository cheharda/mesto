import Popup from './Popup.js';

class PopupWithForm extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector);
        this._popup = document.querySelector(popupSelector);
        this._form = this._popup.querySelector('.popup__form');
        this._formSubmit = formSubmit;
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
        this._form.addEventListener('submit', (event) => this._getInputValues(event));
        this._form.addEventListener('submit', (event) => this._formSubmit(event));
        this.close();
    }

    close() {
        this._popup.querySelector('.popup__form').reset();
        super.close();
    }

};

export default PopupWithForm;