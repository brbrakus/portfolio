import { h } from 'preact';
import { Link } from 'preact-router/match';

import ProfilePicture from 'components/ProfilePicture';
import images from 'assets/images';
import s from './styles.scss';

const Welcome = () => (
  <div className={s.wrapper}>
    <h1 className={s.title}>Hi, I{"'"}m Bruna!</h1>

    <h3 className={s.subtitle}>graphic & web designer</h3>

    <ProfilePicture image={images.profile} />

    <p className={s.description}>
      I{"'"}m helping to make the web a pretty place.
      <br />Also going graphic design and trying to make your brand stick out.
      <br />To find out more{' '}
      <Link href="/cv" className={s.link}>
        see my CV.
      </Link>
    </p>
  </div>
);

export default Welcome;
