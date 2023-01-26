import '../styles/NavBar.css';
import React,{Component} from 'react';



class NavBar extends Component{
    constructor(props) {
        super(props);
    }

    render(){

        return (

            <>
            
            <div className='NavBarBackground'>

                <button className='HomeButton NavButton' onClick={() => this.props.updateNavigation("Home")}> Home </button>
                <button className='LogisticsButton NavButton' onClick={() => this.props.updateNavigation("Logistics")}> Logistics </button>
                <button className='HowButton NavButton' onClick={() => this.props.updateNavigation("How")}> How We Work </button>
                <button className='AboutButton NavButton' onClick={() => this.props.updateNavigation("About")}> About Us </button>
                <button className='ContactButton NavButton' onClick={() => this.props.updateNavigation("Contact")}> Contact Us </button>

            </div>

            </>

        );            

    };
}

export default NavBar;