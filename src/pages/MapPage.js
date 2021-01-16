import React from 'react';
import headerLogo from '../headerlogo.svg';
import AppBar from '@material-ui/core/AppBar';
import MapForm from '../components/MapForm';
import ProfileForm from '../components/ProfileForm';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWxuYXJhaG0iLCJhIjoiY2tqeGE0NHJoMHFtcDJ2cXUwMmtnMmM0OCJ9.db5wXYdphFV7OKw7PcIbIA';

class MapPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lat: 55.786898878676745,
            lng: 49.12308277592637,
            zoom: 12,
            form: 'profile',
        };

        this.openMapForm = this.openMapForm.bind(this);
        this.openProfile = this.openProfile.bind(this);
    }

    openMapForm() {
        this.setState({ form: 'map' });
    }

    openProfile() {
        this.setState({ form: 'profile' });
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
        let form;
        this.state.form === 'map' ?
            form = <MapForm /> :
            form = <ProfileForm openMapForm={this.openMapForm} />;

        return (
            <React.Fragment>
                <AppBar position="static" elevation={0} className="appBar">
                    <Toolbar className="toolbar">
                        <Typography variant="h6" color="inherit" noWrap className="toolbarTitle">
                            <img src={headerLogo} alt="" className="toolbarTitleLogo"/>
                        </Typography>
                        <nav>
                            <a
                                href="#"
                                onClick={ this.openMapForm }
                                className={ this.state.form === 'map' ? "headerLink activePage" : "headerLink" }
                            >
                                Карта
                            </a>
                            <a
                                href="#"
                                onClick={ this.openProfile }
                                className={ this.state.form === 'profile' ? "headerLink activePage" : "headerLink" }
                            >
                                Профиль
                            </a>
                            <a
                                href="#"
                                onClick={ this.props.handleLogPage }
                                className="headerLink"
                            >
                                Выйти
                            </a>
                        </nav>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg" component="main" className="">
                    { form }
                    <div ref={el => this.mapContainer = el} className={ this.state.form === 'profile' ? "mapContainer profileFormContainer" : "mapContainer"} />
                </Container>
            </React.Fragment>
        );
    }
}

export default MapPage;