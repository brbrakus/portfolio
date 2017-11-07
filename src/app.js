import { h, render } from 'preact';
import About from 'components/About';
import Work from 'components/Work';

import './globals.scss';

render(
  <div>
    <About />
    <Work />
  </div>,
  document.getElementById('app')
);
