import { combineReducers } from 'redux';
import { bookReducers } from './book';

// COMBINED REDUCERS
const reducers = {
  book: bookReducers,
};

export default combineReducers(reducers);
