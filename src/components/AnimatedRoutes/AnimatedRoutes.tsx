import type { JSX } from 'react';
import { Route, Routes, useLocation } from 'react-router';

import { AnimatePresence } from 'motion/react';

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
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
