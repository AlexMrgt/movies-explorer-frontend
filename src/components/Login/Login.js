import useFormWithValidation from '../../hooks/useForm';
import AuthForm from '../AuthForm/Authform';

function Login({
  onSignIn
}) {

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation({});

  const loginConfig = {

    mode: 'login',
    text: {
      titleText: 'Рады видеть!',
      submitButtonText: 'Войти',
      underText: 'Еще не зарегистрированы?',
      linkText: 'Регистрация',
      linkDestination: '/signup'
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignIn(values);
    resetForm();
  };

  return (
    <main
      className='login'
    >
      <AuthForm
        isFormValid={isValid}
        values={values}
        onChange={handleChange}
        errors={errors}
        onSubmit={handleSubmit}
        config={loginConfig}
      />
    </main>
  )
}

export default Login;
