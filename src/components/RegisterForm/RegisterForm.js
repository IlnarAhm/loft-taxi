import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class RegisterForm extends React.Component {

    changePage = (event) => {
        event.preventDefault();
        window.location.replace("/profile");
    };

    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="loginForm" data-testid="RegisterForm">
                <div className="paper">
                    <div className="formTitle" >
                        Регистрация
                    </div>
                    <form className="form" noValidate onSubmit={ this.changePage } >
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
                            Уже зарегестрированы? <a href="/login" className="orangeBtn" >Войти</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default RegisterForm;