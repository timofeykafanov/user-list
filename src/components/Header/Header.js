import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <div className='header__container'>
        <Link className='header__logo' to='/' />
        <div className='header__user'>
          <Link className='header__info' to='/user'>
            <img className='header__avatar' src='https://reqres.in/img/faces/1-image.jpg' alt='user avatar' />
            <div className='header__about'>
              <p className='header__name'>George Bluth</p>
              <p className='header__email'>george.bluth@reqres.in</p>
            </div>
          </Link>
          <button className='header__button' type='button'>Sign out</button>
        </div>
      </div>
    </header>
  )
}

export default Header;