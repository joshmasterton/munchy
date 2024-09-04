import { Link } from 'react-router-dom';
import { Button } from './Button.comp';
import { MdMenu } from 'react-icons/md';
import munchy from '../assets/munchy.png';
import '../style/comp/Nav.comp.scss';

export const Nav = () => {
  return (
    <nav>
      <header>
        <h1>
          <img src={munchy} alt="Munchy" />
        </h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Recipes</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
        <Button type="button">
          <MdMenu />
        </Button>
      </header>
    </nav>
  );
};
