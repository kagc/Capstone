import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider, Modal } from './context/Modal';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ModalProvider>
    <Provider store={store}>
        <App />
        <Modal />
      </Provider>
    </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
