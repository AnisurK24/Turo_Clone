import React from "react";
import { connect } from "react-redux";
import sessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => ({
    formType: 'Signup',
    formFields: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    },
    navLink: <Link to="/login">Log In</Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(sessionForm);