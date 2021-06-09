import {
  getValidImageUrl,
  getValidPreviewUrl,
  getValidTrailerUrl
} from '../../utils/movieUrlUtils';
import Preloader from '../Preloader/Preloader';

function MovieCard({
  movie,
  currentLocationPath,
  isSaved,
  onSaveMovie,
  onDeleteMovie,
  isOnLikeProcess,
}) {

  const movieData = {
    country: movie.country || 'No data',
    director: movie.director || 'No data',
    duration: movie.duration || 0,
    year: movie.year || 'No data',
    description: movie.description || 'No data',
    image: getValidImageUrl(movie),
    trailer: getValidTrailerUrl(movie),
    thumbnail: getValidPreviewUrl(movie),
    nameRU: movie.nameRU || 'No data',
    nameEN: movie.nameEN || 'No data',
    movieId: movie.id || movie.movieId,
  }

  const durationCaptionHandler = (duration) => {

    if (Number.isInteger(duration)) {

      const words = [
        'минут', 'минута', 'минуты'
      ];

      const firstArr = [0, 5, 6, 7, 8, 9];
      const secondArr = [2, 3, 4];
      const thirdArr = [1];

      const lastDigit = parseInt(duration.toString().split('').pop());

      if (duration > 4 && duration < 21) return words[0];
      if (firstArr.includes(lastDigit)) return words[0];
      if (secondArr.includes(lastDigit)) return words[2];
      if (thirdArr.includes(lastDigit)) return words[1];
    }

    return 'минут';
  }

  const titleHandler = (nameRu, nameEn) => {

    if (nameRu !== 'No data') return nameRu;

    if (nameRu === 'No data') {

      if (nameEn !== 'No data') return nameEn

      else return '[Без названия]';
    }
  }

  const handleLikeClick = () => {

    if (currentLocationPath === '/movies') {

      if (isSaved) onDeleteMovie(movieData.movieId);
      else onSaveMovie(movieData);
    }

    else if (currentLocationPath === '/saved-movies') {
      onDeleteMovie(movie._id);
    }
  }

  return (
    <article
      className='card'
    >
      <div
        className='card__header'
      >
        <h4
          className='card__title'
        >
          {titleHandler(movieData.nameRU, movieData.nameEN)}
        </h4>
        <p
          className='card__duration'
        >
          {movieData.duration} {durationCaptionHandler(movieData.duration)}
        </p>
      </div>

      <a
        className='card__link'
        href={movieData.trailer}
        target='_blank'
        rel='noreferrer'
      >
        <img
          src={movieData.image}
          alt='Превью фильма'
          className='card__picture'
        />
      </a>

      {isOnLikeProcess.id===movieData.movieId||isOnLikeProcess.id===movie._id
        ? <Preloader />
        : <button
          className={`
            card__add-to-fav-button
            ${currentLocationPath === '/movies'
              ? `card__add-to-fav-button_type_${isSaved ? 'liked' : 'unsaved'}`
              : 'card__add-to-fav-button_type_saved'
            }
          `}
          type='button'
          onClick={handleLikeClick}
        />
      }

    </article>
  )
}

export default MovieCard;
