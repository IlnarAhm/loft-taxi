import React from 'react';
import MapPage from './pages/MapPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';

class App extends React.Component {

    state = {
        currentPage: 'LoginPage',
    };

    pages = {
        LoginPage : <LoginPage changePage={ (page) => this.changePage(page) } />,
        RegisterPage: <RegisterPage changePage={ (page) => this.changePage(page) } />,
        MapPage: <MapPage changePage={ (page) => this.changePage(page) } />,
        ProfilePage: <ProfilePage changePage={ (page) => this.changePage(page) } />,
    };

    changePage = (page) => {
        this.setState( { currentPage: page } );
    };


    render() {
        // console.log(this.state.currentPage);
        return (
            <div>
                { this.state.currentPage === 'MapPage' || this.state.currentPage === 'ProfilePage' ?
                    <Header changePage={(page) => this.changePage(page)} currentPage={this.state.currentPage} /> : ''
                }
                { this.pages[this.state.currentPage] }
            </div>
        );
    }
}

export default App;