import { h, render } from 'preact';
import Welcome from 'components/Welcome';
import Work from 'components/Work';
import Contact from 'components/Contact';
import Footer from 'components/Footer';

import './globals.scss';

render(
  <div>
    <Welcome />
    <Work />
    <Contact />
    <Footer />
  </div>,
  document.getElementById('app')
);
