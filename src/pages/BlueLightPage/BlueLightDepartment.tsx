import { type JSX } from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import type { BlueLightDepartmentInterface } from '../../interfaces/blueLightInterface';

import './blueLightPageStyles.scss';

const BlueLightDepartment = ({
  element,
}: {
  element: BlueLightDepartmentInterface;
}): JSX.Element => {
  const topText = 'Новогоднее поздравление';
  const topLetters = topText.split('');
  const bottomText = `${element.bottomText}`;
  const bottomLetters = bottomText.split('');

  return (
    <motion.div
      className="blue-light-department-links"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
    >
      <div className="top-department-text">
        <svg
          id="top-department-text-svg"
          width="690"
          height="690"
          viewBox="0 0 690 690"
        >
          <path
            id="textPath"
            d="M 90,345 A 230,230 0 0,1 600,345"
            fill="transparent"
          />

          <text>
            <textPath href="#textPath" startOffset="50%" textAnchor="middle">
              {topLetters.map((letter, i) => (
                <motion.tspan
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.1,
                  }}
                >
                  {letter}
                </motion.tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
      <div className="bottom-department-text">
        <svg
          id="bottom-department-text-svg"
          width="690"
          height="690"
          viewBox="0 0 690 690"
          style={{ marginTop: '-345px' }}
        >
          <path
            id="textPath1"
            d="M 90,345 A 230,230 0 0,0 600,345"
            fill="transparent"
          />
          <text>
            <textPath href="#textPath1" startOffset="50%" textAnchor="middle">
              {bottomLetters.map((letter, i) => (
                <motion.tspan
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 1,
                    delay: i * 0.2,
                  }}
                >
                  {letter}
                </motion.tspan>
              ))}
            </textPath>
          </text>
        </svg>
      </div>
      <motion.div
        className="department-link-container"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 1, delay: 2 } }}
      >
        <Link to="/tv/blue-light" className="blue-light-department-link">
          <motion.img
            className={element.className}
            src={element.image}
            alt="department-img"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default BlueLightDepartment;
