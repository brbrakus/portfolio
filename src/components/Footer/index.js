import { h } from 'preact';

import s from './styles.scss';

const Footer = () => (
  <div className={s.footer}>
    <h4>
      © 2021 Bruna Brakus. View the{' '}
      <a href="https://github.com/brbrakus/portfolio" className={s.link}>
        source code.
      </a>
    </h4>
  </div>
);

export default Footer;
