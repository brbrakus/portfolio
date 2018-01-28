import { h } from 'preact';

import TwitterIcon from 'assets/icons/Twitter.js';
import DribbleIcon from 'assets/icons/Dribbble.js';
import GithubIcon from 'assets/icons/Github.js';
import CodepenIcon from 'assets/icons/Codepen.js';

import s from './styles.scss';

const SocialNetworkIcons = ({ className }) => (
  <div className={`${s.icons} ${className}`}>
    <a className={s.link} href="https://twitter.com/BrunaBrakus">
      <div className={s.tooltip}>Twitter</div>
      <TwitterIcon className={s.icon} />
    </a>

    <a className={s.link} href="https://dribbble.com/BrunaBrakus">
      <div className={s.tooltip}>Dribbble</div>
      <DribbleIcon className={s.icon} />
    </a>

    <a className={s.link} href="https://github.com/brbrakus">
      <div className={s.tooltip}>Github</div>
      <GithubIcon className={s.icon} />
    </a>

    <a className={s.link} href="https://codepen.io/brunabrakus/">
      <div className={s.tooltip}>Codepen</div>
      <CodepenIcon className={s.icon} />
    </a>
  </div>
);

export default SocialNetworkIcons;
