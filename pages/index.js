import Banner from '../components/Banner';
import Categories from '../components/Categories';
import CloudLogo from '../components/CloudLogo';
import CTA from '../components/CTA';
import Layout from '../components/Layout';
import ProductList from '../components/ProductList';
import db from '../config/db';
import Banners from '../models/Banner';
import Book from '../models/Book';

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
