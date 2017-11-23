import { h, render } from 'preact';
import Welcome from 'components/Welcome';
import About from 'components/About';
import Work from 'components/Work';
import Footer from 'components/Footer';

import './globals.scss';

render(
  <div>
    <Welcome />
    <About />
    <Work />
    <Footer />
  </div>,
  document.getElementById('app')
);
