import Home from './Home';
import Logistics from './Logistics'
import How from './How'
import About from './About'
import Contact from './Contact'
import React, {useRef, useState} from 'react';

const CurrentView = (Props.CurrentViewMarker) => {

if (CurrentViewMarker = "Home"){
    return(
        <Home />
    );
 };

if (CurrentViewMarker = "Logistics"){
    return(
        <Logistics />
    );
};

if (CurrentViewMarker = "How"){
    return(
        <How />
    );
};

if (CurrentViewMarker = "About"){
    return(
        <About />
    );
};

if (CurrentViewMarker = "Contact"){
    return(
        <Contact />
    );
};

};

export default CurrentView