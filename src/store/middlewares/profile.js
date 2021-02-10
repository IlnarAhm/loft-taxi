import { saveProfileSuccess } from "../actions";
import { addCard } from "../api";
import { SAVE_PROFILE } from "../actions";

export const profileMiddleware = (store) => (next) => async (action) => {
    if (action.type === SAVE_PROFILE) {
        const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
        try {
            const { success, error } = await addCard(cardNumber, expiryDate, cardName, cvc, token);
            if (success) {
                store.dispatch(saveProfileSuccess(cardNumber, expiryDate, cardName, cvc, token));
            } else {
                console.log(error)
            }
        } catch(err) {
            console.log(err)
        }
    } else {
        next(action);
    }
};