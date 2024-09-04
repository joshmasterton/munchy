import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Button } from './Button.comp';
import { MdMenu } from 'react-icons/md';
import munchy from '../assets/munchy.png';
import '../style/comp/Nav.comp.scss';

export const Nav = () => {
=======
import { Input } from './Input.comp';
import { useState } from 'react';
import { Button } from './Button.comp';
import { MdMenu } from 'react-icons/md';
import munchyLight from '../assets/munchyLight.png';
import '../style/comp/Nav.comp.scss';

export const Nav = () => {
  const [search, setSearch] = useState('');

>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
  return (
    <nav>
      <header>
        <h1>
<<<<<<< HEAD
          <img src={munchy} alt="Munchy" />
        </h1>
=======
          <img src={munchyLight} alt="Munchy" />
        </h1>
        <Input
          id="search"
          placeholder="Search for recipe"
          value={search}
          setValue={setSearch}
          canClear
        />
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
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
