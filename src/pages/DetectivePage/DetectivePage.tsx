import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import './detectivePageStyles.scss';

const DetectivePage = (): JSX.Element => {
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
          className="detective-page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div
            className="detective-button-container"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 1 },
            }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
          >
            <Link to="game" className="detective-button-link">
              <motion.span
                className="detective-button-start"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                С сестрами Каневскими
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default DetectivePage;
