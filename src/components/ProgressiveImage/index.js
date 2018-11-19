import { h, Component } from 'preact';
import cc from 'classcat';

import s from './styles.scss';

export default class ProgressiveImage extends Component {
  state = { src: '', loaded: false };

  handleIntersection = ([{ isIntersecting }]) => {
    if (isIntersecting && !this.state.loaded) {
      const { src, placeholder } = this.props;
      this.fetchImage(placeholder)
        .then(placeholderSrc => {
          this.setState({ src: placeholderSrc });
        })
        .then(() => this.fetchImage(src))
        .then(imageSrc => {
          this.setState({ src: imageSrc, loaded: true });
        });
    }
  };

  observer = new IntersectionObserver(this.handleIntersection, {
    rootMargin: '100px 0px 0px 0px'
  });

  observe = el => {
    this.observer.observe(el);
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
        ref={this.observe}
        className={cc([s.image, { [s.loaded]: !!src }, className])}
        alt={alt}
        src={this.state.src}
      />
    );
  }
}
