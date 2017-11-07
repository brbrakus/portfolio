import { h } from 'preact';
import ProgressiveImage from 'components/ProgressiveImage';

import s from './styles.scss';

const ProfilePicture = ({ image }) => (
  <ProgressiveImage
    className={s.image}
    src={image.src}
    placeholder={image.placeholder}
    alt="profile-picture"
  />
);

export default ProfilePicture;
