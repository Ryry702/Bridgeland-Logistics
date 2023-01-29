import '../styles/Content.css'
import Forklift from '../images/Forklift.jpg'
import YardCrane from '../images/YardCrane.jpg'

const Logistics = () => {
    return (

        <>
            <div className="FlexContainer">

                
                <p className="Para">
                    Bridgeland Logistics can provide logistics 
                    management and solutions for various logistics needs.
                    Services we can provide include trucking of bulk goods,
                    transportation of shipping containers, international 
                    shipping, customs brokering, air freight, towing,
                    and delivery including unloading/crane work.
                </p>

                <div className='PicBox'>

                    <img className='Pic' src={Forklift} alt="A forklift"/>
                    <img className='Pic' src={YardCrane} alt="A container yard crane"/>
                </div>

                <p className="Para">
                    If you are thinking of importing goods from
                    international markets Bridgeland Logistics has you covered.
                    We have experience bringing goods in from markets such
                    as China, Vietnam and the USA. If you have a overseas product
                    you would like brought to you or your distribution center 
                    we can make the process easy with a single point of contact
                    and a single 
                </p>
            </div>
        </>

    );
};
    
    export default Logistics;