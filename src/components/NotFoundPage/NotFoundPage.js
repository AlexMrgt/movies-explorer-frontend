import { Link } from "react-router-dom";

function NotFoundPage() {

  const HEADER_TEXT = '404';
  const CAPTION_TEXT = 'Страница не найдена';
  const LINK_TEXT = 'Назад';

  return (
    <main
      className='not-found'
    >
      <div
        className='not-found__text-container'
      >
        <h1
          className='not-found__title'
        >
          {HEADER_TEXT}
        </h1>
        <p
          className='not-found__caption'
        >
          {CAPTION_TEXT}
        </p>

      </div>

      <div
        className='not-found__link-container'
      >
        <Link
          to='/'
          className='not-found__back-link'
        >
          {LINK_TEXT}
        </Link>
      </div>

    </main>
  )
}

export default NotFoundPage;

