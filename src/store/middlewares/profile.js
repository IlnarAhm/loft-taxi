import { saveProfile } from "../actions";
import { addCard } from "../api";
import { SAVE_PROFILE } from "../actions";

export const profileMiddleware = (store) => (next) => (action) => {
    if (action.type === SAVE_PROFILE) {
        const { cardNumber, expiryDate, cardName, cvc } = action.payload;
        store.dispatch(saveProfile(cardNumber, expiryDate, cardName, cvc));
    } else {
        next(action);
    }
};