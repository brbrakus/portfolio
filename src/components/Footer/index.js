import { h } from 'preact';
import SocialNetworkIcons from 'components/SocialNetworkIcons';

import s from './styles.scss';

const Footer = () => (
  <div className={s.footer}>
    <SocialNetworkIcons />
    <h4>
      © Bruna Brakus 2017. View the{' '}
      <a href="https://github.com/brbrakus/portfolio" className={s.link}>
        source code.
      </a>
    </h4>
  </div>
);

export default Footer;
