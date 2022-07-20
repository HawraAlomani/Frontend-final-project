import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import MainSection from './components/MainSection';
// import AboutSection from './components/AboutSection';
import Categories from './components/pages/Categories';
import DeliveryInfo from './components/pages/DeliveryInfo';
import Home from './components/pages/Home';
import Requests from './components/pages/Requests';
import Login from './components/pages/Login';
import NoPage from './components/pages/NoPage';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";

function App() {
    //toggle between Sidebar and Navbar
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/categories" element={<Categories />}></Route>
        <Route  path="/deliv-info" element={<DeliveryInfo />}></Route>
        <Route  path="/requests" element={<Requests />}></Route>
        <Route  path="/login" element={<Login />}></Route>
        <Route  path="*" element={<NoPage />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
