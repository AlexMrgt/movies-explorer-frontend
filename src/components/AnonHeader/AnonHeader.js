import { Link } from 'react-router-dom';

import LogoLink from "../LogoLink/LogoLink";

function AnonHeader() {

  const headerLinks = [
    {
      text: 'Регистрация',
      link: '/signup',
      type: 'registration',
    },
    {
      text: 'Вход',
      link: '/signin',
      type: 'login',
    }
  ];

  return (
    <nav
      className='anon-header'
    >

      <LogoLink />

      <ul
        className='anon-header__link-list'
      >
      {headerLinks.map(link =>
        (
          <li
            key={link.text}
            className='anon-header__list-item'
          >
            <Link
              to={link.link}
              className={`
              anon-header__link
              anon-header__link_type_${link.type}
              `}
            >
              {link.text}
            </Link>
          </li>
        )
        )}
      </ul>

    </nav>
  )
}

export default AnonHeader;
