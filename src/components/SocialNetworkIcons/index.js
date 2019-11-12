import { h } from 'preact';
import cc from 'classcat';

import TwitterIcon from 'assets/icons/Twitter.js';
import GithubIcon from 'assets/icons/Github.js';
import CodepenIcon from 'assets/icons/Codepen.js';

import s from './styles.scss';

const SocialNetworkIcons = ({
  className,
  tooltipClassName,
  iconClassName,
  linkClassName
}) => (
  <div className={cc([s.icons, className])}>
    <a
      className={cc([s.link, linkClassName])}
      href="https://twitter.com/BrunaBrakus"
    >
      <div className={cc([s.tooltip, tooltipClassName])}>Twitter</div>
      <TwitterIcon className={cc([s.icon, iconClassName])} />
    </a>

    <a
      className={cc([s.link, linkClassName])}
      href="https://github.com/brbrakus"
    >
      <div className={cc([s.tooltip, tooltipClassName])}>Github</div>
      <GithubIcon className={cc([s.icon, iconClassName])} />
    </a>

    <a
      className={cc([s.link, linkClassName])}
      href="https://codepen.io/brunabrakus/"
    >
      <div className={cc([s.tooltip, tooltipClassName])}>Codepen</div>
      <CodepenIcon className={cc([s.icon, iconClassName])} />
    </a>
  </div>
);

export default SocialNetworkIcons;
