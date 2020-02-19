import { combineReducers } from 'redux';
import { API } from '../actions/types';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case API:
      {
        return {
          ...state,
        };
      }
    default:
      return state;
  }
};

const rootReducder = combineReducers({ reducer });

export default rootReducder;

