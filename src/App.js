import React from 'react';
import MapPage from './pages/MapPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header/Header';
import { withAuth } from './context/AuthContext';

class App extends React.Component {

    state = {
        currentPage: 'LoginPage'
    };

    PAGES = {
        LoginPage : (props) => <LoginPage {...props} />,
        RegisterPage: (props) => <RegisterPage {...props} />,
        MapPage: (props) => <MapPage {...props} />,
        ProfilePage: (props) => <ProfilePage {...props} />,
    };

    changePage = (page) => {
        this.setState({currentPage: page});
    };


    render() {
        const { currentPage } = this.state;
        console.log(currentPage);
        return (
            <>
                { currentPage === 'MapPage' || currentPage === 'ProfilePage'
                    ?
                    <Header changePage={(page) => this.changePage(page)} currentPage={currentPage} /> : ''
                }
                { this.PAGES[currentPage]({changePage: this.changePage}) }
            </>
        );
    }
}

export default withAuth(App);