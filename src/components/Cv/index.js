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
          UX / UI design
          <br />Static website implementation
          <br />Logo design
          <br />Photography
          <br />
          <br />
        </p>
      </div>
    </div>
  </div>
);

export default Cv;
