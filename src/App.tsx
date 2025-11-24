import type { JSX } from 'react';
import { BrowserRouter } from 'react-router';

import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';

import './index.scss';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};

export default App;
