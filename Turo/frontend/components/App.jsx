import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';


const App = () => (
    <div>
        <Modal />
        <header>
            <Link to="/">
                <h1>Turbo</h1>
            </Link>
            <NavBarContainer />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        </header>
    </div>
);

export default App;
