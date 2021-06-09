function TwoGridColumns() {

  const COLUMN_TITLE_FIRST = 'Дипломный проект включал 5 этапов';
  const COLUMN_TITLE_SECOND = 'На выполнение диплома ушло 5 недель';
  const COLUMN_TEXT_FIRST = 'Составление плана, работу над бекэндом, верстку, добавление функциональности и финальные доработки.';
  const COLUMN_TEXT_SECOND = 'У каждого этапа был мягкий и жесткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.';

  return (
    <div
      className='about__grid-container'
    >
      <div className='about__text-container about__text-container_area_point'
      >
        <h3
          className='about__column-title'
        >
          {COLUMN_TITLE_FIRST}
        </h3>
        <p
          className='about__column-text'
        >
          {COLUMN_TEXT_FIRST}
        </p>
      </div>
      <div className='about__text-container about__text-container_area_term'
      >
        <h3 className='about__column-title'
        >
          {COLUMN_TITLE_SECOND}
        </h3>
        <p
          className='about__column-text'
        >
          {COLUMN_TEXT_SECOND}
        </p>
      </div>


    </div>
  )

}

export default TwoGridColumns;
