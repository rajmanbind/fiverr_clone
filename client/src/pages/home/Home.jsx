import React from "react";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards, projects } from "../../data.js";
import CatCard from "../../components/catCard/CatCard.jsx";
import ProjectCard from "../../components/projectCard/ProjectCard.jsx";
const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={3}>
        {cards?.map((card) => (
          <CatCard item={card} key={card.id} />
        ))}
      </Slide>

      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hight-quality sevices at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hight-quality sevices at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>
              Find hight-quality sevices at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item">
            <video src="./img/3.mp4" controls></video>
          </div>
        </div>
      </div>

      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solutin deisgned for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated exprience packed with tools and benefits,
              dedicated to business
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connnect freelances with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connnect freelances with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connnect freelances with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <video src="./img/3.mp4" controls></video>
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={3}>
        {projects?.map((card) => (
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
};

export default Home;
