import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


class LoginForm extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="loginForm" >
                <div className="paper">
                    <div className="formTitle" >
                        Войти
                    </div>
                    <form className="form" noValidate onSubmit={this.props.handleMapPage}>
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
                        <a className="forgotLink" href="#">
                            Забыли пароль?
                        </a>
                        <button type="submit" className="submit">
                            Войти
                        </button>
                        <div className="newAcc">
                            Новый пользователь? <a href="/#" className="orangeBtn" onClick={this.props.handleSignupClick} >Регистрация</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default LoginForm;