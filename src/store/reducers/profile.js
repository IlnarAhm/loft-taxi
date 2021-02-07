import { SAVE_PROFILE } from '../actions';

const initialState = {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: '',
    token: ''
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case SAVE_PROFILE: {
            const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
            return {
                cardNumber,
                expiryDate,
                cardName,
                cvc,
                token
            }
        }
        default: {
            return state;
        }
    }
}