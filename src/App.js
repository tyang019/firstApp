import './App.css';
import Home from "./Home"
import AboutMe from"./AboutMe"
import {Routes, Route, Link} from 'react-router-dom';

function App() {
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
    </div>
  );
}

export default App;
