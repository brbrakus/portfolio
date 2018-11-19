import { h, render } from 'preact';
import Router from 'preact-router';
import Home from 'components/Home';
import Cv from 'components/Cv';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import 'intersection-observer';

import './globals.scss';

OfflinePluginRuntime.install();

const App = () => (
  <Router>
    <Cv path="/cv" />
    <Home default />
  </Router>
);

render(<App />, document.getElementById('app'));
