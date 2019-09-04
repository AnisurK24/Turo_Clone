import React from "react";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { signup, clearErrors } from '../../actions/session_actions';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = ({errors}) => {
    // debugger;
    return {
    errors: errors.session,
    formType: 'Signup',
    formFields: {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    },
}
    // navLink: <Link to="/login">Log In</Link>
};

const mapDispatchToProps = (dispatch) => ({
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    closeModal: () => dispatch(closeModal()),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SessionForm);