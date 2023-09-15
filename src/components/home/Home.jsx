import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Map from "./Map";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid" container grid>
        <div className="home__content grid">
          <Social />
          <Data></Data>
          <Map />
        </div>
        <ScrollDown></ScrollDown>
      </div>
    </section>
  );
};

export default Home;
