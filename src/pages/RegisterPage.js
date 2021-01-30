import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/images/loftlogo.png';
import RegisterForm from '../components/RegisterForm/RegisterForm';

class RegisterPage extends React.Component {
    render() {
        return (
            <Grid container component="main" className="root">
                <Grid item xs={false} sm={4} md={4} className="image" >
                    <img src={logo} alt="Loft Taxi" />
                </Grid>
                <RegisterForm />
            </Grid>
        );
    };
}

export default RegisterPage;