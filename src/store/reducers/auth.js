import { LOG_IN, LOG_OUT } from '../actions';

const initialState = {
    isLoggedIn: false,
    token: ''
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOG_IN: {
            const { token } = action.payload;
            return {
                isLoggedIn: true,
                token: token
            }
        }
        case LOG_OUT: {
            return {
                isLoggedIn: false,
                token: ''
            }
        }
        default: {
            return state;
        }
    }
}