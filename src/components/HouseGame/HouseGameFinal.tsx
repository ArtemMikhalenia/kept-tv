import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

import type { HouseFinalInterface } from '../../interfaces/houseInterface';

import houseTopImg from '../../assets/images/house_images/houses/maket_doma.webp';
import gradusnikImg from '../../assets/images/house_images/results/gradusnik.webp';
import titleFinalImg from '../../assets/images/house_images/results/title_final.webp';
import type { HouseFinalDataTypes } from '../../types/houseTypes';
import './houseGameStyles.scss';

const HouseGameFinal = (): JSX.Element => {
  const houseDataFinal = useLoaderData() as HouseFinalDataTypes;
  const [houses, setHouses] = useState<HouseFinalInterface[]>(houseDataFinal);

  useEffect(() => {
    setHouses(houseDataFinal);
  }, [houseDataFinal]);

  const handleClick = (id: number): void => {
    setHouses((prevHouse): HouseFinalInterface[] =>
      prevHouse.map((house): HouseFinalInterface => {
        if (house.id !== id) return house;
        if (house.id === id) {
          return {
            ...house,
            houseClicked: !house.houseClicked,
          };
        }
        return house;
      })
    );
  };

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      className="house-game-container"
    >
      <MouseParallaxChild
        factorX={0.2}
        factorY={0.2}
        style={{ height: '100%' }}
      >
        <div className="house-final-grid-container">
          <motion.div
            className="house-final-title"
            initial={{ x: '-100%' }}
            animate={{ x: 0, transition: { delay: 1 } }}
          >
            <img src={titleFinalImg} alt="title-final" />
          </motion.div>
          <motion.div
            className="house-final-houses"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            {houses.map(
              (house: HouseFinalInterface, i: number = 1): JSX.Element => (
                <motion.div
                  className="grid-item"
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className="grid-item-number"
                    onClick={(): void => handleClick(house.id)}
                  >
                    {house.id}
                  </span>
                  <motion.img
                    className={
                      house.houseClicked ? 'top-house clicked' : 'top-house'
                    }
                    src={houseTopImg}
                    alt="house-top"
                    onClick={(): void => handleClick(house.id)}
                  />
                  {house.houseClicked && (
                    <img
                      className="grid-item-bottom-image"
                      src={house.gifSrc}
                      alt="house-bottom-img"
                      onClick={(): void => handleClick(house.id)}
                    />
                  )}
                </motion.div>
              )
            )}
          </motion.div>
          <motion.div
            className="house-final-gradusnik"
            initial={{ y: '200%', opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
          >
            <img src={gradusnikImg} alt="title-final" />
          </motion.div>
        </div>
      </MouseParallaxChild>
      <Snowfall
        color="rgba(255,255,255,0.5)"
        snowflakeCount={200}
        speed={[1, 1]}
        radius={[2, 4]}
        style={{ zIndex: -1 }}
      />
    </MouseParallaxContainer>
  );
};

export default HouseGameFinal;
