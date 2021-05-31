import Title from '../Title/Title';

function Techs() {

  const TITLE_TEXT_HEADER = 'Технологии'
  const TITLE_TEXT = '7 технологий';
  const DESCRIPTION_TEXT = 'На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте';

  const techs = [
    'HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'
  ];

  return (
    <section
      className='techs'
    >
      <div
        className='techs__wrapper'
      >
        <Title
          titleText={TITLE_TEXT_HEADER}
        />

        <div
          className='techs__text-container'
        >
          <h3
            className='techs__title'
          >
            {TITLE_TEXT}
          </h3>
          <p
            className='techs__text'
          >
            {DESCRIPTION_TEXT}
          </p>

        </div>

        <ul
          className='techs__list'
        >
          {techs.map(tech =>
          (
            <li
              key={tech}
              className='tech__item'
            >
              {tech}
            </li>
          )
          )}
        </ul>

      </div>



    </section>
  )
}

export default Techs;
