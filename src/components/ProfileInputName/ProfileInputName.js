import ProfileInput from '../ProfileInput/ProfileInput';

function ProfileInputName({
  onChange,
  value,
  error,
}) {

  return (
    <>
      <ProfileInput
        wrapperClassName='profile-form__input-container'
        labelClassName='profile-form__label'
        labelText='Имя'
        id='name'
        name='name'
        inputClassName='profile-form__input '
        minLength = '2'
        maxLength = '30'
        placeholder = 'Имя'
        pattern = '[a-zA-Zа-яА-Я -]{2,30}'
        inputType='text'
        onChange={onChange}
        value={value}
        errorClassName='profile-form__input-error'
        bottomErrorClassName = 'profile-form__bottom-input-error'
        error={error}
      />
    </>
  )
}

export default ProfileInputName;
