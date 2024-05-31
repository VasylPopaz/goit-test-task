import { Link } from 'react-router-dom';

import s from './Home.module.css';

const Home = () => {
  return (
    <section className={s.home}>
      <div className={`container ${s.homeContainer}`}>
        <h1 className={s.title}>
          Explore your opinions, meet the news, and create history in every
          tweet.
        </h1>
        <Link className={s.link} to="/tweets">
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Home;
