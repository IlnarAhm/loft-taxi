import React from 'react';
import MapPage from './pages/MapPage';
import LogPage from './pages/LogPage';
// import LogPage from './pages/LogPage';

const PAGES = {
    asd: 'asd',
};

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'LogPage',
        };
        this.handleMapPage = this.handleMapPage.bind(this);
        this.handleLogPage = this.handleLogPage.bind(this);
    }

    handleMapPage() {
        this.setState({ currentPage: 'MapPage' });
    }

    handleLogPage() {
        this.setState({ currentPage: 'LogPage' });
    }

    render() {
        let page;
        this.state.currentPage === "LogPage" ?
            page = <LogPage handleMapPage={this.handleMapPage} /> :
            page = <MapPage handleLogPage={this.handleLogPage} />;

        return (
            <div>
                { page }
            </div>
        );
    }
}

export default App;