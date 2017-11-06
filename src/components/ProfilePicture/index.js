import { h } from 'hyperapp';

import s from './styles.scss';

const ProfilePicture = ({ src }) => (
  <img className={s.image} src={src} alt="profile-picture" />
);

export default ProfilePicture;
