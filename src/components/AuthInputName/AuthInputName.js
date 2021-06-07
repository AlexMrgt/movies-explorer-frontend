import AuthInput from '../AuthInput/AuthInput';

function AuthInputName({
  onChange,
  value,
  error,
}) {

  return (
    <>
      <AuthInput
        wrapperClassName='auth-form__input-container'
        labelClassName='auth-form__label'
        labelText='Имя'
        id='name'
        name='name'
        inputClassName='auth-form__input'
        inputType='name'
        minLength = '2'
        maxLength = '30'
        pattern = '[a-zA-Zа-яА-Я -]{2,30}'
        onChange={onChange}
        value={value}
        errorClassName='auth-form__input-error'
        error={error}
      />
    </>
  )
}

export default AuthInputName;
