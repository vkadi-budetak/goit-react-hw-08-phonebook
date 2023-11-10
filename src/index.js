import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { persistor, store } from 'redax/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/goit-react-hw-08-phonebook'>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
