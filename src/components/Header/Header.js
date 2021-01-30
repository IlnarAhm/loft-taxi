import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import headerLogo from "../../assets/images/headerlogo.svg";
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import { logOut } from "../../store/actions";


class Header extends React.Component {

    static propTypes = {
        logOut: PropTypes.func.isRequired
    };

    unAuthenticate = (event) => {
        event.preventDefault();
        this.props.logOut();
        window.location.replace("/login");
    };

    render() {
        return (
            <AppBar position="static" elevation={0} className="appBar" data-testid="Header">
                <Toolbar className="toolbar">
                    <Typography variant="h6" color="inherit" noWrap className="toolbarTitle">
                        <img src={headerLogo} alt="" className="toolbarTitleLogo"/>
                    </Typography>
                    <nav>
                        <NavLink
                            to="/map"
                            exact
                            activeClassName="activePage"
                            className="headerLink"
                        >
                            Карта
                        </NavLink>
                        <NavLink
                            to="/profile"
                            exact
                            activeClassName="activePage"
                            className="headerLink"
                        >
                            Профиль
                        </NavLink>
                        <NavLink
                            to="/login"
                            onClick={ this.unAuthenticate }
                            className="headerLink"
                        >
                            Выйти
                        </NavLink>
                    </nav>
                </Toolbar>
            </AppBar>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { logOut }
)(Header);