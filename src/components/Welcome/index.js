import { h } from 'preact';
import { Link } from 'preact-router/match';

import ProfilePicture from 'components/ProfilePicture';
import SocialNetworkIcons from 'components/SocialNetworkIcons';

import images from 'assets/images';
import s from './styles.scss';

const Welcome = () => (
  <div className={s.welcome}>
    <div className={s.wrapper}>
      <h1 className={s.title}>Bruna Brakus</h1>
      <p className={s.description}>
        Designer seeking to provide people with friendly and pretty apps.
        Building connections between the brand’s visual identity and consumers.
        <br />
        <br />
        <Link href="/cv" className={s.link}>
          See more in my CV
        </Link>
        <br />
      </p>
      <SocialNetworkIcons
        className={s.icons}
        tooltipClassName={s.tooltip}
        iconClassName={s.socialIcon}
        linkClassName={s.socialIconLink}
      />
    </div>
    <ProfilePicture image={images.profile} className={s.profilePicture} />
  </div>
);

export default Welcome;
