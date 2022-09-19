import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import User from './components/User/User';
import { CurrentUserContext } from './contexts/CurrentUserContext';
import api from './utils/Api';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({})

  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin() {
    Promise.all([api.getUserInfo()])
      .then(user => {
        setCurrentUser(user[0].data);
        localStorage.setItem('currentUser', JSON.stringify(user[0].data));
        localStorage.setItem('loggedIn', JSON.stringify(true));
      })
      .catch(err => console.log(err))

    setLoggedIn(true)
  }
  
  function handleRegister() {
    navigate('/login')
  }

  function handleLogout() {
    localStorage.clear();
    setLoggedIn(false)
  }

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    if (JSON.parse(localStorage.getItem('loggedIn')) === true) {
      setLoggedIn(true)
    }
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        {location.pathname === '/login' ||
          location.pathname === '/register' ? 
          <></> :
          <Header handleLogout={handleLogout} />
        }
        <Routes>
          <Route path='/' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <Home />
            </ProtectedRoute>
          } />

          <Route path='/user' element={
            <ProtectedRoute loggedIn={loggedIn}>
              <User />
            </ProtectedRoute>
          } />

          <Route path='/login' element={
            <Login loggedIn={loggedIn} handleLogin={handleLogin} />
          } />

          <Route path='/register' element={
            <Register  loggedIn={loggedIn} handleRegister={handleRegister} />
          } />

          <Route path='*' element={
            <Error />
          } />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
