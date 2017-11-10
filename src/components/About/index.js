import { h } from 'preact';

import s from './styles.scss';

const Description = () => (
  <div className={s.wrapper}>
    <h2 className={s.title}>What I do</h2>
    <p className={s.description}>
      Helping to make the web a pretty place.
      <br />
      <br />Also going graphic design and trying to make your brand stick out.
      <br />
      <br />To find out more <a href="/">see my CV.</a>
    </p>
  </div>
);

export default Description;
