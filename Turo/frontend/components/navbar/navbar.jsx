import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => {
        return (
            <nav className="button-container">
                <button className='navbtn' onClick={() => openModal('Login')}>List Your Car</button>
                <button className='learn-drop'>Learn more</button>
                <button className='navbtn' onClick={() => openModal('Login')}>Login</button>
                <button className='navbtn' onClick={() => openModal('Signup')}>Sign Up</button>
                {/* <Link to="/login">List Your Car</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link> */}
                <img className="profile-out" src="/assets/profile-icon.png" alt=""/>
            </nav>
        )
    };

    const loggedIn = () => {
        return (
            <nav>
                <Link to="/cars/new">
                    <button className="navbtn">List your car</button>
                </Link>
                {/* <div className="dropdown">
                    <div className="nav-profile" />
                    <div className="dropdown-content"> */}
                        {/* {currentUser.email} {currentUser.first_name} */}
                        <button className="navbtn" onClick={() => logout()}>Log out</button>
                    {/* </div>
                </div> */}
            </nav>
        )
    };

    if (currentUser) {
        return loggedIn();
    } else {
        return loggedOut();
    };

};

export default Navbar;