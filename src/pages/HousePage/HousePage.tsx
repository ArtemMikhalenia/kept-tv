import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

import titleImg from '../../assets/images/house_images/title.webp';
import './housePageStyles.scss';

const HousePage = (): JSX.Element => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ height: '100%' }}
    >
      <Snowfall
        color="rgba(255,255,255,1)"
        snowflakeCount={200}
        speed={[1, 1]}
        radius={[2, 3]}
        style={{ zIndex: 2 }}
      />
      <MouseParallaxChild
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <motion.div
          className="house-page-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="house-link-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3, delay: 1 } }}
          >
            <MouseParallaxChild factorX={0.3} factorY={0.3}>
              <Link to="game">
                <motion.img
                  src={titleImg}
                  alt="title-img"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </Link>
            </MouseParallaxChild>
          </motion.div>
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default HousePage;
