import React from 'react';
import LandingSearch from './landing_search';
import moment from 'moment';
import 'react-dates/initialize';

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
            {/* Search */}
            <div className="landing-search-container">
                <div className="landing-search-form">
                    <div className="search-location">
                        <label className="search-text">Where</label>
                        <input type="text" placeholder="City, airport, address, or hotel" defaultValue={`San Francisco, CA`}/>
                    </div>
                    <div className="search-start">
                        <label className="search-text">From</label>
                        <div className="date-time-container">
                            <input className="search-date" type="date" defaultValue={moment().format('YYYY-MM-DD')}/>
                            <LandingSearch />
                        </div>
                    </div>
                    <div className="search-end">
                        <label className="search-text">Until</label>
                        <div className="date-time-container">
                            <input className="search-date" type="date" defaultValue={moment().add(7, "days").format('YYYY-MM-DD')}/>
                            <LandingSearch />
                        </div>
                    </div>
                    <Link to={"/cars"}>
                        <button className="search-button"/>
                    </Link>
                </div>
            </div>
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