import { h, render } from 'preact';
import Router from 'preact-router';
import Home from 'components/Home';
import Cv from 'components/Cv';

import './globals.scss';

const App = () => (
  <Router>
    <Cv path="/cv" />
    <Home default />
  </Router>
);

render(<App />, document.getElementById('app'));
