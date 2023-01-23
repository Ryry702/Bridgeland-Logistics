import '../styles/NavBar.css';
import React, {useState, useRef} from 'react';
import Home from './Home'
import Logistics from './Logistics';
import How from './How';
import About from './About';
import Contact from './Contact';

const NavBar = (props.CurrentViewMarker) => {
    return (

        <div className='NavBarBackground'>

            <button className='HomeButton' onClick={props.CurrentViewMarker = "Home"}> Home </button>
            <button className='LogisticsButton' onClick={props.CurrentViewMarker = "Logistics"}> Logistics </button>
            <button className='HowButton' onClick={props.CurrentViewMarker = "How"}> How We Work </button>
            <button className='AboutButton' onClick={props.CurrentViewMarker = "About"}> About Us </button>
            <button className='ContactButton' onClick={props.CurrentViewMarker = "Contact"}> Contact Us </button>


        </div>

    );
};

export default NavBar;