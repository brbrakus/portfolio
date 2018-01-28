import { h } from 'preact';
import ProgressiveImage from 'components/ProgressiveImage';
import examples from './examples';

import s from './styles.scss';

const Example = ({ example: { category, link, image, name, description } }) => (
  <div className={s.work}>
    <div className={s.line} />
    <h3 className={s.title}>{name}</h3>
    <p
      className={s.description}
      // means to provide links in description data
      dangerouslySetInnerHTML={{ __html: description }} // eslint-disable-line react/no-danger
    />
    <div className={s.wrapper}>
      <a className={s.link} href={link}>
        <ProgressiveImage className={s.exampleImage} {...image} />
      </a>
      <h4 className={s.category}>{category}</h4>
    </div>
    <a href={link} className={s.link}>
      See it here
    </a>
  </div>
);

const Work = () => (
  <div>{examples.map(example => <Example example={example} />)}</div>
);

export default Work;
