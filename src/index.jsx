import React from 'react';
import ReactDOM from 'react-dom';
import { init } from '@rematch/core';
import { Provider } from 'react-redux';
import App from './components/App';
import models from './models';
import 'bulma/css/bulma.css';
import * as serviceWorker from './serviceWorker';

const store = init({
  models,
});

const { getState, dispatch } = store;
const providers = { store, getState, dispatch };

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
