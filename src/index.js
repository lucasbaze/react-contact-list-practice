import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as Firebase from './js/utils/FirebaseAPI.js';
import registerServiceWorker from './registerServiceWorker';

Firebase.initializeFirebase();
Firebase.pullContacts();

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
