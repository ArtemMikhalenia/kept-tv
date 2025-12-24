import { EffectCube, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import type { GuessSongRound2Interface } from '../../interfaces/guessSongInterface';

import type { GuessSongDataRound2Types } from '../../types/guessSongTypes';
import './guessSongGameStyles.scss';

const GuessSongGameRound2 = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataRound2Types;
  const [guessSongCards, setGuessSongCards] =
    useState<GuessSongRound2Interface[]>(guessCard);

  useEffect(() => {
    setGuessSongCards(guessCard);
  }, []);

  return (
    <MouseParallaxContainer
      className="guess-song-game-round2"
      globalFactorX={0.1}
      globalFactorY={0.1}
    >
      <MouseParallaxChild factorX={0.3} factorY={0.3}>
        <Swiper
          className="swiper-r2"
          effect={'cube'}
          grabCursor={true}
          modules={[EffectCube, Keyboard]}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          keyboard={{
            enabled: true,
          }}
          centeredSlides={true}
        >
          {guessSongCards.map(
            (element: GuessSongRound2Interface, index: number) =>
              index === element.lvl && (
                <SwiperSlide key={index} className="guess-song-slide-r2">
                  <img src={element.src} alt={element.alt} />
                </SwiperSlide>
              )
          )}
        </Swiper>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default GuessSongGameRound2;
