export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SAVE_PROFILE = 'SAVE_PROFILE';

export const logIn = () => ({type: LOG_IN});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});
export const saveProfile = (cardNumber, expiryDate, cardName, cvc) => ({
    type: SAVE_PROFILE,
    payload: { cardNumber, expiryDate, cardName, cvc }
});

