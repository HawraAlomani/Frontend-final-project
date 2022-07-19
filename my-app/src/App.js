import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';

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
   </>
  );
}

export default App;
