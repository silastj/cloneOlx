import React from 'react';
import ReactDOM from 'react-dom';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//REDUX

import './index.css';
import App from './App';

//REDUCERS
import Reducers from './Reducers';
const store = createStore(Reducers);
//REDUCERS



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
