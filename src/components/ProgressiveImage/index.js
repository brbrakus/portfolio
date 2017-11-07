import { h, Component } from 'preact';

export default class ProgressiveImage extends Component {
  state = { src: '' };

  componentWillMount() {
    const { src, placeholder } = this.props;
    this.fetchImage(placeholder)
      .then(this.loadImage)
      .then(() => this.fetchImage(src))
      .then(this.loadImage);
  }

  loadImage = src => {
    this.setState({ src });
  };

  fetchImage = src =>
    new Promise(resolve => {
      const image = new Image();
      image.src = src;
      image.addEventListener('load', () => resolve(src), false);
    });

  render({ className, alt }) {
    return <img className={className} alt={alt} src={this.state.src} />;
  }
}
