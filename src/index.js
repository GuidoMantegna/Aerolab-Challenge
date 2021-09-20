import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX TOOLS
import { createStore, applyMiddleware, compose } from 'redux';
// PROVIDER
import { Provider } from 'react-redux'; 
// REDUCERS
import rootReducer from './reducers';
// MIDDLEWARES
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const composedEnhancer = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// Create the store
const store = createStore(
  rootReducer, 
  composedEnhancer
  )

ReactDOM.render(
  <React.StrictMode>
    {/* The Provider is a component that is going to surround the <App />, and it will receive the the data from "store" */}
    <Provider store={store}> 
      <App /> 
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
