import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-24 md:pt-4">{children}</main>
      <Footer />
    </>
  );
}
