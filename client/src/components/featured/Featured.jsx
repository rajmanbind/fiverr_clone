import React from "react";
import "./Featured.scss";
const Feature = () => {
  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Find the perfect <i>freelance</i> <br /> services for your business</h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="search" />
              <input type="text" placeholder='Try "building mobile app"' />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Worpress</button>
            <button>Logo Design</button>
            <button>Ai Services</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/rajman.png" alt="Rajman" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
