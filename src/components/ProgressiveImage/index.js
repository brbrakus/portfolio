import { h, Component } from 'preact';
import cc from 'classcat';

import s from './styles.scss';

export default class ProgressiveImage extends Component {
  state = { src: '', loaded: false };

  componentWillMount() {
    this.load();
  }

  load = () => {
    if (this.state.loaded) return;
    const { src, placeholder } = this.props;
    this.fetchImage(placeholder)
      .then(placeholderSrc => {
        this.setState({ src: placeholderSrc });
        return this.fetchImage(src);
      })
      .then(imageSrc => {
        this.setState({ src: imageSrc, loaded: true });
      });
  };

  fetchImage = src =>
    new Promise(resolve => {
      const image = new Image();
      image.src = src;
      image.addEventListener('load', () => resolve(src), false);
    });

  render({ className, alt }, { src }) {
    return (
      <img
        className={cc([s.image, { [s.loaded]: !!src }, className])}
        alt={alt}
        src={this.state.src}
      />
    );
  }
}
