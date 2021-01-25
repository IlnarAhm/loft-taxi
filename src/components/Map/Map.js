import React from 'react';
import mapboxgl from 'mapbox-gl';
import PropTypes from "prop-types";

class MapPage extends React.Component {
    state = {
        lat: 55.786898878676745,
        lng: 49.12308277592637,
        zoom: 12,
    };

    static propTypes = {
        currentPage: PropTypes.string,
    };

    mapContainer = React.createRef();

    componentDidMount() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiaWxuYXJhaG0iLCJhIjoiY2tqeGE0NHJoMHFtcDJ2cXUwMmtnMmM0OCJ9.db5wXYdphFV7OKw7PcIbIA';

        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }


    render() {
        return (
            <div
                ref={this.mapContainer}
                className={ this.props.currentPage === 'ProfilePage' ? "mapContainer profileFormContainer" : "mapContainer"}
            />
        );
    }
}

export default MapPage;