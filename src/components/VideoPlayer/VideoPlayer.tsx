import type { JSX } from 'react';
import ReactPlayer from 'react-player';

import type { VideoTypes } from '../../types/videoPlayerTypes';

const VideoPlayer = ({ url, thumbnail }: VideoTypes): JSX.Element => {
  return (
    <ReactPlayer
      light={
        <img
          src={thumbnail}
          width="100%"
          alt="Thumbnail"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      src={url}
      width="100%"
      height="100%"
      playing={false}
      preload="true"
      controls
    />
  );
};
export default VideoPlayer;
