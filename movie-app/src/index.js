import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import {moviesReducer} from "./redux/reducers/reducer";

const store = createStore(moviesReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

