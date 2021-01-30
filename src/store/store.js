import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { authMiddleware } from "./middlewares/auth";

export const store = createStore(rootReducer, applyMiddleware(authMiddleware));