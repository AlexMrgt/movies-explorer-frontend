import Title from '../Title/Title';
import TwoGridColumns from '../TwoGridColumns/TwoGridColumns';
import Scheme from '../Scheme/Scheme';

function AboutProject() {

  const TITLE_TEXT_HEADER = 'О проекте';

  return (
    <section
      id = 'about-project'
      className='about'
    >
      <div
        className='about__wrapper'
      >

       <Title
        titleText = {TITLE_TEXT_HEADER}
      />
        <TwoGridColumns />
        <Scheme />

      </div>
    </section>
  )
}

export default AboutProject;
