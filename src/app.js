import { h, render } from 'preact';
import Home from 'components/Home';

import './globals.scss';

const App = () => <Home />;

render(<App />, document.getElementById('app'));
