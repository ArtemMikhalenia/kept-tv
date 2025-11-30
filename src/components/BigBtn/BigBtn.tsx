import type { JSX } from 'react';

import { motion } from 'motion/react';

import bigBtnImg from '../../assets/images/backgrounds/tv/big_btn_tv.png';

const BigBtn = (): JSX.Element => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="big-btn"
    >
      <img src={bigBtnImg} alt="big-btn-img" />
    </motion.div>
  );
};

export default BigBtn;
