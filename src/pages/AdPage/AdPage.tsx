import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import './adPageStyles.scss';

const AdPage = (): JSX.Element => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ height: '100%' }}
    >
      <motion.div
        className="ad-page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.3}
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <motion.div
            className="ad-button-container"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
          >
            <Link to="game" className="ad-button-link">
              <motion.span
                className="ad-button-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                День пожирателей рекламы
              </motion.span>
            </Link>
          </motion.div>
        </MouseParallaxChild>
      </motion.div>
    </MouseParallaxContainer>
  );
};

export default AdPage;
