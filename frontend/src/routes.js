import React from 'react';
import { Route, Redirect } from 'react-router';

import App from './contaniers/App';


export const routes = (
    <div>
        <Route path="/" component={App} />
        {/*<Route path='Root' component={Root}>*/}

            {/*<Redirect exact from="/" to="/all/" />*/}
        {/*</Route>*/}
    </div>
);