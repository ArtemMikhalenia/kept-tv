import type { JSX } from 'react';

import { motion } from 'motion/react';

import santaIcon from '../../assets/images/icons/santa-hat.png';
import './resultsPage.scss';

const ResultsPage = ({ title }: { title: string }): JSX.Element => {
  return (
    <motion.div
      className="results-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="results-page-title-block">
        <motion.div
          className="results-page-title"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 1 },
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <img className="santa-hat" src={santaIcon} alt="front-santa-hat" />
          <h1>{title}</h1>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultsPage;
