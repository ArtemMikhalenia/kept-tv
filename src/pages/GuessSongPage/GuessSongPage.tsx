import { type JSX, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
      initial={{ scale: 0 }}
      animate={{ scale: 0.7 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      style={{
        filter: isHovered ? 'blur(0px)' : 'blur(8px)',
      }}
    >
      <span
        style={{
          opacity: isHovered ? 1 : 1,
        }}
      >
        <Link to={link}>{text}</Link>
      </span>
    </motion.div>
  );
};

const GuessSongPage = (): JSX.Element => {
  const [showLinks, setShowLinks] = useState<boolean>(false);

  const showLinksHandler = (): void => {
    setShowLinks(true);
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ height: '100%' }}
    >
      <MouseParallaxChild
        className="links-activator"
        factorX={0.3}
        factorY={0.3}
        style={{ height: '100%' }}
      >
        <motion.div
          className="guess-song-page-container"
          onClick={showLinksHandler}
        >
          <motion.div
            className="guess-song-grid"
            initial={{ scale: 0 }}
            animate={{
              scale: showLinks ? 1 : 0,
              transition: { duration: 1 },
            }}
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
        </motion.div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default GuessSongPage;
