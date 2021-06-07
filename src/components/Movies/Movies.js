import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import {MOVIES_INFO_MESSAGES} from '../../utils/constants';

function Movies({
  data,
  savedData,
  isUsedSearch,
  isFoundAnyMovies,
  isOnLikeProcess,
  onSearchMovie,
  onSaveMovie,
  onDeleteMovie
}) {

  return (
    <main
      className='movies'
    >
      <div
        className='movies__wrapper'
      >
        <SearchForm
          onSearchMovie={onSearchMovie}
        />

        <div
          className='movies__info-container'
        >
          {isUsedSearch
            ?
            isFoundAnyMovies
              ? null
              : <p className='movies__info'> {MOVIES_INFO_MESSAGES.onFoundNoMovies} </p>

            : data && data.length !== 0
              ? null
              : <p className='movies__info'>{ MOVIES_INFO_MESSAGES.beforeFirstSearchNoMovies}</p>
          }
        </div>

        <MoviesCardList
          data={data}
          isOnLikeProcess={isOnLikeProcess}
          isFoundAnyMovies={isFoundAnyMovies}
          savedData={savedData}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
        />

      </div>

    </main>
  )
}

export default Movies;
