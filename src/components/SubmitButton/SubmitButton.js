function SubmitButton({
  buttonClass,
  buttonText,
  isDisabled
}) {

  return (
    <button
      className={buttonClass}
      type='submit'
      disabled = {isDisabled}

    >
      {buttonText}
    </button>
  )
}

export default SubmitButton;
