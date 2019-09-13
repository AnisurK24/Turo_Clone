import React from 'react';
import {Redirect, Route, Switch, Link} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import NavBarContainer from './navbar/navbar_container';
import ModalContainer from './modal/modal_container';
import LandingContainer from './landing/landing_container';
import CarCreateContainer from './cars/car_create_container';
import CarIndexContainer from './cars/car_index_container';
import CarUpdateContainer from './cars/car_update_container';

import Footer from './footer/footer';

const App = () => (
    <div>
        <ModalContainer />
        <header className="navbar">
            <Link to="/">
                <img className="turbo-logo" src={window.turbo} alt="logo"/>
            </Link>
            <NavBarContainer />
            {/* <AuthRoute exact path="/login" component={LogInFormContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SignUpFormContainer} /> */}
        </header>

        <Switch>
            <ProtectedRoute exact path="/cars/:id/edit" component={CarUpdateContainer} />
            <ProtectedRoute exact path="/cars/new" component={CarCreateContainer} />
            <Route exact path="/cars" component={CarIndexContainer} />
            <Route exact path="/" component={LandingContainer} />
            <Redirect to="/" />
        </Switch>

        <Footer />
        
    </div>
);

export default App;
