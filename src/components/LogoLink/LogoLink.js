import { Link } from 'react-router-dom';

import logo from '../../images/icons/logo.svg';

function LogoLink() {

  return (
    <Link
      to='/'
      className='logo-link'
    >
      <img
        src = {logo}
        alt='logo'
        className='logo-link__logo'
      />
    </Link>

  )
}

export default LogoLink;
