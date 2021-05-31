import { NavLink, useLocation } from "react-router-dom";
import LogoLink from "../LogoLink/LogoLink";
import ProfileLink from "../ProfileLink/ProfileLink";
import BurgerButton from '../BurgerButton/BurgerButton';

function AuthorizedHeader({
  isMenuPopupOpen,
  onBurgerClick,
}) {

  const location = useLocation();

  const headerLinks = [
    {
      name: 'Фильмы',
      link: '/movies',
    },
    {
      name: 'Сохраненные фильмы',
      link: '/saved-movies',
    },
  ]

  return (
    <nav
      className='authorized-header'
    >

      <LogoLink />

      <ul
        className='authorized-header__link-list'
      >
        {headerLinks.map(link =>
        (
          <li
            key={link.name}
            className='authorized-header__list-item'
          >
            <NavLink
              to={link.link}
              activeClassName='authorized-header__link_current'

              className={`
              authorized-header__link
              ${location.pathname === '/' ? 'authorized-header__link_main' : ''}
              `}
            >
              {link.name}
            </NavLink>
          </li>
        )
        )}
      </ul>

      <ProfileLink />

      <BurgerButton
        isMenuPopupOpen={isMenuPopupOpen}
        onBurgerClick={onBurgerClick}
      />

    </nav>
  )
}

export default AuthorizedHeader;
