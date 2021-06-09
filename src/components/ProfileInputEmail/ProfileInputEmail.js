import ProfileInput from '../ProfileInput/ProfileInput';

function ProfileInputEmail({
  onChange,
  value,
  error,
}) {

  return (
    <>
      <ProfileInput
        wrapperClassName='profile-form__input-container'
        labelClassName='profile-form__label '
        labelText='E-mail'
        id='email'
        name='email'
        inputClassName='profile-form__input '
        placeholder = 'E-mail'
        inputType='email'
        onChange={onChange}
        value={value}
        errorClassName='profile-form__input-error'
        bottomErrorClassName = 'profile-form__bottom-input-error'
        error={error}
      />
    </>
  )
}

export default ProfileInputEmail;
