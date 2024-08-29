import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './page/Home.page';
import background from './assets/background.png';
import './style/App.scss';

const routes = [
  {
    path: '/',
    element: <Home />
  }
];

const router = createBrowserRouter(routes, { basename: '/munchy' });

export const App = () => {
  return (
    <>
      <img id="background" src={background} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
