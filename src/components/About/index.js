import { h } from 'preact';
import ProfilePicture from 'components/ProfilePicture';
import images from 'assets/images';
import s from './styles.scss';

const Title = () => (
  <div>
    <h1 className={s.title}>Hi, I{"'"}m Bruna!</h1>
    <h3 className={s.subtitle}>graphic & web designer</h3>
  </div>
);

const Description = () => (
  <div>
    <h2 className={s.heading}>What I do</h2>
    <p className={s.description}>
      Helping to make the web a pretty place. The coincidence is that pretty
      things sell well. :D
      <br />
      <br />Also going graphic design and trying to make your brand stick out.
      <br />
      <br />To find out more{' '}
      <a href="/" className={s.link}>
        see my CV.
      </a>
    </p>
  </div>
);

const About = () => (
  <div className={s.about}>
    <Title />
    <ProfilePicture image={images.profile} />
    <Description />
  </div>
);

export default About;
