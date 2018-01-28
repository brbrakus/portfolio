import { h } from 'preact';
import { Link } from 'preact-router/match';

import ProfilePicture from 'components/ProfilePicture';
import SocialNetworkIcons from 'components/SocialNetworkIcons';

import images from 'assets/images';
import s from './styles.scss';

const Welcome = () => (
  <div className={s.welcome}>
    <div className={s.wrapper}>
      <h1 className={s.title}>Hi, I{"'"}m Bruna!</h1>

      <h3 className={s.subtitle}>graphic & web designer</h3>
    </div>

    <ProfilePicture image={images.profile} className={s.profilePicture} />

    <p className={s.description}>
      Helping to make the web a pretty place.
      <br />Also doing graphic design and trying to make your brand stick out.
      <br />
      <br />To find out more{' '}
      <Link href="/cv" className={s.link}>
        see my CV.
      </Link>
      <br />
      <br />
      <a href="#contact" className={s.link}>
        Contact me
      </a>
    </p>
    <SocialNetworkIcons
      tooltipClassName={s.tooltip}
      iconClassName={s.socialIcon}
      linkClassName={s.socialIconLink}
    />
  </div>
);

export default Welcome;
