import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => {
        return (
            <nav className="button-container">
                <button className='navbtn' onClick={() => openModal('Login')}>List your car</button>
                {/* <div className="learn-dropdown">
                <button className='learn-drop'>Learn more</button>
                <div className="dropdown-container">
                <div className="dropdown-content">
                    <div className="triangle-learn"></div>
                    <p className="dropdown-link">How Turo works</p>
                    <p className="dropdown-link">Book a car</p>
                    <p className="dropdown-link">Make money from your car</p>
                    <p className="dropdown-link">Carculator</p>
                    <div className="dropdown-separator"></div>
                    <p className="dropdown-link">All-Star Hosts</p>
                    <p className="dropdown-link">Turo for business</p>
                    <p className="dropdown-link">Trust & safety</p>
                    <p className="dropdown-link">Contact support</p>
                </div>
                </div>
                </div> */}
                <button className='navbtn' onClick={() => openModal('Login')}>Login</button>
                <button className='navbtn' onClick={() => openModal('Signup')}>Sign Up</button>
                {/* <Link to="/login">List Your Car</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link> */}
                <img className="profile-out" src={window.profileicon} alt="profile"/>
            </nav>
        )
    };

    const loggedIn = () => {
        return (
            <nav className="button-container-in">
                <Link className="list-in-1" to="/cars/new">List your car</Link>
                <div className="learn-dropdown">
                    {/* <button className='learn-drop-in'>Learn more</button>
                    <div className="dropdown-container">
                        <div className="dropdown-content">
                            <div className="triangle-learn"></div>
                            <p className="dropdown-link">How Turo works</p>
                            <p className="dropdown-link">Book a car</p>
                            <p className="dropdown-link">Make money from your car</p>
                            <p className="dropdown-link">Carculator</p>
                            <div className="dropdown-separator"></div>
                            <p className="dropdown-link">All-Star Hosts</p>
                            <p className="dropdown-link">Turo for business</p>
                            <p className="dropdown-link">Trust & safety</p>
                            <p className="dropdown-link">Contact support</p>
                        </div>
                    </div> */}
                </div>
                {/* <button className='list-in' >Trips</button>
                <button className='list-in' >Messages</button> */}
                        {/* {currentUser.email} {currentUser.first_name} */}
                        <div className="profile-dropdown">
                        <img className="profile-in" src={window.profileicon} alt="profile" />
                        <div className="dropdown-container">
                        <div className="dropdown-profile-content">
                        <div className="triangle-profile"></div>
                        {/* <p className="dropdown-pr-li">Find a car</p>
                        <div className="dropdown-separator"></div>
                        <p className="dropdown-pr-li">Account</p>
                        <p className="dropdown-pr-li">Profile</p>
                        <p className="dropdown-pr-li">Favorites</p>
                        <div className="dropdown-separator"></div>
                        <p className="dropdown-pr-li">Contact support</p> */}
                        <p className="dropdown-pr-li" onClick={() => logout()}>Log out</p>
                    </div>
                    </div>
                </div>
            </nav>
        )
    };
 
    return currentUser ? (loggedIn()) : (loggedOut())

};

export default Navbar;