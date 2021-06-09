import { Link } from 'react-router-dom';

import profileIcon from '../../images/icons/account-icon.svg';

import ProfileLink from '../ProfileLink/ProfileLink';

function MenuPopup({
  onPopupLinkClick,
  isMenuPopupOpen
}) {

  const PROFILE_LINK_TEXT = 'Аккаунт';


  const popupLinks = [
    {
      text: 'Главная',
      link: '/',
    },
    {
      text: 'Фильмы',
      link: '/movies'
    },
    {
      text: 'Сохраненные фильмы',
      link: '/saved-movies'
    }
  ];

  return (
    <section
      className={`menu-popup ${isMenuPopupOpen ? 'menu-popup_active' : ''}`}
    >

      <div
        className='menu-popup__wrapper'
      >

        <ul
          className='menu-popup__list'
        >

          {popupLinks.map(link =>
          (
            <li
              key={link.text}
              className='menu-popup__item'
            >
              <Link
                to={link.link}
                className='menu-popup__link'
                onClick={onPopupLinkClick}
              >
                {link.text}
              </Link>
            </li>
          )
          )}

        </ul>

        <ProfileLink />

        <Link
          to='/profile'
          className='menu-popup__profile-link'
          onClick={onPopupLinkClick}
        >
          {PROFILE_LINK_TEXT}
          <img
            src={profileIcon}
            alt='иконка профиля'
            className='menu-popup__profile-icon'
          />
        </Link>

      </div>

    </section>
  )
}

export default MenuPopup;
