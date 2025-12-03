import { type JSX, Suspense, lazy } from 'react';
import { TailSpin } from 'react-loading-icons';
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useLocation,
} from 'react-router';

import { AnimatePresence } from 'motion/react';

import { guessSongData } from '../../data/guessSongData';

import PageLayout from '../../layouts/PageLayout';
import TVLayout from '../../layouts/TVLayout';
import Channel2Page from '../../pages/Channel2/Channel2Page';
import GreetingsPage from '../../pages/GreetingsPage/GreetingsPage';
import GuessSongPage from '../../pages/GuessSongPage/GuessSongPage';
import LivingRoomPage from '../../pages/LivingRoomPage/LivingRoomPage';
import VideoPage from '../../pages/VideoPage/VideoPage';

const GuessSongGame = lazy(() => import('../GuessSongGame/GuessSongGame'));

// const AnimatedRoutes = (): JSX.Element => {
//   const location = useLocation();

//   // const getRouteKey = (pathname: string) => {
//   //   const segments = pathname.split('/').filter((segment) => segment !== '');
//   //   if (segments.length <= 1) return pathname;
//   //   return `/${segments.slice(0, 2).join('/')}`;
//   // };

//   // const routeKey = getRouteKey(location.pathname);

//   return (
//     <AnimatePresence mode="wait">
//       <Routes location={location} key={location.pathname}>
//         <Route path="/" element={<GreetingsPage />} />
//         <Route path="/livingroom" element={<LivingRoomPage />} />
//         <Route path="/tv" element={<TVLayout />}>
//           <Route path="channel1" element={<Channel1Page />} />
//           <Route path="channel2" element={<Channel2Page />} />
//         </Route>
//       </Routes>
//     </AnimatePresence>
//   );
// };

const AnimatedOutlet = (): JSX.Element => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Outlet key={location.pathname} />
    </AnimatePresence>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AnimatedOutlet />}>
      <Route path="/" element={<GreetingsPage />} />
      <Route path="/living-room" element={<LivingRoomPage />} />
      <Route path="/tv" element={<TVLayout />}>
        <Route path="guess-song" element={<PageLayout />}>
          <Route index element={<GuessSongPage />} />
          <Route
            path="guess-page-video"
            element={
              <VideoPage
                url="https://youtu.be/L5s1twj6SqQ?si=6lapbroaVF4R3yn0"
                link="/guess-song"
              />
            }
          />
          <Route
            path={'game'}
            loader={() => guessSongData}
            element={
              <Suspense fallback={<TailSpin />}>
                <GuessSongGame />
              </Suspense>
            }
          />
        </Route>

        {/* <Route
            path="nowpage"
            element={
              <NowPage title="Поиск победителя" url="/parkgame/nextpage" />
            }
          /> */}
      </Route>

      <Route path="channel2" element={<Channel2Page />} />
    </Route>
  )
);

const AnimatedRoutes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AnimatedRoutes;
