/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';

import App from './containers/App';
import configureStore from './store/configureStore';

import './styles/core.css';
require('./favicon.ico');

const store = configureStore();

render(
    <Provider store={store}>
        <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/StatsWebApi' : '/' }>
            <div>
                <Route path='/' component={App} />
                <ReduxToastr />
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);