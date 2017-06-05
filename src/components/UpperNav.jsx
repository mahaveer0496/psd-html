import React from 'react';

const UpperNav = () => (
  <div className="uppernav">
    <ul className="uppernav__left">
      <li>
        <i className="ion-android-call" /> +91-8010-555-444
      </li>
      <li>
        <i className="ion-android-mail" /> help@freedoctor.com
      </li>
      <li>
        <i className="ion-android-chat" /> Online Doctor
      </li>
    </ul>
    <div className="uppernav__right">
      <i className="ion-social-facebook" />
      <i className="ion-social-twitter" />
      <i className="ion-social-youtube" />
      <i className="ion-social-googleplus" />
    </div>
  </div>
);

export default UpperNav;
