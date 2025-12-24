import { type JSX, useMemo } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

import { motion } from 'motion/react';

import { sparkleData } from '../../data/sparkleData';

import Sparkle from '../../components/Sparkle/Sparkle';

import santaIcon from '../../assets/images/icons/santa-hat.png';
import './lunchPageStyles.scss';

const LunchPage = (): JSX.Element => {
  const memoizedSparkles = useMemo(
    () =>
      sparkleData.map((sparkle, i) => (
        <Sparkle key={i} width={sparkle.width} height={sparkle.height} />
      )),
    []
  );

  return (
    <motion.div
      className="lunch-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{ width: '100%', height: '100%' }}
        className="sparkles-container"
      >
        <MouseParallaxChild factorX={0.8} factorY={0.8} className="sparkles">
          {memoizedSparkles}
        </MouseParallaxChild>
        <div className="lunch-page-title-block">
          <MouseParallaxChild factorX={0.3} factorY={0.3}>
            <motion.div
              className="lunch-page-title"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 1 },
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <img
                className="santa-hat"
                src={santaIcon}
                alt="front-santa-hat"
              />
              <h1>Обед + Конкурс «Звезда 2010»</h1>
            </motion.div>
          </MouseParallaxChild>
        </div>
      </MouseParallaxContainer>
    </motion.div>
  );
};

export default LunchPage;
