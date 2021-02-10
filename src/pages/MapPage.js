import React from 'react';
import Container from '@material-ui/core/Container';
import Map from '../components/Map/Map';
import MapForm from "../components/MapForm/MapForm";

class MapPage extends React.Component {

    render() {
        return (
            <Container maxWidth="lg" component="main" className="">
                <MapForm />
                <Map currentPage="MapPage"/>
            </Container>
        );
    }
}

export default MapPage;