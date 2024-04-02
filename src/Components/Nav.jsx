import React from 'react'
import Logo from "../Assets/logo-transparent-png.png";
import { Link } from 'react-router-dom';

const Nav = () => {
  function contact(){
    alert("Function has not been implemented as yet.")
  }
  return (
    <>
    <nav>
        <figure>
          <img src={Logo} id="company-logo" alt=""/>
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <Link
              to="/"
              className="nav__link--anchor secondary link__hover-effect link__hover-effect--secondary"
              >Home</Link>
          </li>
          <li className="nav__link">
            <Link
              to="/movies"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >Find your movie</Link>
          </li>
          <li className="nav__link">
            <button className="nav__link--button" onClick={contact}>Contact</button>
          </li>
        </ul>
      </nav>
      </>
  )
}

export default Nav;