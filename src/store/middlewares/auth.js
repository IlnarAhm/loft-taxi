import { logIn } from "../actions";
import { serverLogin } from "../api";
import { AUTHENTICATE } from "../actions";

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload;
        try {
            const success = await serverLogin(email, password);
            if (success) {
                store.dispatch(logIn());
            }
        } catch(err) {
            console.log(err)
        }
    } else {
        next(action);
    }
};