import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

import { AuthorizedContext } from "../../contexts/AuthContext";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import MenuPopup from '../MenuPopup/MenuPopup';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function App() {

  const [isLoggedIn, setLoggedIn] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  const [isProfileOnEdit, setProfileOnEdit] = useState(false);

  const [isMenuPopupOpen, setMenuPopupOpen] = useState(false);
  const [isOnMobileSize, setIsOnMobileSize] = useState(window.innerWidth < 1150);

  const [isOnLoadingData, setLoadingData] = useState(false);

// swap login status dummy
  useEffect(()=>{

    const handleLKeyTap = (evt) => {

      if (evt.key === 'L')
      setLoggedIn(!isLoggedIn);
    };

    document.addEventListener('keydown', handleLKeyTap);

    return ()=>{
      document.removeEventListener('keydown', handleLKeyTap);
    }
  })

  // create default user data dummy
  useEffect(()=>{

    setCurrentUser({
      name: 'Виталий',
      email: 'email@email.com'
    });
  },[]);

  useEffect(() => {

    const handleResizeEvent = () => {

      const currentIsMobile = window.innerWidth < 1150;
      if ((currentIsMobile !== isOnMobileSize) && (currentIsMobile === false)) {
        setIsOnMobileSize(currentIsMobile);
        setMenuPopupOpen(false);
      }
      else if (currentIsMobile !== isOnMobileSize) {
        setIsOnMobileSize(currentIsMobile);
      }
    }

    window.addEventListener('resize', handleResizeEvent, false);

    return () => {
      window.removeEventListener('resize', handleResizeEvent, false);
    }

  }, [isOnMobileSize]);


  function handleEditProfileClick() {

    setProfileOnEdit(!isProfileOnEdit);
  }

  function handleCancelEdit() {

    setProfileOnEdit(false);
  }

  function handleBurgerClick() {

    setMenuPopupOpen(!isMenuPopupOpen);
  }

  function handlePopupLinkClick() {
    setMenuPopupOpen(!isMenuPopupOpen);
  }

  function handleSignOutClick() {

    setLoggedIn(false);
  }

  // fake loading process on user update dummy
  function handleUpdateUser({name, email}) {

    console.log('loading...')
    setLoadingData(true);

    setTimeout(() => {
      setCurrentUser({name, email});
      console.log('succes')
      setLoadingData(false);
    }, 5000);
  }

  const routesWithoutHeader = [
    '/signin',
    '/signup',
    '/not-found',
  ];

  const routesWithoutFooter = [
    '/signin',
    '/signup',
    '/profile',
    '/not-found',
  ];

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
              <Main />
            </Route>

            <Route
              path='/signup'
              exact
            >
              <Register />
            </Route>

            <Route
              path='/signin'
              exact
            >
              <Login />
            </Route>

            <Route
              path='/movies'
              exact
            >
              <Movies />
            </Route>

            <Route
              path='/saved-movies'
              exact
            >
              <SavedMovies />
            </Route>

            <Route
              path='/profile'
              exact
            >
              <Profile
                isProfileOnEdit={isProfileOnEdit}
                isOnLoadingData={isOnLoadingData}
                onUpdateUser={handleUpdateUser}
                onEditClick={handleEditProfileClick}
                onCancelEdit = {handleCancelEdit}
                onSignOutClick={handleSignOutClick}
              />
            </Route>

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
            isOnMobileSize={isOnMobileSize}
            onPopupLinkClick={handlePopupLinkClick}
            isMenuPopupOpen={isMenuPopupOpen}
          />
        </div>
      </CurrentUserContext.Provider>
    </AuthorizedContext.Provider>

  );
}

export default App;
