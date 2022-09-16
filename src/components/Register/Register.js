import { Navigate } from 'react-router-dom';
import './Register.css';

function Register({loggedIn}) {
  if (!loggedIn) {
    return (
      <div>
        <p>register</p>
      </div>
    )
  }

  return (
    <Navigate to='/' />
  )
}

export default Register;