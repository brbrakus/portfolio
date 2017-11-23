import { h } from 'preact';

import s from './styles.scss';

const Examples = () => (
  <div>
    <div className={s.example}>
      <a className={s.link} href="/">
        <h3>ADOmiš</h3>
        <p>Static web site for Astronomical Society of Omiš.</p>
      </a>
    </div>
    <div className={s.example}>
      <a className={s.link} href="/">
        <h3>Refužo</h3>
        <p>Brend design for helthy food grocery stores.</p>
      </a>
    </div>
  </div>
);

const Work = () => (
  <div className={s.work}>
    <h2 className={s.title}>Work I am fond of</h2>
    <Examples />
  </div>
);

export default Work;
