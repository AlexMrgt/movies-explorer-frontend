import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

import useCurrentSize from '../../hooks/useCurrentSize';
import MoreButton from '../MoreButton/MoreButton';

import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({
  data,
  savedData,
  isOnLikeProcess,
  isFoundAnyMovies,
  onSaveMovie,
  onDeleteMovie,
}) {

  const SIZE_WIDTH_LARGE = 786;
  const SIZE_WIDTH_MEDIUM = 420;
  const SIZE_WIDTH_SMALL = 320;

  const NUMBER_OF_RENDER_LARGE = 12;
  const NUMBER_OF_RENDER_MEDIUM = 8;
  const NUMBER_OF_RENDER_SMALL = 5;

  const NUMBER_OF_ADD_LARGE = 3;
  const NUMBER_OF_ADD_SMALL = 2;

  const [moviesToRender, setMoviesToRender] = useState([]);
  const [numberMoviesToRender, setNumberMoviesToRender] = useState(0);

  const [isMoreButtonDisplayed, setMoreButtonDisplayed] = useState(false);
  const [numberMoviesToAdd, setNumberOfMoviesToAdd] = useState(0);

  const currentLocation = useLocation();
  const currentLocationPath = currentLocation.pathname;

  const size = useCurrentSize();



  useEffect(() => {

    function countNumberMoviesToRender() {

      if (size.width >= SIZE_WIDTH_LARGE) {

        setNumberMoviesToRender(NUMBER_OF_RENDER_LARGE)
        setNumberOfMoviesToAdd(NUMBER_OF_ADD_LARGE)
      } else

        if (size.width >= SIZE_WIDTH_MEDIUM) {

          setNumberMoviesToRender(NUMBER_OF_RENDER_MEDIUM)
          setNumberOfMoviesToAdd(NUMBER_OF_ADD_SMALL)
        }

        else if (size.width >= SIZE_WIDTH_SMALL) {

          setNumberMoviesToRender(NUMBER_OF_RENDER_SMALL)
          setNumberOfMoviesToAdd(NUMBER_OF_ADD_SMALL)
        }
    }

    countNumberMoviesToRender();

  }, [size.width])

  useEffect(() => {

    if (currentLocationPath === '/movies' && isFoundAnyMovies) {

      setMoviesToRender(data.slice(0, numberMoviesToRender));

      if (data.length <= numberMoviesToRender) {

        setMoreButtonDisplayed(false)
      }
      else {

        setMoreButtonDisplayed(true);
      }
    }
    else {
      setMoreButtonDisplayed(false);
      setMoviesToRender([]);
    }

  }, [data, numberMoviesToRender, currentLocationPath, isFoundAnyMovies]);


  function handleMoreButtonClick() {

    setMoviesToRender(data.slice(0, moviesToRender.length + numberMoviesToAdd));

    if (data.length <= moviesToRender.length + numberMoviesToAdd) {
      setMoreButtonDisplayed(false);
    }
  }

  function isSaved(movie) {
    return savedData.some((item) => movie.id === item.movieId);
  }

  return (
    <section
      className='card-list'
    >
      <div
        className='card-list__wrapper'
      >
        {moviesToRender.map(movie =>
        (
          <MovieCard
            key={movie.id || movie._id}
            movie={movie}
            onSaveMovie={onSaveMovie}
            onDeleteMovie={onDeleteMovie}
            currentLocationPath={currentLocationPath}
            isSaved={isSaved(movie)}
            isOnLikeProcess={isOnLikeProcess}
          />
        )
        )}

      </div>

      <MoreButton
        onMoreButtonClick={handleMoreButtonClick}
        isDisplayed={isMoreButtonDisplayed}
      />
    </section>
  )
}

export default MoviesCardList;

