import React from 'react';
import Container from '@material-ui/core/Container';
import Map from '../components/Map/Map';
import MapForm from "../components/MapForm/MapForm";
import PropTypes from "prop-types";

class MapPage extends React.Component {

    static propTypes = {
        changePage: PropTypes.func.isRequired,
    };

    changePage = (page) => {
        this.props.changePage(page)
    };

    render() {
        return (
            <Container maxWidth="lg" component="main" className="">
                <MapForm changePage={ (page) => this.changePage(page) } />
                <Map currentPage="MapPage"/>
            </Container>
        );
    }
}

export default MapPage;