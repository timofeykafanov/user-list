import { useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Header from './components/Header/Header';
import User from './components/User/User';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  function handleLogin() {
    setLoggedIn(true)
  }
  
  function handleRegister() {
    navigate('/login')
  }

  return (
    <div className="page">
      {location.pathname === '/login' ||
        location.pathname === '/register' ? 
        <></> :
        <Header />
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
  );
}

export default App;
