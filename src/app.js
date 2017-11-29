import { h, render } from 'preact';
import Welcome from 'components/Welcome';
import Work from 'components/Work';
import Footer from 'components/Footer';

import './globals.scss';

render(
  <div>
    <Welcome />
    <Work />
    <Footer />
  </div>,
  document.getElementById('app')
);
