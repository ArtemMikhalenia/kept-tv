import type { JSX } from 'react';
import ReactPlayer from 'react-player';

import type { VideoTypes } from '../../types/videoPlayerTypes';

const VideoPlayer = ({ url }: VideoTypes): JSX.Element => {
  return (
    <ReactPlayer light src={url} width="100%" height="100%" playing controls />
  );
};

export default VideoPlayer;
