import type { JSX } from 'react';

import type { FireflyInterface } from '../../interfaces/fireflyInterface';

const Firefly = ({ id, color }: FireflyInterface): JSX.Element => {
  return (
    <div
      className="firefly"
      id={id}
      style={{
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        backgroundColor: color,
        boxShadow: `0px 0px 10px 10px ${color}`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    />
  );
};

export default Firefly;
