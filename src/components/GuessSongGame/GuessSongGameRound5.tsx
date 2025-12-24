import { EffectCards, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import type { GuessSongRound5Interface } from '../../interfaces/guessSongInterface';

import type { GuessSongDataRound5Types } from '../../types/guessSongTypes';
import './guessSongGameStyles.scss';

const GuessSongGameRound5Slide = ({
  element,
}: {
  element: GuessSongRound5Interface;
}): JSX.Element => {
  return (
    <>
      <span className="shadow"></span>
      <div className="text">{element.text}</div>
    </>
  );
};

const GuessSongGameRound5 = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataRound5Types;
  const [guessSongCards, setGuessSongCards] =
    useState<GuessSongRound5Interface[]>(guessCard);

  useEffect(() => {
    setGuessSongCards(guessCard);
  }, []);

  return (
    <MouseParallaxContainer
      className="guess-song-game-round5"
      globalFactorX={0.1}
      globalFactorY={0.1}
    >
      <MouseParallaxChild
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <Swiper
          className="swiper-r5"
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Keyboard]}
          keyboard={{
            enabled: true,
          }}
        >
          {guessSongCards.map(
            (element, i: number): JSX.Element => (
              <SwiperSlide key={i} className="guess-song-slide-r5">
                <GuessSongGameRound5Slide element={element} />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default GuessSongGameRound5;
