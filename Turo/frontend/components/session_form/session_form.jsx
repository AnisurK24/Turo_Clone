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
    }

    handleInput(field) {
        return (e) => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    render() {
        if (this.props.formType === 'Login') {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>
                        E-mail:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput("email")}
                            />
                    </label>

                    <br />

                    <label>
                        Password:
                        <input 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput("password")}
                            />
                    </label>

                    <br />

                    <input type="submit" value={this.props.formType} />
                </form>
            </div>
        );
        } else {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <br />
                        <label>
                            First Name:
                        <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.handleInput("first_name")}
                            />
                        </label>

                        <br />

                        <label>
                            Last Name:
                        <input
                                type="text"
                                value={this.state.last_name}
                                onChange={this.handleInput("last_name")}
                            />
                        </label>

                        <br />

                        <label>
                            E-mail:
                        <input
                                type="text"
                                value={this.state.email}
                                onChange={this.handleInput("email")}
                            />
                        </label>

                        <br />

                        <label>
                            Password:
                        <input
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput("password")}
                            />
                        </label>

                        <br />

                        <input type="submit" value={this.props.formType} />
                    </form>
                </div>
            );        
        }
    }
}

export default SessionForm;