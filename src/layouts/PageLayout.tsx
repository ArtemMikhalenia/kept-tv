import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { motion } from 'motion/react';

import detectiveGameBgImg from '../assets/images/backgrounds/detective-game/game_bg.webp';
import detectiveBgImg from '../assets/images/backgrounds/detective-game/start_bg.webp';
import factsMainBgImg from '../assets/images/backgrounds/facts-page/color_background.jpg';
import guessSongMainBgImg from '../assets/images/backgrounds/guess-song/main_bg.jpg';
import houseBgImg from '../assets/images/backgrounds/house-page/house_background.jpg';
import howDoesItWorkBgImg from '../assets/images/backgrounds/how-does-it-work/1.png';
import resultsBgImg from '../assets/images/backgrounds/results-page/background.png';
import houseGameBgImg from '../assets/images/house_images/house_game_bg.jpg';

const PageLayout = () => {
  const location = useLocation();
  const [background, setBackground] = useState('');
  const currentLocation: string = location.pathname.slice(1);

  const guessSongLinks = [
    'tv/guess-song',
    'tv/guess-song/round1',
    'tv/guess-song/round2',
    'tv/guess-song/round3',
    'tv/guess-song/round4',
    'tv/guess-song/round5',
  ];

  const factsLinks = ['tv/facts', 'tv/facts/game'];

  const howDoesItWorkLinks = [
    'tv/how-does-it-work',
    'tv/how-does-it-work/game',
  ];

  const houseGameLinks = ['tv/house/game', 'tv/house/final'];

  const resultsLinks = ['tv/detective/results'];

  useEffect(() => {
    if (currentLocation === 'tv') {
    } else if (guessSongLinks.includes(currentLocation)) {
      setBackground(guessSongMainBgImg);
    } else if (currentLocation === 'tv/detective') {
      setBackground(detectiveBgImg);
    } else if (currentLocation === 'tv/detective/game') {
      setBackground(detectiveGameBgImg);
    } else if (factsLinks.includes(currentLocation)) {
      setBackground(factsMainBgImg);
    } else if (howDoesItWorkLinks.includes(currentLocation)) {
      setBackground(howDoesItWorkBgImg);
    } else if (currentLocation === 'tv/house') {
      setBackground(houseBgImg);
    } else if (houseGameLinks.includes(currentLocation)) {
      setBackground(houseGameBgImg);
    } else if (resultsLinks.includes(currentLocation)) {
      setBackground(resultsBgImg);
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
        padding: '3vh 13vw 3vh 3vw',
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
