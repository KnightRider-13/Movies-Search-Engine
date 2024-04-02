import React from 'react'
import Logo from "../Assets/logo-transparent-png.png";

const Footer = () => {

  const year = new Date().getFullYear();

  function contact(){
    alert("Function has not been implemented as yet.");
  }

  return (
  <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="footer__container">
            <figure>
              <img
                src={Logo}
                className="footer__logo"
                alt=""
              />
            </figure>
            <div className="footer__links">
              <a
                href="#landing-page"
                className="footer__link link__hover-effect link__hover-effect--black"
                >Home</a
              >
              <a
                href="/movies"
                className="footer__link link__hover-effect link__hover-effect--black"
                >Movies</a
              >
              <a
                href="/" onClick={contact}
                className="footer__link link__hover-effect link__hover-effect--black"
                >Contact</a>
            </div>
            <div className="footer__copyright">
              Copyright © {year} Open Movie Database
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;