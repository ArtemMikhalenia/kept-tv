import type { JSX } from 'react';
import { Link } from 'react-router';

import { motion } from 'motion/react';

import type { SwitchBtnInterface } from '../../interfaces/switchBtnInterface';

const SwitchBtn = ({
  number,
  link,
  title,
}: SwitchBtnInterface): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="switch-channel-btn"
    >
      <Link className="switch-btn-number" title={title} to={link}>
        {number}
      </Link>
    </motion.div>
  );
};

export default SwitchBtn;
