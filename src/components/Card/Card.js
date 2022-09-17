import './Card.css';

function Card() {
  return (
    <div className='card'>
      <img className='card__avatar' src='https://reqres.in/img/faces/1-image.jpg' alt='user avatar' />
      <div className='card__about'>
        <p className='card__name'>George Bluth</p>
        <p className='card__email'>george.bluth@reqres.in</p>
      </div>
    </div>
  )
}

export default Card;