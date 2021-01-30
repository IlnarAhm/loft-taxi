import React from 'react';
import MapPage from './pages/MapPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header/Header';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from "./components/PrivateRoute";

class App extends React.Component {

    render() {
        return (
            <>
                <Route path="/map" component={Header} />
                <Route path="/profile" component={Header} />

                <Switch>
                    <Route path="/login" component={LoginPage} exact />
                    <Route path="/registration" component={RegisterPage} />
                    <PrivateRoute path="/map" component={MapPage} />
                    <PrivateRoute path="/profile" component={ProfilePage} />
                    <Redirect to="/login" />
                </Switch>
            </>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn})
)(App);