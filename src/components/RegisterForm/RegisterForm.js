import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";


class RegisterForm extends React.Component {

    static propTypes = {
        changePage: PropTypes.func,
    };

    changePage = (page) => {
        this.props.changePage(page);
    };

    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="loginForm" data-testid="RegisterForm">
                <div className="paper">
                    <div className="formTitle" >
                        Регистрация
                    </div>
                    <form className="form" noValidate onSubmit={ () => this.changePage('ProfilePage') } >
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="name"
                            label="Как вас зовут?"
                            type="text"
                            id="name"
                            autoComplete="current-password"
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Придумайте пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <button type="submit" className="submit" >
                            Зарегистрироваться
                        </button>
                        <div className="newAcc">
                            Уже зарегестрированы? <a href="#" className="orangeBtn" onClick={ () => this.changePage('LoginPage') } >Войти</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default RegisterForm;