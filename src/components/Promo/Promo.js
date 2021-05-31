import { HashLink } from 'react-router-hash-link';

import promoImage from '../../images/promo/promo-image.png';


function Promo() {

  // не знаю, как корректно парсить мнемоники, без него символ '-' не распознается как часть слова
  // const TITLE_TEXT = 'Учебный проект студента факультета Веб&#8209;разработки';
  const SUBTITLE_TEXT = 'Листайте ниже, чтобы узнать больше про этот проект и его создателя.';
  const BUTTON_TEXT = 'Узнать больше';

  return (
    <section className='promo'>
      <div className='promo__wrapper'>
        <img
          src={promoImage}
          alt='декоративное изображение'
          className='promo__image'
        />

        <h1
          className='promo__title'>
          Учебный проект студента факультета Веб&#8209;разработки.
      </h1>
        <p
          id='test'
          className='promo__subtitle'
        >
          {SUBTITLE_TEXT}
        </p>

        <HashLink
          smooth
          to='#about-project'
          className='promo__tell-more-button'
        >
          {BUTTON_TEXT}
        </HashLink>
      </div>





    </section>
  )
}

export default Promo;
