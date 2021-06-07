import { useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import useFormWithValidation from '../../hooks/useForm';

import ProfileInputEmail from '../ProfileInputEmail/ProfileInputEmail';
import ProfileInputName from '../ProfileInputName/ProfileInputName';
import ProfileEditButton from '../ProfileEditButton/ProfileEditButton';
import ProfileLogoutButton from '../ProfileLogoutButton/ProfileLogoutButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import Preloader from '../Preloader/Preloader';

import {BUTTON_TEXT} from '../../utils/constants';

function ProfileForm({
  isProfileOnEdit,
  isOnLoadingProfileData,
  onUpdateUser,
  onEnableEdit,
  onDisableEdit,
  onSignOut,
}) {

  const currentUser = useContext(CurrentUserContext);

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation({});

  const TITLE_TEXT = `Привет, ${currentUser.name}.`;

  useEffect(() => {

    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });

    onDisableEdit();

  }, [currentUser, resetForm]);

  function handleCancelEditClick() {

    resetForm({
      name: currentUser.name,
      email: currentUser.email
    });

    onDisableEdit();
  }

  function handleSubmit(evt) {

    evt.preventDefault();

    onUpdateUser({
      name: values.name,
      email: values.email
    });

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
          (isOnLoadingProfileData ?

            <Preloader />
            :
            (
              <>
                <SubmitButton
                  buttonClass='profile-form__submit-button'
                  buttonText={ BUTTON_TEXT.editSubmit}
                  isDisabled={!isValid}
                />
                <button
                  onClick={handleCancelEditClick}
                  className='profile-form__cancel-edit'
                  type='button'
                >
                  { BUTTON_TEXT.editCancel}
                </button>
              </>
            ))
          :
          (
            <>
              <ProfileEditButton
                onEnableEdit={onEnableEdit}
                buttonText={ BUTTON_TEXT.edit}
              />
              <ProfileLogoutButton
                onSignOut={onSignOut}
                buttonText={ BUTTON_TEXT.signOut}
              />
            </>
          )
        }


      </article>


    </form>
  )
}

export default ProfileForm;
