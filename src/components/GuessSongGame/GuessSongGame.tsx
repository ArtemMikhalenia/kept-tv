import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

import type { GuessSongInterface } from '../../interfaces/guessSongInterface';

import type { GuessSongDataTypes } from '../../types/guessSongTypes';
import './guessSongGameStyles.scss';

const GuessSongGame = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataTypes;
  const [guessSongCards, setGuessSongCards] =
    useState<GuessSongInterface[]>(guessCard);

  useEffect(() => {
    setGuessSongCards(guessCard);
  }, []);

  return (
    <div className="guess-song-game-container">
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
      >
        {guessSongCards.map(
          (element, index) =>
            index === element.lvl && (
              <SwiperSlide key={index}>
                {element.images.map((img) => (
                  <div key={img.id} className="guess-song-image">
                    <img src={img.src} alt={img.alt} />
                  </div>
                ))}
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
};

export default GuessSongGame;
