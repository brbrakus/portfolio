import { h } from 'preact';
import TwitterIcon from 'assets/icons/Twitter.js';
import DribbleIcon from 'assets/icons/Dribble.js';
import GithubIcon from 'assets/icons/Github.js';
import CodepenIcon from 'assets/icons/Codepen.js';

import s from './styles.scss';

const Icons = () => (
  <div className={s.icons}>
    <a href="/">
      <TwitterIcon className={s.icon} />
    </a>
    <a href="/">
      <DribbleIcon className={s.icon} />
    </a>
    <a href="/">
      <GithubIcon className={s.icon} />
    </a>
    <a href="/">
      <CodepenIcon className={s.icon} />
    </a>
  </div>
);

const Footer = () => (
  <div className={s.footer}>
    <Icons />
    <h4>
      © Bruna Brakus 2017. View the{' '}
      <a href="https://github.com/brbrakus/portfolio">source code.</a>
    </h4>
  </div>
);

export default Footer;
