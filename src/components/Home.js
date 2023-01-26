import '../styles/Home.css'
import DumpTruckPic from '../images/DumpTruck.jpg'

const Home = () => {
    return(

        <>
        
            <div className='HomeContainer'>
                <p className='HomePara'>Bridgeland Logistics, a division of Bridgeland Industrial Group is a solution to your logistics needs. </p>
                <img src={DumpTruckPic} alt="background"/>
                <p className='HomePara'>Home</p>
            </div>
        </>
        

    );
};

export default Home;