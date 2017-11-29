import { h } from 'preact';
import ProgressiveImage from 'components/ProgressiveImage';
import examples from './examples';

import s from './styles.scss';

const Example = ({ example: { link, image } }) => (
  <div>
    <a href={link}>
      <ProgressiveImage
        className={s.exampleImage}
        src={image.src}
        placeholder={image.placeholder}
        alt={image.alt}
      />
    </a>
  </div>
);

const Work = () => (
  <div className={s.work}>
    <h2 className={s.title}>Work I am fond of</h2>
    {examples.map(example => <Example example={example} />)}
  </div>
);

export default Work;
