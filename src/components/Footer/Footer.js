function Footer() {

  const TITLE_TEXT = 'Учебный проект Яндекс.Практикум x BeatFilm';

  const UNDER_MARK = '@2021';

  const footerLinks = [
    {
      text: 'Яндекс.Практикум',
      link: 'https://praktikum.yandex.ru/',
    },
    {
      text: 'GitHub',
      link: 'https://github.com/AlexMrgt',
    },
    {
      text: 'Telegram',
      link: 'https://t.me/AlexMRGT',
    },
  ];

  return (
    <footer className='footer'>
      <div
        className='footer__title-container'
      >
        <h2
          className='footer__title'
        >
          {TITLE_TEXT}
        </h2>
      </div>

      <div
        className='footer__bottom-container'
      >
        <p
          className='footer__mark'
        >
          {UNDER_MARK}
        </p>
        <ul
          className='footer__link-list'
        >

          {footerLinks.map(link =>
            <li
              key={link.text}
              className='footer__link-item'>
              <a
                className='footer__link'
                href={link.link}
                target='_blank'
                rel='noreferrer'
              >
                {link.text}
              </a>
            </li>
          )}

        </ul>
      </div>

    </footer>
  )
}

export default Footer;
