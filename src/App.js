import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import Users from './components/Users/Users';
import Error from './components/Error/Error';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={
          <ProtectedRoute loggedIn={loggedIn}>
            <Users />
          </ProtectedRoute>
        } />

        <Route path='/login' element={
          <Login />
        } />

        <Route path='/register' element={
          <Register loggedIn={loggedIn} />
        } />

        <Route path='*' element={
          <Error />
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
