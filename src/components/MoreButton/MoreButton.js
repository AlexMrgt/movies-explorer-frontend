function MoreButton({
  isDisplayed,
  onMoreButtonClick
}) {

  const BUTTON_TEXT = 'Ещё';

  return (

    <>
      {true
        ? (<section
          className={`add-more-cards ${isDisplayed && 'add-more-cards_active'} `}
        >
          <button
            onClick = {onMoreButtonClick}
            className='add-more-cards__button'
            type='button'
          >
            {BUTTON_TEXT}
          </button>
        </section>)
        : null
      }
    </>



  )
}

export default MoreButton;
