import { h } from 'preact';
import cc from 'classcat';
import ProgressiveImage from 'components/ProgressiveImage';
import Video from 'components/Video';
import examples from './examples';

import s from './styles.scss';

const Example = ({ example: { images, name, description } }) => (
  <div className={s.work}>
    <h2 className={s.title}>{name}</h2>
    <p
      className={s.description}
      // means to provide links in description data
      dangerouslySetInnerHTML={{ __html: description }} // eslint-disable-line react/no-danger
    />
    <div
      className={cc([
        s.images,
        {
          [s.big]: images.length === 5
        }
      ])}
    >
      {images.map(image => (
        <div className={s.imageContainer}>
          {image.isVideo ? (
            <Video src={image.src} />
          ) : (
            <ProgressiveImage className={s.exampleImage} {...image.src} />
          )}
        </div>
      ))}
    </div>
  </div>
);

const Work = () => (
  <div className={s.content}>
    {examples.map(example => <Example example={example} />)}
  </div>
);

export default Work;
