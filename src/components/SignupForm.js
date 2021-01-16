import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';


class LoginForm extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="loginForm" >
                <div className="paper">
                    <div className="formTitle" >
                        Войти
                    </div>
                    <form className="form" noValidate >
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
                            name="password"
                            label="Пароль"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Link className="forgotLink" href="#">
                            Забыли пароль?
                        </Link>
                        <button type="submit" className="submit" >
                            Войти
                        </button>
                        <div className="newAcc">s
                            Новый пользователь? <a href="#" className="orangeBtn">Регистрация</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default LoginForm;