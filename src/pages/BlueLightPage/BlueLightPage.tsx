import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

import buterImg from '../../assets/images/blue_light_images/buter.png';
import charactersImg from '../../assets/images/blue_light_images/characters.png';
import mandarinImg from '../../assets/images/blue_light_images/mandarin.png';
import podarokImg from '../../assets/images/blue_light_images/podarok.png';
import salutImg from '../../assets/images/blue_light_images/salut.png';
import shampanskoeImg from '../../assets/images/blue_light_images/shampanskoe.png';
import sharImg from '../../assets/images/blue_light_images/shar.png';
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
      {/* <MouseParallaxChild
        factorX={0.1}
        factorY={0.1}
        style={{ height: '100%' }}
      > */}
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
          style={{ height: '100%' }}
          className="blue-light-page-content"
        >
          <div className="blue-light-links">
            <Link to="" className="blue-light-link buter">
              <motion.img
                src={buterImg}
                alt="buter-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <Link to="" className="blue-light-link shampanskoe">
              <motion.img
                src={shampanskoeImg}
                alt="shampanskoe-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <Link to="" className="blue-light-link salut">
              <motion.img
                src={salutImg}
                alt="salut-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <Link to="" className="blue-light-link characters">
              <motion.img
                src={charactersImg}
                alt="characters-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <Link to="" className="blue-light-link shar">
              <motion.img
                src={sharImg}
                alt="shar-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <Link to="" className="blue-light-link mandarin">
              <motion.img
                src={mandarinImg}
                alt="mandarin-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
            <Link to="" className="blue-light-link podarok">
              <motion.img
                src={podarokImg}
                alt="podarok-img"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            </Link>
          </div>
        </MouseParallaxChild>

        {/* <motion.div
            className="blue-light-link-container"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3, delay: 1 } }}
          > */}
        {/* <MouseParallaxChild factorX={0.3} factorY={0.3}>
              <Link to="game">
                <motion.img
                  src={titleImg}
                  alt="title-img"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </Link>
            </MouseParallaxChild> */}
        {/* </motion.div> */}
      </motion.div>
      {/* </MouseParallaxChild> */}
    </MouseParallaxContainer>
  );
};

export default BlueLightPage;
