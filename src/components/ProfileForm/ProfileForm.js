import React, { PureComponent } from 'react';
import Grid from "@material-ui/core/Grid";
import cardLogo from '../../assets/images/loft-card-logo.svg';
import cardImg1 from '../../assets/images/loft-card-img1.svg';
import cardImg2 from '../../assets/images/loft-card-img2.svg';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { saveProfile } from "../../store/actions";

const AUTH_TOKEN = 'TEST_TOKEN';

class ProfileForm extends PureComponent {

    state = {
        cardNumber: this.props.cardNumber,
        date: this.props.expiryDate,
        cardName: this.props.cardName,
        cvc: this.props.cvc,
    };

    static getDerivedStateFromProps(props, state) {
        const { cardNumber, date, cardName, cvc } = state;

        if (props.cardNumber !== cardNumber && props.date !== date && props.cardName !== cardName && props.cvc !== cvc) {
            return {
                cardNumber,
                date,
                cardName,
                cvc,
            };
        }
        return null;
    }

    static propTypes = {
        checkFormComplete: PropTypes.func.isRequired,
        saveProfile: PropTypes.func.isRequired,
    };

    cardNumberChange = (event) => {
        this.setState({ cardNumber: event.target.value });
    };

    dateChange = (event) => {
        this.setState({ date: event.target.value });
    };

    saveProfile = (event) => {
        event.preventDefault();

        const { cardNumber, expiryDate, cardName, cvc } = event.target;

        this.props.checkFormComplete(true);
        this.props.saveProfile(cardNumber.value, expiryDate.value, cardName.value, cvc.value, AUTH_TOKEN);
    };

    render() {
        return (
            <Grid item xs={12} className="profileForm" data-testid="ProfileForm">
                <div className="paper profilePaper">
                    <form className="mapInput" onSubmit={ this.saveProfile } >
                        <div className="formTitle" >
                            Профиль
                        </div>
                        <div className="formSubTitle">
                            Введите платежные данные
                        </div>
                        <div>
                            <Grid container spacing={6}>
                                <Grid item xs={12} md={6} className="">
                                    <div className="form" >
                                        <TextField
                                            variant="standard"
                                            margin="normal"
                                            fullWidth
                                            id="name"
                                            label="Имя владельца"
                                            name="cardName"
                                            defaultValue={ this.state.cardName }
                                        />
                                        <TextField
                                            variant="standard"
                                            fullWidth
                                            name="cardNumber"
                                            label="Номер карты"
                                            type="text"
                                            id="cardNumber"
                                            defaultValue={ this.state.cardNumber }
                                            onChange={this.cardNumberChange}
                                        />
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    variant="standard"
                                                    margin="normal"
                                                    fullWidth
                                                    name="expiryDate"
                                                    label="MM/YY"
                                                    type="text"
                                                    id="date"
                                                    defaultValue={ this.state.date }
                                                    onChange={this.dateChange}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <TextField
                                                    variant="standard"
                                                    margin="normal"
                                                    fullWidth
                                                    name="cvc"
                                                    label="CVC"
                                                    type="number"
                                                    id="cvc"
                                                    defaultValue={ this.state.cvc }
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6} className="">
                                    <div className="profileCard">
                                        <div className="profileCard_head">
                                            <img src={cardLogo} alt=""/>
                                            <div className="mmyy">{ this.state.date }</div>
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
                        <button type="submit" className="submit">
                            Сохранить
                        </button>
                    </form>
                </div>
            </Grid>
        );
    }
}

export default connect (
    (state) => state.profile,
    { saveProfile }
)(ProfileForm);