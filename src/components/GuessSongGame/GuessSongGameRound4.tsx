import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type { GuessSongRound4Interface } from '../../interfaces/guessSongInterface';

import type { GuessSongDataRound4Types } from '../../types/guessSongTypes';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './guessSongGameStyles.scss';

const GuessSongGameRound4Slide = ({
  element,
}: {
  element: GuessSongRound4Interface;
}): JSX.Element => {
  const [showFakeImg, setShowFakeImg] = useState<boolean>(false);
  const [showOriginalImg, setShowOriginalImg] = useState<boolean>(false);

  const handleFakeImg = (): void => {
    setShowFakeImg((prev) => !prev);
  };

  const handleOriginalImg = (): void => {
    setShowOriginalImg((prev) => !prev);
  };

  return (
    <>
      <div className="videoplayer-container-r4">
        <VideoPlayer url={element.videoLink} thumbnail={element.thumbnail} />
      </div>
      <div className="img-container-r4">
        <div
          className="img-fake"
          onClick={handleFakeImg}
          style={{
            opacity: showFakeImg ? 1 : 0,
            transform: showFakeImg ? 'scale(1)' : 'scale(0)',
            backgroundImage: `url(${element.imgFake})`,
          }}
        />
        <div
          className="img-original"
          onClick={handleOriginalImg}
          style={{
            opacity: showOriginalImg ? 1 : 0,
            transform: showOriginalImg ? 'scale(1)' : 'scale(0)',
            backgroundImage: `url(${element.imgOriginal})`,
          }}
        />
      </div>
      <div className="btn-container-r4">
        <motion.button
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="pulse-task"
          onClick={handleFakeImg}
        >
          Фэйк
        </motion.button>
        <motion.button
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
            transition: { duration: 0.5, delay: 0.3 },
          }}
          className="pulse-answer"
          onClick={handleOriginalImg}
        >
          Оригинал
        </motion.button>
      </div>
    </>
  );
};

const GuessSongGameRound4 = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataRound4Types;
  const [guessSongCards, setGuessSongCards] =
    useState<GuessSongRound4Interface[]>(guessCard);

  useEffect(() => {
    setGuessSongCards(guessCard);
  }, []);

  return (
    <MouseParallaxContainer
      className="guess-song-game-round4"
      globalFactorX={0.1}
      globalFactorY={0.1}
    >
      <MouseParallaxChild
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <Swiper
          className="swiper-r4"
          effect={'fade'}
          grabCursor={true}
          modules={[EffectFade]}
          centeredSlides={true}
          spaceBetween={30}
        >
          {guessSongCards.map(
            (element, i: number): JSX.Element => (
              <SwiperSlide key={i} className="guess-song-slide-r4">
                <GuessSongGameRound4Slide key={i} element={element} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default GuessSongGameRound4;
