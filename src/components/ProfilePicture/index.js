import { h } from 'preact';
import cc from 'classcat';
import ProgressiveImage from 'components/ProgressiveImage';

import s from './styles.scss';

const ProfilePicture = ({ image, className }) => (
  <ProgressiveImage
    className={cc([s.image, className])}
    src={image.src}
    placeholder={image.placeholder}
    alt="profile-picture"
  />
);

export default ProfilePicture;
