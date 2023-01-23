import './App.css';
import React, {useState, useRef} from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Logistics from './components/Logistics'
import How from './components/How'
import About from './components/About'
import Contact from './components/Contact'
import CurrentView from './components/CurrentView';


const App = (props) => {
  const CurrentViewMarker = "Home"
  return (
    
    <>
      <Header />
      <NavBar />
      <CurrentView />
      

    </>
  
  );
};





export default App;