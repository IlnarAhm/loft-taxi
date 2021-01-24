import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/images/loftlogo.png';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import PropTypes from "prop-types";


class RegisterPage extends React.Component {

    changePage = (page) => {
        this.props.changePage(page)
    };

    static propTypes = {
        changePage: PropTypes.func,
    };

    render() {
        return (
            <Grid container component="main" className="root">
                <Grid item xs={false} sm={4} md={4} className="image" >
                    <img src={logo} alt="Loft Taxi" />
                </Grid>
                <RegisterForm changePage={ (page) => this.changePage(page) } />
            </Grid>
        );
    };
}

export default RegisterPage;