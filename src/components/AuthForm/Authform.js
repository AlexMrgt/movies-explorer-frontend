import { Link } from 'react-router-dom';

import useFormWithValidation from '../../hooks/useForm';

import LogoLink from '../LogoLink/LogoLink';
import AuthInputPassword from '../AuthInputPassword/AuthInputpassword';
import AuthInputEmail from '../AuthInputEmail/AuthInputEmail';
import AuthInputName from '../AuthInputName/AuthInputName';
import SubmitButton from '../SubmitButton/SubmitButton';

function AuthForm({
  config
}) {

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation();

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
        onChange={handleChange}
        value={values.name}
        error={errors.name}
      />
      <AuthInputEmail
        onChange={handleChange}
        value={values.email}
        error={errors.email}
        />
      <AuthInputPassword
        onChange={handleChange}
        value={values.password}
        error={errors.password}
        />
    </>
  );

  const loginInputMarkup = (
    <>
      <AuthInputEmail
        onChange={handleChange}
        value={values.email}
        error={errors.email}
      />
      <AuthInputPassword
        onChange={handleChange}
        value={values.password}
        error={errors.password}
      />
    </>
  );

  // я не знаю как упростить этот момент, выглядит костыльно
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
          isDisabled = {!isValid}
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
            href='#'
          >
            {linkText}
          </Link>
        </div>


      </article>

    </form>

  )
}

export default AuthForm;
