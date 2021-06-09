import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import MoreButton from '../MoreButton/MoreButton';

function SavedMovies() {

  return (

    <main
      className='movies'
    >
      <div
        className='movies__wrapper'
      >
        <SearchForm />
        <MovieCardList
          type='saved'
        />
        <MoreButton />
      </div>

    </main>
  )
}

export default SavedMovies;
