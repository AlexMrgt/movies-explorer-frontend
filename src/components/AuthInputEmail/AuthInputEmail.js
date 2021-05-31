import AuthInput from '../AuthInput/AuthInput';

function AuthInputEmail({
  onChange,
  value,
  error,
}) {

  return (
    <>
      <AuthInput
        wrapperClassName='auth-form__input-container'
        labelClassName='auth-form__label'
        labelText='E-mail'
        id='email'
        name='email'
        inputClassName='auth-form__input'
        inputType='email'
        onChange={onChange}
        value={value}
        errorClassName='auth-form__input-error'
        error={error}
      />
    </>
  )
}

export default AuthInputEmail;
