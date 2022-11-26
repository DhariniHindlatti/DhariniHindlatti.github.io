import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import SignUp from './pages/signup';
import Contact from './pages/contact';
import Select from './pages/select';
import Display from './pages/display';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/select' element={<Select/>} />
        <Route path='/display' element={<Display/>} />
    </Routes>
    </Router>
);
}
export default App