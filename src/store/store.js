import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import { authMiddleware } from "./middlewares/auth";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(authMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : noop => noop
    )
);

export const persistor = persistStore(store);