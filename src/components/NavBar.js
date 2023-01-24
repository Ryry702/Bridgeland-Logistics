import '../styles/NavBar.css';
import React from 'react';
import CurrentView from './CurrentView';



const NavBar = (props) => {


    return (

        <>
        
        <div className='NavBarBackground'>

            <button className='HomeButton'> Home </button>
            <button className='LogisticsButton'> Logistics </button>
            <button className='HowButton'> How We Work </button>
            <button className='AboutButton'> About Us </button>
            <button className='ContactButton'> Contact Us </button>


        </div>
        
        <CurrentView CurrentViewMarker/>
        
        </>



    );

};

export default NavBar;