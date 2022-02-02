import { GET_ALL_BOOKS, ALL_BOOKS_FAIL, CLEAR_ERROR } from '../types';

const initialState = {
  book: [],
};

export const bookReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        book: action.payload.book,
      };
    case ALL_BOOKS_FAIL:
      return {
        error: payload,
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
