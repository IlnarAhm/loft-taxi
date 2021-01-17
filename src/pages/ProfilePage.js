import React from 'react';
import ProfileForm from '../components/ProfileForm';
import ProfileFormComplete from '../components/ProfileFormComplete';
import Container from '@material-ui/core/Container';
import Map from '../components/Map';

class ProfilePage extends React.Component {

    state = {
        isFormComplete: false,
    };

    changePage = (page) => {
        this.props.changePage(page)
    };

    checkFormComplete = (bool) => {
        this.setState({ isFormComplete: bool })
    };

    render() {
        return (
            <>
                <Container maxWidth="lg" component="main" className="">
                    { !this.state.isFormComplete ?
                        <ProfileForm checkFormComplete={ (bool) => this.checkFormComplete(bool) }/> :
                        <ProfileFormComplete changePage={ (page) => this.changePage(page) } />
                    }
                    <Map currentPage="ProfilePage"/>
                </Container>
            </>
        );
    }
}

export default ProfilePage;