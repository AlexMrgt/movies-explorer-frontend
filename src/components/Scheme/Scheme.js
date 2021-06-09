function Scheme() {

  const SCHEME_TEXT_BACKEND = '1 неделя';
  const SCHEME_TEXT_FRONTEND = '4 недели';
  const UNDER_SCHEME_TEXT_BACKEND = 'Back-end';
  const UNDER_SCHEME_TEXT_FRONTEND = 'Front-end';

  return (

    <div className='about__scheme'>

      <div className='about__scheme-backend'>
        <p
          className='about__scheme-text'
        >
          {SCHEME_TEXT_BACKEND}
        </p>
      </div>

      <div className='about__scheme-frontend'>
        <p
          className='about__scheme-text'
        >
          {SCHEME_TEXT_FRONTEND}
        </p>
      </div>

      <p
        className='about__under-text'
      >
        {UNDER_SCHEME_TEXT_BACKEND}
      </p>

      <p
        className='about__under-text'
      >
        {UNDER_SCHEME_TEXT_FRONTEND}
      </p>

    </div>

  )
}

export default Scheme;
