import { logIn } from "../actions";
import { serverLogin } from "../api";
import { AUTHENTICATE } from "../actions";

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;
        try {
            const { error, success, token } = await serverLogin(email, password);

            if (success) {
                store.dispatch(logIn(token));
            } else {
                console.log(error);
            }
        } catch(err) {
            console.log(err)
        }
    } else {
        next(action);
    }
};