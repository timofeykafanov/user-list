import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './User.css';

function User() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main className='user'>
      <div className='user__about'>
        <h1 className='user__title'>My Profile</h1>
        <img className='user__avatar' src={currentUser.avatar} alt='avatar' />
        <p className='user__text'>Name: {currentUser.first_name}</p>
        <p className='user__text'>Surname: {currentUser.last_name}</p>
        <p className='user__text'>Email: {currentUser.email}</p>
      </div>

    </main>
  )
}

export default User;