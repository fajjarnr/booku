import Banner from '../components/Banner';
import Categories from '../components/Categories';
import CloudLogo from '../components/CloudLogo';
import CTA from '../components/CTA';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import { getAllBooks } from '../store/actions/book';
import { bindActionCreators } from 'redux';
import { wrapper } from '../store';
import { connect } from 'react-redux';

function Home() {
  return (
    <Layout>
      <Banner />
      <Categories />
      <ProductList />
      <CloudLogo />
      <CTA />
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
  store.dispatch(getAllBooks());
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllBooks: bindActionCreators(getAllBooks(), dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Home);
