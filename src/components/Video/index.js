import { h } from 'preact';

/* eslint-disable */
const Video = ({ src }) => (
  <video autoPlay loop muted preload="metadata" track={null} src={src} />
);
/* eslint-enable */

export default Video;
