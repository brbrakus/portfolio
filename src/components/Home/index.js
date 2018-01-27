import { h } from 'preact';
import Welcome from 'components/Welcome';
import Work from 'components/Work';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

const Home = () => (
  <div>
    <Welcome />
    <Work />
    <Contact />
    <Footer />
  </div>
);

export default Home;
