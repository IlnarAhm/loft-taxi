import React from 'react';
import Grid from "@material-ui/core/Grid";

class ProfileFormComplete extends React.Component {

    changePage = () => {
        window.location.replace("/map");
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
                            onClick={ () => this.changePage() }
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