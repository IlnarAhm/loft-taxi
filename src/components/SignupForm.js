import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


class SignupForm extends React.Component {
    render() {
        return (
            <Grid item xs={12} sm={8} md={8} className="loginForm" >
                <div className="paper">
                    <div className="formTitle" >
                        Регистрация
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
                            label="Как вас зовут?"
                            type="password"
                            id="password"
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
                            Уже зарегестрированы? <a href="/#" className="orangeBtn" onClick={this.props.handleLoginClick} >Войти</a>
                        </div>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default SignupForm;