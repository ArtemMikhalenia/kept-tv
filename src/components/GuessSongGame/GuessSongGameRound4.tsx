import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type { GuessSongInterface } from '../../interfaces/guessSongInterface';

import type { GuessSongDataTypes } from '../../types/guessSongTypes';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import './guessSongGameStyles.scss';

const GuessSongGameRound4 = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataTypes;
  const [guessSongCards, setGuessSongCards] =
    useState<GuessSongInterface[]>(guessCard);

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
          spaceBetween={50}
        >
          <SwiperSlide className="guess-song-slide-r4">
            <VideoPlayer url="https://youtu.be/L5s1twj6SqQ?si=6lapbroaVF4R3yn0" />
          </SwiperSlide>
          <SwiperSlide className="guess-song-slide-r4">2</SwiperSlide>
          {guessSongCards.map(
            (element, index) =>
              index === element.lvl && (
                <SwiperSlide key={index} className="guess-song-slide-r4">
                  {element.images.map((img) => (
                    <MouseParallaxChild
                      factorX={0.2}
                      factorY={0.2}
                      key={img.id}
                      style={{ width: '100%' }}
                      className="guess-song-parallax-child-r4"
                    >
                      <motion.img
                        className="guess-song-image-r4"
                        key={img.id}
                        initial={{ scale: 0 }}
                        whileInView={{
                          scale: 1,
                          transition: { duration: 0.3, delay: img.id * 0.3 },
                        }}
                        src={img.src}
                        alt={img.alt}
                      />
                    </MouseParallaxChild>
                  ))}
                </SwiperSlide>
              )
          )}
        </Swiper>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default GuessSongGameRound4;
