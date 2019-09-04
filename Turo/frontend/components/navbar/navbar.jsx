import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {

    const loggedOut = () => {
        return (
            <nav>
                <Link to="/login">List Your Car</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up</Link>
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
                        <a>{currentUser.first_name} {currentUser.last_name}</a>
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