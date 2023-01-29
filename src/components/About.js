import '../styles/Content.css'
import ThreeTrailers from '../images/ThreeTrailers.jpg'
import InsideWarehouse from '../images/InsideWarehouse.jpg'

const About = () => {
    return (

        <>

            <div className="FlexContainer">

                <p className='Para'>
                    Bridgleland Logistics has its roots in the beautifil city
                    of Victoria, British Columbia, Canada. Bridgeland Logistics is
                    a part of a group of family owned companies. This group of 
                    companies required our goods and equiptment to be transported.
                    As we were not satisfied with our options when it came to 
                    logistics we decided to do it ourselves and the results have
                    been fantastic. 
                </p>

                <div className='PicBox'>

                    <img className='Pic' src={ThreeTrailers} alt=''/>
                    <img className='Pic' src={InsideWarehouse} alt=''/>

                </div>

                <p className='Para'>
                    Because of our experience with the difficulties of managing
                    logisitics we have decided to offer our experience and 
                    connections for your service. This means that you can take
                    advantage of our experience in order to make your own logistics
                    smooth and problem free. Being that we are a company based on 
                    an island we have seen it all when it comes to logistical
                    headaches. At Bridgeland Logistics we are committed to handling
                    these headaches so you can focus on the rest of your operation.
                </p>

            </div>
        
        </>

    );
};
    
    export default About;