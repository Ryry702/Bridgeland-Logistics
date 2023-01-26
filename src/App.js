import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import CurrentView from './components/CurrentView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      CurrentViewMarker: "Home",
    };

    this.updateNav = this.updateNav.bind(this);
    this.returnNav = this.returnNav.bind(this);
   
    }

  returnNav(){
    return(this.CurrentViewMarker);
  }

  updateNav(updatedNav) {
    this.setState({
      CurrentViewMarker: this.state.CurrentViewMarker = updatedNav,
    });
  }

  render(){

    return (
    
    <>
      <Header />
        <div className='NavContent'>
            <NavBar className='NavBar' CurrentViewMarker={this.state} updateNavigation={this.updateNav}/>
            <CurrentView CurrentViewMarker={this.state} returnNavigation={this.returnNav}/>
        </div>
    
    </>
  
  );
  }
}

export default App;