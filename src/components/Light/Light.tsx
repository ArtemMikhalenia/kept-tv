import type { JSX } from 'react';

import type { LightInterface } from '../../interfaces/lightInterface';

const Light = ({ id, color }: LightInterface): JSX.Element => {
  return (
    <div
      className="light"
      id={id}
      style={{
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
        backgroundColor: color,
        animationDelay: `${Math.random() * 10}s`,
      }}
    />
  );
};

export default Light;
