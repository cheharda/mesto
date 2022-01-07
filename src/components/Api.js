
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
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getUserFromServer() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "GET",
            headers: this.headers, 
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    editProfileUser(data) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: "PATCH",
            headers: this.headers, 
            body: JSON.stringify({
                name: data.name,
                about: data.job
            })       
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    getCardsFromServer() {
        return fetch(`${this.baseUrl}/cards`, {
            method: "GET",
            headers: this.headers,     
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    postCardsOnServer(data) {
        return fetch(`${this.baseUrl}/cards`, {
            method: "POST",
            headers: this.headers,     
            body: JSON.stringify({
                name: data.place,
                link: data.url
            }) 
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteCard(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this.headers,        
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    makeLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "PUT",
            headers: this.headers,        
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }

    deleteLike(cardId) {
        return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
            method: "DELETE",
            headers: this.headers,        
        }).then((res) => {
            if (res.ok) {
                return res.json();
            }
            
            return Promise.reject(`Ошибка: ${res.status}`);
        })
    }
  }
  