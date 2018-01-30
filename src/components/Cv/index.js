import { h } from 'preact';
import { Link } from 'preact-router/match';

import CloseButton from 'assets/icons/CloseButton.js';

import s from './styles.scss';

const Cv = () => (
  <div className={s.cv}>
    <Link href="/" className={s.closeButton}>
      <CloseButton />
    </Link>
    <div className={s.idWrapper}>
      <h2 className={s.idTitile}>Bruna Brakus</h2>
      <p className={s.idDescription}>
        Split, Croatia
        <br />brunabrakus@protonmail.com
      </p>
    </div>

    <div className={s.about}>
      <div className={s.card}>
        <h2 className={s.title}>Work experience</h2>
        <p className={s.description}>
          <strong>Croativno: Graphic designer</strong>
          <br />HAUT d.o.o., Split
          <br />
          <br />
          <strong>Refužo: Brand designer</strong>
          <br />Eco-stil d.o.o., Split
          <br />
          <br />
          <strong>Mid: Graphic Assistent</strong>
          <br />Mid d.o.o., Split
        </p>
      </div>
      <div className={s.card}>
        <h2 className={s.title}>Education</h2>
        <p className={s.description}>
          <strong>Media tehnician</strong>
          <br />School for Design, Graphics and
          <br />Sustainable Construction
          <br />Split, Croatia
          <br />
          <br />
          <strong>Multimedia, Design and Applications</strong>
          <br />University North
          <br />Varaždin, Croatia
        </p>
      </div>
      <div className={s.card}>
        <h2 className={s.title}>Working in</h2>
        <p className={s.description}>
          Adobe Creative Cloud:
          <br />Illustrator, Photoshop,
          <br />InDesign, Premiere
          <br />
          <br />Sketch, Figma
          <br />
          <br />Web tehnologies:
          <br />HTML 5, CSS 3 (Scss)
        </p>
      </div>
    </div>
  </div>
);

export default Cv;
