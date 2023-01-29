import '../styles/Content.css'
import ShipWater from '../images/ShipWater.jpg'
import Trucks from '../images/Trucks.jpg'
import ContainerYard from '../images/ContainerYard.jpg'
import RailwayTrains from '../images/RailwayTrains.jpg'

const How = () => {
    return (

        <>

            <div className="FlexContainer">
                <p className="Para"> 
                    So how does it all work?
                </p>

                    <div className='PicBox'>
                    
                        <img className='Pic' src={ShipWater} alt="A ship in the ocean"/>
                        <img className='Pic' src={Trucks} als="Trucks on the highway"/>
                    
                    </div>

                <p className="Para">
                    The first step is to contact us (see the Contact Us section of the website).
                We will need to know what products or materials you need transporte,
                where they will be picked up and where you need them delivered to.
                Once we have this information we will be able to create a quote for 
                you. Once you have accepted the quote we can begin the process.
                </p>

                    <div className='PicBox'>
                    
                        <img className='Pic' src={ContainerYard} alt="Container Yard"/>
                        <img className='Pic' src={RailwayTrains} als="Trains on a railway"/>
                    
                    </div>

                <p className="Para">
                    Once the process is started we will be your point of contact
                    until the product is delivered. We will navigate the process of
                    transporting your goods whether it be getting products from a
                    wearhouse in the same town or across the ocean.
                </p>
            </div>
        </>

    );
};
    
    export default How;