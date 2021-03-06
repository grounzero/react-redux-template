import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import Immutable from 'seamless-immutable';

import rootReducer from '../reducers';
import initialState from '../store/initialState';

const logger = createLogger();

function configureStoreProd(history) {
    const middlewares = [
        thunk
    ];

    return createStore(rootReducer, Immutable(initialState), compose(
        applyMiddleware(...middlewares)
    ));
}

function configureStoreDev(history) {
    const middlewares = [
        reduxImmutableStateInvariant(),
        thunk,
        logger
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, Immutable(initialState), composeEnhancers(
        applyMiddleware(...middlewares)
    ));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextReducer = require('../reducers').default; // eslint-disable-line global-require
            store.replaceReducer(nextReducer);
        });
    }

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;