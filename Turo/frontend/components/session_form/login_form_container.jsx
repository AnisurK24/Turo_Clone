import React from 'react';
import { connect } from "react-redux";
import SessionForm from './session_form';
import { login, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => ({
    errors: errors.session,
    formType: 'Login',
    formFields: {
        email: '',
        password: ''
    },
    // navLink: <Link to="/signup">Sign Up</Link>
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Sign Up
        </button>
    )
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);