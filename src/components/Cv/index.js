import { h } from 'preact';
import { Link } from 'preact-router/match';
import CloseButton from 'assets/icons/CloseButton.js';
import skills from './skills';

import s from './styles.scss';

const Card = ({ title, description }) => (
  <div className={s.card}>
    <h2 className={s.cardTitle}>{title}</h2>
    <p
      className={s.cardDescription}
      dangerouslySetInnerHTML={{ __html: description }}
      // eslint-disable-line react/no-danger
    />
  </div>
);

const Cv = () => (
  <div className={s.cv}>
    <Link href="/" className={s.closeButton}>
      <CloseButton />
    </Link>

    <div className={s.wrapper}>
      <h2 className={s.title}>Bruna Brakus</h2>
      <p className={s.description}>
        Split, Croatia
        <br />brunabrakus@protonmail.com
      </p>
    </div>
    <div className={s.cards}>
      {skills.map(({ title, description }) => (
        <Card title={title} description={description} />
      ))}
    </div>
  </div>
);

export default Cv;
