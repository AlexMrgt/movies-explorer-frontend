function MoreButton() {

  const BUTTON_TEXT = 'Ещё';

  return (

    <section
      className='add-more-cards'
    >
      <button
        className='add-more-cards__button'
        type='button'
      >
        {BUTTON_TEXT}
      </button>

    </section>
  )
}

export default MoreButton;
