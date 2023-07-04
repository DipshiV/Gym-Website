import React from "react";
import "../../styles/Pricing.css";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div
          className="pricing__top"
          data-aos="fade-up"
          data-aos-duration="1800"
        >
          <h2 className="highlights">Pricing</h2>
          <p>
            Lorem Ipsum is simply dummy text of the <br />
            printing and typesetting industry.{" "}
          </p>
        </div>

        {/**pricing wrapper */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular Member</h2>
              <h2 className="pricing section__title">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Personal trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  regular Plans
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button className="register1_btn">Join Now</button>
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Premium Member</h2>
              <h2 className="pricing section__title">
                $700 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Personal trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Premium Plans
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button className="register1_btn">Join Now</button>
            </div>
          </div>
          <div
            className="pricing__item pricing__item-03"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard Member</h2>
              <h2 className="pricing section__title">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Customer support
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  Personal trainer
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  standard Plans
                </li>
                <li>
                  <span>
                    <RiCheckboxBlankCircleFill />
                  </span>{" "}
                  5 classes per week
                </li>
              </ul>
              <button className="register1_btn">Join Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
