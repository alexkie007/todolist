import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tasks from './tasks';


export const rootReducer = combineReducers({
    routing: routerReducer,
    tasks
});