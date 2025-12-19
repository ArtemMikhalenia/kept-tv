import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type {
  HdiwImageInterface,
  HdiwInterface,
  HdiwSlideProps,
} from '../../interfaces/howDoesItWorkInterface';

import './howDoesItWorkGameStyles.scss';

export const HowDoesItWorkGameSlide = ({
  images,
  isActive,
}: HdiwSlideProps): JSX.Element => {
  const [image, setImage] = useState<HdiwImageInterface[]>(images);

  const handleClick = (id: string) => {
    setImage((prevImg) =>
      prevImg.map((img) => {
        if (img.id !== id) return img;
        if (!img.clicked) {
          return { ...img, clicked: true };
        } else if (img.clicked && !img.hidden && img.hiddenSrc) {
          return { ...img, hidden: true };
        } else {
          return { ...img, clicked: false, hidden: false };
        }
      })
    );
  };

  return (
    <MouseParallaxChild factorX={0.2} factorY={0.2} className="grid-container">
      {image.map((element, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0 }}
          animate={
            isActive
              ? {
                  scale: 1,
                  transition: { duration: 0.5, delay: 0.1 },
                }
              : { scale: 0, opacity: 0 }
          }
          className={element.clicked ? 'grid-image active' : 'grid-image'}
          whileHover={{ scale: element.clicked ? 1 : 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleClick(element.id)}
        >
          {element.hidden && element.hiddenSrc ? (
            <img
              src={element.hiddenSrc}
              alt={`${element.alt}-hidden`}
              className="hidden-img"
            />
          ) : (
            <img
              src={element.src}
              alt={`${element.alt}`}
              className="main-img"
            />
          )}
        </motion.div>
      ))}
    </MouseParallaxChild>
  );
};

const HowDoesItWorkGame = (): JSX.Element => {
  const cardImg = useLoaderData() as HdiwInterface[];
  const [slider, setSlider] = useState<HdiwInterface[]>(cardImg);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setSlider(cardImg);
  }, [cardImg]);

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="how-does-it-work-game-container"
    >
      <Swiper
        className="swiper-how-does-it-work"
        direction={'vertical'}
        grabCursor={true}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slider.map((level, index) => (
          <SwiperSlide
            key={level.id}
            className={`how-does-it-work-slide ${level.slideClassname}`}
          >
            <HowDoesItWorkGameSlide
              images={level.images}
              isActive={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MouseParallaxContainer>
  );
};

export default HowDoesItWorkGame;
