import { GET_ALL_BOOKS, ALL_BOOKS_FAIL, CLEAR_ERROR } from '../types';

const initialState = {
  book: null,
};

export const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        book: action.payload,
      };
    case ALL_BOOKS_FAIL:
      return {
        error: action.payload,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
