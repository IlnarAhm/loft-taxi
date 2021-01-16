import React from 'react';
import headerLogo from '../headerlogo.svg';
import AppBar from '@material-ui/core/AppBar';
import MapForm from '../components/MapForm';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import mapboxgl from 'mapbox-gl';
import Grid from "@material-ui/core/Grid";

mapboxgl.accessToken = 'pk.eyJ1IjoiaWxuYXJhaG0iLCJhIjoiY2tqeGE0NHJoMHFtcDJ2cXUwMmtnMmM0OCJ9.db5wXYdphFV7OKw7PcIbIA';

class Map extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 55.786898878676745,
            lng: 49.12308277592637,
            zoom: 12
        };
    }

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
            <React.Fragment>
                <AppBar position="static" elevation={0} className="appBar">
                    <Toolbar className="toolbar">
                        <Typography variant="h6" color="inherit" noWrap className="toolbarTitle">
                            <img src={headerLogo} alt="" className="toolbarTitleLogo"/>
                        </Typography>
                        <nav>
                            <a href="#" className="headerLink activePage">
                                Карта
                            </a>
                            <a href="#" className="headerLink">
                                Профиль
                            </a>
                            <a href="#" className="headerLink">
                                Выйти
                            </a>
                        </nav>
                    </Toolbar>
                </AppBar>
                {/* Hero unit */}
                <Container maxWidth="sm" component="main" className="">
                    {/*{Map form}*/}
                    <Grid item xs={12} sm={8} md={8} className="mapForm" >
                        <div className="paper mapPaper">
                            <MapForm />
                            <div className="paper mapPaper">
                                <MapForm />
                            </div>
                        </div>
                    </Grid>
                    {/*{Map}*/}
                    <div ref={el => this.mapContainer = el} className="mapContainer" />
                </Container>
            </React.Fragment>
        );
    }
}

export default Map;