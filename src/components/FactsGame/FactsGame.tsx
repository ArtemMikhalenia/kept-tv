import { EffectFlip } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type {
  FactInterface,
  FactsInterface,
  FactsSlideProps,
} from '../../interfaces/factsInterface';

import druzhkoImg from '../../assets/images/facts_images/druzhko.png';
import druzhkoSound from '../../assets/sounds/facts_game/this-is-of-course-not-true.mp3';
import './factsGameStyles.scss';

export const FactsGameSlide = ({
  level,
  initialFacts,
  isActive,
}: FactsSlideProps): JSX.Element => {
  const [facts, setFacts] = useState<FactInterface[]>(initialFacts);
  const [showDruzhko, setShowDruzhko] = useState<boolean>(false);
  const [showNews, setShowNews] = useState<boolean>(false);

  const audio = new Audio(druzhkoSound);

  useEffect(() => {
    if (showDruzhko) {
      const timeout = setTimeout(() => {
        setShowDruzhko(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [showDruzhko]);

  const toggleCard = (id: string) => {
    setFacts((prevFacts) =>
      prevFacts.map((fact) =>
        fact.id === id ? { ...fact, clicked: !fact.clicked } : fact
      )
    );
  };

  const checkAnswer = () => {
    const selectedFacts = facts.filter((item) => item.clicked);
    const selectedIds = selectedFacts.map((item) => item.id);
    const correctAnswers = level.correctAnswer;

    const isCorrect =
      correctAnswers.every((id) => selectedIds.includes(id)) &&
      selectedIds.every((id) => correctAnswers.includes(id));

    if (isCorrect) {
      setShowDruzhko(false);
      setShowNews(true);
    } else {
      if (selectedIds.length !== 0) {
        setShowDruzhko(true);
        setShowNews(false);
        audio.play();
      }
    }
    setFacts((prevFacts) =>
      prevFacts.map((fact) => ({
        ...fact,
        clicked: false,
      }))
    );
  };

  const closeNews = () => {
    setShowNews(false);
  };

  return (
    <div
      className="facts-slider"
      style={{
        backgroundImage: `url(${level.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <MouseParallaxChild
        factorX={0.5}
        factorY={0.5}
        style={{ height: '100%' }}
        className={`grid-container ${level.containerType}`}
      >
        {facts.map((fact) => (
          <motion.div
            key={fact.id}
            id={fact.id}
            initial={{ scale: 0 }}
            animate={
              isActive
                ? {
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.1 },
                  }
                : { scale: 0, opacity: 0 }
            }
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={
              fact.clicked ? fact.factClassName + ' active' : fact.factClassName
            }
            onClick={() => toggleCard(fact.id)}
          >
            <span className={`number ${fact.numberColor}`}>{fact.variant}</span>
            <span className="header">
              <div className="circle"></div>
              <div className="cross"></div>
            </span>
            <span className="text">{fact.factText}</span>
          </motion.div>
        ))}
      </MouseParallaxChild>
      <MouseParallaxChild
        factorX={0.5}
        factorY={0.2}
        style={{ height: '100%' }}
      >
        <motion.button
          initial={{ scale: 0 }}
          animate={
            isActive
              ? {
                  scale: 1,
                  transition: { duration: 0.5 },
                }
              : { scale: 0, opacity: 0 }
          }
          className="fact-check-btn"
          onClick={checkAnswer}
        >
          <span>Проверить</span>
        </motion.button>
      </MouseParallaxChild>

      <div className={showDruzhko ? 'druzhko-img active' : 'druzhko-img'}>
        <img src={druzhkoImg} alt="druzhko-img" />
      </div>

      <div
        className="img-container-facts"
        onClick={closeNews}
        style={{
          opacity: showNews ? 1 : 0,
          backgroundColor: showNews ? 'rgba(0, 0, 0, 0.6)' : 'none',
          zIndex: showNews ? 1 : -1,
          transition: 'all 0.5s ease 0s',
        }}
      >
        {level.correctImg.map((image, i) => (
          <img key={i} src={image} className="img-fact" alt="fact-img" />
        ))}
      </div>
    </div>
  );
};

const FactsGame = (): JSX.Element => {
  const factCard = useLoaderData() as FactsInterface[];
  const [slider, setSlider] = useState<FactsInterface[]>(factCard);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setSlider(factCard);
  }, [factCard]);

  return (
    <div className="facts-game-container">
      <Swiper
        className="swiper-facts"
        effect={'flip'}
        grabCursor={true}
        modules={[EffectFlip]}
        centeredSlides={true}
        flipEffect={{
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slider.map((level, index) => (
          <SwiperSlide key={level.lvl}>
            <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
              <FactsGameSlide
                level={level}
                initialFacts={level.facts.map((fact) => ({
                  ...fact,
                  clicked: false,
                }))}
                isActive={index === activeIndex}
              />
            </MouseParallaxContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FactsGame;
