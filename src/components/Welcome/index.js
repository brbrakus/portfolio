import { h } from 'preact';

import ProfilePicture from 'components/ProfilePicture';
import images from 'assets/images';
import s from './styles.scss';

const Welcome = () => (
  <div className={s.wrapper}>
    <h1 className={s.title}>Hi, I{"'"}m Bruna!</h1>
    <h3 className={s.subtitle}>graphic & web designer</h3>
    <ProfilePicture image={images.profile} />
  </div>
);

export default Welcome;