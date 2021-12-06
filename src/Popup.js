class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
    }

    _handleEscClose(event){
        if (event.key === "Escape") {
            this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose.bind(this));
        
    }
 
    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose.bind(this));
        
        
    }

    _closePopupClick (event) {
        if (event.target.classList.contains('popup_opened')) {
            this.close();
        }
    }
    
    setEventListeners() {
        const popupCloseButton = this._popup.querySelector(".popup__close-button");
        popupCloseButton.addEventListener('click', () => {
            this.close();
        });
        this._popup.addEventListener('mousedown', this._closePopupClick.bind(this));
    }
}

export default Popup;