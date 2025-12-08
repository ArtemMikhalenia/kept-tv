import { type JSX, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router';

import { motion } from 'motion/react';

import { switchBtnData } from '../data/switchBtnData';

import type { SwitchBtnInterface } from '../interfaces/switchBtnInterface';

import BigBtn from '../components/BigBtn/BigBtn';
import SwitchBtn from '../components/SwitchBtn/SwitchBtn';

import './tvLayoutStyles.scss';

const TVLayout = (): JSX.Element => {
  const location = useLocation();
  const currentLocation: string = location.pathname.slice(1);
  const [linkToPrevPage, setLinkToPrevPage] = useState('');
  const [linkToNextPage, setLinkToNextPage] = useState('');

  const guessSongLinks = [
    'tv/guess-song/round1',
    'tv/guess-song/round2',
    'tv/guess-song/round3',
    'tv/guess-song/round4',
    'tv/guess-song/round5',
    'tv/guess-song/round6',
  ];

  useEffect(() => {
    if (currentLocation === 'tv/guess-song-video') {
      setLinkToNextPage('/tv/guess-song');
    } else if (guessSongLinks.includes(currentLocation)) {
      setLinkToPrevPage('/tv/guess-song');
    } else if (currentLocation === 'tv/guess-song') {
      setLinkToNextPage('/tv/guess-song/results');
    } else if (currentLocation === 'tv/detective-video') {
      setLinkToNextPage('/tv/detective');
    }
  }, [location]);
  return (
    <section className="tv-container">
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
            <Link to={linkToPrevPage}>&#9668;</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="switch-channel-btn"
          >
            <Link to={linkToNextPage}>&#9658;</Link>
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
