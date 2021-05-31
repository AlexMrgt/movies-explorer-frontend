import { useContext } from "react";
import { useLocation } from "react-router";
import { AuthorizedContext } from '../../contexts/AuthContext';

import AuthorizedHeader from '../AuthorizedHeader/AuthorizedHeader';
import AnonHeader from '../AnonHeader/AnonHeader';

function Header({
  onBurgerClick,
  isMenuPopupOpen,
}) {

  const isLoggedIn = useContext(AuthorizedContext);

  const location = useLocation();

  return (
    <header
      className={`
        header
        ${location.pathname === '/' ? 'header_main' : ''}
        `}
    >
      {isLoggedIn
        ?
        <AuthorizedHeader
          isMenuPopupOpen={isMenuPopupOpen}
          onBurgerClick={onBurgerClick}
        />
        :
        <AnonHeader />
      }

    </header>

  )
}

export default Header;
