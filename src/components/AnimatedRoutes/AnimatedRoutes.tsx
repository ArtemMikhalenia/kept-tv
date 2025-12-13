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

import { detectiveData } from '../../data/detectiveData';
import { factsData } from '../../data/factsData';
import {
  guessSongDataRound1,
  guessSongDataRound2,
  guessSongDataRound4,
  guessSongDataRound5,
} from '../../data/guessSongData';

import thumbnailDetectiveImg from '../../assets/images/backgrounds/detective-game/thumbnail.jpg';
import thumbnailFactsImg from '../../assets/images/backgrounds/facts-page/thumbnail.jpg';
import thumbnailGuessSongImg from '../../assets/images/backgrounds/guess-song/thumbnail.jpg';
import PageLayout from '../../layouts/PageLayout';
import TVLayout from '../../layouts/TVLayout';
import DetectivePage from '../../pages/DetectivePage/DetectivePage';
import FactsPage from '../../pages/FactsPage/FactsPage';
import GreetingsPage from '../../pages/GreetingsPage/GreetingsPage';
import GuessSongPage from '../../pages/GuessSongPage/GuessSongPage';
import LivingRoomPage from '../../pages/LivingRoomPage/LivingRoomPage';
import ResultsPage from '../../pages/ResultsPage/ResultsPage';
import VideoPage from '../../pages/VideoPage/VideoPage';

const GuessSongGameRound1 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound1')
);
const GuessSongGameRound2 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound2')
);
const GuessSongGameRound4 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound4')
);
const GuessSongGameRound5 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound5')
);
const DetectiveGame = lazy(() => import('../DetectiveGame/DetectiveGame'));
const FactsGame = lazy(() => import('../FactsGame/FactsGame'));

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
        <Route
          index
          path="guess-song-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145728297"
              thumbnail={thumbnailGuessSongImg}
            />
          }
        />
        <Route path="guess-song" element={<PageLayout />}>
          <Route index element={<GuessSongPage />} />
          <Route
            path="round1"
            loader={() => guessSongDataRound1}
            element={
              <Suspense fallback={<TailSpin />}>
                <GuessSongGameRound1 />
              </Suspense>
            }
          />
          <Route
            path="round2"
            loader={() => guessSongDataRound2}
            element={
              <Suspense fallback={<TailSpin />}>
                <GuessSongGameRound2 />
              </Suspense>
            }
          />
          <Route
            path="round4"
            loader={() => guessSongDataRound4}
            element={
              <Suspense fallback={<TailSpin />}>
                <GuessSongGameRound4 />
              </Suspense>
            }
          />
          <Route
            path="round5"
            loader={() => guessSongDataRound5}
            element={
              <Suspense fallback={<TailSpin />}>
                <GuessSongGameRound5 />
              </Suspense>
            }
          />
          <Route
            path="results"
            element={<ResultsPage title="Поиск победителя" />}
          />
        </Route>
        <Route
          index
          path="detective-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145728225"
              thumbnail={thumbnailDetectiveImg}
            />
          }
        />
        <Route path="detective" element={<PageLayout />}>
          <Route index element={<DetectivePage />} />
          <Route
            path={'game'}
            loader={() => detectiveData}
            element={
              <Suspense fallback={<TailSpin />}>
                <DetectiveGame />
              </Suspense>
            }
          />
          <Route
            path="results"
            element={<ResultsPage title="Поиск детектива" />}
          />
        </Route>
        <Route
          index
          path="facts-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145728271"
              thumbnail={thumbnailFactsImg}
            />
          }
        />
        <Route path="facts" element={<PageLayout />}>
          <Route index element={<FactsPage />} />
          <Route
            path={'game'}
            loader={() => factsData}
            element={
              <Suspense fallback={<TailSpin />}>
                <FactsGame />
              </Suspense>
            }
          />
          <Route
            path="results"
            element={<ResultsPage title="Поиск победителя" />}
          />
        </Route>
      </Route>
    </Route>
  )
);

const AnimatedRoutes = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default AnimatedRoutes;
