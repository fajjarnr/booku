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
import Book from '../models/Book';
import Banners from '../models/Banner';
import db from '../config/dbConnect';

export default function Home({ book, banner }) {
  return (
    <Layout>
      <Banner banner={banner} />
      <Categories />
      <ProductList book={book} />
      <CloudLogo />
      <CTA />
    </Layout>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps((store) => () => {
//   store.dispatch(getAllBooks());
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getAllBooks: bindActionCreators(getAllBooks(), dispatch),
//   };
// };

// export default connect(null, mapDispatchToProps)(Home);

export async function getServerSideProps() {
  db.connect();

  const book = await Book.find({}).lean();
  const banner = await Banners.find({}).lean();

  await db.disconnect();

  return {
    props: {
      book: book.map(db.convertDocToObj),
      banner: banner.map(db.convertDocToObj),
    },
  };
}
