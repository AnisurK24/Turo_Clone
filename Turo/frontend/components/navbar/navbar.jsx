import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => {
        return (
            <nav>
                <button className='btn' onClick={() => openModal('Login')}>List Your Car</button>
                <button className='btn' onClick={() => openModal('Login')}>Login</button>
                <button className='btn' onClick={() => openModal('Signup')}>Sign Up</button>
                {/* <Link to="/login">List Your Car</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link> */}
            </nav>
        )
    };

    const loggedIn = () => {
        return (
            <nav>
                <Link to="/cars/new">List your car</Link>
                <div>
                    
                    <div/>
                    <div>
                        {currentUser.email} {currentUser.first_name}
                        <button onClick={() => logout()}>Log out</button>
                    </div>
                </div>
            </nav>
        )
    };

    if (currentUser) {
        return loggedIn();
    } else {
        return loggedOut();
    };

};

export default NavBar;