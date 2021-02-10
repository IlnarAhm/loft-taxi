export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const SAVE_PROFILE = 'SAVE_PROFILE';
export const SAVE_PROFILE_SUCCESS = 'SAVE_PROFILE_SUCCESS';

export const logIn = (token) => ({
    type: LOG_IN,
    payload: { token }
});
export const logOut = () => ({type: LOG_OUT});
export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: { email, password }
});
export const saveProfile = (cardNumber, expiryDate, cardName, cvc, token) => ({
    type: SAVE_PROFILE,
    payload: { cardNumber, expiryDate, cardName, cvc, token }
});
export const saveProfileSuccess = (cardNumber, expiryDate, cardName, cvc, token) => ({
    type: SAVE_PROFILE_SUCCESS,
    payload: { cardNumber, expiryDate, cardName, cvc, token }
});

