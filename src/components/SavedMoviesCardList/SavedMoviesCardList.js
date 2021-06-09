import { useLocation } from 'react-router';
import MovieCard from '../MovieCard/MovieCard';

function SavedMoviesCardList({
  data,
  isOnLikeProcess,
  onDeleteMovie,
}) {

  const location = useLocation();
  const currentLocationPath = location.pathname;

  return (
    <section
      className='card-list'
    >
      <div
        className='card-list__wrapper'
      >
        {data.map(movie =>
        (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDeleteMovie={onDeleteMovie}
            currentLocationPath={currentLocationPath}
            isOnLikeProcess={isOnLikeProcess}
          />
        )
        )}

      </div>
    </section>
  )
}

export default SavedMoviesCardList;

