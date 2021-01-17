import React from 'react';
import Grid from '@material-ui/core/Grid';
import logo from '../loftlogo.png';
import LoginForm from '../components/LoginForm';


class LoginPage extends React.Component {

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

export default LoginPage;