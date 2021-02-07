import { SAVE_PROFILE } from '../actions';

const initialState = {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: ''
};

export default function profile(state = initialState, action) {
    switch (action.type) {
        case SAVE_PROFILE: {
            const { cardNumber, expiryDate, cardName, cvc } = action.payload;
            return {
                cardNumber: cardNumber,
                expiryDate: expiryDate,
                cardName: cardName,
                cvc: cvc
            }
        }
        default: {
            return state;
        }
    }
}