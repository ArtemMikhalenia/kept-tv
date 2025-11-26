import type { JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

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
              <Link className="greeting" to="/livingroom">
                С Новым годом!
              </Link>
            </motion.div>
          </MouseParallaxChild>
        </motion.div>
        <MouseParallaxChild className="image1" factorX={0.15} factorY={0.05} />
        <MouseParallaxChild className="image2" factorX={0.15} factorY={0.05} />
      </MouseParallaxContainer>
    </section>
  );
};

export default GreetingsPage;
