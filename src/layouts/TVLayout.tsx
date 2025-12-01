import type { JSX } from 'react';
import { Outlet } from 'react-router';

import { switchBtnData } from '../data/switchBtnData';

import type { switchBtnInterface } from '../interfaces/switchBtnInterface';

import BigBtn from '../components/BigBtn/BigBtn';
import SwitchBtn from '../components/SwitchBtn/SwitchBtn';

import './tvLayoutStyles.scss';

const TVLayout = (): JSX.Element => {
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
            (item: switchBtnInterface, i: number): JSX.Element => (
              <SwitchBtn key={i} number={item.number} link={item.link} />
            )
          )}
        </div>
      </div>
      <div className="tv-layout">
        <Outlet />
      </div>
    </section>
  );
};

export default TVLayout;
