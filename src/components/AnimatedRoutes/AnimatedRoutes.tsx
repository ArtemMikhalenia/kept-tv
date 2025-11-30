import type { JSX } from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { AnimatePresence } from 'motion/react';

import TVLayout from '../../layouts/TVLayout';
import Channel1Page from '../../pages/Channel1/Channel1Page';
import Channel2Page from '../../pages/Channel2/Channel2Page';
import GreetingsPage from '../../pages/GreetingsPage/GreetingsPage';
import LivingRoomPage from '../../pages/LivingRoomPage/LivingRoomPage';

const AnimatedRoutes = (): JSX.Element => {
  const location = useLocation();

  // const getRouteKey = (pathname: string) => {
  //   const segments = pathname.split('/').filter((segment) => segment !== '');
  //   if (segments.length <= 1) return pathname;
  //   return `/${segments.slice(0, 2).join('/')}`;
  // };

  // const routeKey = getRouteKey(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<GreetingsPage />} />
        <Route path="/livingroom" element={<LivingRoomPage />} />
        <Route path="/tv" element={<TVLayout />}>
          <Route path="channel1" element={<Channel1Page />} />
          <Route path="channel2" element={<Channel2Page />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
