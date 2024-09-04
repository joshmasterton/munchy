import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './page/Home.page';
<<<<<<< HEAD
=======
import background from './assets/background.png';
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
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
<<<<<<< HEAD
      <div id="background" />
=======
      <img id="background" src={background} />
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
      <RouterProvider router={router} />
    </>
  );
};

export default App;
