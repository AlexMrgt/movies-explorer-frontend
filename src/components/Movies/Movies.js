import SearchForm from '../SearchForm/SearchForm';
import MovieCardList from '../MovieCardList/MovieCardList';
import MoreButton from '../MoreButton/MoreButton';

function Movies() {

  return (
    <main
      className='movies'
    >
      <div
        className='movies__wrapper'
      >
        <SearchForm />
        <MovieCardList
          type='unsaved'
        />
        <MoreButton />
      </div>

    </main>
  )
}

export default Movies;
