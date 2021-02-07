import { saveProfile } from "../actions";
import { addCard } from "../api";
import { SAVE_PROFILE } from "../actions";

export const profileMiddleware = (store) => (next) => async (action) => {
    if (action.type === SAVE_PROFILE) {
        const { cardNumber, expiryDate, cardName, cvc, token } = action.payload;
        try {
            const data = await addCard(cardNumber, expiryDate, cardName, cvc, token);
            if (data.success) {
                console.log(data);
                store.dispatch(saveProfile(cardNumber, expiryDate, cardName, cvc, token));
            } else {
                console.log(data.error)
            }
        } catch(err) {
            console.log(err)
        }
    } else {
        next(action);
    }
};