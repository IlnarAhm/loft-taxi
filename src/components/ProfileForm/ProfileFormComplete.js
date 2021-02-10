import React from 'react';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';

class ProfileFormComplete extends React.Component {

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
                        <Link to="/map" >
                            <button className="submit">Перейти на карту</button>
                        </Link>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default ProfileFormComplete;