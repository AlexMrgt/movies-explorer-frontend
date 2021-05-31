function TextInfo() {

  const TITLE_TEXT = 'Александр';
  const SUBTITLE_TEXT = 'Фронтенд-разработчик, 26 лет';
  const DESCRIPTION_TEXT = `
    Я родился и живу в Саратове,
    закончил факультет экономики СГУ. У меня есть жена и дочь.
    Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить.
    С 2015 года работал в компании «СКБ Контур». После того,
    как прошёл курс по веб-разработке, начал заниматься фриланс-заказами
    и ушёл с постоянной работы.`

  return (
    <article
      className='text-info'
    >
      <h3
        className='text-info__title'
      >
        {TITLE_TEXT}
      </h3>
      <p
        className='text-info__subtitle'
      >
        {SUBTITLE_TEXT}
      </p>
      <p
        className='text-info__text'
      >
        {DESCRIPTION_TEXT}
      </p>
    </article>
  )
}

export default TextInfo;
