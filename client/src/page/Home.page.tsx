import { Nav } from '../comp/Nav.comp';
import { FoodCard, FoodCardTwo } from '../comp/FoodCard.comp';
import { Footer } from '../comp/Footer.comp';
import pancake from '../assets/pancake.png';
import burger from '../assets/burger.jpeg';
import pizza from '../assets/pizza.png';
import chicken from '../assets/chicken.jpg';
import recipe from '../assets/recipe.jpeg';
import '../style/page/Home.page.scss';

export const Home = () => {
  return (
    <>
      <Nav />
      <div id="home">
        <header>
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
            title="Burger"
            category="Snack"
            picture={burger}
            likes={20}
            calories={1000}
            difficult="easy"
            time={25}
          />
          <FoodCard
            title="Pie"
            category="Dinner"
            picture={chicken}
            likes={30}
            calories={1500}
            difficult="medium"
            time={120}
          />
          <FoodCard
            title="Pizza"
            category="Snack"
            picture={pizza}
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
            title="Pie"
            category="Dinner"
            picture={chicken}
            likes={30}
            calories={1500}
            difficult="medium"
            time={120}
          />
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
            likes={30}
            calories={1400}
            difficult="easy"
            time={25}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};
