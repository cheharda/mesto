import Popup from './Popup.js';

class DeletePopup extends Popup {
    constructor(popupSelector, {formSubmit}) {
        super(popupSelector);
        this._popupConfirm = document.querySelector('.popup_type_confirm');
        this._formSubmit = formSubmit;
    }

    setEventListeners() {
        this._popupConfirm.addEventListener('submit', () => {
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