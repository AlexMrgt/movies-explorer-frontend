import SearchForm from '../SearchForm/SearchForm';
import SavedMoviesCardList from '../SavedMoviesCardList/SavedMoviesCardList';
import MoreButton from '../MoreButton/MoreButton';

import { MOVIES_INFO_MESSAGES, BUTTON_TEXT } from '../../utils/constants';



function SavedMovies({
  data,
  isAnySavedMovies,
  isFoundAnySavedMovies,
  isOnSearchMode,
  isOnLikeProcess,
  onDisableSearchMode,
  onSearcSaveMovie,
  onDeleteMovie
}) {

  function handleShowAllClick() {

    onDisableSearchMode();
  }

  return (

    <main
      className='movies'
    >
      <div
        className='movies__wrapper'
      >
        <SearchForm
          onSearchMovie={onSearcSaveMovie}
        />

        <div
          className='movies__info-container'
        >
          {isOnSearchMode && <button
            onClick={handleShowAllClick}
            type='button'
            className='movies__show-all-saved'
          >
            {BUTTON_TEXT.showAllSaved}
        </button>}

          {isOnSearchMode
            ? (
              isFoundAnySavedMovies
                ? null
                : <p
                  className='movies__info'>{MOVIES_INFO_MESSAGES.onFoundNoSavedMovies} </p>
            )
            : isAnySavedMovies
              ? null
              : <p className='movies__info'>{MOVIES_INFO_MESSAGES.noSavedMovies}</p>}
        </div>

        <SavedMoviesCardList
          data={data}
          isOnLikeProcess={isOnLikeProcess}
          onDeleteMovie={onDeleteMovie}
        />

        <MoreButton />
      </div>

    </main>
  )
}

export default SavedMovies;
