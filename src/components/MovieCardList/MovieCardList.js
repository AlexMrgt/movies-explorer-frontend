
import MovieCard from '../MovieCard/MovieCard';

function MovieCardList({
  type
}) {

  const cards = [
    {
      id: 1,
      title: 'В погоне за бенкси',
      duration: 54,
      link: 'https://www.youtube.com/watch?v=7B4CLQGxHmI',
      preview: 'https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },
    {
      id: 2,
      title: 'А как каррировать',
      duration: 60,
      link: 'https://www.youtube.com/watch?v=UwoT271WBD8',
      preview: 'https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },
    {
      id: 3,
      title: 'Палка',
      duration: 60,
      link: 'https://www.youtube.com/watch?v=o1dtiuAaR-w',
      preview: 'https://images.pexels.com/photos/1894350/pexels-photo-1894350.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },
    {
      id: 4,
      title: 'Любимое оружие советских мальчишек',
      duration: 44,
      link: 'https://www.youtube.com/watch?v=Bm2TceEwbak',
      preview: 'https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },
    {
      id: 5,
      title: 'Ей можно было победить абсолютно любого противника',
      duration: 60,
      link: 'https://www.youtube.com/watch?v=4TKcz5AqcnQ',
      preview: 'https://images.pexels.com/photos/1687678/pexels-photo-1687678.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },
    {
      id: 6,
      title: 'Стоило лишь представить, что это обоюдоострый меч!',
      duration: 60,
      link: 'https://www.youtube.com/watch?v=Vol9dZ-t93s',
      preview: 'https://images.pexels.com/photos/1755243/pexels-photo-1755243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },
    {
      id: 7,
      title: 'Именно такая палка сыграла зловещую роль в нашей истории',
      duration: 41,
      link: 'https://www.youtube.com/watch?v=RIrAoM7gyLY',
      preview: 'https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      previewAlt: 'текст'
    },

  ];

  return (
    <section
      className='card-list'
    >
      <div
        className='card-list__wrapper'
      >

        {cards.map(card =>
          <MovieCard
            key = {card.id}
            title={card.title}
            duration={card.duration}
            link = {card.link}
            preview={card.preview}
            previewAlt = {card.previewAlt}
            buttonType={type}
          />
        )}

      </div>
    </section>
  )
}

export default MovieCardList;

