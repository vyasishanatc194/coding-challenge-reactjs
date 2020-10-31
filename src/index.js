import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { ToastProvider } from 'react-toast-notifications';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import likeReducer from './store/reducers/like';

const rootReducer = combineReducers({
  like: likeReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const app = (
  <Provider store ={store}>
    <ToastProvider>
      <App />
    </ToastProvider>
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
