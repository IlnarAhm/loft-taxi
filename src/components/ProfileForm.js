import React from 'react';
import Grid from "@material-ui/core/Grid";
import cardLogo from '../loft-card-logo.svg';
import cardImg1 from '../loft-card-img1.svg';
import cardImg2 from '../loft-card-img2.svg';
import TextField from "@material-ui/core/TextField/TextField";


class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cardNumber: '',
            date: '',
            inputsFilled: false,
            subtitle: 'Введите платежные данные',
            btnText: 'Сохранить',
        };
    }

    cardNumberChange = (event) => {
        this.setState({ cardNumber: event.target.value });
    };

    dateChange = (event) => {
        this.setState({ date: event.target.value });
    };

    inputFill = () => {
        this.setState({
            inputsFilled: true,
            subtitle: 'Платёжные данные обновлены. Теперь вы можете заказывать такси.',
            btnText: 'Перейти на карту',
        });
    };

    render() {
        return (
            <Grid item xs={12} sm={12} md={12} className="profileForm" >
                <div className="paper profilePaper">
                    <div className="mapInput">
                        <div className="formTitle" >
                            Профиль
                        </div>
                        <div className="formSubTitle">
                            { this.state.subtitle }
                        </div>
                        <div className={this.state.inputsFilled ? 'd-none' : ''}>
                            <Grid container spacing={6}>
                                <Grid item xs={12} sm={12} md={6} className="">
                                    <form className="form" noValidate >
                                        <TextField
                                            variant="standard"
                                            margin="normal"
                                            fullWidth
                                            id="name"
                                            label="Имя владельца"
                                            name="name"
                                            autoComplete=""
                                        />
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            name="cardNumber"
                                            label="Номер карты"
                                            type="text"
                                            id="cardNumber"
                                            value={this.state.cardNumberChange}
                                            onChange={this.cardNumberChange}
                                            autoComplete="name"
                                        />
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    variant="standard"
                                                    margin="normal"
                                                    fullWidth
                                                    name="date"
                                                    label="MM/YY"
                                                    type="text"
                                                    id="date"
                                                    value={this.state.date}
                                                    onChange={this.dateChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <TextField
                                                    variant="standard"
                                                    margin="normal"
                                                    fullWidth
                                                    name="cvc"
                                                    label="CVC"
                                                    type="number"
                                                    id="cvc"
                                                />
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} className="">
                                    <div className="profileCard">
                                        <div className="profileCard_head">
                                            <img src={cardLogo} alt=""/>
                                            <div className="mmyy">{ this.state.date}</div>
                                        </div>
                                        <div className="profileCard_number">
                                            <div className="cardNumber">{ this.state.cardNumber }</div>
                                        </div>
                                        <div className="profileCard_bot">
                                            <img src={cardImg1} alt=""/>
                                            <img src={cardImg2} alt=""/>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        <button type="submit" className="submit" onClick={this.state.inputsFilled === false ? this.inputFill : this.props.openMapForm}>
                            { this.state.btnText }
                        </button>
                    </div>
                </div>
            </Grid>
        );
    }
}

export default ProfileForm;