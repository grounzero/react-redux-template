import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter, Route } from 'react-router-dom'
import thunk from 'redux-thunk';

import initialState from '../../../store/initialState';
import App from '../../App';

describe('App', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);

  it('renders without crashing', () => {
    const store = mockStore(initialState);
    ReactDOM.render(
      <Provider store={store}>
        <BrowserRouter>
          <Route path='/' component={App} />
        </BrowserRouter>
      </Provider>, document.createElement('div')
    );
  });
});