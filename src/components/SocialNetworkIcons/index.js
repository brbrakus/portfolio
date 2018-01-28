import { h } from 'preact';

import TwitterIcon from 'assets/icons/Twitter.js';
import DribbleIcon from 'assets/icons/Dribbble.js';
import GithubIcon from 'assets/icons/Github.js';
import CodepenIcon from 'assets/icons/Codepen.js';

import s from './styles.scss';

const SocialNetworkIcons = ({
  tooltipClassName,
  iconClassName,
  linkClassName
}) => (
  <div className={s.icons}>
    <a
      className={`${s.link} ${linkClassName}`}
      href="https://twitter.com/BrunaBrakus"
    >
      <div className={`${s.tooltip} ${tooltipClassName}`}>Twitter</div>
      <TwitterIcon className={`${s.icon} ${iconClassName}`} />
    </a>

    <a
      className={`${s.link} ${linkClassName}`}
      href="https://dribbble.com/BrunaBrakus"
    >
      <div className={`${s.tooltip} ${tooltipClassName}`}>Dribbble</div>
      <DribbleIcon className={`${s.icon} ${iconClassName}`} />
    </a>

    <a
      className={`${s.link} ${linkClassName}`}
      href="https://github.com/brbrakus"
    >
      <div className={`${s.tooltip} ${tooltipClassName}`}>Github</div>
      <GithubIcon className={`${s.icon} ${iconClassName}`} />
    </a>

    <a
      className={`${s.link} ${linkClassName}`}
      href="https://codepen.io/brunabrakus/"
    >
      <div className={`${s.tooltip} ${tooltipClassName}`}>Codepen</div>
      <CodepenIcon className={`${s.icon} ${iconClassName}`} />
    </a>
  </div>
);

export default SocialNetworkIcons;
