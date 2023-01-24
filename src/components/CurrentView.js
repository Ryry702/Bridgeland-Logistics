import Home from './Home';
import Logistics from './Logistics'
import How from './How'
import About from './About'
import Contact from './Contact'
import React from 'react';

const CurrentView = (props) => {


    return(
        <>
        <Home />
        <Logistics />
        <How />
        <About />
        <Contact />
        </>
    );

};

export default CurrentView