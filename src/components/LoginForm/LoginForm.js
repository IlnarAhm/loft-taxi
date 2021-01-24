import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PropTypes from "prop-types";
import {withAuth} from "../../context/AuthContext";


class LoginForm extends React.Component {

    changePage = (page) => {
        this.props.changePage(page);
    };

    static propTypes = {
        changePage: PropTypes.func,
    };

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        if (this.props.login(email.value, password.value)) {
            this.changePage('ProfilePage');
        }
    };

    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="loginForm" data-testid="LoginForm">
                <div className="paper">
                    <div className="formTitle" >
                        Войти
                    </div>
                    <form className="form" noValidate autoComplete="off" onSubmit={ this.authenticate }>
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                        />
                        <TextField
                            variant="standard"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/*<a className="forgotLink" href="#">*/}
                        {/*    Забыли пароль?*/}
                        {/*</a>*/}
                        <button type="submit" className="submit">
                            Войти
                        </button>
                        <div className="newAcc">
                            Новый пользователь? <a href="/#" className="orangeBtn" onClick={ () => this.changePage('RegisterPage') } >Регистрация</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default withAuth(LoginForm);