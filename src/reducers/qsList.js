'use strict';

import * as types from '../constants/actionTypes';

export default function qsList (state = {id:1}, action) {
  switch (action.type) {
    case types.SET_ROUTE_NAME:
      console.log(state)
      console.log(action)
      return state;
      break;
    default:
      return state;
  }
}
