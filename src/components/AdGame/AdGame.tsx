import { EffectCoverflow, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import 'react-parallax-mouse';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import type { AdGameInterface } from '../../interfaces/advertGameInterface';

import type { AdGameDataTypes } from '../../types/adGameTypes';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './adGameStyles.scss';

const AdGameSlide = ({ video }: { video: AdGameInterface }): JSX.Element => {
  return <VideoPlayer url={video.link} thumbnail={video.thumbnail} />;
};

const AdGame = (): JSX.Element => {
  const video = useLoaderData() as AdGameDataTypes;
  const [videos, setVideos] = useState<AdGameInterface[]>(video);

  useEffect(() => {
    setVideos(video);
  }, []);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ width: '100%', height: '100%' }}
    >
      <MouseParallaxChild
        factorX={0.2}
        factorY={0.5}
        className="ad-game-container"
      >
        <Swiper
          className="ad-swiper"
          effect={'coverflow'}
          grabCursor={true}
          modules={[EffectCoverflow, Keyboard]}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: false,
          }}
          centeredSlides={true}
          spaceBetween={20}
          keyboard={{
            enabled: true,
          }}
        >
          {videos.map((video, i) => (
            <SwiperSlide key={i} className="ad-slide-content">
              <AdGameSlide video={video} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default AdGame;
