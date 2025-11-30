import type { JSX } from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import type { switchBtnInterface } from '../../interfaces/switchBtnInterface';

const SwitchBtn = ({ number, link }: switchBtnInterface): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="switch-channel-btn"
    >
      <Link className="switch-btn-number" to={link}>
        {number}
      </Link>
    </motion.div>
  );
};

export default SwitchBtn;
