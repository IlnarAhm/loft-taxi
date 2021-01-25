import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/images/loftlogo.png';
import LoginForm from '../components/LoginForm/LoginForm';
import PropTypes from 'prop-types';
import { withAuth } from '../context/AuthContext';


class LoginPage extends React.Component {

    static propTypes = {
        changePage: PropTypes.func.isRequired,
    };

    changePage = (page) => {
        this.props.changePage(page)
    };

    render() {
        return (
            <Grid container component="main" className="root">
                <Grid item xs={false} sm={4} md={4} className="image" >
                    <img src={logo} alt="Loft Taxi" />
                </Grid>
                <LoginForm changePage={ (page) => this.changePage(page) } />
            </Grid>
        );
    };
}

export default withAuth(LoginPage);