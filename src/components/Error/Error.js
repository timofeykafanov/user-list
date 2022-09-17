import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
  return (
    <main className='error'>
      <h1 className='error__title'>404</h1>
      <p className='error__text'>This page does not exist</p>
      <Link className='error__link' to='/'>To the main page</Link>
    </main>
  )
}

export default Error;