import React from 'react';
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";


class ProfileFormComplete extends React.Component {

    static propTypes = {
        changePage: PropTypes.func.isRequired,
    };

    changePage = (page) => {
        this.props.changePage(page)
    };

    render() {
        return (
            <Grid item xs={12} className="profileForm" >
                <div className="paper profilePaper">
                    <div className="mapInput">
                        <div className="formTitle" >
                            Профиль
                        </div>
                        <div className="formSubTitle">
                            Платёжные данные обновлены. Теперь вы можете заказывать такси.
                        </div>
                        <button
                            type="submit"
                            className="submit"
                            onClick={ () => this.changePage('MapPage') }
                        >
                            Перейти на карту
                        </button>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default ProfileFormComplete;