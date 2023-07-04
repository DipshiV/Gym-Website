import React from "react";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__box">
            <div className="logo">
              <div className="logo__img">
                <img
                  src="https://img.freepik.com/free-vector/girl-silhouette-fitness-logo-flat-design_23-2148200349.jpg?w=740&t=st=1688035349~exp=1688035949~hmac=f08cd2781929af0ba05f250af911e1fafc5492f753836f9995e80b065359b126"
                  alt=""
                  srcset=""
                />
              </div>
              <h2>FitMe</h2>
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. .
            </p>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Company</h4>
            <ul className="footer__links">
              <li>
                <a href="#">Our Program</a>
              </li>
              <li>
                <a href="#">Our Plans</a>
              </li>
              <li>
                <a href="#">Become a member</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Quick links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          <div className="footer__box">
            <h4 className="footer__title">Quick links</h4>
            <ul className="footer__links">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          @Copyright -2023 developed by Dipshi. All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
