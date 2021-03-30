import { h } from 'preact';
import SocialNetworkIcons from 'components/SocialNetworkIcons';

import s from './styles.scss';

const Contact = () => (
  <div id="contact" className={s.contact}>
    <h2 className={s.title}>Get in touch!</h2>
    <p className={s.subtitle}>
      For partnership, business inquiries or just to say hi fill up this form!
      :)
    </p>
    <form
      method="POST"
      action="https://formspree.io/brunabrakus@protonmail.com"
      className={s.form}
    >
      <input
        className={s.input}
        type="text"
        name="name"
        placeholder="Your Name"
      />

      <input
        className={s.input}
        type="email"
        name="email"
        placeholder="Your Email"
        required
      />

      <textarea
        className={s.textarea}
        name="message"
        placeholder="Your Message"
        required
      />

      <input type="text" name="_gotcha" style={{ display: 'none' }} />
      <input type="hidden" name="_subject" value="New portfolio submission!" />
      <input type="hidden" name="_next" value={window.location.href} />

      <button type="submit" className={s.button}>
        Say hi!
      </button>
    </form>
    <SocialNetworkIcons className={s.icons} />
  </div>
);
export default Contact;
