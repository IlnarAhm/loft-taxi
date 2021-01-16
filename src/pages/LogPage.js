import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../loftlogo.png';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';


class LogPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignupClick = this.handleSignupClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = { form: "Login" };
    }

    handleSignupClick() {
        this.setState({ form: "Signup" });
    }

    handleLoginClick() {
        this.setState({ form: "Login" });
    }

    render() {
        let form;
        this.state.form === "Login" ?
            form = <LoginForm handleSignupClick={this.handleSignupClick} handleMapPage={this.props.handleMapPage} /> :
            form = <SignupForm handleLoginClick={this.handleLoginClick} handleMapPage={this.props.handleMapPage} />;

        return (
            <Grid container component="main" className="root">
                <Grid item xs={false} sm={4} md={4} className="image" >
                    <img src={logo} alt="Loft Taxi" />
                </Grid>
                {form}
            </Grid>
        );
    };
}

export default LogPage;