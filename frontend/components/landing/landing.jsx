import React from 'react';
import { Link } from 'react-router-dom';


class Landing extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return(
            <div>
            {/* // Landing */}
            <div className="landing-container">
            {/* <div className="landing-img"> */}
            <div className="landing-form">
                {/* <img className="porsche" src="/assets/hero-porsche-coast.jpg" alt="porche"/> */}
                <h2 className="banner">Way better than a rental car</h2>
                <h2 className="small-banner">Book unforgettable cars from trusted hosts around the world</h2>
            
            </div>
            {/* </div> */}
            </div>
            <div className="landing-insurance">
                <p className="insurance-text">INSURANCE PROVIDER</p>
                    <img className="insurance-img" src={window.liberty} alt="Liberty Insurance"/>
            </div>


            {/* // Rental Counter */}
            <div className="counter-container">
                {/* <h3>SKIP THE RENTAL COUNTER</h3>
                <h2>Discover the world’s largest car sharing marketplace</h2> */}
            </div>

            {/* // Footer */}
            <div className="footer-container">

            </div>
            </div>
        )
    }
}

export default Landing;