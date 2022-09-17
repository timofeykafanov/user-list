import './User.css';

function User() {
  return (
    <main className='user'>
      <div className='user__about'>
        <h1 className='user__title'>My Profile</h1>
        <img className='user__avatar' src='https://reqres.in/img/faces/1-image.jpg' alt='avatar' />
        <p className='user__text'>Name: George</p>
        <p className='user__text'>Surname: Bluth</p>
        <p className='user__text'>Email: george.bluth@reqres.in</p>
      </div>

    </main>
  )
}

export default User;