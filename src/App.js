import './App.css';
import Home from "./Home"
import AboutMe from"./AboutMe"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState } from 'react';
import {Routes, Route, Link} from 'react-router-dom';

function App() {
   const [loggenIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  return (
    <div className='App'>
      <nav className='nav-bar'>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
        {
        loggenIn ? (
          <div>
            <Home />
            <LogoutButton logout={logout} />
          </div>
        ) : (
            <LoginButton login={login} />
        )
      }
    </div>
  );
}

export default App;
