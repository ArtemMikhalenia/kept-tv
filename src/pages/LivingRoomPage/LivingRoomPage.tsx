import { type JSX } from 'react';
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';

import Firefly from '../../components/Firefly/Firefly';
import { firefliesData } from '../../data/fireflyData';
import type { fireflyInterface } from '../../interfaces/fireflyInterface';
import './livingRoomPage.scss';

const LivingRoomPage = () => {
  return (
    <section className="living-room-page-container">
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{ height: '100%' }}
      >
        <MouseParallaxChild factorX={0.4} factorY={0.4}>
          <div className="greetings-page-content"></div>
        </MouseParallaxChild>
        <MouseParallaxChild
          className="table-image"
          factorX={0.15}
          factorY={0.05}
        />
        <div className="tv-image"></div>
      </MouseParallaxContainer>
      {firefliesData.map(
        (firefly: fireflyInterface): JSX.Element => (
          <Firefly
            key={firefly.id}
            id={firefly.id}
            top={firefly.top}
            left={firefly.left}
            color={firefly.color}
          />
        )
      )}
    </section>
  );
};

export default LivingRoomPage;
