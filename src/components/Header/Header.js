import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import headerLogo from "../../assets/images/headerlogo.svg";
import PropTypes from 'prop-types';
import {withAuth} from "../../context/AuthContext";


class Header extends React.Component {

    static propTypes = {
        currentPage: PropTypes.string.isRequired,
        changePage: PropTypes.func.isRequired,
        logout: PropTypes.func.isRequired
    };

    changePage = (page) => {
        this.props.changePage(page);
    };

    unAuthenticate = (event) => {
        event.preventDefault();
        this.props.logout();
        this.changePage('LoginPage');
    };

    render() {
        return (
            <AppBar position="static" elevation={0} className="appBar" data-testid="Header">
                <Toolbar className="toolbar">
                    <Typography variant="h6" color="inherit" noWrap className="toolbarTitle">
                        <img src={headerLogo} alt="" className="toolbarTitleLogo"/>
                    </Typography>
                    <nav>
                        <a
                            href="#"
                            onClick={ () => this.changePage('MapPage') }
                            className={ this.props.currentPage === 'MapPage' ? "headerLink activePage" : "headerLink" }
                        >
                            Карта
                        </a>
                        <a
                            href="#"
                            onClick={ () => this.changePage('ProfilePage') }
                            className={ this.props.currentPage === 'ProfilePage' ? "headerLink activePage" : "headerLink" }
                        >
                            Профиль
                        </a>
                        <a
                            href="#"
                            onClick={ this.unAuthenticate }
                            className="headerLink"
                        >
                            Выйти
                        </a>
                    </nav>
                </Toolbar>
            </AppBar>
        );
    }
}

export default withAuth(Header);