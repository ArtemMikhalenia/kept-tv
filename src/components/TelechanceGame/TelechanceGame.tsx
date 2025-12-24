import { EffectFade, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { type JSX, useEffect, useMemo, useState } from 'react';
import 'react-parallax-mouse';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { useLoaderData } from 'react-router';

import { lightsTelechanceData } from '../../data/telechanceData';

import type { LightInterface } from '../../interfaces/lightInterface';
import type { TelechanceInterface } from '../../interfaces/telechanceInterface';

import type { TelechanceDataTypes } from '../../types/telechanceTypes';
import Light from '../Light/Light';
import './telechanceGameStyles.scss';

const TelechanceGameSlide = ({
  background,
  isActive,
}: {
  background: TelechanceInterface;
  isActive: boolean;
}): JSX.Element => {
  return (
    <div
      className={isActive ? 'content animation' : 'content'}
      style={{
        backgroundImage: `url(${background.backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    />
  );
};

const TelechanceGame = (): JSX.Element => {
  const image = useLoaderData() as TelechanceDataTypes;
  const [images, setImages] = useState<TelechanceInterface[]>(image);

  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    setImages(image);
  }, []);

  const memoizedLights = useMemo(
    () =>
      lightsTelechanceData.map(
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
      ),
    []
  );

  return (
    <MouseParallaxContainer
      globalFactorX={0.1}
      globalFactorY={0.1}
      containerStyle={{ width: '100%', height: '100%' }}
    >
      {memoizedLights}
      <MouseParallaxChild
        factorX={0.2}
        factorY={0.5}
        className="telechance-game-container"
      >
        <Swiper
          className="telechance-swiper"
          effect={'fade'}
          grabCursor={true}
          direction="vertical"
          modules={[EffectFade, Keyboard]}
          keyboard={{
            enabled: true,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map(
            (element, i): JSX.Element => (
              <SwiperSlide key={i} className="telechance-slide-content">
                <TelechanceGameSlide
                  isActive={i === activeIndex}
                  background={element}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};

export default TelechanceGame;
