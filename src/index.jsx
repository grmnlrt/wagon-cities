// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


import citiesReducer from './reducers/cities_reducer';
import selectedCityReducer from './reducers/selected_city_reducer';

// State and reducers
const reducers = combineReducers({
  cities: citiesReducer,
  selectCity: selectedCityReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
