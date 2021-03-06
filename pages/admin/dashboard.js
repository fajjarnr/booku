import axios from 'axios';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useContext, useEffect, useReducer } from 'react';
import Layout from '../../components/admin/Layout';
import { getError } from '../../config/error';
import { Store } from '../../context/Store';

function reducer(state, action) {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true, error: '' };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, summary: action.payload, error: '' };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      state;
  }
}

function Dashboard() {
  const { state } = useContext(Store);
  const router = useRouter();

  const { userInfo } = state;

  const [{ loading, error, summary }, dispatch] = useReducer(reducer, {
    loading: true,
    summary: { salesData: [] },
    error: '',
  });

  useEffect(() => {
    if (!userInfo) {
      router.push('/signin');
    }

    const fetchData = async () => {
      try {
        dispatch({ type: 'FETCH_REQUEST' });

        const { data } = await axios.get(`/api/admin/summary`, {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });

        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
      }
    };

    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 pb-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="grid grid-cols-2">
        <div className="bg-yellow-200 px-12 py-12 my-2 mx-2 rounded-lg">
          {summary.booksCount}
        </div>
        <div className="bg-red-200 px-12 py-12 my-2 mx-2 rounded-lg">
          {summary.usersCount}
        </div>
      </div>
      <div className="py-4">
        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
      </div>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(Dashboard), { ssr: false });
