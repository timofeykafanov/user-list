import { useEffect, useState } from 'react';
import api from '../../utils/Api';
import Card from '../Card/Card';
import './Home.css';

function Home() {
  const [page, setPage] = useState(1);
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    Promise.all([api.getUsersList(page)])
      .then(users => {
        setUsersList(users[0].data);
      })
  }, [page])

  return (
    <main className='home'>
      <ul className='home__list'>
        {
          usersList.map((user) => {
            return (
              <Card user={user} key={user.id} />
            )
          })
        }
      </ul>
      <div className='home__pages'>
        <button className={`home__button ${page === 1 ? 'home__button_active' : ''}`} onClick={() => setPage(1)}>1</button>
        <button className={`home__button ${page === 2 ? 'home__button_active' : ''}`} onClick={() => setPage(2)}>2</button>
      </div>
    </main>
  )
}

export default Home;