function Title({
  titleText
}) {

  const TITLE_TEXT = titleText;

  return (
    <div
      className='title-container'
    >
      <h2
        className='title'
      >
        {TITLE_TEXT}
      </h2>
    </div>
  )
}

export default Title;
