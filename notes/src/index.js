import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { history } from './routers/AppRouter';
import { firebase } from './firebase/firebase.js';
import { startSetNoteData } from '../src/actions/index';
import { login, logout } from '../src/actions/auth';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('root'));
    hasRendered = true;
  }
};

const spinnerStyle = {
  width: '8rem',
  height: '8rem'
};

ReactDOM.render(
  <div className='d-flex justify-content-center h-100 w-100 justify-content-center align-items-center'>
    <div className='spinner-border' style={spinnerStyle} role='status'>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>,
  document.getElementById('root')
);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetNoteData()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

serviceWorker.unregister();
