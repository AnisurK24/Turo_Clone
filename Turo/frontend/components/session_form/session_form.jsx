import React from "react";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     email: "",
        //     password: ""
        // };
        this.state = this.props.formFields;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleInput(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(this.props.closeModal);
    }

    renderErrors() {
        // console.log(this.props.errors);
        return (
            <ul className="modal-ul">
                {this.props.errors.map((error, i) => (
                    <li className="modal-li" key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    async handleDemo(e) {
        e.preventDefault();

        const demoUser = {
            email: 'demo@email.com',
            password: 'password'
        };

        const sleep = ms => new Promise(res => setTimeout(res, ms));

        document.getElementById('email-input').focus();
        for (let i = 1; i <= demoUser.email.length; i++) {
            this.setState({ email: demoUser.email.substr(0, i) });
            await sleep(100);
        }

        await sleep(500);

        document.getElementById('password-input').focus();
        for (let i = 1; i <= demoUser.password.length; i++) {
            this.setState({ password: demoUser.password.substr(0, i) });
            await sleep(100);
        }

        await sleep(500);

        document.getElementById('session-submit-btn').click();
        document.getElementById('password-input').blur();
    }

    // handleDemo(e) {
    //     e.preventDefault();
    //     this.props.processForm({
    //     email: 'demo@email.com',
    //     password: 'password'
    //     }).then(this.props.closeModal);
    // }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        if (this.props.formType === 'Login') {
        return (
            <div className="modal-container">
                <img className="modal-x" onClick={this.props.closeModal} src="/assets/x-close.png" />
                
                <form className="modal-form" onSubmit={this.handleSubmit}>
                        <h2 className="modal-header">Welcome back</h2>
                    <label>
                    
                        <p className="modal-fields">Email:</p>
                        <input className="email-input" id="email-input" placeholder="Email" type="email" value={this.state.email} onChange={this.handleInput("email")} />
                    </label>
                    
                    <label>
                    
                        <div className="modal-fields">
                            <span className="fgpw">
                                <p>Password:</p>
                                <p className="forgot-password">Forgot your password?</p>
                            </span>
                        </div>
                        <input className="password-input" id="password-input" placeholder="Password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                    </label>
                    <br />
                    <input className="modal-button" id="session-submit-btn" type="submit" value={this.props.formType} />
                    <br />
                        <input className="modal-button" type="submit" onClick={this.handleDemo} value="Demo Login" />
                    
                        <p className="modal-or">or</p>
                        <span className="footer-form">
                            <p className="modal-footer">Don't have an account?</p><p className="footer-button">{this.props.otherForm}</p>
                        </span>
                        <span className="modal-errors">{this.renderErrors()}</span>
                </form>
            </div>
        );
        } else {
            return (
                <div className="modal-container">
                    <img className="modal-x" onClick={this.props.closeModal} src="/assets/x-close.png" />
                    <form className="modal-form" onSubmit={this.handleSubmit}>
                            <h2 className="modal-header">Welcome to Turbo</h2>
                        <label>
                        
                            <p className="modal-fields">First Name:</p>
                            <input className="fname-input" placeholder="First Name" type="text" value={this.state.first_name} onChange={this.handleInput("first_name")}/>
                        </label>
                        
                        <label>
                        
                            <p className="modal-fields">Last Name:</p>
                            <input className="lname-input" placeholder="Last Name" type="text" value={this.state.last_name} onChange={this.handleInput("last_name")}/>
                        </label>
                        
                        <label>
                        
                            <p className="modal-fields">Email:</p>
                            <input className="email-input" placeholder="Email" type="email" value={this.state.email} onChange={this.handleInput("email")} />
                        </label>
                        
                        <label>
                        
                            <p className="modal-fields">Password:</p>
                            <input className="password-input" placeholder="Password" type="password" value={this.state.password} onChange={this.handleInput("password")} />
                        </label>
                        <br/>
                            <input className="modal-button" type="submit" value="Sign up with email"/>
                        
                            <p className="modal-or">or</p>
                            <span className="footer-form">
                                <p className="modal-footer">Already have an account?</p><p className="footer-button">{this.props.otherForm}</p>
                            </span>
                        <br/>
                        <span className="modal-errors">{this.renderErrors()}</span>
                    </form>
                </div>
            );        
        }
    }
}

export default SessionForm;