import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import useFormWithValidation from '../../hooks/useForm';

import ProfileInputEmail from '../ProfileInputEmail/ProfileInputEmail';
import ProfileInputName from '../ProfileInputName/ProfileInputName';
import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';
import ProfileLogoutButton from '../ProfileLogoutButton/ProfileLogoutButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import Preloader from '../Preloader/Preloader';

function ProfileForm({
  isProfileOnEdit,
  isOnLoadingData,
  onUpdateUser,
  onEditClick,
  onCancelEdit,
  onSignOutClick,
}) {

  const currentUser = useContext(CurrentUserContext);

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();

  const TITLE_TEXT = `Привет, ${currentUser.name}!`;
  const SUBMIT_BUTTON_TEXT = 'Сохранить';
  const EDIT_BUTTON_TEXT = 'Редактировать';
  const SIGNOUT_BUTTON_TEXT = 'Выйти из аккаунта';
  const CANCEL_TEXT = 'Отмена';

  useEffect(() => {

    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });

    onCancelEdit();

  }, [currentUser, resetForm]);

  function handleCancelEditClick() {

    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });

    onCancelEdit();
  }

  function handleSubmit(evt) {

    evt.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email
    });

    onEditClick();
  }

  return (

    <form
      onSubmit={handleSubmit}
      className='profile-form'
      noValidate
    >
      <h2
        className='profile-form__title'
      >
        {TITLE_TEXT}
      </h2>

      <fieldset
        disabled={!isProfileOnEdit}
        className='profile-form__fieldset'
      >
        <ProfileInputName
          onChange={handleChange}
          value={values.name}
          error={errors.name}
        />

        <ProfileInputEmail
          onChange={handleChange}
          value={values.email}
          error={errors.email}
        />

      </fieldset>

      <article
        className='profile-form__controlls'
      >

        {isProfileOnEdit
          ?
          (
            <>
              <SubmitButton
                buttonClass='profile-form__submit-button'
                buttonText={SUBMIT_BUTTON_TEXT}
                isDisabled={!isValid}
              />
              <button
                onClick={handleCancelEditClick}
                className='profile-form__cancel-edit'
                type='button'
              >
                {CANCEL_TEXT}
              </button>
            </>
          )
          :
          (
            <>
              {isOnLoadingData
                ?
                <Preloader />
                :
                <>
                  <ProfileEditButton
                    onEditClick={onEditClick}
                    buttonText={EDIT_BUTTON_TEXT}
                  />
                  <ProfileLogoutButton
                    onSignOutClick={onSignOutClick}
                    buttonText={SIGNOUT_BUTTON_TEXT}
                  />
                </>
              }

            </>
          )
        }


      </article>


    </form>
  )
}

export default ProfileForm;
