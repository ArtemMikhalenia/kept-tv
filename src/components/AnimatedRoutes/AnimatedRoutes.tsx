import { type JSX, Suspense, lazy } from 'react';
import { TailSpin } from 'react-loading-icons';
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router';

import { AnimatePresence } from 'motion/react';

import { adGameData } from '../../data/adGameData';
import {
  blueLightLinksData,
  blueLightRoutingLinks,
} from '../../data/blueLightData';
import { detectiveData } from '../../data/detectiveData';
import { factsData } from '../../data/factsData';
import {
  guessSongDataRound1,
  guessSongDataRound2,
  guessSongDataRound3,
  guessSongDataRound4,
  guessSongDataRound5,
} from '../../data/guessSongData';
import { houseData, houseDataFinal } from '../../data/houseData';
import { howDoesItWorkData } from '../../data/howDoesItWorkData';
import { malahovData } from '../../data/malahovData';
import { telechanceData } from '../../data/telechanceData';

import type { BlueLightDepartmentInterface } from '../../interfaces/blueLightInterface';

import thumbnailBlueLightImg from '../../assets/images/backgrounds/blue-light-page/thumbnail.webp';
import thumbnailDetectiveImg from '../../assets/images/backgrounds/detective-game/thumbnail.webp';
import thumbnailFactsImg from '../../assets/images/backgrounds/facts-page/thumbnail.webp';
import thumbnailGuessSongImg from '../../assets/images/backgrounds/guess-song/thumbnail.webp';
import thumbnailHouseImg from '../../assets/images/backgrounds/house-page/thumbnail.webp';
import thumbnailHowDoesItWorkImg from '../../assets/images/backgrounds/how-does-it-work/thumbnail.webp';
import thumbnailMalahovImg from '../../assets/images/backgrounds/malahov-page/thumbnail.webp';
import thumbnailTelechanceImg from '../../assets/images/backgrounds/telechance/thumbnail.webp';
import PageLayout from '../../layouts/PageLayout';
import TVLayout from '../../layouts/TVLayout';
import AdPage from '../../pages/AdPage/AdPage';
import BirthdayPage from '../../pages/BirthdayPage/BirthdayPage';
import BlueLightPage from '../../pages/BlueLightPage/BlueLightPage';
import DetectivePage from '../../pages/DetectivePage/DetectivePage';
import FactsPage from '../../pages/FactsPage/FactsPage';
import GreetingsPage from '../../pages/GreetingsPage/GreetingsPage';
import GuessSongPage from '../../pages/GuessSongPage/GuessSongPage';
import HousePage from '../../pages/HousePage/HousePage';
import HowDoesItWorkPage from '../../pages/HowDoesItWorkPage/HowDoesItWorkPage';
import LivingRoomPage from '../../pages/LivingRoomPage/LivingRoomPage';
import LunchPage from '../../pages/LunchPage/LunchPage';
import MalahovPage from '../../pages/MalahovPage/MalahovPage';
import NewYearRelaxPage from '../../pages/NewYearRelaxPage/NewYearRelaxPage';
import ResultsPage from '../../pages/ResultsPage/ResultsPage';
import TelechancePage from '../../pages/TelechancePage/TelechancePage';
import VideoPage from '../../pages/VideoPage/VideoPage';

const GuessSongGameRound1 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound1')
);
const GuessSongGameRound2 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound2')
);
const GuessSongGameRound3 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound3')
);
const GuessSongGameRound4 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound4')
);
const GuessSongGameRound5 = lazy(
  () => import('../GuessSongGame/GuessSongGameRound5')
);
const DetectiveGame = lazy(() => import('../DetectiveGame/DetectiveGame'));
const FactsGame = lazy(() => import('../FactsGame/FactsGame'));
const HowDoesItWorkGame = lazy(
  () => import('../HowDoesItWorkGame/HowDoesItWorkGame')
);
const HouseGame = lazy(() => import('../HouseGame/HouseGame'));
const HouseGameFinal = lazy(() => import('../HouseGame/HouseGameFinal'));

const MalahovGame = lazy(() => import('../MalahovGame/MalahovGame'));
const TelechanceGame = lazy(() => import('../TelechanceGame/TelechanceGame'));

const BlueLightLinks = lazy(
  () => import('../../pages/BlueLightPage/BlueLightLinks')
);

const BlueLightDepartment = lazy(
  () => import('../../pages/BlueLightPage/BlueLightDepartment')
);

const AdGame = lazy(() => import('../AdGame/AdGame'));

const AnimatedOutlet = (): JSX.Element => {
  // const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Outlet />
    </AnimatePresence>
  );
};

const generateBlueLightRoutes = (database: BlueLightDepartmentInterface[]) => {
  return database.map(
    (data: BlueLightDepartmentInterface, index: number): JSX.Element => (
      <Route
        key={index}
        path={data.link}
        loader={() => {
          return data;
        }}
        element={
          <Suspense fallback={<TailSpin />}>
            <BlueLightDepartment element={data} />
          </Suspense>
        }
      />
    )
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
          path="malahov-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145730449"
              thumbnail={thumbnailMalahovImg}
            />
          }
        />
        <Route path="malahov" element={<PageLayout />}>
          <Route index element={<MalahovPage />} />
          <Route
            path={'game'}
            loader={() => malahovData}
            element={
              <Suspense fallback={<TailSpin />}>
                <MalahovGame />
              </Suspense>
            }
          />
          <Route
            path="results"
            element={<ResultsPage title="Поиск главного целителя" />}
          />
        </Route>
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
            path="round3"
            loader={() => guessSongDataRound3}
            element={
              <Suspense fallback={<TailSpin />}>
                <GuessSongGameRound3 />
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
            element={<ResultsPage title="Поиск победителей" />}
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
        <Route
          index
          path="how-does-it-work-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145730537"
              thumbnail={thumbnailHowDoesItWorkImg}
            />
          }
        />
        <Route path="how-does-it-work" element={<PageLayout />}>
          <Route index element={<HowDoesItWorkPage />} />
          <Route
            path={'game'}
            loader={() => howDoesItWorkData}
            element={
              <Suspense fallback={<TailSpin />}>
                <HowDoesItWorkGame />
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
          path="house-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145730479"
              thumbnail={thumbnailHouseImg}
            />
          }
        />
        <Route path="house" element={<PageLayout />}>
          <Route index element={<HousePage />} />
          <Route
            path={'game'}
            loader={() => houseData}
            element={
              <Suspense fallback={<TailSpin />}>
                <HouseGame />
              </Suspense>
            }
          />
          <Route
            path="results"
            element={<ResultsPage title="Поиск главного киномана" />}
          />
          <Route
            path={'final'}
            loader={() => houseDataFinal}
            element={
              <Suspense fallback={<TailSpin />}>
                <HouseGameFinal />
              </Suspense>
            }
          />
        </Route>
        <Route path="birthday" element={<PageLayout />}>
          <Route index element={<BirthdayPage />} />
        </Route>
        <Route path="lunch" element={<PageLayout />}>
          <Route index element={<LunchPage />} />
        </Route>
        <Route path="new-year-relax" element={<PageLayout />}>
          <Route index element={<NewYearRelaxPage />} />
        </Route>
        <Route
          index
          path="blue-light-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145730426"
              thumbnail={thumbnailBlueLightImg}
            />
          }
        />
        <Route path="blue-light" element={<BlueLightPage />}>
          <Route
            index
            loader={() => blueLightLinksData}
            element={
              <Suspense fallback={<TailSpin />}>
                <BlueLightLinks />
              </Suspense>
            }
          />
          {generateBlueLightRoutes(blueLightRoutingLinks)}
        </Route>
        <Route
          index
          path="telechance-video"
          element={
            <VideoPage
              url="https://vimeo.com/1145730562"
              thumbnail={thumbnailTelechanceImg}
            />
          }
        />
        <Route path="telechance" element={<PageLayout />}>
          <Route index element={<TelechancePage />} />
          <Route
            path={'game'}
            loader={() => telechanceData}
            element={
              <Suspense fallback={<TailSpin />}>
                <TelechanceGame />
              </Suspense>
            }
          />
          <Route
            path="results"
            element={<ResultsPage title="Поиск победителя" />}
          />
        </Route>
        <Route path="ad-page" element={<PageLayout />}>
          <Route index element={<AdPage />} />
          <Route
            path={'game'}
            loader={() => adGameData}
            element={
              <Suspense fallback={<TailSpin />}>
                <AdGame />
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
