import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWxuYXJhaG0iLCJhIjoiY2tqeGE0NHJoMHFtcDJ2cXUwMmtnMmM0OCJ9.db5wXYdphFV7OKw7PcIbIA';

class MapPage extends React.Component {
    state = {
        lat: 55.786898878676745,
        lng: 49.12308277592637,
        zoom: 12,
    };

    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }


    render() {
        return (
            <div
                ref={el => this.mapContainer = el}
                className={ this.props.currentPage === 'ProfilePage' ? "mapContainer profileFormContainer" : "mapContainer"}
            />
        );
    }
}

export default MapPage;