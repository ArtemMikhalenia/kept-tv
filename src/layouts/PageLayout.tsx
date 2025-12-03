import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { motion } from 'motion/react';

import guessSongBgImg from '../assets/images/backgrounds/guess-song/slide_bg.png';
import notFoundImg from '../assets/images/backgrounds/tv/not-found.jpg';

const PageLayout = () => {
  const location = useLocation();
  const [background, setBackground] = useState('');
  const currentLocation: string = location.pathname.slice(1);

  useEffect(() => {
    if (currentLocation === 'tv') {
      setBackground(notFoundImg);
    } else if (
      currentLocation === 'tv/guess-song' ||
      currentLocation === 'tv/guess-song/game'
    ) {
      setBackground(guessSongBgImg);
    }
  }, [currentLocation]);
  return (
    <motion.div
      className="page-layout"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.2 } }}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        padding: '10vh 15vw 10vh 5vw',
        backgroundImage: `url("${background}")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Outlet />
    </motion.div>
  );
};

export default PageLayout;
