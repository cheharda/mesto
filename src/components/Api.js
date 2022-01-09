
export default class Api {
    constructor(data) {
      this.baseUrl = data.baseUrl; 
      this.headers = data.headers; 
    }
  
    editProfileAvatar(data) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this.headers, 
            body: JSON.stringify({
                avatar: data.avatar
            })       
        }).then(this._handleResponse)
    }

    getUserFromServer() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "GET",
            headers: this.headers, 
        })
        .then(this._handleResponse)
    }

    editProfileUser(data) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers, 
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })       
        }).then(this._handleResponse)
    }

    getCardsFromServer() {
        return fetch(`${this.baseUrl}/cards`, {
            method: "GET",
            headers: this.headers,     
        }).then(this._handleResponse)
    }

    postCardsOnServer(data) {
        return fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,     
            body: JSON.stringify({
                name: data.place,
                link: data.url
            }) 
        }).then(this._handleResponse)
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,        
        }).then(this._handleResponse)
    }

    makeLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,        
        }).then(this._handleResponse)
    }

    deleteLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,        
        }).then(this._handleResponse)
    }

    _handleResponse(res) 
    {
        if (res.ok) {
            return res.json();
        }
        
        return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
  