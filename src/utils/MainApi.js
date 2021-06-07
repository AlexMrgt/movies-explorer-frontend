class MainApi {

  constructor({
    baseUrl,
  }) {
    this._baseIrl = baseUrl;
  }

  _checkResponceWithDataExpect(res) {

    return res.ok ? res.json() : Promise.reject(res)
  }

  _checkResponceWithoutData(res) {

    return res.ok ? '' : Promise.reject(res)
  }

  async signUp(data) {

    const res = await fetch(`${this._baseIrl}/signup`, {
      method: 'POST',
      'credentials': 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return this._checkResponceWithoutData(res);
  }

  async signIn(data) {

    const res = await fetch(`${this._baseIrl}/signin`, {
      method: 'POST',
      'credentials': 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    return this._checkResponceWithoutData(res);
  }

  async signOut() {

    const res = await fetch(`${this._baseIrl}/signout`, {
      method: 'DELETE',
      'credentials': 'include',
    })

    return this._checkResponceWithoutData(res);

  }

  async getUserUnfo() {

    const res = await fetch(`${this._baseIrl}/users/me`, {
      'credentials': 'include',
    });
    return this._checkResponceWithDataExpect(res);
  }

  async updateUserInfo(data) {

    const res = await fetch(`${this._baseIrl}/users/me`, {
      method: 'PATCH',
      'credentials': 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return this._checkResponceWithDataExpect(res);
  }

  async getSavedMovies() {

    const res = await fetch(`${this._baseIrl}/movies`, {
      'credentials': 'include',
    });
    return res.ok ? res.json() : Promise.reject(res);
  }

  async saveMovie(movie) {

    const res = await fetch(`${this._baseIrl}/movies/`, {
      method: 'POST',
      'credentials': 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie)
    });
    return this._checkResponceWithDataExpect(res);
  }

  async deleteSavedMovie(id) {

    const res = await fetch(`${this._baseIrl}/movies/${id}`, {
      method: 'DELETE',
      'credentials': 'include',
    });
    return this._checkResponceWithDataExpect(res);
  }

}

const mainApi = new MainApi({

  baseUrl: 'https://api.movies.project.nomoredomains.monster',
});

export default mainApi;


