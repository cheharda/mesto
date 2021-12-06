import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._imagePopupImg = this._popup.querySelector(".popup__image");
        this._imagePopupFigcapture = this._popup.querySelector(".popup__figcapture");
        
    }
  
    open(name, link) {
        super.open();
        this._imagePopupImg.src = link;
        this._imagePopupImg.alt = name;
        this._imagePopupFigcapture.textContent = name;

    }
};
