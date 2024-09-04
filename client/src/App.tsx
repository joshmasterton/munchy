import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './page/Home.page';
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
      <div id="background" />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
