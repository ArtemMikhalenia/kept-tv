import type { JSX } from 'react';

import type { SparkleInterface } from '../../interfaces/sparkleInterface';

const Sparkle = ({ width, height }: SparkleInterface): JSX.Element => {
  const animationDelay = `${Math.random() * 10}s`;
  return (
    <svg
      className="spark"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      style={{
        top: `${Math.random() * 90}%`,
        left: `${Math.random() * 90}%`,
      }}
    >
      <g id="copy-1" className="group">
        <g className="large" style={{ animationDelay: animationDelay }}>
          <path
            id="large"
            d="M41.25,40 L42.5,10 L43.75,40 L45,41.25 L75,42.5 L45,43.75 L43.75,45 L42.5,75 L41.25,45 L40,43.75 L10,42.5 L40,41.25z"
            fill="white"
          />
        </g>
        <g
          className="large1"
          transform="rotate(45)"
          style={{ animationDelay: animationDelay }}
        ></g>
        <g className="small" style={{ animationDelay: animationDelay }}>
          <path
            id="small"
            d="M41.25,40 L42.5,25 L43.75,40 L45,41.25 L60,42.5 L45,43.75 L43.75,45 L42.5,60 L41.25,45 L40,43.75 L25,42.5 L40,41.25z"
            fill="white"
          />
        </g>
      </g>
    </svg>
  );
};

export default Sparkle;
