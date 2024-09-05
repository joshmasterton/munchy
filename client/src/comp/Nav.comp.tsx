import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button } from './Button.comp';
import { MdMenu } from 'react-icons/md';
import munchy from '../assets/munchy.png';
import '../style/comp/Nav.comp.scss';

export const Nav = () => {
  const [showMenu, setShowMenu] = useState(window.scrollY <= 0);
  const lastScrollTop = useRef(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;

    if (scrollTop > lastScrollTop.current) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }

    lastScrollTop.current = scrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="nav">
      <header className={showMenu ? 'active' : 'hidden'}>
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
