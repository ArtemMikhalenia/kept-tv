import { type JSX, useState } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

import { motion } from 'motion/react';

import Firefly from '../../components/Firefly/Firefly';
import { firefliesData } from '../../data/fireflyData';
import type { fireflyInterface } from '../../interfaces/fireflyInterface';
import './livingRoomPage.scss';

const LivingRoomPage = () => {
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

  return (
    <section className="living-room-page-container">
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{ height: '100%' }}
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
          animate={{ scale: isTvTapped ? 0.98 : isTvHovered ? 1.03 : 1 }}
          transition={{ duration: 0.3 }}
        />
      </MouseParallaxContainer>
      <div
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
        }}
      >
        {firefliesData.map(
          (firefly: fireflyInterface): JSX.Element => (
            <MouseParallaxChild
              style={{ width: '100%', height: '100%' }}
              factorX={0.4}
              factorY={0.05}
              key={firefly.id}
            >
              <Firefly
                id={firefly.id}
                top={firefly.top}
                left={firefly.left}
                color={firefly.color}
              />
            </MouseParallaxChild>
          )
        )}
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
