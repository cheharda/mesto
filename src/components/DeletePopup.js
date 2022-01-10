import Popup from './Popup.js';

class DeletePopup extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector);
        this._popupConfirm = document.querySelector(popupSelector);
        this._formSubmit = formSubmit;
    }

    setEventListeners() {
        this._popupConfirm.addEventListener('submit', (event) => {
            event.preventDefault();
          this._formSubmit(this._data);
          this.close();
        });
    
        super.setEventListeners();
    } 


    open(data) {
        super.open();
        this._data = data;
    }

};

export default DeletePopup;