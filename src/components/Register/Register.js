import AuthForm from '../AuthForm/Authform';

function Register() {

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

  return (
    <main
      className='register'
    >
      <AuthForm
        config={registerConfig}
      />

    </main>
  )
}

export default Register;
