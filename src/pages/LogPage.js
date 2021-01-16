import React from 'react';
import LoginForm from '../components/LoginForm';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../loftlogo.png';


const useStyles = makeStyles(() => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1C1A19',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

const SignIn = () => {
    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={4} className={classes.image} >
                <img src={logo} alt="Loft Taxi"/>
            </Grid>
            <LoginForm/>
        </Grid>
    );
};

export default SignIn;