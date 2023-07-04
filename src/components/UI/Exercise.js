import React from "react";
import "../../styles/Exercise.css";

import ReactPlayer from "react-player/youtube";
import yoga from "../../assets/images/pose.png";
import Yoga from "../../assets/images/yogpose.png";
import namste from "../../assets/images/namste.png";

const Exercise = () => {
  return (
    <section id="exercise">
      <div className="container exercise__container">
        <div
          className="exercise__top"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h2 className="section__title">
            Benefits of
            <span className="highlights"> Exercise</span>
          </h2>
          <p>
            improve your brain health, help manage weight, reduce the risk of
            disease, strengthen bones and muscles,
            <br />
            and improve your ability to do everyday activities
          </p>
        </div>

        {/* =====exercise list ========*/}
        <div className="exercise__wrapper">
          <div className="exercise__item">
            <span
              className="exercise__icon"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <img src={yoga} alt="" />
            </span>

            <span
              className="exercise1__icon"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <img src={Yoga} alt="" />
            </span>

            <span
              className="exercise2__icon"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <img src={namste} alt="" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercise;
