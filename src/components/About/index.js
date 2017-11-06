import { h } from 'hyperapp';
import ProfilePicture from 'components/ProfilePicture';

import s from './styles.scss';

const About = () => (
  <div className={s.about}>
    <h1 className={s.title}>Hi, I'm Bruna!</h1>
    <h3 className={s.right}>graphic & web designer</h3>
    <ProfilePicture src="#" />
    <h2 className={s.left}>What I do</h2>
    <p className={s.left}>
      Helping to make the web a pretty place. The coincidence is that pretty
      things sell well. :D
      <br />
      <br />Also going graphic design and trying to make your brand stick out.
      <br />
      <br />To find out more see my CV.
    </p>
  </div>
);

export default About;
