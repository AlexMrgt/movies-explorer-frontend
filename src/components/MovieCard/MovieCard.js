
function MovieCard({
  buttonType,
  title,
  duration,
  link,
  preview,
  previewAlt
}) {

  const durationCaptionHandler = (duraton) => {

    if (Number.isInteger(duraton)) {

      const words = [
        'минут', 'минута', 'минуты'
      ];

      const firstArr = [0, 5, 6, 7, 8, 9];
      const secondArr = [2, 3, 4];
      const thirdArr = [1];

      const lastDigit = parseInt(duraton.toString().split('').pop());

      if (duraton > 4 && duraton < 21) return words[0];
      if (firstArr.includes(lastDigit)) return words[0];
      if (secondArr.includes(lastDigit)) return words[2];
      if (thirdArr.includes(lastDigit)) return words[1];
    }

    return 'минут';
  }

  return (
    <article
      className='card'
    >

      <div
        className='card__header'
      >
        <h4
          className='card__title'
        >
          {title}
        </h4>
        <p
          className='card__duration'
        >
          {duration} {durationCaptionHandler(duration)}
        </p>
      </div>

        <a
          className='card__link'
          href={link}
          target='_blank'
          rel='noreferrer'
        >
          <img
            src={preview}
            alt={previewAlt}
            className='card__picture'
          />
        </a>

      <button
        className={`
          card__add-to-fav-button
          card__add-to-fav-button_type_${buttonType}`}
        type='button'
      />
    </article>
  )
}

export default MovieCard;
