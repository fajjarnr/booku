import Layout from '../components/Layout';
import CTA from '../components/CTA';
import Blog from '../components/Blog';
import CloudLogo from '../components/CloudLogo';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <Layout>
      <Banner />
      <Categories />
      <ProductList />
      <CloudLogo />
      {/* <Blog /> */}
      <CTA />
    </Layout>
  );
}
