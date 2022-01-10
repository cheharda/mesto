class Card {
    constructor({item, userId, handleCardClick, handleDeleteCardClick, handleAddLike, handleRemoveLike}, templateSelector) {
        this._item = item;
        this._link = item.link;
        this._name = item.name;
        this._userId = userId;
        this._likes = item.likes;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteCardClick = handleDeleteCardClick;
        this._handleAddLike = handleAddLike;
        this._handleRemoveLike = handleRemoveLike;
        this._element = document
        .querySelector(this._templateSelector).
        content.
        querySelector(".illustration__item")
        .cloneNode(true);
        this._deleteButton = this._element.querySelector(".illustration__del-button");

    }

    _addListeners() {
        this._deleteButton.addEventListener('click', () => {
            this._handleDeleteCardClick(this._item._id, this._element);
        });

        this._likeButton = this._element.querySelector(".illustration__heart");
        this._likeButton.addEventListener('click', (event) => {
            if (event.target.classList.contains('illustration__heart_active')) {
                this._handleRemoveLike(this._item._id, this);
            } else {
                this._handleAddLike(this._item._id, this);
            }
        });
        
        this._element
        .querySelector(".illustration__image")
        .addEventListener('click', () => 
        this._handleCardClick(this._name, this._link));

    }

    likesCount = (count) => {
        this._likeCounter.textContent = count;
      }

    remove() {
        this._element.remove();
        this._element = null;
    }

    likeCard() {
        this._likeButton.classList.toggle("illustration__heart_active");
    }

    renderCard() {
        this._likeCounter = this._element.querySelector('.illustration__counter');
        this.likesCount(this._likes.length);
        this._cardImage = this._element.querySelector(".illustration__image");
        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
		this._element.querySelector(".illustration__title").textContent = this._name;
        if(this._item.owner._id == this._userId) {
            this._deleteButton;
        } else {
            this._deleteButton.remove();
        }

        this._addListeners();
        
		return this._element;
	}
}

export default Card;