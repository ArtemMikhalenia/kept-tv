import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import { guessSongLinksData } from '../../data/guessSongData';

import type { GuessSongLinkInterface } from '../../interfaces/guessSongInterface';

import './guessSongPageStyles.scss';

const GuessSongLink = ({
  className,
  link,
  text,
}: GuessSongLinkInterface): JSX.Element => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={link}>{text}</Link>
    </motion.div>
  );
};

const GuessSongPage = (): JSX.Element => {
  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ height: '100%' }}
    >
      <MouseParallaxChild
        className="guess-song-page-container"
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <motion.div
          className="guess-song-grid"
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { duration: 1, delay: 2 } }}
        >
          {guessSongLinksData.map(
            (item: GuessSongLinkInterface, i: number): JSX.Element => (
              <GuessSongLink
                key={i}
                className={item.className}
                link={item.link}
                text={item.text}
              />
            )
          )}
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default GuessSongPage;
