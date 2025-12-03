import {
  type JSX,
  // useEffect, useState
} from 'react';
import {
  Link,
  Outlet,
  // useLocation
} from 'react-router';

import { motion } from 'motion/react';

import { switchBtnData } from '../data/switchBtnData';

import type { SwitchBtnInterface } from '../interfaces/switchBtnInterface';

import BigBtn from '../components/BigBtn/BigBtn';
import SwitchBtn from '../components/SwitchBtn/SwitchBtn';

// import guessSongBgImg from '../assets/images/backgrounds/guess-song/slide_bg.png';
// import notFoundImg from '../assets/images/backgrounds/tv/not-found.jpg';
import './tvLayoutStyles.scss';

const TVLayout = (): JSX.Element => {
  // const location = useLocation();
  // const [background, setBackground] = useState('');
  // const currentLocation: string = location.pathname.slice(1);

  // useEffect(() => {
  //   if (currentLocation === 'tv') {
  //     setBackground(notFoundImg);
  //   } else if (currentLocation === 'tv/guess-song') {
  //     setBackground(guessSongBgImg);
  //   }
  // }, [location]);
  return (
    <section
      className="tv-container"
      // style={{
      //   backgroundImage: `url("${background}")`,
      // }}
    >
      <div className="tv-frame" />
      <div className="grid-buttons">
        <div className="big-btn-container">
          {[1, 2].map(
            (item: number): JSX.Element => (
              <BigBtn key={item} />
            )
          )}
        </div>
        <div className="switch-channel-btn-container">
          {switchBtnData.map(
            (item: SwitchBtnInterface, i: number): JSX.Element => (
              <SwitchBtn key={i} number={item.number} link={item.link} />
            )
          )}
        </div>
        <div className="arrow-btn-container">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="switch-channel-btn"
          >
            <Link to={''}>&#9668;</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="switch-channel-btn"
          >
            <Link to={''}>&#9658;</Link>
          </motion.div>
        </div>
      </div>
      <div className="tv-layout">
        <Outlet />
      </div>
    </section>
  );
};

export default TVLayout;
