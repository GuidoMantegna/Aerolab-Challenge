import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// REDUX TOOLS
import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
// PROVIDER
import { Provider } from 'react-redux'; 
// REDUCERS
import rootReducer from './reducers';
// MIDDLEWARES
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

// const composedEnhancer = compose(
//   applyMiddleware(thunk, logger),
//   devTools
// )

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
)

ReactDOM.render(
  <React.StrictMode>
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
