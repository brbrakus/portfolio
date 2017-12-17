import { h, Component } from 'preact';

import s from './styles.scss';

export default class Contact extends Component {
  state = {
    name: '', // eslint-disable-line react/no-unused-state
    email: '', // eslint-disable-line react/no-unused-state
    message: '' // eslint-disable-line react/no-unused-state
  };

  onChange = field => e => {
    this.setState({
      [field]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className={s.contact}>
        <h2 className={s.title}>Contact me</h2>
        <form onSubmit={this.onSubmit} className={s.form}>
          <input
            className={s.input}
            type="text"
            onChange={this.onChange('name')}
            placeholder="Your Name"
          />

          <input
            className={s.input}
            type="email"
            onChange={this.onChange('email')}
            placeholder="Your Email"
            required
          />

          <textarea
            className={s.textarea}
            onChange={this.onChange('message')}
            placeholder="Your Message"
            required
          />

          <button type="submit" className={s.button}>
            Say hi!
          </button>
        </form>
      </div>
    );
  }
}
