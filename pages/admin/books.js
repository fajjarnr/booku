import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useReducer } from 'react';
import Layout from '../../components/admin/Layout';
import { Store } from '../../context/Store';
import { getError } from '../../config/error';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import swal from 'sweetalert';
import { formatter } from '../../utils/formatter';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, books: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    case 'CREATE_REQUEST':
      return { ...state, loadingCreate: true };
    case 'CREATE_SUCCESS':
      return { ...state, loadingCreate: false };
    case 'CREATE_FAIL':
      return { ...state, loadingCreate: false };
    case 'DELETE_REQUEST':
      return { ...state, loadingDelete: true };
    case 'DELETE_SUCCESS':
      return { ...state, loadingDelete: false, successDelete: true };
    case 'DELETE_FAIL':
      return { ...state, loadingDelete: false };
    case 'DELETE_RESET':
      return { ...state, loadingDelete: false, successDelete: false };
    default:
      state;
  }
}

function Books() {
  const { state } = useContext(Store);
  const router = useRouter();

  const { userInfo } = state;

  const [
    { loading, error, books, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    books: [],
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/signin');
    }

    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/books`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (userId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    try {
      dispatch({ type: 'DELETE_REQUEST' });

      await axios.delete(`/api/admin/books/${userId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: 'DELETE_SUCCESS' });

      swal({
        title: 'Good job!',
        text: 'Book deleted successfully',
        icon: 'success',
      });
    } catch (err) {
      dispatch({ type: 'DELETE_FAIL' });
      swal({
        title: 'Error!',
        text: `${getError(err)}`,
        icon: 'error',
      });
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 pb-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Books</h1>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Image
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Publisher
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {books.map((book, bookIdx) => (
                    <tr
                      key={book._id}
                      className={bookIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10"
                              src={book.image}
                              alt={book.title}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {`${book.title.slice(0, 30)}...` ?? ''}
                        </div>
                        <div className="text-sm text-gray-500">
                          {`${book.description.slice(0, 40)}...` ?? ''}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {formatter.format(book.price)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {book.publisher}
                      </td>
                      <td className="px-6 py-4 flex gap-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link href={`/admin/books/${book._id}`}>
                          <a className="text-indigo-600 hover:text-indigo-900">
                            Edit
                          </a>
                        </Link>
                        <button
                          onClick={() => deleteHandler(book._id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Books), { ssr: false });
