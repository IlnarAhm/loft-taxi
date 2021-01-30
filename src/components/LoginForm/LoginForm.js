import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { connect } from "react-redux";
import { authenticate } from "../../store/actions";


class LoginForm extends React.Component {

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;

        if (this.props.authenticate(email.value, password.value)) {
            // window.location.replace("/map");
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
                        <button type="submit" className="submit">
                            Войти
                        </button>
                        <div className="newAcc">
                            Новый пользователь? <a href="/registration" className="orangeBtn" >Регистрация</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default connect(
    (state) => ({isLoggedIn: state.auth.isLoggedIn}),
    { authenticate }
)(LoginForm);