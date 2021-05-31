import AuthForm from '../AuthForm/Authform';

function Login() {

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

  return (
    <main
      className='login'
    >
      <AuthForm
        config={loginConfig}
      />
    </main>
  )
}

export default Login;
