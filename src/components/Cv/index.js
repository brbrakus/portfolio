import { h } from 'preact';

import s from './styles.scss';

const Cv = () => (
  <div className={s.cv}>
    <div className={s.idWrapper}>
      <h3 className={s.idTitile}>Bruna Brakus</h3>
      <p className={s.idDescription}>
        Split, Croatia
        <br />brunabrakus@protonmail.com
      </p>
    </div>
    <div className={s.about}>
      <div>
        <h3 className={s.title}>Work experience</h3>
        <p className={s.description}>
          Croativno: Graphic designer
          <br />HAUT d.o.o., Split
          <br />
          <br />Refužo: Brand designer
          <br />Eco-stil d.o.o., Split
          <br />
          <br />Mid: Graphic Assistent
          <br />Mid d.o.o., Split
        </p>
      </div>
      <div>
        <h3 className={s.title}>Education</h3>
        <p className={s.description}>
          Media tehnician
          <br />School for Design, Graphics and
          <br />Sustainable Construction
          <br />Split, Croatia
          <br />
          <br />Multimedia, Design and Applications
          <br />University North
          <br />Varaždin, Croatia
        </p>
      </div>
      <div>
        <h3 className={s.title}>Skills</h3>
        <p className={s.description}>
          Adobe Creative Cloud:
          <br />Illustrator, Photoshop,
          <br />InDesign, Premiere
          <br />
          <br />Web tehnologies:
          <br />HTML 5, CSS 3 (scss), JavaScript
        </p>
      </div>
    </div>
  </div>
);

export default Cv;
