const BASE_URL = 'https://reqres.in';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

class Api {
  constructor({ address, headers}) {
    this._address = address;
    this._headers = headers;
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUsersList(page) {
    return fetch(`${this._address}/api/users?page=${page}`)
      .then(res => {
        return this._getResponseData(res);
      })
  }

  getUserInfo() {
    return fetch(`${this._address}/api/users/2`)
      .then(res => {
        return this._getResponseData(res);
      })
  }
}

const api = new Api({
  address: BASE_URL,
  headers: HEADERS,
})

export default api;