
function checkResponce(responce){

  return responce.ok
    ?  responce.json()
    : Promise.reject(`Ошибка: ${responce.status}`)
};

export default async function getMoviesData(){

  const res = await fetch('https://api.nomoreparties.co/beatfilm-movies');
  return checkResponce(res);
}

