
function checkResponce(responce){

  return responce.ok
    ?  responce.json()
    : Promise.reject(`Ошибка: ${responce.status}`)
};

export default function getMoviesList(){

  return fetch('https://api.nomoreparties.co/beatfilm-movies')
    .then(res => checkResponce(res));
}

