import useFormWithValidation from '../../hooks/useForm';
import AuthForm from '../AuthForm/Authform';

function Register({
  onSignUp
}) {

  const { values, errors, handleChange, isValid, resetForm } = useFormWithValidation({});

  const registerConfig = {
    mode: 'registration',
    text: {
      titleText: 'Добро пожаловать!',
      submitButtonText: 'Зарегистрироваться',
      underText: 'Уже зарегистрированы?',
      linkText: 'Войти',
      linkDestination: '/signin'
    },
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSignUp(values);
    resetForm();
  };

  return (
    <main
      className='register'
    >
      <AuthForm
        isFormValid = {isValid}
        values = {values}
        onChange = {handleChange}
        errors = {errors}
        onSubmit = {handleSubmit}
        config={registerConfig}
      />

    </main>
  )
}

export default Register;
