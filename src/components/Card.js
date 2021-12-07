class Card {
    constructor({link, name}, templateSelector, handleCardClick) {
        this._link = link;
        this._name = name;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;

    }

    _getTemplate() {
        const cardElement = document
        .querySelector(this._templateSelector).
        content.
        querySelector(".illustration__item")
        .cloneNode(true);
        return cardElement;
    }

    _addListeners() {
        this._deleteButton = this._element
        .querySelector(".illustration__del-button")
        .addEventListener('click', () => 
        this._remove());

        this._likeButton = this._element.querySelector(".illustration__heart");
        this._likeButton.addEventListener('click', () => this._likeCard());
        
        this._element
        .querySelector(".illustration__image")
        .addEventListener('click', () => 
        this._handleCardClick(this._name, this._link));

    }

    _remove() {
        this._element.remove();
    }

    _likeCard() {
        this._likeButton.classList.toggle("illustration__heart_active");
    }

    renderCard() {
        this._element = this._getTemplate();

        this._cardImage = this._element.querySelector(".illustration__image");
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
		this._element.querySelector(".illustration__title").textContent = this._name;

        this._addListeners();
        
		return this._element;
	}
}

export default Card;