import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import malahovImg from '../../assets/images/backgrounds/malahov-page/malahov_bottom_title.png';
import './malahovPageStyles.scss';

const MalahovPage = (): JSX.Element => {
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
          className="malahov-page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="malahov-button-container"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
          >
            <Link to="game" className="malahov-button-link">
              <motion.span
                className="malahov-button-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Нетрадиционные методы лечения
              </motion.span>
            </Link>
          </motion.div>
          <motion.img
            src={malahovImg}
            className="malahov-title"
            alt="malahov-title-img"
            initial={{ opacity: 0, x: '100%' }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.5, delay: 1 },
            }}
          />
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default MalahovPage;
