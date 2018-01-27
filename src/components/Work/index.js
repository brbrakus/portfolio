import { h } from 'preact';
import ProgressiveImage from 'components/ProgressiveImage';
import examples from './examples';

import s from './styles.scss';

const Example = ({ example: { title, link, image, name, description } }) => (
  <div className={s.work}>
    <div className={s.line} />
    <h3 className={s.title}>{name}</h3>
    <p className={s.description}>{description}</p>
    <div className={s.wrapper}>
      <a className={s.link} href={link}>
        <ProgressiveImage
          className={s.exampleImage}
          src={image.src}
          placeholder={image.placeholder}
          alt={image.alt}
        />
      </a>
      <h4 className={s.verticalTitle}>{title}</h4>
    </div>
    <a href={link} className={s.link}>
      See it here
    </a>
  </div>
);

const Work = () => (
  <div className={s.work}>
    {examples.map(example => <Example example={example} />)}
  </div>
);

export default Work;
