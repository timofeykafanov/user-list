import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <img className='card__avatar' src={props.user.avatar} alt='user avatar' />
      <div className='card__about'>
        <p className='card__name'>{`${props.user.first_name} ${props.user.last_name}`}</p>
        <p className='card__email'>{props.user.email}</p>
      </div>
    </div>
  )
}

export default Card;