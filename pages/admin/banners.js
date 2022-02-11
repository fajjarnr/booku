import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useEffect, useReducer } from 'react';
import Layout from '../../components/admin/Layout';
import { getError } from '../../config/error';
import { Store } from '../../context/Store';
import swal from 'sweetalert';
import Link from 'next/link';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, banners: action.payload, error: '' };
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

function Banners() {
  const { state } = useContext(Store);
  const router = useRouter();

  const { userInfo } = state;

  const [
    { loading, error, banners, loadingCreate, successDelete, loadingDelete },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    banners: [],
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/signin');
    }

    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });
        const { data } = await axios.get(`/api/admin/banners`, {
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

      await axios.delete(`/api/admin/banners/${userId}`, {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });

      dispatch({ type: 'DELETE_SUCCESS' });

      swal({
        title: 'Good job!',
        text: 'banner deleted successfully',
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
      <div className="max-w-7xl flex justify-between mx-auto px-4 pb-4 sm:px-6 md:px-8">
        <Link href="/admin/banners/create">
          <a className="bg-blue-500 px-3 py-3 text-white rounded">
            Create Banner
          </a>
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">Banners</h1>
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
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {banners.map((banner, bannerIdx) => (
                    <tr key={banner._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img className="h-20 w-96" src={banner.image} />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => deleteHandler(banner._id)}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Delete
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

export default dynamic(() => Promise.resolve(Banners), { ssr: false });
