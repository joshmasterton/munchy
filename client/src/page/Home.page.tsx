import { Nav } from '../comp/Nav.comp';
<<<<<<< HEAD
import { ContainerCard, FoodCard, FoodCardTwo } from '../comp/FoodCard.comp';
import { Input } from '../comp/Input.comp';
import { useState } from 'react';
import { Button } from '../comp/Button.comp';
import { Footer } from '../comp/Footer.comp';
import burger from '../assets/burger.jpg';
import pancake from '../assets/pancake.jpg';
import chicken from '../assets/chicken.jpg';
import food from '../assets/food.png';
import plate from '../assets/plate.png';
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import dinner from '../assets/dinner.jpg';
import dessert from '../assets/dessert.jpg';
import sides from '../assets/sides.jpg';
import special from '../assets/special.jpg';
import '../style/page/Home.page.scss';
import '../style/comp/Tab.comp.scss';

export const Home = () => {
  const [search, setSearch] = useState('');

=======
import { FoodCard, FoodCardTwo } from '../comp/FoodCard.comp';
import { Footer } from '../comp/Footer.comp';
import pancake from '../assets/pancake.png';
import burger from '../assets/burger.jpeg';
import pizza from '../assets/pizza.png';
import chicken from '../assets/chicken.jpg';
import recipe from '../assets/recipe.jpeg';
import '../style/page/Home.page.scss';

export const Home = () => {
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
  return (
    <>
      <Nav />
      <div id="home">
        <header>
<<<<<<< HEAD
          <img src={food} alt="food" />
          <h1 className="title">
            <div>Discover your next meal here, lets eat!</div>
            <div>
              Find your next favourite recipe and add it to your favourites
            </div>
            <form method="GET" autoComplete="off">
              <Input
                id="search"
                placeholder="Search for recipe"
                value={search}
                setValue={setSearch}
                canClear
              />
              <Button type="submit" className="primary">
                Search
              </Button>
            </form>
          </h1>
        </header>
        <h2>Popular recipes</h2>
        <div className="tabTwo">
=======
          <h1 className="title">
            <div>Make cooking a fun expereince again</div>
            <div>
              Be part of the cooking experience and create your own recipes
            </div>
          </h1>
          <img src={pancake} alt="pancake" />
        </header>
        <h2>Popular recipes</h2>
        <div>
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
          <FoodCard
            title="Burger"
            category="Snack"
            picture={burger}
            likes={20}
            calories={1000}
            difficult="easy"
            time={25}
          />
          <FoodCard
<<<<<<< HEAD
            title="Pancake"
            category="Pudding"
            picture={pancake}
            likes={30}
            calories={1400}
=======
            title="Burger"
            category="Snack"
            picture={burger}
            likes={20}
            calories={1000}
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
            difficult="easy"
            time={25}
          />
          <FoodCard
<<<<<<< HEAD
            title="Chicken"
=======
            title="Pie"
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
            category="Dinner"
            picture={chicken}
            likes={30}
            calories={1500}
            difficult="medium"
            time={120}
          />
          <FoodCard
<<<<<<< HEAD
            title="Pancake"
            category="Pudding"
            picture={pancake}
=======
            title="Pizza"
            category="Snack"
            picture={pizza}
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
            likes={30}
            calories={1400}
            difficult="easy"
            time={25}
          />
          <FoodCard
            title="Burger"
            category="Snack"
            picture={burger}
            likes={20}
            calories={1000}
            difficult="easy"
            time={25}
          />
          <FoodCard
<<<<<<< HEAD
            title="Chicken"
=======
            title="Pie"
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
            category="Dinner"
            picture={chicken}
            likes={30}
            calories={1500}
            difficult="medium"
            time={120}
          />
<<<<<<< HEAD
        </div>
        <div className="tabOne">
          <h2>Todays top pick</h2>
          <FoodCardTwo
            title="Chicken"
            category="Dinner"
            picture={chicken}
=======
          <FoodCard
            title="Pizza"
            category="Snack"
            picture={pizza}
            likes={30}
            calories={1400}
            difficult="easy"
            time={25}
          />
        </div>
        <h2>Todays top pick</h2>
        <main>
          <header>
            <h1 className="title">
              <div>Todays top recipe picked by the community</div>
              <div>Check out todays top recipe voted by the community</div>
            </h1>
          </header>
          <FoodCardTwo
            title="Chicken"
            category="Snack"
            picture={recipe}
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
            likes={30}
            calories={1400}
            difficult="easy"
            time={25}
<<<<<<< HEAD
            topRated
          />
        </div>
        <h2>Categories</h2>
        <div className="tabTwo">
          <ContainerCard
            title="Breakfast"
            description="Something tasty with your morning coffee?"
            picture={breakfast}
          />
          <ContainerCard
            title="Lunch"
            description="Maybea a sandwich to go?"
            picture={lunch}
          />
          <ContainerCard
            title="Dinner"
            description="Get home and whip up a quick dinner!"
            picture={dinner}
          />
          <ContainerCard
            title="Pudding"
            description="End the day with a tasty delight!"
            picture={dessert}
          />
          <ContainerCard
            title="Sides"
            description="Why not add an appetizer to the dishes?"
            picture={sides}
          />
          <ContainerCard
            title="Special occasions"
            description="Need ideas for someones special day!"
            picture={special}
          />
        </div>
        <main>
          <img src={plate} alt="plate" />
          <h1 className="titleTwo">
            <div>Want to add your own recipe?</div>
            <div>
              Be part of the cooking experience and create your own recipes that
              you and the community can enjoy
            </div>
            <Button type="submit" className="primary">
              Create recipe
            </Button>
          </h1>
=======
          />
>>>>>>> 66425a3eaf09d54f8124ba3c831ba1b03705ba76
        </main>
        <Footer />
      </div>
    </>
  );
};
