import { EffectCoverflow, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type {
  MalahovInterface,
  MalahovSlideInterface,
} from '../../interfaces/malahovInterface';

import snakeImg from '../../assets/images/malahov_game/diseases/malahov_card.webp';
import type { MalahovDataTypes } from '../../types/malahovTypes';
import './malahovGameStyles.scss';

const MalahovGameSlide = ({
  element,
  isActive,
}: MalahovSlideInterface): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (): void => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <MouseParallaxChild
        factorX={0.2}
        factorY={0.5}
        className="malahov-swiper-text"
      >
        <div className="malahov-swiper-text">
          <motion.h2
            initial={{
              y: `${element.h2AnimationYStart}`,
              x: `${element.h2AnimationXStart}`,
              opacity: 0,
            }}
            animate={
              isActive
                ? {
                    y: `${element.h2AnimationYEnd}`,
                    x: `${element.h2AnimationXEnd}`,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 },
                  }
                : {
                    y: `${element.h2AnimationYStart}`,
                    x: `${element.h2AnimationXStart}`,
                    opacity: 0,
                  }
            }
          >
            Рецепт:
          </motion.h2>
          <motion.p
            initial={{
              y: `${element.textAnimationYStart}`,
              x: `${element.textAnimationXStart}`,
              opacity: 0,
            }}
            animate={
              isActive
                ? {
                    y: `${element.textAnimationYEnd}`,
                    x: `${element.textAnimationXEnd}`,
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1 },
                  }
                : {
                    y: `${element.textAnimationYStart}`,
                    x: `${element.textAnimationXStart}`,
                    opacity: 0,
                  }
            }
          >
            {element.text}
          </motion.p>
        </div>
      </MouseParallaxChild>
      <motion.div
        initial={{
          y: `${element.swiperImageYStart}`,
          x: `${element.swiperImageXStart}`,
          opacity: 0,
        }}
        animate={
          isActive
            ? {
                y: `${element.swiperImageYEnd}`,
                x: `${element.swiperImageXEnd}`,
                opacity: 1,
                transition: { duration: 0.5, delay: 1 },
              }
            : {
                y: `${element.swiperImageYStart}`,
                x: `${element.swiperImageXStart}`,
                opacity: 0,
              }
        }
        className="malahov-swiper-image"
        onClick={handleClick}
      >
        <MouseParallaxChild
          factorX={0.2}
          factorY={1}
          className="malahov-swiper-parallax"
        >
          <img
            src={snakeImg}
            alt="snake-image"
            className="malahov-swiper-snake-image"
            style={{
              transform: open
                ? `${element.snakeImageActiveAnimation}`
                : `${element.snakeImageInactiveAnimation}`,
              opacity: open ? 0 : 1,
            }}
          />
          <img
            src={element.diseaseImageSrc}
            alt="malahov-image"
            className="malahov-swiper-answer-image"
          />
        </MouseParallaxChild>
      </motion.div>
    </>
  );
};

const MalahovGame = (): JSX.Element => {
  const malahovCard = useLoaderData() as MalahovDataTypes;
  const [malahovCards, setMalahovCards] =
    useState<MalahovInterface[]>(malahovCard);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setMalahovCards(malahovCard);
  }, []);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="malahov-game-container"
    >
      <Swiper
        className="malahov-swiper"
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 10,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Keyboard]}
        keyboard={{
          enabled: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {malahovCards.map(
          (card: MalahovInterface, index: number): JSX.Element => (
            <SwiperSlide
              key={card.level}
              className={`malahov-swiper-slide ${card.sliderClassName}`}
              style={{
                backgroundImage: `url(${card.backgroundImageSrc})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <MalahovGameSlide
                element={card}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </MouseParallaxContainer>
  );
};

export default MalahovGame;
