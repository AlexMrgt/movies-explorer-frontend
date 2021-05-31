
function Portfolio() {

  const TITLE_TEXT = 'Портфолио';

  const projectsLinks = [
    {
      text:  'Статичный сайт',
      link: 'https://github.com/AlexMrgt/how-to-learn',
      typeClassName: 'portfolio__link-item_type_static'
    },
    {
      text: 'Адаптивный сайт',
      link: 'https://github.com/AlexMrgt/russian-travel',
      typeClassName: 'portfolio__link-item_type_adaptive'
    },
    {
      text: 'Одностраничное приложение',
      link: 'https://github.com/AlexMrgt/react-mesto-api-full',
      typeClassName: 'portfolio__link-item_type_react'
    },
  ];

  return (
    <article className='portfolio'>
      <h4
        className='portfolio__title'>
        {TITLE_TEXT}
      </h4>

      <ul
        className='portfolio__link-list'
      >
        {projectsLinks.map(link =>
          <li
            key={link.text}
            className={`portfolio__link-item ${link.typeClassName}`}
          >
            <a
              href = {link.link}
              target='_blank'
              rel='noreferrer'
              className='portfolio__link'
            >
              {link.text}

              <span
                className='portfolio__link-icon'
              >
                ↗
              </span>
            </a>
          </li>)}
      </ul>
    </article>
  )
}

export default Portfolio;
