import { Link } from 'react-router-dom';
import './Header.css';

import photo from '../../images/612908026 (2).jpg'

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo' to='/' />
        <div className='header__user'>
          <img className='header__photo' src={photo} alt='user avatar' />
          <div className='header__about'>
            <p className='header__name'>John Travolta</p>
            <p className='header__email'>john@gmail.com</p>
          </div>
          <button className='header__button'>Sign out</button>
        </div>
      </div>
    </header>
  )
}

export default Header;