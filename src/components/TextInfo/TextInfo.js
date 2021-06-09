function TextInfo() {

  const TITLE_TEXT = 'Александр';
  const SUBTITLE_TEXT = 'Фронтенд-разработчик, 26 лет';
  const DESCRIPTION_TEXT = `
    Я родился и живу в Екатеринбурге,
    закончил Колледж им. Ползунова по направлению Информационная безопасность.
    Но поработав с безопасностью понял, что это не мое - ИБ является сильно
    регламентированой областью, в которой не так много места для своих идей,
    к тому же ИБ, как правило, область, в которой, в основном, оператораская работа,
    а в программировании можно не только поддерживать легаси, но и разрабатывать новые продукты,
    поэтому я решил отойти от безопасности и заняться фронтэнд-разработкой.
`

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
