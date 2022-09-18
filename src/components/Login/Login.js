import { Link, Navigate } from 'react-router-dom';
import './Login.css';

function Login(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.handleLogin();
  }

  if (props.loggedIn) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <main className='login'>
      <h1 className='login__title'>Sign in</h1>
      <form className='login__form' onSubmit={handleSubmit}>
        <input className='login__input'></input>
        <input className='login__input'></input>
        <button className='login__button' type='submit'>Login</button>
      </form>
      <p>Not registered yet? <Link className='login__link' to='/register'>Sign up</Link></p>
    </main>
  )
}

export default Login;