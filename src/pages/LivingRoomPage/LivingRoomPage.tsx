import { type JSX, useMemo, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import { firefliesData } from '../../data/fireflyData';

import type { FireflyInterface } from '../../interfaces/fireflyInterface';

import Firefly from '../../components/Firefly/Firefly';

import './livingRoomPage.scss';

const LivingRoomPage = (): JSX.Element => {
  const [isTvHovered, setIsTvHovered] = useState(false);
  const [isTvTapped, setIsTvTapped] = useState(false);
  const [isTableHovered, setIsTableHovered] = useState(false);
  const [isTableTapped, setIsTableTapped] = useState(false);
  const [isNewspaperVisible, setIsNewspaperVisible] = useState(false);

  const handleTvHover = () => {
    setIsTvHovered((prev) => !prev);
  };

  const handleTvTap = () => {
    setIsTvTapped((prev) => !prev);
  };

  const handleTableHover = () => {
    setIsTableHovered((prev) => !prev);
  };

  const handleTableTap = () => {
    setIsTableTapped((prev) => !prev);
    setIsNewspaperVisible(true);
  };

  const memoizedFireflies = useMemo(
    () =>
      firefliesData.map((firefly: FireflyInterface) => (
        <Firefly key={firefly.id} id={firefly.id} color={firefly.color} />
      )),
    []
  );

  return (
    <section className="living-room-page-container">
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{
          height: '100%',
          backdropFilter: isNewspaperVisible ? 'blur(3px)' : 'none',
        }}
      >
        <MouseParallaxChild
          factorX={0.4}
          factorY={0.05}
          className="table-image"
          style={{
            transform: `scale(${isTableTapped ? 0.98 : isTableHovered ? 1.05 : 1})`,
            transition: 'transform 0.3s ease',
          }}
        />
        <motion.div
          className="tv-image"
          animate={{
            scale: isTvTapped ? 0.98 : isTvHovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </MouseParallaxContainer>
      <Link
        to="/tv"
        className="tv-click-area"
        onMouseDown={handleTvTap}
        onMouseUp={handleTvTap}
        onMouseEnter={handleTvHover}
        onMouseLeave={handleTvHover}
        title="Переключить передачу"
      />
      <div
        className="table-click-area"
        onMouseDown={handleTableTap}
        onMouseUp={handleTableTap}
        onMouseEnter={handleTableHover}
        onMouseLeave={handleTableHover}
        title="Открыть программу"
      />
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
          backdropFilter: isNewspaperVisible ? 'blur(3px)' : 'none',
        }}
      >
        {memoizedFireflies}
      </MouseParallaxContainer>
      <motion.div
        className="newspaper-image"
        animate={{
          translateY: isNewspaperVisible ? 0 : '200%',
          opacity: isNewspaperVisible ? 1 : 0,
        }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsNewspaperVisible(false)}
      />
    </section>
  );
};

export default LivingRoomPage;
