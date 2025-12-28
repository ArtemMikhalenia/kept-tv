import { type JSX } from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import telechanceLogoImg from '../../assets/images/backgrounds/telechance/logo.webp';
import './telechancePageStyles.scss';

const TelechancePage = (): JSX.Element => {
  return (
    <motion.div
      className="telechance-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="rotating-bg" />
      <motion.div
        className="telechance-button-container"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 1 },
        }}
        exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
      >
        <Link to="game" className="telechance-button-link">
          <motion.div
            className="telechance-button-start"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={telechanceLogoImg} alt="telechance-logo-image" />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default TelechancePage;
