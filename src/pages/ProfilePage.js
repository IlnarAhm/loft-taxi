import React from 'react';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import ProfileFormComplete from '../components/ProfileForm/ProfileFormComplete';
import Container from '@material-ui/core/Container';
import Map from '../components/Map/Map';
import PropTypes from "prop-types";

class ProfilePage extends React.Component {

    state = {
        isFormComplete: false,
    };

    static propTypes = {
        changePage: PropTypes.func.isRequired,
    };

    changePage = (page) => {
        this.props.changePage(page)
    };

    checkFormComplete = (bool) => {
        this.setState({ isFormComplete: bool })
    };

    render() {
        return (
            <Container maxWidth="lg" component="main">
                { !this.state.isFormComplete ?
                    <ProfileForm checkFormComplete={ (bool) => this.checkFormComplete(bool) }/> :
                    <ProfileFormComplete changePage={ (page) => this.changePage(page) } />
                }
                <Map currentPage="ProfilePage"/>
            </Container>
        );
    }
}

export default ProfilePage;