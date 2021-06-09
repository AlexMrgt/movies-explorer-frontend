import Title from '../Title/Title';
import SelfInfo from '../SelfInfo/SelfInfo';
import Portfolio from '../Portfolio/Portfolio';

function AboutMe() {

  const TITLE_TEXT_HEADER = 'Студент';

  return (
    <section
      className='author'
    >
      <div
        className='author__wrapper'
      >
        <Title
          titleText={TITLE_TEXT_HEADER}
        />
        <SelfInfo />
        <Portfolio />
      </div>
    </section>
  )
}

export default AboutMe;
