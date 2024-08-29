import { Link } from 'react-router-dom';
import { Input } from './Input.comp';
import { useState } from 'react';
import { Button } from './Button.comp';
import { MdMenu } from 'react-icons/md';
import munchyLight from '../assets/munchyLight.png';
import '../style/comp/Nav.comp.scss';

export const Nav = () => {
  const [search, setSearch] = useState('');

  return (
    <nav>
      <header>
        <h1>
          <img src={munchyLight} alt="Munchy" />
        </h1>
        <Input
          id="search"
          placeholder="Search for recipe"
          value={search}
          setValue={setSearch}
          canClear
        />
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
