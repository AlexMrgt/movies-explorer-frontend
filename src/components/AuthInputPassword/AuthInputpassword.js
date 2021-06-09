import AuthInput from '../AuthInput/AuthInput';

function AuthInputPassword({
  onChange,
  value,
  error,
}) {

  return (
    <>
      <AuthInput
        wrapperClassName='auth-form__input-container'
        labelClassName='auth-form__label'
        labelText='Пароль'
        id='password'
        name='password'
        inputClassName='auth-form__input'
        inputType='password'
        onChange={onChange}
        value={value}
        errorClassName='auth-form__input-error'
        error={error}
      />
    </>
  )
}

export default AuthInputPassword;
