import { h } from 'preact';
import ProfilePicture from 'components/ProfilePicture';
import SocialNetworkIcons from 'components/SocialNetworkIcons';
import images from 'assets/images';
import s from './styles.scss';

const Welcome = () => (
  <div className={s.welcome}>
    <div className={s.wrapper}>
      <h1 className={s.title}>Bruna Brakus</h1>
      <p className={s.description}>
        I’m a product designer seeking to help businesses satisfy and inspire
        their customers.
        <br />
        <br />
        I have a strong passion for building user-centered web and mobile apps,
        but also experience in creating visual identities and graphic design.
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
