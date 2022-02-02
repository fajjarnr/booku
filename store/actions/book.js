import axios from 'axios';
import { GET_ALL_BOOKS, ALL_BOOKS_FAIL } from '../types';
import absoluteUrl from 'next-absolute-url';

export const getAllBooks = (req, res) => async (dispatch) => {
  try {
    const { origin } = absoluteUrl(req);

    let link = `${origin}/api/books`;

    const { data } = await axios.get(link);

    dispatch({
      type: GET_ALL_BOOKS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_BOOKS_FAIL,
      dispatch: error?.response?.data?.message,
    });
  }
};
