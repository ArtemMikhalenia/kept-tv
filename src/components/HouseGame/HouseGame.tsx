import { type JSX, useEffect, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';
import Snowfall from 'react-snowfall';

import { motion } from 'motion/react';

import type { HouseInterface } from '../../interfaces/houseInterface';

import houseTopImg from '../../assets/images/house_images/houses/maket_doma.webp';
import ktoTamSound from '../../assets/sounds/house_game/kto_tam_sound.mp3';
import { useSound } from '../../hooks/useSound';
import type { HouseDataTypes } from '../../types/houseTypes';
import './houseGameStyles.scss';

const HouseGame = (): JSX.Element => {
  const housesData = useLoaderData() as HouseDataTypes;
  const [houses, setHouses] = useState<HouseInterface[]>(housesData);
  const { play: ktoTam } = useSound(ktoTamSound, 0.1);

  useEffect(() => {
    setHouses(housesData);
  }, [housesData]);

  const handleTopClick = (id: number): void => {
    setHouses((prevHouse): HouseInterface[] =>
      prevHouse.map((house): HouseInterface => {
        if (house.id !== id) return house;
        if (!house.topHouseClicked) {
          return {
            ...house,
            topHouseClicked: true,
            bottomHouseClicked: false,
            movieImgClicked: false,
          };
        }
        return house;
      })
    );
    ktoTam();
  };

  const handleBottomClick = (id: number): void => {
    setHouses((prevHouse): HouseInterface[] =>
      prevHouse.map((house): HouseInterface => {
        if (house.id !== id) return house;

        if (house.topHouseClicked && !house.bottomHouseClicked) {
          return {
            ...house,
            bottomHouseClicked: true,
            movieImgClicked: true,
          };
        } else if (house.bottomHouseClicked) {
          return {
            ...house,
            movieImgClicked: !house.movieImgClicked,
          };
        }

        return house;
      })
    );
  };

  const handleMovieClick = (id: number): void => {
    setHouses((prevHouse): HouseInterface[] =>
      prevHouse.map((house): HouseInterface => {
        if (house.id !== id) return house;
        return {
          ...house,
          movieImgClicked: false,
        };
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
        <div className="house-grid-container">
          {houses.map(
            (house: HouseInterface, i: number = 1): JSX.Element => (
              <motion.div
                className="grid-item"
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="grid-item-number">{house.id}</span>
                <motion.img
                  className={
                    house.topHouseClicked
                      ? 'grid-item-top-house clicked'
                      : 'grid-item-top-house'
                  }
                  src={houseTopImg}
                  alt="house-top"
                  onClick={(): void => handleTopClick(house.id)}
                />
                {house.topHouseClicked && (
                  <img
                    className={
                      house.bottomHouseClicked
                        ? 'grid-item-bottom-house clicked'
                        : 'grid-item-bottom-house'
                    }
                    src={house.bottomHouseSrc}
                    alt="house-bottom-img"
                    onClick={(): void => handleBottomClick(house.id)}
                  />
                )}
              </motion.div>
            )
          )}
          <div className="movies">
            {houses.map(
              (house: HouseInterface, i: number = 1) =>
                house.movieImgClicked && (
                  <motion.img
                    key={i}
                    className={
                      house.movieImgClicked ? 'item-movie active' : 'item-movie'
                    }
                    src={house.movieImgSrc}
                    alt="movie-img"
                    onClick={(): void => handleMovieClick(house.id)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileTap={{ scale: 0.95 }}
                  />
                )
            )}
          </div>
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

export default HouseGame;
