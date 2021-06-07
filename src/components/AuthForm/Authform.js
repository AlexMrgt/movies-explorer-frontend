import { Link } from 'react-router-dom';

import LogoLink from '../LogoLink/LogoLink';
import AuthInputPassword from '../AuthInputPassword/AuthInputpassword';
import AuthInputEmail from '../AuthInputEmail/AuthInputEmail';
import AuthInputName from '../AuthInputName/AuthInputName';
import SubmitButton from '../SubmitButton/SubmitButton';

function AuthForm({
  config,
  isFormValid,
  values,
  errors,
  onChange,
  onSubmit,
}) {

  const { mode } = config;

  const {
    titleText,
    submitButtonText,
    underText,
    linkText,
    linkDestination
  } = config.text;


  const registrationInputsMakup = (
    <>
      <AuthInputName
        onChange={onChange}
        value={values.name}
        error={errors.name}
      />
      <AuthInputEmail
        onChange={onChange}
        value={values.email}
        error={errors.email}
      />
      <AuthInputPassword
        onChange={onChange}
        value={values.password}
        error={errors.password}
      />
    </>
  );

  const loginInputMarkup = (
    <>
      <AuthInputEmail
        onChange={onChange}
        value={values.email}
        error={errors.email}
      />
      <AuthInputPassword
        onChange={onChange}
        value={values.password}
        error={errors.password}
      />
    </>
  );

  // костыль
  function renderInputs(mode) {
    switch (mode) {
      case 'login':
        return loginInputMarkup;
      case 'registration':
        return registrationInputsMakup;
      default:
        return
    }
  };

  return (

    <form
      noValidate
      onSubmit={onSubmit}
      className='auth-form'
    >
      <LogoLink />

      <h2 className='auth-form__title'
      >
        {titleText}
      </h2>

      <fieldset
        className='auth-form__fieldset'
      >
        {renderInputs(mode)}

      </fieldset>

      <article
        className='auth-form__controlls'
      >
        <SubmitButton
          buttonClass='auth-form__submit-button'
          buttonText={submitButtonText}
          isDisabled={!isFormValid}
        />

        <div
          className='auth-form__submit-text-container'
        >
          <p
            className='auth-form__caption'
          >
            {underText}
          </p>
          <Link
            to={linkDestination}
            className='auth-form__link'
          >
            {linkText}
          </Link>
        </div>


      </article>

    </form>

  )
}

export default AuthForm;
