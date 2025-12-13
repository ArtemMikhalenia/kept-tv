import { EffectCreative } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { motion } from 'motion/react';

import type { DetectiveInterface } from '../../interfaces/detectiveInterface';

import flashSound from '../../assets/sounds/detective_game/flash.wav';
import type { DetectiveDataTypes } from '../../types/detectiveTypes';
import './detectiveGameStyles.scss';

const DetectiveGameSlide = ({
  element,
}: {
  element: DetectiveInterface;
}): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const flashAudio = new Audio(flashSound);

  const handleFlip = (): void => {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
    }
    if (!isFlipped) {
      flashAudio.play();
    }
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ height: '100%' }}
    >
      <div className="detective-slide-content">
        <MouseParallaxChild
          factorX={0.4}
          factorY={0.4}
          style={{ width: '100%', height: '100%' }}
        >
          <div className="detective-slide-left">
            <div className="detective-slide-left-text">
              <h2>Предъявленные обвинения:</h2>
              <ul>
                {element.textList.map(
                  (item: string[], lineIndex: number): JSX.Element => {
                    const lineDelay = lineIndex * 0.5;

                    return (
                      <li key={lineIndex}>
                        {item.map((letter, letterIndex) => (
                          <motion.span
                            key={`${lineIndex}-${letterIndex}`}
                            initial={{ opacity: 0 }}
                            whileInView={{
                              opacity: 1,
                              transition: {
                                duration: 0.2,
                                delay: lineDelay + letterIndex * 0.05,
                              },
                            }}
                          >
                            {letter}
                          </motion.span>
                        ))}
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.4}
          factorY={0.4}
          style={{
            maxWidth: '450px',
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="detective-slide-right" onClick={handleFlip}>
            <motion.div
              className="detective-flip-card"
              initial={false}
              animate={{ rotateY: isFlipped ? 180 : 360 }}
              transition={{ duration: 0.5 }}
              onAnimationComplete={(): void => setIsAnimating(false)}
            >
              <div
                className="detective-front"
                style={{
                  backgroundImage: `url('${element.frontImg.src}')`,
                  backgroundSize: 'cover',
                  backfaceVisibility: 'hidden',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="detective-back"
                style={{
                  backgroundImage: `url('${element.backImg.src}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
          </div>
        </MouseParallaxChild>
      </div>
      <div className={isFlipped ? 'flash active' : 'flash'} />
    </MouseParallaxContainer>
  );
};

const DetectiveGame = (): JSX.Element => {
  const detectiveCard = useLoaderData() as DetectiveDataTypes;
  const [detectiveCards, setDetectiveCards] =
    useState<DetectiveInterface[]>(detectiveCard);

  useEffect(() => {
    setDetectiveCards(detectiveCard);
  }, []);
  return (
    <div className="detective-game-container">
      <Swiper
        effect={'creative'}
        grabCursor={true}
        modules={[EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-100%', 0, -5000],
            rotate: [0, 0, -45],
          },
          next: {
            translate: [0, '100%', 0],
          },
        }}
        spaceBetween={50}
        centeredSlides={true}
      >
        {detectiveCards.map(
          (element: DetectiveInterface, index: number): JSX.Element => (
            <SwiperSlide key={index}>
              <DetectiveGameSlide key={index} element={element} />
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default DetectiveGame;
