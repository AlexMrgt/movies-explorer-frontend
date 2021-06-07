function searchMovies( searchQuery, data){

  const { search, amongShortMovies = false } = searchQuery;

  function commonMovieFilter (movie){

    const nameRU = movie.nameRU || '';
    const nameEN = movie.nameEN || '';

    return nameRU.toLowerCase().includes(search.toLowerCase()) || nameEN.toLowerCase().includes(search.toLowerCase())  ;
  }

  function shortMovieSilter(movie){
    return movie.duration <= 40;
  }

  if(amongShortMovies){
    return data.filter(shortMovieSilter).filter(commonMovieFilter);
  }
  else{
    return data.filter(commonMovieFilter)
  }

}

export default searchMovies;
