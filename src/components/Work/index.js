import { h } from 'preact';
import ProgressiveImage from 'components/ProgressiveImage';
import examples from './examples';

import s from './styles.scss';

const Example = ({ example: { name, description } }) => (
  <div className={s.example}>
    <a className={s.link} href="/">
      <h3>{name}</h3>
      <p>{description}</p>
    </a>
  </div>
);

const Work = () => (
  <div className={s.work}>
    <h2 className={s.title}>Work I am fond of</h2>
    {examples.map(example => <Example example={example} />)}
    <ProgressiveImage />
  </div>
);

export default Work;
