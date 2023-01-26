import Home from './Home';
import Logistics from './Logistics'
import How from './How'
import About from './About'
import Contact from './Contact'
import React, {Component} from 'react';



class CurrentView extends Component {
    constructor(props) {
        super(props);
    }

render() {

   const CurrentViewChecker = this.props;
   const ifTrue = "Home";

   console.log(CurrentViewChecker.CurrentViewMarker.CurrentViewMarker)

   if(CurrentViewChecker.CurrentViewMarker.CurrentViewMarker == 'Home')
   return (<Home />);
   ;

   if(CurrentViewChecker.CurrentViewMarker.CurrentViewMarker == 'Logistics')
   return (<Logistics />);
   ;

   if(CurrentViewChecker.CurrentViewMarker.CurrentViewMarker == 'How')
   return (<How />);
   ;

   if(CurrentViewChecker.CurrentViewMarker.CurrentViewMarker == 'About')
   return (<About />);
   ;

   if(CurrentViewChecker.CurrentViewMarker.CurrentViewMarker == 'Contact')
   return (<Contact />);
   ;

   return(<Home/>)

}
}

export default CurrentView