import type { JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

import { lightsData } from '../../data/lightData';

import type { LightInterface } from '../../interfaces/lightInterface';

import Light from '../../components/Light/Light';

import './greetingsPage.scss';

const GreetingsPage = (): JSX.Element => {
  return (
    <section className="greetings-page-container">
      <Snowfall
        color="rgba(255,255,255,0.6)"
        snowflakeCount={500}
        speed={[1, 5]}
        radius={[1, 1.5]}
        style={{ zIndex: 2 }}
      />
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{ height: '100%' }}
      >
        <motion.div className="greetings-page-content">
          <MouseParallaxChild factorX={0.4} factorY={0.4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Link className="greeting" to="/living-room">
                Новый год на Kept TV!
              </Link>
            </motion.div>
          </MouseParallaxChild>
        </motion.div>
        <MouseParallaxChild className="image1" factorX={0.15} factorY={0.05} />
        <MouseParallaxChild className="image2" factorX={0.15} factorY={0.05} />
        {lightsData.map(
          (light: LightInterface): JSX.Element => (
            <MouseParallaxChild
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
              }}
              factorX={Math.random() * 0.5}
              factorY={Math.random() * 0.5}
              key={light.id}
            >
              <Light id={light.id} color={light.color} />
            </MouseParallaxChild>
          )
        )}
      </MouseParallaxContainer>
    </section>
  );
};

export default GreetingsPage;
