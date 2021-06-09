import AUTHOR_PHOTO from '../../images/about-me/author-photo.jpg';
import TextInfo from '../TextInfo/TextInfo';
import SocialLinks from '../SocialLinks/SocialLinks';

function SelfInfo() {

  return (
    <article
      className='self__info'
    >

     <TextInfo />

      <img
        src={AUTHOR_PHOTO}
        alt='Фото автора'
        className='self-info__photo'
      />

      <SocialLinks />

    </article>

  )
}

export default SelfInfo;
