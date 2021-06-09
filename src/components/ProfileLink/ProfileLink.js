import { Link, useLocation } from "react-router-dom";

import profileIcon from '../../images/icons/account-icon.svg';

function ProfileLink() {

  const PROFILE_LINK_TEXT = 'Аккаунт';

  const location = useLocation();

  return (
    <Link
      to='/profile'
      className={`
        profile-link
        ${location.pathname === '/' ? 'profile-link_main' : ''}`
      }
    >
      <p
        className='profile-link__text'
      >
        {PROFILE_LINK_TEXT}
      </p>

      <img
        src={profileIcon}
        alt='иконка профиля'
        className='profile-link__icon'
      />
    </Link>
  )
}

export default ProfileLink;
