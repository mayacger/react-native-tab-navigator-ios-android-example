'use strict';
import React, {Component} from 'react-native';
import {createStore,applyMiddleware,combineReducers} from 'redux';
import {Provider} from 'react-redux/native';
import thunk from 'redux-thunk';

import * as reducers from './reducers/index';
import App from './containers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <App />}
      </Provider>
    );
  }

}
