import React from 'react';
import {Redirect, Route, Switch, Link} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import Modal from './modal/modal';
import LandingContainer from './landing/landing_container';


const App = () => (
    <div>
        <Modal />
        <header className="navbar">
            <Link to="/">
                <img className="turbo-logo" src={window.turbo} alt="logo"/>
            </Link>
            <NavBarContainer />
            {/* <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        </header>

        <Switch>
            {/* <Route exact path="/cars" component={CarIndexContainer} />
            <Route exact path="/cars/new" component={CarCreateContainer} />
            <Route exact path="/cars/:id" component={CarShowContainer} />
            <Route exact path="/cars/:id/edit" component={CarUpdateContainer} /> */}
            <Route exact path="/" component={LandingContainer} />
            <Redirect to="/" component={LandingContainer}/>
        </Switch>
    </div>
);

export default App;
