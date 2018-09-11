import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux'

import { rootReducer } from '../reducers';


const configureStore = () => {
    const store = compose(
    )(createStore)(rootReducer);

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').rootReducer;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
export default configureStore;