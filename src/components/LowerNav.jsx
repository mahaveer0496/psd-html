import React from 'react';

const LowerNav = () => (
  <nav className="lowernav">
    <div className="lowernav__left">
      FDH logo comes here
    </div>
    <ul className="lowernav__right">
      <li>Home</li>
      <li>
        <div className="dropdown">
          <button className="dropbtn">About us</button>
          <div className="dropdown-content">
            <a href="/#">Link 1</a>
            <a href="/#">Link 2</a>
            <a href="/#">Link 3</a>
          </div>
        </div>
      </li>
      <li>
        <div className="dropdown">
          <button className="dropbtn">Login/Register</button>
          <div className="dropdown-content">
            <a href="/#">Link 1</a>
            <a href="/#">Link 2</a>
            <a href="/#">Link 3</a>
          </div>
        </div>
      </li>
    </ul>
  </nav>
);

export default LowerNav;
