class Card {
    constructor(item, template, handleCardClick) {
        this._item = item;
        this._link = item.link;
        this._name = item.name;
		this._view = template.content.querySelector(".illustration__item").cloneNode(true);
        this._handleCardClick = handleCardClick;        
    }

    _getTemplate() {
        const cardElement = this._view;
        return cardElement;
    }

    _addListeners() {
        this._deleteButton = this._view.querySelector(".illustration__del-button").addEventListener('click', () => this._remove());
        this._likeButton = this._view.querySelector(".illustration__heart");
        this._likeButton.addEventListener('click', () => this._likeCard());
        this._view.querySelector(".illustration__heart");
        this._view.querySelector(".illustration__image").addEventListener('click', () => this._handleCardClick(this._link, this._name));

    }

    _remove() {
        this._view.remove();
    }

    _likeCard(event) {
        this._likeButton.classList.toggle("illustration__heart_active");
    }

    _edit() {
        this.this._view.open();
    }

    renderCard() {
        this._element = this._getTemplate();
        this._addListeners();
        this._cardImage = this._element.querySelector(".illustration__image");
        this._cardImage.src = this._item.link;
        this._cardImage.alt = this._item.name;
		this._element.querySelector(".illustration__title").textContent = this._item.name;
        this._deleteButton = this._element.querySelector(".illustration__del-button");
        this._likeButton = this._element.querySelector(".illustration__heart");
        
		return this._element;
	}

    
}

export default Card;
