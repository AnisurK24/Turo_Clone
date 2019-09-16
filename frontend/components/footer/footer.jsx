import React from 'react';

class Footer extends React.Component {

    render() {

        return (

        <div>

            
            <div className="ft-hd">
            <div className="ft-hd-text">* All Liberty Reciprocal liability insurance in the US is offered through Turbo Insurance Agency. Terms, conditions, and exclusions apply.</div>
            </div>
            

            <div className="footer-container">
                <div className="footer-inner-container">
                    <div className="footer-container-list-top">

                        <ul className="footer-ul-2">
                            <h4 className="footer-title">Turbo</h4>
                            <li className="footer-li">About</li>
                            <li className="footer-li">Team</li>
                            <li className="footer-li">Policies</li>
                            <li className="footer-li">Careers</li>
                            <li className="footer-li">Press</li>
                            <li className="footer-li">OpenRoad</li>
                            <li className="footer-li">Turbo Shop</li>
                        </ul>

                        
                        <ul className="footer-ul-2">
                            <h4 className="footer-title">Explore</h4>
                            <li className="footer-li">Book a car</li>
                            <li className="footer-li">Trust & safety</li>
                            <li className="footer-li">FAQs</li>
                            <li className="footer-li">Get help</li>
                        </ul>

                        
                        <ul className="footer-ul-2">
                            <h4 className="footer-title">Hosting</h4>
                            <li className="footer-li">List your car</li>
                            <li className="footer-li">Carculator</li>
                            <li className="footer-li">All-star Hosts</li>
                            <li className="footer-li">Host tools</li>
                            <li className="footer-li">Insurance & protection</li>
                            <li className="footer-li">FAQs</li>
                        </ul>
                    
                    <div className="footer-img">
                        <span className="social-container">
                            <img src={window.footersocial}/><p className="blog-btn">BLOG</p>
                        </span>
                        <div className="apps-container">
                        <img className="app-store" src={window.appstore}/>
                        <img className="google-play" src={window.googleplay}/>
                        </div>
                    </div>
                        </div>

                    <div className="footer-container-list-bot">
                        
                        <ul className="footer-ul-3">
                            <h4 className="footer-title">Vehicle types</h4>
                            <li className="footer-li">Trucks</li>
                            <li className="footer-li">Vans</li>
                            <li className="footer-li">Exotic & Luxury</li>
                            <li className="footer-li">Convertibles</li>
                            <li className="footer-li">Sport</li>
                            <li className="footer-li">Classics</li>
                            <li className="footer-li">Minivans</li>
                            <li className="footer-li">SUVs</li>
                            <li className="footer-li">Cars</li>
                        </ul>

                        <ul className="footer-ul-3">
                            <h4 className="footer-title">Makes</h4>
                            <li className="footer-li">Tesla</li>
                            <li className="footer-li">Lamborghini</li>
                            <li className="footer-li">Jeep</li>
                            <li className="footer-li">Rolls-Royce</li>
                            <li className="footer-li">Mercedes-Benz</li>
                            <li className="footer-li">Ferrari</li>
                            <li className="footer-li">Porsche</li>
                            <li className="footer-li">BMW</li>
                            <li className="footer-li">Subaru</li>
                            <li className="footer-li">Maserati</li>
                        </ul>

                        
                        <ul className="footer-ul-3">
                            <h4 className="footer-title">Top Cities</h4>
                            <li className="footer-li">Honolulu</li>
                            <li className="footer-li">Denver</li>
                            <li className="footer-li">Las Vegas</li>
                            <li className="footer-li">Las Angeles</li>
                            <li className="footer-li">San Diego</li>
                            <li className="footer-li">San Francisco</li>
                            <li className="footer-li">Orlando</li>
                            <li className="footer-li">Chicago</li>
                            <li className="footer-li">Portland</li>
                            <li className="footer-li">Miami</li>
                        </ul>

                        <ul className="footer-ul-1">
                            <li className="footer-li">Phoenix</li>
                            <li className="footer-li">Boston</li>
                            <li className="footer-li">Sacramento</li>
                            <li className="footer-li">Atlanta</li>
                            <li className="footer-li">Fort Lauderdale</li>
                            <li className="footer-li">Austin</li>
                            <li className="footer-li">Tampa</li>
                            <li className="footer-li">Salt Lake City</li>
                            <li className="footer-li">San Antonio</li>
                            <li className="footer-li">New Orleans</li>
                        </ul>

                        <ul className="footer-ul-1">
                            <li className="footer-li">Anchorage</li>
                            <li className="footer-li">Dallas</li>
                            <li className="footer-li">Houston</li>
                            <li className="footer-li">Kansas City</li>
                            <li className="footer-li">Minneapolis</li>
                            <li className="footer-li">Philadelphia</li>
                            <li className="footer-li">Pittsburgh</li>
                            <li className="footer-li">Raleigh</li>
                            <li className="footer-li">Seattle</li>
                            <li className="footer-li">Washington D.C.</li>
                        </ul>
                    </div>

                    <div className="footer-bottom">
                        {/* <h5 className="footer-copy">©2019 Turbo</h5> */}
                        <ul className="footer-bot-ul">
                            <li className="footer-copy">©2019 Turbo</li>
                            <li className="foot">Terms</li>
                            <li className="foot">Privacy</li>
                            <li className="foot-last">Sitemap</li>
                            <li className="last-li"><div className="foot-arrow"><h1 className="up">^</h1></div><img src={window.english}/>English (USA)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}



export default Footer;