import { EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type {
  GuessSongRound3ImageInterface,
  GuessSongRound3Interface,
  GuessSongRound3SlideInterface,
} from '../../interfaces/guessSongInterface';

import type { GuessSongDataRound3Types } from '../../types/guessSongTypes';
import './guessSongGameStyles.scss';

const GuessSongGameRound3Slide = ({
  element,
  isActive,
}: GuessSongRound3SlideInterface): JSX.Element => {
  const [card, setCard] = useState<GuessSongRound3ImageInterface[]>(element);

  const handleClick = (id: number): void => {
    setCard((prevImg) =>
      prevImg.map((img) => {
        if (img.id === id) {
          return { ...img, clicked: !img.clicked };
        }
        return { ...img };
      })
    );
  };

  return (
    <MouseParallaxChild
      className="slide-r3-content"
      factorX={0.2}
      factorY={0.5}
    >
      {card.map(
        (image: GuessSongRound3ImageInterface, i: number): JSX.Element => (
          <motion.div
            key={i}
            className="slide-r3-images"
            initial={{ x: `${image.x}`, y: `${image.y}`, opacity: 0 }}
            animate={
              isActive
                ? {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 },
                  }
                : { opacity: 0 }
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(): void => handleClick(image.id)}
          >
            <img
              src={image.imgLogoSrc}
              style={{
                transform: image.clicked ? `scale(0)` : `scale(1)`,
                opacity: image.clicked ? 0 : 1,
              }}
              className="r3-swiper-logo-image"
              alt=""
            />
            <img
              src={image.imgAnswerSrc}
              className="r3-swiper-answer-image"
              alt=""
            />
          </motion.div>
        )
      )}
    </MouseParallaxChild>
  );
};

const GuessSongGameRound3 = (): JSX.Element => {
  const guessCard = useLoaderData() as GuessSongDataRound3Types;
  const [guessCards, setGuessCards] =
    useState<GuessSongRound3Interface[]>(guessCard);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setGuessCards(guessCard);
  }, []);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="guess-song-game-round3"
    >
      <Swiper
        className="swiper-r3"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {guessCards.map(
          (element: GuessSongRound3Interface, index: number): JSX.Element => (
            <SwiperSlide key={index} className="guess-song-slide-r3">
              <GuessSongGameRound3Slide
                element={element.images}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </MouseParallaxContainer>
  );
};

export default GuessSongGameRound3;
