import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';

import { AuthorizedContext } from "../../contexts/AuthContext";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import useCurrentSize from '../../hooks/useCurrentSize';

import getMoviesData from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import MenuPopup from '../MenuPopup/MenuPopup';
import InfoPopup from '../InfoPopup/InfoPopup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import searchMovies from '../../utils/search';

import {
  routesWithoutHeader,
  routesWithoutFooter,
  INFO_POPUP_MESSAGES,
} from '../../utils/constants';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [isProfileOnEdit, setProfileOnEdit] = useState(false);

  const [moviesData, setMoviesData] = useState([]);
  const [isFoundAnyMovies, setIsFoundAnyMovies] = useState(false);
  const [isUsedSearch, setIsUsedSearch] = useState(false);

  const [savedMovies, setSavedMovies] = useState([]);
  const [savedMoviesSearchResult, setSavedMoviesSearchResult] = useState([]);
  const [isAnySavedMovies, setIsAnySavedMovies] = useState(false);
  const [isFoundAnySavedMovies, setIsFoundAnySavedMovies] = useState(false);
  const [isAfterSearch, setIsAfterSearch] = useState(false);
  const [isOnSearchMode, setIsOnSearchMode] = useState(false);

  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);
  const [isOnMobileSize, setIsOnMobileSize] = useState(window.innerWidth < 1150);

  const [isApiError, setIsApiError] = useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const [infoPopupMessage, setInfoPopupMessage] = useState('');

  const [isLoadingData, setIsLoadingData] = useState(false);
  const [isOnLoadingProfileData, setOnLoadingProfileData] = useState(false);
  const [isOnLikeProcess, setIsOnLikeProcess] = useState({
    id: '',
    isOnProcess: false
  });

  const history = useHistory();
  const size = useCurrentSize();

  useEffect(() => {

    setIsLoadingData(true);

    mainApi.getUserUnfo()
      .then(user => {
        setCurrentUser(user);
        setIsLoggedIn(true);
      })
      .catch(err => {
        // console.log(err);
      })
      .finally(() => {
        setIsLoadingData(false);
      })

  }, [isLoggedIn]);

  useEffect(() => {

    setIsLoadingData(true);

    mainApi.getSavedMovies()
      .then(savedMovies => {
        setIsAnySavedMovies(true);
        setSavedMovies(savedMovies);
      })
      .catch(() => {
        setSavedMovies([])
        setIsAnySavedMovies(false);
      })
      .finally(() => {
        setIsLoadingData(false);
      })

  }, [isLoggedIn]);

  useEffect(() => {

    if (!localStorage.getItem('local-movies-storage')) {

      setIsLoadingData(true);

      getMoviesData()
        .then(movies => {
          localStorage.setItem('local-movies-storage', JSON.stringify(movies));
        })
        .catch(() => {
          localStorage.setItem('local-movies-storage', JSON.stringify([]));
        })
        .finally(() => {
          setIsLoadingData(false);
        })
    };

  }, [isLoggedIn]);

  useEffect(() => {

    const rawData = JSON.parse(localStorage.getItem('previously-searched-movies'));

    if (!rawData || rawData.length === 0) {
      localStorage.setItem('previously-searched-movies', JSON.stringify([]));
      setMoviesData([]);
      setIsFoundAnyMovies(false);
    }
    else {
      setMoviesData(rawData);
      setIsFoundAnyMovies(true);
    }
    setIsUsedSearch(false);

  }, [isLoggedIn])

  useEffect(() => {

    const currentIsMobile = size.width < 1150;

    if ((currentIsMobile !== isOnMobileSize) && (currentIsMobile === false)) {
      setIsOnMobileSize(currentIsMobile);
      setMenuPopupOpen(false);
    }
    else if (currentIsMobile !== isOnMobileSize) {
      setIsOnMobileSize(currentIsMobile);
    }

  }, [size.width, isOnMobileSize]);


  // MENU POPUP LOGIC
  function handleBurgerClick() {

    setMenuPopupOpen(!isMenuPopupOpen);
  }

  function handlePopupLinkClick() {

    setMenuPopupOpen(!isMenuPopupOpen);
  }


  // AUTH LOGIC
  function handleSignUp(data) {

    mainApi.signUp(data)
      .then(() => {

        handleSignIn({
          email: data.email,
          password: data.password
        })

        setIsApiError(false);
        setIsInfoPopupOpen(true);
        setInfoPopupMessage(INFO_POPUP_MESSAGES.successSignUp);
      })
      .catch(err => {
        handleSignUpErrors(err.status);
      })
  }

  function handleSignIn(data) {

    mainApi.signIn(data)
      .then(() => {
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => {
        handleSignInErrors(err.status);
      })
  }

  function handleSignOut() {

    mainApi.signOut()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.clear();
      })
  }


  // PROFILE LOGIC
  function handleEnableEdit() {

    setProfileOnEdit(true);
  }

  function handleDisablelEdit() {

    setProfileOnEdit(false);
  }

  function handleUpdateUser(data) {

    setOnLoadingProfileData(true);

    mainApi.updateUserInfo(data)
      .then(updatedUser => {
        setCurrentUser(updatedUser);
        setIsApiError(false);
        setIsInfoPopupOpen(true);
        setInfoPopupMessage(INFO_POPUP_MESSAGES.successUserUpdate);
      })
      .catch(err => {
        profileErrorHandler(err.status)
      })
      .finally(() => {
        setOnLoadingProfileData(false);
      })
  }


  // MOVIES SEARCH LOGIC
  function handleSearchMovies(searchQuery) {

    setIsUsedSearch(true);

    const searchPull = JSON.parse(localStorage.getItem('local-movies-storage'));

    if (searchPull) {

      const foundMovies = searchMovies(searchQuery, searchPull);

      if (foundMovies.length === 0) {
        setIsFoundAnyMovies(false);
        localStorage.setItem('previously-searched-movies', JSON.stringify([]));
        setMoviesData([]);
      }
      else {
        localStorage.setItem('previously-searched-movies', JSON.stringify(foundMovies));
        setMoviesData(foundMovies);
        setIsFoundAnyMovies(true);
      }
    }
  };

  function handleSearchSavedMovies(searchQuery) {

    const foundMovies = searchMovies(searchQuery, savedMovies);

    if (foundMovies.length === 0) {
      setSavedMoviesSearchResult([])
      setIsFoundAnySavedMovies(false);
    }
    else {
      setSavedMoviesSearchResult(foundMovies);
      setIsFoundAnySavedMovies(true);
    }
    setIsAfterSearch(true);
    setIsOnSearchMode(true);
  };

  function handleDisableSearchMode() {

    setIsOnSearchMode(false);
    setIsAfterSearch(false);
  }


  // MOVIES ADD/DELETE LOGIC
  function handleSaveMovie(movie) {

    setIsOnLikeProcess({
      id: movie.movieId,
      isOnProcess: true
    });

    mainApi.saveMovie(movie)
      .then(() => {

        mainApi.getSavedMovies()
          .then(savedMovies => {
            setSavedMovies(savedMovies);
            setIsAnySavedMovies(true);
          })
          .catch(() => {
            setIsAnySavedMovies(false);
          })
          .finally(() => {
            setIsOnLikeProcess({
              id: '',
              isOnProcess: false
            });
          })
      })
      .catch(err => {
        // console.log(err);
      })
  }

  function handleDeleteMovie(id) {

    setIsOnLikeProcess({
      id: id,
      isOnProcess: true
    })

    mainApi.deleteSavedMovie(id)
      .then(() => {
        mainApi.getSavedMovies()
          .then(setSavedMovies)
          .catch((err) => {
            setSavedMovies([]);
            setIsAnySavedMovies(false);
          })
          .finally(
            setIsOnLikeProcess({
              id: '',
              isOnProcess: false
            })
          )
      })
      .catch(err => {
        // console.log(err);
      })
  }

  function findIdFromMovieId(movieId) {
    let idToDelete = '';

    savedMovies.forEach(savedMovie => {
      if (savedMovie.movieId === movieId) {
        idToDelete = savedMovie._id;
      }
    });

    return idToDelete;
  }

  function handleDeleteMovieOnMoviesPage(movieId) {

    const id = findIdFromMovieId(movieId);

    handleDeleteMovie(id);
  }

  function handleClosePopup() {

    setIsInfoPopupOpen(false);
  }


  // ERROR HANDLERS
  function handleSignUpErrors(errCode) {

    setIsApiError(true);
    setIsInfoPopupOpen(true);

    switch (errCode) {
      case 400:
        setInfoPopupMessage(INFO_POPUP_MESSAGES.signUpBadRequestError);
        break;

      case 409:
        setInfoPopupMessage(INFO_POPUP_MESSAGES.signUpConflictError);
        break;

      default:
        break;
    }
  }

  function handleSignInErrors(errCode) {

    setIsApiError(true);
    setIsInfoPopupOpen(true);

    switch (errCode) {
      case 400:
        setInfoPopupMessage(INFO_POPUP_MESSAGES.signInBadRequestError);
        break;

      case 401:
        setInfoPopupMessage(INFO_POPUP_MESSAGES.signInsUnauthorizedError);
        break;

      default:
        break;
    }
  }

  function profileErrorHandler(errCode) {
    setIsApiError(true);
    setIsInfoPopupOpen(true);

    switch (errCode) {
      case 400:
        setInfoPopupMessage(INFO_POPUP_MESSAGES.updateBadRequestError);
        break;

      case 409:
        setInfoPopupMessage(INFO_POPUP_MESSAGES.updateUserConflictError);
        break;

      default:
        break;
    }
  }


  return (
    <AuthorizedContext.Provider value={isLoggedIn}>
      <CurrentUserContext.Provider value={currentUser}>
        <div
          className="app"
        >

          {useRouteMatch(routesWithoutHeader)
            ? null
            : (
              <Header
                onBurgerClick={handleBurgerClick}
                isMenuPopupOpen={isMenuPopupOpen}
              />
            )
          }

          <Route
            path='/not-found'
          >
            <NotFoundPage />
          </Route>

          <Switch>

            <Route
              path='/'
              exact
            >
              {isLoadingData ? (
                <Preloader />
              ) : (
                <Main />
              )}
            </Route>

            <Route
              path='/signup'
              exact
            >
              {isLoggedIn &&
                <Redirect to='/' />
              }
              <Register
                onSignUp={handleSignUp}
              />
            </Route>

            <Route
              path='/signin'
              exact
            >
              {isLoggedIn &&
                <Redirect to='/' />
              }
              <Login
                onSignIn={handleSignIn}
              />
            </Route>

            <ProtectedRoute
              path='/movies'
            >
              <Movies
                data={moviesData}
                savedData={savedMovies}
                isUsedSearch={isUsedSearch}
                isFoundAnyMovies={isFoundAnyMovies}
                isOnLikeProcess={isOnLikeProcess}
                onSearchMovie={handleSearchMovies}
                onSaveMovie={handleSaveMovie}
                onDeleteMovie={handleDeleteMovieOnMoviesPage}
              />
            </ProtectedRoute>

            <ProtectedRoute
              path='/saved-movies'
            >
              <SavedMovies
                data={isAfterSearch ? savedMoviesSearchResult : savedMovies}
                isAnySavedMovies={isAnySavedMovies}
                isFoundAnySavedMovies={isFoundAnySavedMovies}
                isOnSearchMode={isOnSearchMode}
                isOnLikeProcess={isOnLikeProcess}
                onDisableSearchMode={handleDisableSearchMode}
                onSearcSaveMovie={handleSearchSavedMovies}
                onDeleteMovie={handleDeleteMovie}
              />
            </ProtectedRoute>

            <ProtectedRoute
              path='/profile'
            >
              <Profile
                isProfileOnEdit={isProfileOnEdit}
                isOnLoadingProfileData={isOnLoadingProfileData}
                onUpdateUser={handleUpdateUser}
                onEnableEdit={handleEnableEdit}
                onDisableEdit={handleDisablelEdit}
                onSignOut={handleSignOut}
              />
            </ProtectedRoute>

            <Route
              path='*'
            >
              <Redirect
                to='/not-found'
              />
            </Route>

          </Switch>

          {useRouteMatch(routesWithoutFooter)
            ? null
            : (
              <Footer />
            )
          }

          <MenuPopup
            isMenuPopupOpen={isMenuPopupOpen}
            isOnMobileSize={isOnMobileSize}
            onPopupLinkClick={handlePopupLinkClick}
          />

          <InfoPopup
            isApiError={isApiError}
            infoPopupMessage={infoPopupMessage}
            isInfoPopupOpen={isInfoPopupOpen}
            onClose={handleClosePopup}
          />

        </div>
      </CurrentUserContext.Provider>
    </AuthorizedContext.Provider>

  );
}

export default App;
