import { h, render } from 'preact';

import Welcome from 'components/Welcome';
import About from 'components/About';
import './globals.scss';

render(
  <div>
    <Welcome />
    <About />
  </div>,
  document.getElementById('app')
);
