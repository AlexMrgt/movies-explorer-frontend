import SUCCESS_IMAGE from '../../images/popup-images/successRequest.png';
import FAIL_IMAGE from '../../images/popup-images/failedRequest.png';

function InfoPopup({
  isApiError,
  infoPopupMessage,
  isInfoPopupOpen,
  onClose
}) {

  function handleClosePopupClick() {
    onClose();
  }

  return (
    <div
      className={`info-popup ${isInfoPopupOpen ? 'info-popup_active' : null}`}
    >
      <div
        className={`info-popup__wrapper info-popup__wrapper_type_${isApiError ? 'error' : 'success'}`}
      >
        <button
          className='info-popup__close-button'
          onClick={handleClosePopupClick}
        ></button>

        <p
          className='info-popup__message'
        >
          {infoPopupMessage}
        </p>

        <img

          src={isApiError ? FAIL_IMAGE : SUCCESS_IMAGE}
          alt='декоративное изображение на всплывающем сообщении'
          className='info-popup__image'
        />
      </div>

    </div>
  )
}

export default InfoPopup;
