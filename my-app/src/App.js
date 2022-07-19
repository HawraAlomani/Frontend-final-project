import './App.css';
import React, {useState} from 'react';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import AboutSection from './components/AboutSection';

function App() {
  //toggle between Sidebar and Navbar
  const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
        setIsOpen(!isOpen);
    };
  return (
   <>
  <Sidebar isOpen={isOpen} toggle={toggle} />
  <Navbar toggle={toggle} />
  <MainSection/>
  <AboutSection/>
   </>
  );
}

export default App;
