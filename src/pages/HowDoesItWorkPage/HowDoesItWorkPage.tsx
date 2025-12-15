import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import './howDoesItWorkPageStyles.scss';

const HowDoesItWorkPage = (): JSX.Element => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ height: '100%' }}
    >
      <MouseParallaxChild
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <motion.div
          className="how-does-it-work-page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5 } }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="game">Как это работает?</Link>
          </motion.h1>
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default HowDoesItWorkPage;
