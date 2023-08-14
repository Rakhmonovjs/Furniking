import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider import qilish
import store from './redux-store'; // Redux store ni import qilish
import App from './App'; // Ilova boshqacha komponenti

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
