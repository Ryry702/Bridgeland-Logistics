import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import CurrentView from './components/CurrentView';
import Footer from './components/Footer';

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
        <div className='Everything'>
          <Header className='Header'/>
            <div className='NavContent'>
                <NavBar className='NavBar' CurrentViewMarker={this.state} updateNavigation={this.updateNav}/>
                <CurrentView className='CurrentView' CurrentViewMarker={this.state} returnNavigation={this.returnNav}/>   
            </div>
            <Footer className='Footer'/>
        </div>
    </>
  
  );
  }
}

export default App;