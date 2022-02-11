import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useReducer } from 'react';
import Layout from '../../components/admin/Layout';
import { Store } from '../../context/Store';
import { getError } from '../../config/error';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import swal from 'sweetalert';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, users: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };

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

function Users() {
  const { state } = useContext(Store);
  const router = useRouter();

  const { userInfo } = state;

  const [{ loading, error, users, successDelete, loadingDelete }, dispatch] =
    useReducer(reducer, {
      loading: true,
      users: [],
      error: '',
    });

  useEffect(() => {
    if (!userInfo) {
      router.push('/signin');
    }

    async function fetchData() {
      try {
        dispatch({ type: 'FETCH_REQUEST' });

        const { data } = await axios.get(`/api/admin/users`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });

        dispatch({ type: 'FETCH_SUCCESS', payload: data.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    }

    if (successDelete) {
      dispatch({ type: 'DELETE_RESET' });
    } else {
      fetchData();
    }
  }, []);

  const deleteHandler = async (userId) => {
    if (!window.confirm('Are you sure?')) {
      return;
    }

    try {
      dispatch({ type: 'DELETE_REQUEST' });

      await axios.delete(`/api/admin/users/${userId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: 'DELETE_SUCCESS' });

      swal({
        title: 'Good job!',
        text: 'User deleted successfully',
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
        <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              {loading ? (
                <p>loading...</p>
              ) : error ? (
                <p>error</p>
              ) : (
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Admin
                      </th>
                      <th
                        scope="col"
                        className="text-left px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users?.map((person, personIdx) => (
                      <tr
                        key={person._id}
                        className={
                          personIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                        }
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {person.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {person.isAdmin ? 'YES' : 'NO'}
                        </td>
                        <td className="px-6 py-4 flex gap-4 whitespace-nowrap text-right text-sm font-medium">
                          <Link href={`/admin/user/${person._id}`}>
                            <a className="text-indigo-600 hover:text-indigo-900">
                              Edit
                            </a>
                          </Link>
                          <button
                            onClick={() => deleteHandler(person._id)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Users), { ssr: false });
