import type { JSX } from 'react';

import type { fireflyInterface } from '../../interfaces/fireflyInterface';

const Firefly = ({ id, top, left, color }: fireflyInterface): JSX.Element => {
  return (
    <div
      className="firefly"
      id={id}
      style={{
        top: `${top}%`,
        left: `${left}%`,
        backgroundColor: color,
        boxShadow: `0px 0px 10px 10px ${color}`,
        animationDuration: `${Math.random() * 3 + 2}s`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    ></div>
  );
};

export default Firefly;
