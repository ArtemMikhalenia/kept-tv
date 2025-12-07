import { EffectCreative } from 'swiper/modules';
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
import './guessSongGameStyles.scss';

const GuessSongGameRound1 = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataTypes;
  const [guessSongCards, setGuessSongCards] =
    useState<GuessSongInterface[]>(guessCard);

  useEffect(() => {
    setGuessSongCards(guessCard);
  }, []);

  return (
    <MouseParallaxContainer
      className="guess-song-game-round1"
      globalFactorX={0.1}
      globalFactorY={0.1}
    >
      <MouseParallaxChild
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <Swiper
          effect={'creative'}
          grabCursor={true}
          modules={[EffectCreative]}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          centeredSlides={true}
          spaceBetween={50}
        >
          {guessSongCards.map(
            (element, index) =>
              index === element.lvl && (
                <SwiperSlide key={index} className="guess-song-slide-r1">
                  {element.images.map((img) => (
                    <MouseParallaxChild
                      factorX={0.2}
                      factorY={0.2}
                      key={img.id}
                      style={{ width: '100%' }}
                      className="guess-song-parallax-child-r1"
                    >
                      <motion.img
                        className="guess-song-image-r1"
                        key={img.id}
                        initial={{ scale: 0 }}
                        whileInView={{
                          scale: 1,
                          transition: { duration: 0.3, delay: img.id },
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

export default GuessSongGameRound1;
