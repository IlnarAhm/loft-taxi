import React from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import headerLogo from "../headerlogo.svg";


class Header extends React.Component {

    changePage = (page) => {
        this.props.changePage(page);
    };

    render() {
        return (
            <AppBar position="static" elevation={0} className="appBar">
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
                            onClick={ () => this.changePage('LoginPage') }
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

export default Header;