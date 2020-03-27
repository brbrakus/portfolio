import { h } from 'preact';
import cc from 'classcat';

const ProgressiveImage = ({ className, alt, src, placeholder }) => (
  <img
    className={cc(['lazyload', className])}
    alt={alt}
    src={placeholder}
    data-src={src}
  />
);

export default ProgressiveImage;
