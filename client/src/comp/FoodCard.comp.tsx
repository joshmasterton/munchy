import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa6';
import { FaFire } from 'react-icons/fa';
import { PiMedalFill } from 'react-icons/pi';
import { BsClockFill } from 'react-icons/bs';
import { FoodCardProps } from '../../types/comp.types';
import '../style/comp/FoodCard.comp.scss';

export const FoodCard = ({
  title,
  category,
  picture,
  likes,
  calories,
  difficult,
  time
}: FoodCardProps) => {
  const [largeImage, setLargeImage] = useState(false);

  return (
    <Link
      to="/"
      onTouchStart={() => setLargeImage(true)}
      onTouchEnd={() => setLargeImage(false)}
      onMouseOver={() => setLargeImage(true)}
      onMouseLeave={() => setLargeImage(false)}
      className="foodCard"
    >
      <div>
        <img src={picture} alt="food" className={largeImage ? 'large' : ''} />
      </div>
      <main>
        <header>
          <div>{title}</div>
          <p>{category}</p>
        </header>
        <div>
          <FaHeart />
          <p>{likes}</p>
        </div>
        <div>
          <FaFire />
          <p>{`${calories}Cal`}</p>
        </div>
        <div>
          <PiMedalFill />
          <p>{difficult}</p>
        </div>
        <div>
          <BsClockFill />
          <p>{time}mins</p>
        </div>
      </main>
    </Link>
  );
};

export const FoodCardTwo = ({
  title,
  category,
  picture,
  likes,
  calories,
  difficult,
  time
}: FoodCardProps) => {
  const [largeImage, setLargeImage] = useState(false);

  return (
    <Link
      to="/"
      onTouchStart={() => setLargeImage(true)}
      onTouchEnd={() => setLargeImage(false)}
      onMouseOver={() => setLargeImage(true)}
      onMouseLeave={() => setLargeImage(false)}
      className="foodCardTwo"
    >
      <div>
        <img src={picture} alt="food" className={largeImage ? 'large' : ''} />
      </div>
      <main>
        <header>
          <div>{title}</div>
          <p>{category}</p>
        </header>
        <div>
          <FaHeart />
          <p>{likes}</p>
        </div>
        <div>
          <FaFire />
          <p>{`${calories}Cal`}</p>
        </div>
        <div>
          <PiMedalFill />
          <p>{difficult}</p>
        </div>
        <div>
          <BsClockFill />
          <p>{time}mins</p>
        </div>
      </main>
    </Link>
  );
};
