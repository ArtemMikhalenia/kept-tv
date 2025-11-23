import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from 'react-parallax-mouse';
import Snowfall from 'react-snowfall';

import './greetingsPage.scss';

const GreetingsPage = () => {
  return (
    <section className="greetings-page-container">
      <Snowfall
        color="rgba(255,255,255,0.6)"
        snowflakeCount={500}
        speed={[1, 5]}
        radius={[1, 1.5]}
      />
      <MouseParallaxContainer
        globalFactorX={0.1}
        globalFactorY={0.1}
        containerStyle={{ height: '100%' }}
      >
        <MouseParallaxChild factorX={0.1} factorY={0.1}>
          <div className="greetings-page-content">
            <h1>С Новым годом!</h1>
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </section>
  );
};

export default GreetingsPage;
