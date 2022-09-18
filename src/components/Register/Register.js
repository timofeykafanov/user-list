import { Link, Navigate } from 'react-router-dom';
import './Register.css';

function Register(props) {
  function handleSubmit(e) {
    e.preventDefault()
    props.handleRegister();
  }

  if (!props.loggedIn) {
    return (
      <main className='register'>
        <h1 className='register__title'>Sign up</h1>
        <form className='register__form' onSubmit={handleSubmit}>
          <input className='register__input'></input>
          <input className='register__input'></input>
          <button className='register__button' type='submit'>Register</button>
        </form>
        <p>Already registered? <Link className='register__link' to='/login'>Sign in</Link></p>
      </main>
    )
  }

  return (
    <Navigate to='/' />
  )
}

export default Register;