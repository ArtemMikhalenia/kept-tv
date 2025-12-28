import { type JSX, useMemo } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import { firefliesData } from '../../data/fireflyData';
import { sparkleData } from '../../data/sparkleData';

import type { FireflyInterface } from '../../interfaces/fireflyInterface';

import Firefly from '../../components/Firefly/Firefly';
import Sparkle from '../../components/Sparkle/Sparkle';

import ball from '../../assets/images/backgrounds/relax-page/ball.gif';
import dancingCatImg from '../../assets/images/backgrounds/relax-page/dancing_cat.gif';
import dancingGirlImg from '../../assets/images/backgrounds/relax-page/dancing_girl.gif';
import dancingManImg from '../../assets/images/backgrounds/relax-page/dancing_man.gif';
import deadpoolImg from '../../assets/images/backgrounds/relax-page/deadpool.gif';
import halloweenImg from '../../assets/images/backgrounds/relax-page/halloween.gif';
import jensenImg from '../../assets/images/backgrounds/relax-page/jensen.gif';
import manImg from '../../assets/images/backgrounds/relax-page/man.gif';
import playingCatImg from '../../assets/images/backgrounds/relax-page/playing_cat.gif';
import snoopImg from '../../assets/images/backgrounds/relax-page/snoop.gif';
import treeImg from '../../assets/images/backgrounds/relax-page/tree.gif';
import santaIcon from '../../assets/images/icons/santa-hat.png';
import './newYearRelaxPageStyles.scss';

const NewYearRelaxPage = (): JSX.Element => {
  const memoizedSparkles = useMemo(
    () =>
      sparkleData.map((sparkle, i) => (
        <Sparkle key={i} width={sparkle.width} height={sparkle.height} />
      )),
    []
  );

  const memoizedFireflies = useMemo(
    () =>
      firefliesData.map((firefly: FireflyInterface) => (
        <Firefly key={firefly.id} id={firefly.id} color={firefly.color} />
      )),
    []
  );

  return (
    <motion.div
      className="new-year-relax-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{ width: '100%', height: '100%' }}
        className="sparkles-container"
      >
        <div className="sparkles">{memoizedSparkles}</div>
        <div className="fireflies">{memoizedFireflies}</div>
        <div className="new-year-relax-page-title-block">
          <MouseParallaxChild factorX={0.3} factorY={0.3}>
            <motion.div
              className="new-year-relax-page-title"
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { duration: 0.5 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              // viewport={{ once: true, amount: 0.1 }}
            >
              <img
                className="santa-hat"
                src={santaIcon}
                alt="front-santa-hat"
              />
              <Link to="/tv/new-year-relax-video" title="Чао!">
                Новогодний relax
              </Link>
            </motion.div>
          </MouseParallaxChild>
        </div>
        <div className="new-year-relax-content">
          <img src={ball} className="relax-img-ball" alt="ball-img" />
          <img
            src={dancingCatImg}
            className="relax-img-dancing-cat"
            alt="dancing-cat-img"
          />
          <img
            src={dancingGirlImg}
            className="relax-img-dancing-girl"
            alt="dancing-girl-img"
          />
          <img
            src={dancingManImg}
            className="relax-img-dancing-man"
            alt="dancing-man-img"
          />
          <img
            src={deadpoolImg}
            className="relax-img-deadpool"
            alt="deadpool-img"
          />
          <img
            src={halloweenImg}
            className="relax-img-halloween"
            alt="halloween-img"
          />
          <img src={jensenImg} className="relax-img-jensen" alt="jensen-img" />
          <img src={manImg} className="relax-img-man" alt="man-img" />
          <img
            src={playingCatImg}
            className="relax-img-playing-cat"
            alt="playing-cat-img"
          />
          <img src={snoopImg} className="relax-img-snoop" alt="snoop-img" />
          <img src={treeImg} className="relax-img-tree" alt="tree-img" />
        </div>
      </MouseParallaxContainer>
    </motion.div>
  );
};

export default NewYearRelaxPage;
