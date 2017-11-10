import { h, render } from 'preact';
import Welcome from 'components/Welcome';
import About from 'components/About';
import Footer from 'components/Footer';

import './globals.scss';

render(
  <div>
    <Welcome />
    <About />
    <Footer />
  </div>,
  document.getElementById('app')
);
