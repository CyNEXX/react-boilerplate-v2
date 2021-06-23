import 'react-dates/initialize';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import LoadingPage from './components/LoadingPage';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'normalize.css/normalize.css'
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { stable } from 'core-js';
import { regeneratorRuntime } from 'regenerator-runtime';


import { firebase } from './firebase/firebase';

const store = configureStore();
let hasRendered = false;
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>

);

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid, user.displayName, user.photoURL));
        renderApp();
        if (history.location.pathname == '/') {
            history.push('/dashboard');
        }
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    };
});