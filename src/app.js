import { h, app } from 'hyperapp';
import About from 'components/About';
import Work from 'components/Work';

import './globals.scss';

const view = () => (
  <div>
    <About />
    <Work />
  </div>
);

app({ view }, document.getElementById('app'));
