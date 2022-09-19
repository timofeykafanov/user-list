import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Header.css';

function Header(props) {
  const currentUser = useContext(CurrentUserContext);

  function handleLogout() {
    props.handleLogout();
  }

  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo' to='/' />
        {
          currentUser === {} ?
          <></> :
          <div className='header__user'>
            <Link className='header__info' to='/user'>
              <img className='header__avatar' src={currentUser.avatar} alt='user avatar' />
              <div className='header__about'>
                <p className='header__name'>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
                <p className='header__email'>{currentUser.email}</p>
              </div>
            </Link>
            <Link className='header__link' to='/login' onClick={handleLogout}>Sign out</Link>
          </div>
        }
      </div>
    </header>
  )
}

export default Header;