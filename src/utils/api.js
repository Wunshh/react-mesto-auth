class Api {
    constructor(config) {
        this._url = config.url;
        this._headers = config.headers;
    }
  
    _checkResponse(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getInitialCards() {
        return fetch(`${this._url}/cards`, {
            method: "GET",
            headers: this._headers,
        })
        .then(this._checkResponse)
    }
  
    postCards(item) {
        return fetch(`${this._url}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
              name: item.name,
              link: item.link,
            })
        })
        .then(this._checkResponse)
    }
  
    handlerdeleteCards(item) {
      return fetch(`${this._url}/cards/${item}`, {
          method: 'DELETE',
          headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    changeLikeCardStatus(item, like) {
      return fetch(`${this._url}/cards/${item}/likes`, {
          method: like ? 'DELETE' : 'PUT',
          headers: this._headers,
      })
      .then(this._checkResponse)
    }
  
    getUserInfoFromServer() {
        return fetch(`${this._url}/users/me`, {
            method: "GET",
            headers: this._headers,
        })
        .then(this._checkResponse)
    }
  
    updateUserData(item) {
      return fetch(`${this._url}/users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
              name: item.name,
              about: item.about
          })
      })
      .then(this._checkResponse)
    }
  
    updateUserAvatar(item) {
      return fetch(`${this._url}/users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify({
              avatar: item.link,
          })
      })
      .then(this._checkResponse)
    }
}
    
const config = {
    url: "https://api.last.nomoredomains.work",
    headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
    },
};

const api = new Api(config);

export default api;