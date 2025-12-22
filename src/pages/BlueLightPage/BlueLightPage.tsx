import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Outlet } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

import './blueLightPageStyles.scss';

const BlueLightPage = (): JSX.Element => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.05}
      globalFactorY={0.05}
      containerStyle={{ height: '100%' }}
    >
      <Snowfall
        color="rgba(255,255,255,1)"
        snowflakeCount={200}
        speed={[1, 1]}
        radius={[2, 3]}
        style={{ zIndex: 2 }}
      />
      <motion.div
        className="blue-light-page-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.2 } }}
      >
        <MouseParallaxChild
          factorX={0.8}
          factorY={0.8}
          className="blue-light-trees-left"
        />
        <MouseParallaxChild
          factorX={0.4}
          factorY={0.7}
          className="blue-light-trees-right"
        />
        <MouseParallaxChild
          factorX={0.4}
          factorY={0.7}
          className="blue-light-main-title"
          style={{ transform: 'rotate(-20deg)' }}
        >
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.5, delay: 1 } }}
          />
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.3}
          factorY={0.2}
          className="blue-light-page-content"
        >
          <Outlet />
        </MouseParallaxChild>
      </motion.div>
    </MouseParallaxContainer>
  );
};

export default BlueLightPage;
