import { h } from 'hyperapp';
import ProfilePicture from 'components/ProfilePicture';

import s from './styles.scss';

const Title = () => (
  <div>
    <h1>Hi, I'm Bruna!</h1>
    <h3 className={s.subtitle}>
      graphic & web
      <br />designer
    </h3>
  </div>
);

const Description = () => (
  <div>
    <h2 className={s.left}>What I do</h2>
    <p>
      Helping to make the web a pretty place. The coincidence is that pretty
      things sell well. :D
      <br />
      <br />Also going graphic design and trying to make your brand stick out.
      <br />
      <br />To find out more see my CV.
    </p>
  </div>
);

const About = () => (
  <div className={s.about}>
    <Title />
    <ProfilePicture src="#" />
    <Description />
  </div>
);

export default About;
