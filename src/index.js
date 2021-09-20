import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the tool to create the store from Redux
import { createStore, applyMiddleware, compose } from 'redux';
// Import the provider to connect the store with the react app
import { Provider } from 'react-redux'; 
// Import the reducer
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const composedEnhancer = compose(
  applyMiddleware(thunk),
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
