import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Form from './features/form/Form';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Form />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
