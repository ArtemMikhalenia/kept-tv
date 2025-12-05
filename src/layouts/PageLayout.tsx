import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { motion } from 'motion/react';

import detectiveGameBgImg from '../assets/images/backgrounds/detective-game/game_bg.webp';
import detectiveBgImg from '../assets/images/backgrounds/detective-game/start_bg.webp';
import guessSongBgImg from '../assets/images/backgrounds/guess-song/slide_bg.png';

const PageLayout = () => {
  const location = useLocation();
  const [background, setBackground] = useState('');
  const currentLocation: string = location.pathname.slice(1);

  useEffect(() => {
    if (currentLocation === 'tv') {
    } else if (
      currentLocation === 'tv/guess-song' ||
      currentLocation === 'tv/guess-song/game'
    ) {
      setBackground(guessSongBgImg);
    } else if (currentLocation === 'tv/detective') {
      setBackground(detectiveBgImg);
    } else if (currentLocation === 'tv/detective/game') {
      setBackground(detectiveGameBgImg);
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
        padding: '5vh 15vw 5vh 5vw',
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
