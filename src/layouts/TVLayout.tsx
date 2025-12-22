import { type JSX, useCallback, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router';

import { motion } from 'motion/react';

import { bigBtnData } from '../data/bigBtnData';
import { switchBtnData } from '../data/switchBtnData';

import type { BigBtnInterface } from '../interfaces/bigBtnInterface';
import type { SwitchBtnInterface } from '../interfaces/switchBtnInterface';

import BigBtn from '../components/BigBtn/BigBtn';
import SwitchBtn from '../components/SwitchBtn/SwitchBtn';

import druzhkoSoundStart from '../assets/sounds/facts_game/druzhkoStartSound.mp3';
import { useSound } from '../hooks/useSound';
import './tvLayoutStyles.scss';

const TVLayout = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLocation: string = location.pathname.slice(1);
  const [linkToPrevPage, setLinkToPrevPage] = useState<string>('');
  const [linkToNextPage, setLinkToNextPage] = useState<string>('');
  const { play: playDruzhkoSound } = useSound(druzhkoSoundStart, 1);

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
    } else if (currentLocation === 'tv/detective/game') {
      setLinkToNextPage('/tv/detective/results');
    } else if (currentLocation === 'tv/facts-video') {
      setLinkToNextPage('/tv/facts');
    } else if (currentLocation === 'tv/facts') {
      setLinkToNextPage('/tv/facts/game');
    } else if (currentLocation === 'tv/how-does-it-work-video') {
      setLinkToNextPage('/tv/how-does-it-work');
    } else if (currentLocation === 'tv/house-video') {
      setLinkToNextPage('/tv/house');
    } else if (currentLocation === 'tv/house/game') {
      setLinkToNextPage('/tv/house/final');
    } else if (currentLocation === 'tv/malahov-video') {
      setLinkToNextPage('/tv/malahov');
    } else if (currentLocation === 'tv/blue-light-video') {
      setLinkToNextPage('/tv/blue-light');
    }
  }, [currentLocation]);

  const handleNextClickSound = useCallback(
    (e: React.MouseEvent) => {
      if (currentLocation === 'tv/facts') {
        e.preventDefault();
        playDruzhkoSound();
        setTimeout(() => {
          navigate(linkToNextPage);
        }, 2000);
      }
    },
    [currentLocation, playDruzhkoSound, linkToNextPage]
  );

  return (
    <section className="tv-container">
      <div className="tv-frame" />
      <div className="grid-buttons">
        <div className="big-btn-container">
          {bigBtnData.map(
            (item: BigBtnInterface): JSX.Element => (
              <BigBtn
                key={item.id}
                id={item.id}
                title={item.title}
                link={item.link}
              />
            )
          )}
        </div>
        <div className="switch-channel-btn-container">
          {switchBtnData.map(
            (item: SwitchBtnInterface, i: number): JSX.Element => (
              <SwitchBtn
                key={i}
                number={item.number}
                link={item.link}
                title={item.title}
              />
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
            <Link to={linkToNextPage} onClick={handleNextClickSound}>
              &#9658;
            </Link>
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
