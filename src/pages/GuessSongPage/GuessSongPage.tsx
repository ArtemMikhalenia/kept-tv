import { type JSX } from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react';

// import { useLoaderData } from 'react-router';

// import type { guessSongInterface } from '../../interfaces/guessSongInterface';

import './guessSongPageStyles.scss';

const GuessSongPage = (): JSX.Element => {
  return (
    <motion.div
      className="guess-song-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <motion.div
        className="guess-button-container"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
      >
        <Link to="game" className="guess-button-link">
          <motion.span
            className="guess-button-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{
              y: '10px',
              boxShadow: '0 5px 3px 3px rgba(255,255,255,1)',
            }}
          >
            Отправиться в мир песен и веселья
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default GuessSongPage;
