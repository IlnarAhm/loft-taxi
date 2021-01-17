import React from 'react';
import Container from '@material-ui/core/Container';
import Map from '../components/Map';
import MapForm from "../components/MapForm";

class MapPage extends React.Component {

    changePage = (page) => {
        this.props.changePage(page)
    };

    render() {
        return (
            <>
                <Container maxWidth="lg" component="main" className="">
                    <MapForm changePage={ (page) => this.changePage(page) } />
                    <Map currentPage="MapPage"/>
                </Container>
            </>
        );
    }
}

export default MapPage;