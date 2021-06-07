import { Link, useLocation } from "react-router-dom";

import profileIcon from '../../images/icons/account-icon.svg';

import {BUTTON_TEXT} from '../../utils/constants';

function ProfileLink() {



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
        {BUTTON_TEXT.account}
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
