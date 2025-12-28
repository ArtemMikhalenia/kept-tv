import type { JSX } from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import type { BigBtnInterface } from '../../interfaces/bigBtnInterface';

const BigBtn = ({ id, link, title }: BigBtnInterface): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="big-btn"
      id={id}
    >
      <Link className="big-btn-link" title={title} to={link} />
    </motion.div>
  );
};

export default BigBtn;
