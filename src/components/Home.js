import '../styles/Content.css'
import TwoTrains from '../images/TwoTrains.jpg'
import LoadingShip from '../images/LoadingShip.jpg'

const Home = () => {
    return(

        <>
        
            <div className='FlexContainer'>
                <p className='Title'>Bridgeland Logistics</p>
                
                <div className='PicBox'>
                    <img className='Pic' src={TwoTrains} alt="Two trains"/>
                    <img className='Pic' src={LoadingShip} alt="A ship being loaded"/>
                </div>

                <p className='Para'>Bridgeland Logistics, a division of Bridgeland Industrial Group is the solution to your logistics needs. </p>
            </div>
        </>
        

    );
};

export default Home;