// import { useEffect, useState } from 'react';
import type { JSX } from 'react';

import { motion } from 'motion/react';

import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

import type { VideoPageTypes } from '../../types/videoPlayerTypes';
import './videopage.scss';

const VideoPage = ({ url, thumbnail }: VideoPageTypes): JSX.Element => {
  return (
    <motion.div
      className="video-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <VideoPlayer url={url} thumbnail={thumbnail} />
    </motion.div>
  );
};

export default VideoPage;
