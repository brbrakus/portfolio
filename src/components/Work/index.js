import { h } from 'preact';
import cc from 'classcat';
import ProgressiveImage from 'components/ProgressiveImage';
import Video from 'components/Video';
import examples from './examples';

import s from './styles.scss';

const Example = ({
  example: { images, name, description, role, tools, time }
}) => (
  <div className={s.work}>
    <h2 className={s.title}>{name}</h2>
    {role && (
      <div className={s.detail}>
        <b className={s.label}>Role:</b> {role}
      </div>
    )}
    {tools && (
      <div className={s.detail}>
        <b className={s.label}>Tools:</b> {tools}
      </div>
    )}
    {time && (
      <div className={s.detail}>
        <b className={s.label}>Time:</b> {time}
      </div>
    )}
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
      {images.map(({ isVideo, src }) => (
        <div className={s.imageContainer}>
          {isVideo ? (
            <Video src={src} />
          ) : (
            <a target="_blank" href={src.src}>
              <ProgressiveImage className={s.exampleImage} {...src} />
            </a>
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
